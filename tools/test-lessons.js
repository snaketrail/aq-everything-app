#!/usr/bin/env node
// Отваря всеки урок в истински браузър, отговаря вярно на всички задачи и проверява:
// грешки в конзолата, броя звезди и хоризонтално превъртане на телефон (375 px).
//
// Употреба (нужни са Node и Playwright; сървърът трябва да върви):
//   python3 -m http.server 8123
//   node tools/test-lessons.js [начало-на-id]     например: node tools/test-lessons.js p1-bel-bukva
const { chromium } = require('playwright');

const BASE = process.env.BASE || 'http://localhost:8123/';
const prefix = process.argv[2] || '';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 800 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });

  await page.goto(BASE);
  const ids = await page.evaluate((p) => Object.keys(window.LESSONS).filter((id) => id.startsWith(p)), prefix);
  let failed = 0;

  for (const id of ids) {
    errors.length = 0;
    await page.goto(`${BASE}#/lesson/${id}`);
    await page.waitForSelector('.option', { timeout: 5000 }).catch(() => {});
    const tasks = await page.evaluate((i) => window.LESSONS[i].tasks, id);
    const problems = [];

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) problems.push(`по-широко от телефона с ${overflow}px`);

    for (const t of tasks) {
      const values = t.options.map((o) => (o && typeof o === 'object' ? o.value : o));
      const at = values.indexOf(t.answer);
      if (at < 0) { problems.push(`„${t.question}“: отговорът го няма`); break; }
      await page.click(`.option[data-i="${at}"]`);
      await page.waitForTimeout(30);
      const next = page.locator('button.btn-primary', { hasText: /Напред|Готово/ });
      if (await next.count()) await next.first().click();
      await page.waitForTimeout(30);
    }
    await page.waitForSelector('.stars', { timeout: 4000 }).catch(() => problems.push('не стигна до звездите'));
    const stars = await page.$$eval('.stars .on', (s) => s.length).catch(() => 0);
    if (stars !== tasks.length) problems.push(`звезди ${stars} от ${tasks.length}`);
    if (errors.length) problems.push(...errors);

    if (problems.length) { failed++; console.log(`✗ ${id}: ${problems.join('; ')}`); }
  }
  console.log(`${ids.length - failed} от ${ids.length} урока са наред.`);
  await browser.close();
  process.exit(failed ? 1 : 0);
})();
