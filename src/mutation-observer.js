function translateText(text) {
  let result = text;
  const allTranslations = { ...itemNames, ...uiTranslations };
  // Sort by length descending to match longer phrases first
  const sortedEntries = Object.entries(allTranslations).sort((a, b) => b[0].length - a[0].length);
  for (const [chinese, english] of sortedEntries) {
    result = result.replace(new RegExp(chinese, 'g'), english);
  }
  return result;
}

function translateElement(element) {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  
  textNodes.forEach(node => {
    const original = node.textContent;
    const translated = translateText(original);
    if (original !== translated) {
      node.textContent = translated;
    }
  });
  
  element.querySelectorAll('[title]').forEach(el => {
    const original = el.title;
    const translated = translateText(original);
    if (original !== translated) {
      el.title = translated;
    }
  });
  
  element.querySelectorAll('[placeholder]').forEach(el => {
    const original = el.placeholder;
    const translated = translateText(original);
    if (original !== translated) {
      el.placeholder = translated;
    }
  });
}

// Initial translation
translateElement(document.body);

// MutationObserver for dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        translateElement(node);
      } else if (node.nodeType === Node.TEXT_NODE) {
        const translated = translateText(node.textContent);
        if (node.textContent !== translated) {
          node.textContent = translated;
        }
      }
    });
    
    if (mutation.type === 'characterData') {
      const translated = translateText(mutation.target.textContent);
      if (mutation.target.textContent !== translated) {
        mutation.target.textContent = translated;
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});