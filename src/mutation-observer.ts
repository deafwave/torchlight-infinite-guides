import { enData, koData, jaData, ruData } from "./translations.js";
import { uiTranslationsMap } from "./ui-translations.js";

declare const TARGET_LANG: 'en' | 'ko' | 'ja' | 'ru';

const langDataMap = { en: enData, ko: koData, ja: jaData, ru: ruData };
const databaseData = langDataMap[TARGET_LANG];
const uiTranslations = uiTranslationsMap[TARGET_LANG];

const allTranslations = { ...databaseData, ...uiTranslations };
const sortedTranslations = Object.entries(allTranslations)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([chinese, translated]) => ({
    pattern: new RegExp(chinese.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
    translated
  }));

function translateText(text: string): string {
  let result = text;
  for (const { pattern, translated } of sortedTranslations) {
    result = result.replace(pattern, translated);
  }
  return result;
}

function translateElement(element: Element): void {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null
  );

  let node: Node | null;
  while ((node = walker.nextNode())) {
    const original = node.textContent;
    if (original) {
      const translated = translateText(original);
      if (original !== translated) {
        node.textContent = translated;
      }
    }
  }

  element.querySelectorAll('[title]').forEach(el => {
    const original = (el as HTMLElement).title;
    const translated = translateText(original);
    if (original !== translated) {
      (el as HTMLElement).title = translated;
    }
  });

  element.querySelectorAll('[placeholder]').forEach(el => {
    const original = (el as HTMLInputElement).placeholder;
    const translated = translateText(original);
    if (original !== translated) {
      (el as HTMLInputElement).placeholder = translated;
    }
  });
}

let pendingNodes = new Set<Node>();
let rafId: number | null = null;

function queueTranslation(node: Node): void {
  pendingNodes.add(node);
  if (!rafId) {
    rafId = requestAnimationFrame(processPendingTranslations);
  }
}

function processPendingTranslations(): void {
  rafId = null;
  const nodes = pendingNodes;
  pendingNodes = new Set();

  for (const node of nodes) {
    if (!document.contains(node)) continue;

    if (node.nodeType === Node.ELEMENT_NODE) {
      translateElement(node as Element);
    } else if (node.nodeType === Node.TEXT_NODE) {
      const original = node.textContent;
      if (original) {
        const translated = translateText(original);
        if (original !== translated) {
          node.textContent = translated;
        }
      }
    }
  }
}

// Initial translation
translateElement(document.body);

// MutationObserver for dynamic content
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      queueTranslation(node);
    }
    if (mutation.type === 'characterData') {
      queueTranslation(mutation.target);
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});
