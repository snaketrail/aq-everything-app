// Картинки: всяко емоджи в текста се заменя с рисунка от Twemoji
// (assets/emoji/*.svg), за да изглежда еднакво на всяко устройство.
// Списъкът с наличните рисунки е в js/emoji-files.js (генерира се с tools/sync-emoji.js).
(function () {
  'use strict';

  const BASE = 'assets/emoji/';
  const CDN = 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.0.3/assets/svg/';
  const FILES = new Set(window.EMOJI_FILES || []);
  const RE = /\p{RI}\p{RI}|\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}])*(?:‍\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}])*)*/gu;
  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'TITLE', 'OPTION']);

  // Име на файла по правилата на Twemoji: кодовете в шестнадесетичен вид,
  // без U+FE0F, освен ако последователността съдържа U+200D.
  function fileName(emoji) {
    const raw = emoji.includes('‍') ? emoji : emoji.replace(/️/g, '');
    return [...raw].map((c) => c.codePointAt(0).toString(16)).join('-');
  }

  function replaceIn(textNode) {
    const text = textNode.nodeValue;
    RE.lastIndex = 0;
    if (!RE.test(text)) return;
    RE.lastIndex = 0;

    const frag = document.createDocumentFragment();
    let last = 0;
    let changed = false;
    for (const m of text.matchAll(RE)) {
      const name = fileName(m[0]);
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const img = document.createElement('img');
      img.className = 'emo';
      // Ново емоджи, което още не е копирано в assets/emoji/: взимаме го от интернет.
      // Ако и там го няма, остава обикновеното емоджи на устройството.
      img.src = FILES.has(name) ? BASE + name + '.svg' : CDN + name + '.svg';
      if (!FILES.has(name)) img.onerror = () => img.replaceWith(document.createTextNode(img.alt));
      img.alt = m[0];
      img.draggable = false;
      frag.appendChild(img);
      last = m.index + m[0].length;
      changed = true;
    }
    if (!changed) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  }

  function emojify(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      if (root.parentNode && !SKIP.has(root.parentNode.nodeName)) replaceIn(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || SKIP.has(root.nodeName)) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (SKIP.has(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceIn);
  }

  // Следим за всичко ново на страницата, за да не се налага ръчно извикване.
  function start() {
    emojify(document.body);
    new MutationObserver((records) => {
      records.forEach((r) => {
        if (r.type === 'characterData') emojify(r.target);
        r.addedNodes.forEach(emojify);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EMOJI = { emojify, fileName };
})();
