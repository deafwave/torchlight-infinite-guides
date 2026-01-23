import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

type TranslationDictionary = Record<string, string>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '..');
const rootDir = join(__dirname, '../..');

// Read the three source files
const uiTranslationsPath = join(srcDir, 'ui-translations.js');
const translationsJsonPath = join(srcDir, 'translations.json');
const mutationObserverPath = join(srcDir, 'mutation-observer.js');

const uiTranslations = readFileSync(uiTranslationsPath, 'utf-8');
const translationsJson: TranslationDictionary = JSON.parse(readFileSync(translationsJsonPath, 'utf-8'));
const mutationObserver = readFileSync(mutationObserverPath, 'utf-8');

console.log(`Building etor-english-script.js from:`);
console.log(`  - ui-translations.js (${Object.keys(uiTranslations).length} chars)`);
console.log(`  - translations.json (${Object.keys(translationsJson).length} translations)`);
console.log(`  - mutation-observer.js (${mutationObserver.length} chars)`);

// Convert translations.json to itemNames object
const sortedKeys = Object.keys(translationsJson).sort((a, b) => a.localeCompare(b, 'zh'));
const itemNamesContent = sortedKeys.map(key => {
  const value = translationsJson[key];
  const escapedValue = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `  "${key}": "${escapedValue}"`;
}).join(',\n');

const itemNamesObject = `const itemNames = {\n${itemNamesContent}\n};\n`;

// Combine all parts
const finalScript = [
  '// UI Translations',
  uiTranslations.trim(),
  '',
  '// Item Names from TLIDB',
  itemNamesObject.trim(),
  '',
  '// Translation Logic and Mutation Observer',
  mutationObserver.trim()
].join('\n');

// Write to output file
const outputPath = join(rootDir, 'etor-english-script.js');
writeFileSync(outputPath, finalScript, 'utf-8');

console.log(`\nSuccessfully built: etor-english-script.js`);
console.log(`Total size: ${finalScript.length} characters`);
