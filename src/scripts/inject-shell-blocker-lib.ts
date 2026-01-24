/**
 * Injects a whitelist filter into preload.js to block unauthorized shell commands
 * 
 * This is a security measure to prevent arbitrary command execution from the renderer process.
 * 
 * While unlikely as this app seems to have >20k daily users, I do not endorse products with security vulnerabilities.
 */

import { existsSync, readFileSync, writeFileSync, copyFileSync } from 'fs';

// TODO: Study what commands are actually needed and tighten this list further.
const SAFE_COMMANDS_REGEX = String.raw`/^(ls|dir|echo|whoami|hostname|pwd|cd|type|cat|wmic\s+(os|cpu)|systeminfo|ver|date|time|chcp|tasklist|powershell\s+-Command\s+"\(Get-Process\s+-Id\s+\d+\)\.Path")/i`;

const PATTERN = /'runShellCommand':([_a-zA-Z0-9$]+)=>\{?[^}]*ipcRenderer\[([^\]]+)\]\('run-shell-command',[^)]+\)\}?/;

function createBlockerCode(param: string, invoke: string): string {
  return `'runShellCommand':${param}=>{const _s=${SAFE_COMMANDS_REGEX};const _ok=_s.test(${param});console.log('[SHELL]',new Date().toISOString(),_ok?'ALLOWED':'BLOCKED',${param});if(!_ok)return Promise.resolve({stdout:'',stderr:'Command not allowed',error:'Forbidden'});return ipcRenderer[${invoke}]('run-shell-command',${param})}`;
}

export function injectShellBlocker(content: string): string {
  const match = content.match(PATTERN);
  if (!match) {
    const idx = content.indexOf('run-shell-command');
    const context = idx >= 0
      ? content.substring(Math.max(0, idx - 200), idx + 100)
      : 'not found';
    throw new Error(`Could not find runShellCommand pattern. Context: ${context}`);
  }
  return content.replace(match[0], createBlockerCode(match[1], match[2]));
}

export function injectShellBlockerToFile(filePath: string, createBackup = true): void {
  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const content = readFileSync(filePath, 'utf8');
  const newContent = injectShellBlocker(content);

  if (createBackup && !existsSync(filePath + '.backup')) {
    copyFileSync(filePath, filePath + '.backup');
  }

  writeFileSync(filePath, newContent, 'utf8');
}
