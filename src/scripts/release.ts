import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sevenZip from '7zip-min';
import { transform } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../..');
const buildDir = join(rootDir, 'build');
const extractDir = join(buildDir, 'extracted');
const etorDir = join(extractDir, 'etor');
const resourcesDir = join(etorDir, 'resources');
const appDir = join(resourcesDir, 'app');
const asarPath = join(resourcesDir, 'app.asar');

const DOWNLOAD_URL = 'https://drive.usercontent.google.com/u/0/uc?id=1M8LGVXfD8DuQRS8prOuA9iDw3n2amVOZ&export=download';
const ARCHIVE_NAME = 'etor.7z';

const LANGUAGES = ['en', 'ko', 'ja', 'ru'] as const;
type Language = typeof LANGUAGES[number];

const LANG_NAMES: Record<Language, string> = {
  en: 'english',
  ko: 'korean',
  ja: 'japanese',
  ru: 'russian',
};

function run(cmd: string, cwd?: string) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

function cleanup() {
  if (existsSync(extractDir)) {
    console.log('Cleaning up extracted directory...');
    rmSync(extractDir, { recursive: true });
  }
}

function setupBuildDir() {
  console.log('Setting up build directory...');
  mkdirSync(buildDir, { recursive: true });
}

function downloadArchive() {
  const archivePath = join(buildDir, ARCHIVE_NAME);
  if (!existsSync(archivePath)) {
    run(`curl -L -o "${archivePath}" "${DOWNLOAD_URL}"`, buildDir);
  }
  return archivePath;
}

async function extractArchive(archivePath: string): Promise<void> {
  console.log('Extracting etor.7z...');
  mkdirSync(extractDir, { recursive: true });
  return new Promise((resolve, reject) => {
    sevenZip.unpack(archivePath, extractDir, (err: Error | null) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function extractAsar() {
  console.log('Extracting app.asar...');
  run(`npx @electron/asar extract "${asarPath}" "${appDir}"`, rootDir);
}

async function injectScript(lang: Language) {
  const langName = LANG_NAMES[lang];
  const preloadPath = join(appDir, 'build', 'obf-app', 'preload.js');
  const translationScriptPath = join(rootDir, `etor-${langName}.js`);

  if (!existsSync(preloadPath)) {
    throw new Error(`preload.js not found at ${preloadPath}`);
  }

  if (!existsSync(translationScriptPath)) {
    throw new Error(`etor-${langName}.js not found. Run 'npm run pull' first.`);
  }

  const translationScript = readFileSync(translationScriptPath, 'utf-8');

  const minified = await transform(translationScript, {
    minify: true,
    loader: 'js',
  });

  const injection = `
(function() {
  let injected = false;
  const tryInject = setInterval(() => {
    if (injected) return;
    if (document && document.head) {
      injected = true;
      clearInterval(tryInject);
      const s = document.createElement('script');
      s.textContent = ${JSON.stringify(minified.code)};
      document.head.appendChild(s);
    }
  }, 100);
})();
`;

  console.log('Injecting script into preload.js...');
  const content = readFileSync(preloadPath, 'utf-8');
  const injectedContent = injection + '\n' + content;

  writeFileSync(preloadPath, injectedContent, 'utf-8');
  console.log('Script injected successfully');
}

function repackAsar() {
  rmSync(asarPath);
  run(`npx @electron/asar pack "${appDir}" "${asarPath}"`, rootDir);
  rmSync(appDir, { recursive: true });
}

async function createZip(lang: Language): Promise<string> {
  const langName = LANG_NAMES[lang];
  const zipPath = join(buildDir, `etor-${langName}.zip`);

  if (existsSync(zipPath)) {
    rmSync(zipPath);
  }

  return new Promise((resolve, reject) => {
    sevenZip.pack(etorDir, zipPath, (err: Error | null) => {
      if (err) reject(err);
      else resolve(zipPath);
    });
  });
}

async function buildLanguage(lang: Language, archivePath: string): Promise<string> {
  const langName = LANG_NAMES[lang];
  console.log(`\n--- Building ${langName} release ---\n`);

  cleanup();
  await extractArchive(archivePath);
  extractAsar();
  await injectScript(lang);
  repackAsar();
  return await createZip(lang);
}

async function main() {
  setupBuildDir();
  const archivePath = downloadArchive();

  const outputs: string[] = [];

  for (const lang of LANGUAGES) {
    const zipPath = await buildLanguage(lang, archivePath);
    outputs.push(zipPath);
  }

  cleanup();

  for (const output of outputs) {
    console.log(`  ${output}`);
  }
}

main().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
