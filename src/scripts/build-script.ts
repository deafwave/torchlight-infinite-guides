import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '..');
const rootDir = join(__dirname, '../..');

const entryPoint = join(srcDir, 'mutation-observer.ts');

export const LANGUAGES = ['en', 'ko', 'ja', 'ru'] as const;
export type Language = typeof LANGUAGES[number];

export const LANG_NAMES: Record<Language, string> = {
  en: 'english',
  ko: 'korean',
  ja: 'japanese',
  ru: 'russian',
};

await Promise.all(
  LANGUAGES.map(async (lang) => {
    const outputPath = join(rootDir, `etor-${LANG_NAMES[lang]}.js`);
    await build({
      entryPoints: [entryPoint],
      bundle: true,
      outfile: outputPath,
      format: 'iife',
      target: 'es2020',
      minify: false,
      define: {
        TARGET_LANG: `"${lang}"`,
      },
      treeShaking: true,
    });
  })
);