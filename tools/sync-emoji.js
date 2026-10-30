#!/usr/bin/env node
// Копира нужните рисунки от Twemoji в assets/emoji/ и обновява js/emoji-files.js.
//
// Употреба:
//   npm install --prefix /tmp/tw @twemoji/svg@15.0.0
//   node tools/sync-emoji.js /tmp/tw/node_modules/@twemoji/svg
//
// Сканира index.html и всички .js файлове в js/ за емоджита.
const fs = require('fs');
const path = require('path');

const src = process.argv[2];
if (!src || !fs.existsSync(src)) {
  console.error('Посочи папката с Twemoji SVG файловете (виж коментара най-горе).');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'assets', 'emoji');
const RE = /\p{RI}\p{RI}|\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}])*(?:‍\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}])*)*/gu;

const fileName = (emoji) => {
  const raw = emoji.includes('‍') ? emoji : emoji.replace(/️/g, '');
  return [...raw].map((c) => c.codePointAt(0).toString(16)).join('-');
};

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p, out);
    else if (p.endsWith('.js') && !p.endsWith('emoji-files.js')) out.push(p);
  }
  return out;
}

const files = [path.join(root, 'index.html'), ...walk(path.join(root, 'js'))];
const needed = new Set();
for (const f of files) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(RE)) needed.add(fileName(m[0]));
}

fs.mkdirSync(outDir, { recursive: true });
const have = [];
const missing = [];
for (const name of [...needed].sort()) {
  const from = path.join(src, name + '.svg');
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, path.join(outDir, name + '.svg'));
    have.push(name);
  } else {
    missing.push(name);
  }
}

// Махаме рисунки, които вече не се използват.
for (const f of fs.readdirSync(outDir)) {
  if (f.endsWith('.svg') && !needed.has(f.slice(0, -4))) fs.unlinkSync(path.join(outDir, f));
}

fs.writeFileSync(
  path.join(root, 'js', 'emoji-files.js'),
  '// Генерирано от tools/sync-emoji.js — не редактирай ръчно.\n' +
  `window.EMOJI_FILES = ${JSON.stringify(have)};\n`
);

console.log(`Рисунки: ${have.length}. Без рисунка (остават като текст): ${missing.join(', ') || 'няма'}`);
