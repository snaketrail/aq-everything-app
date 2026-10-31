# How to add a lesson

You need nothing installed. You can do all of it in the GitHub website, from a computer or a phone.

## The short version

1. Open the file for that grade and subject in `js/lessons/` (see [Which file](#which-file)).
2. Paste a new lesson at the end of the file (copy the [template](#template)).
3. Change the `id`, the class and the content.
4. Commit.
5. Open `check.html` on the site. It should say **✅ Няма грешки**.

That's it. The lesson shows up in its subject by itself. You don't need to touch `index.html` or `curriculum.js`.

## Which file

Put the lesson in an existing file. Then `index.html` doesn't need to change.

| Lessons for | File |
|---|---|
| Детска градина | any `kg-<subject>-*.js`, e.g. `kg-math-figuri.js` |
| 1. клас | `p1-bel-bukvi.js`, `p1-bel-ezik.js`, `p1-math.js`, `p1-world.js`, `p1-izkustva.js` (music, art, tech, PE) |
| 2.–4. клас | `p2-*.js`, `p3-*.js`, `p4-*.js`, same idea |
| 5.–7. клас | `m5-bel-math.js`, `m5-ist-geo.js`, `m5-other.js` (and `m6-…`, `m7-…`) |
| 8.–12. клас | `h-bel.js`, `h-math.js`, `h-lang-inf-it.js`, `h-ist-geo-phil.js`, `h-science-arts.js` |

The file a lesson is in doesn't matter to the site. It only helps you find it later. The `stage`, `subject` and `group` fields decide where the lesson appears.

**Want a new file instead** (for example when a file gets very long)?
1. Create `js/lessons/<name>.js`.
2. Start it with the line `window.LESSONS = window.LESSONS || {};`
3. In `index.html`, add `<script src="js/lessons/<name>.js"></script>` next to the other lesson lines.

`check.html` tells you if you forget step 3. The lesson count won't go up.

## Template

```js
window.LESSONS['p1-bel-bukva-a'] = {
  stage: 'primary',          // kg, primary, middle, high (see the table below)
  subject: 'bel',            // subject id (see the table below)
  group: 1,                  // група (kg) or клас (1–12)
  after: 'p1-bel-glasni',    // optional: show right after this lesson; leave out to put it last
  core: 'Начално ограмотяване', // optional: unit name (5.–7. клас groups lessons by it)
  title: 'Буква А',
  emoji: '🅰️',
  minutes: 10,
  intro: 'Днес ще научим буквата А. С нея започват думите ананас, агне и Ая.',
  parentTip: 'Потърсете заедно буквата А по табели, кутии и книжки.', // optional
  sections: [
    {
      title: 'Чуй и виж',
      blocks: [
        { type: 'say', text: 'Кажи високо: ааа! Устата е широко отворена.' },
        { type: 'cards', items: [
          { pic: '🍍', label: 'ананас' },
          { pic: '🐑', label: 'агне' }
        ] }
      ]
    },
    {
      title: 'Запомни',
      blocks: [
        { type: 'rule', text: 'А е гласен звук. Пишем го с буквата А (голяма) и а (малка).' }
      ]
    }
  ],
  tasks: [
    { question: 'С кой звук започва „ананас“?', picture: { pic: '🍍' }, options: ['А', 'О', 'У'], answer: 'А' },
    { question: 'Коя дума започва с А?', options: [
      { value: 'агне', pic: '🐑' },
      { value: 'котка', pic: '🐱' }
    ], answer: 'агне', hint: 'Кажи думите бавно и чуй първия звук.' }
  ]
};
```

**Rules that catch people out:**
- **`id`** is the text in `window.LESSONS['…']`. Use only small Latin letters, digits and `-`, and make it unique. The convention is `<stage letter><grade>-<subject>-<topic>`, e.g. `p1-bel-bukva-a`, `m6-math-drobi-2`, `h-bel-pod-igoto-3`, `kg-math-broim-do-3`.
- **Commas.** Every item in a list or object is followed by a comma except the last. A missing comma is the most common mistake. `check.html` shows the file and line.
- **Quotes.** Write text in single quotes `'…'`. If the text itself has an apostrophe, use double quotes `"…"` around it. Bulgarian quotes „…“ are fine inside.
- **Answers.** `answer` must be exactly one of the `options`, including capitals and spaces. Numbers with spaces, like `5 800`, must be in quotes: `'5 800'`.
- **First try.** Stars count only for answers that are right on the first try, so put the right answer in different positions.

## Where it goes: stages, subjects and groups

| `stage` | `group` | `subject` ids |
|---|---|---|
| `kg` (детска градина) | 1–4 (група) | `bel`, `math`, `world`, `art`, `music`, `tech`, `pe` |
| `primary` (1.–4. клас) | 1–4 | `bel`, `math`, `english` (2–4), `world` = Родинознание (1–2), `society` (3–4), `nature` (3–4), `cs` (3–4), `music`, `art`, `tech`, `pe` |
| `middle` (5.–7. клас) | 5–7 | `bel`, `math`, `lang`, `cs`, `history`, `geo`, `nature` (5–6), `bio` (7), `chem` (7), `phys` (7), `music`, `art`, `tech`, `pe` |
| `high` (8.–12. клас) | 8–12 | `bel`, `math`, `lang`, `inf` (8–10), `it` (8–10), `history` (8–11), `geo` (8–10), `phil` (8–10), `bio`, `chem`, `phys` (8–10), `civic` (11–12), `music`, `art` (8–10), `pe` |
| `uni`, `life`, `business` | leave out | see `js/curriculum.js` |

## Lesson fields

| Field | Needed | What it is |
|---|---|---|
| `stage`, `subject`, `group` | yes | where it appears (table above) |
| `title`, `intro` | yes | heading and the first paragraph |
| `emoji` | yes | the lesson's picture in lists |
| `sections` | yes | parts of the lesson, each with a `title` and `blocks` |
| `tasks` | yes | the quiz at the end (2–8 is good) |
| `minutes` | no | rough length shown at the top |
| `parentTip` | no | shown as "Съвет за брат ми и/или Деси" |
| `after` | no | id of the lesson this one comes after |
| `before` | no | id of the lesson this one comes before (for adding at the start) |
| `core` | no | unit or topic group name |

## Blocks (what goes inside `blocks: [ … ]`)

**For the youngest** (lots of pictures; a 🔊 button reads text aloud):

```js
{ type: 'say', text: 'Текст, който може да се чуе.' }
{ type: 'cards', items: [{ pic: '🐱', label: 'котка', sub: 'малък надпис', say: 'какво да се чуе', color: '#ffd23f' }] }
{ type: 'story', panels: [{ pic: '🥕', text: 'Дядо посадил ряпа.' }, { pic: '👴👵', text: 'Повикал баба.' }] }
{ type: 'numbers', items: [{ n: 3, word: 'три', emoji: '🍎' }] }
{ type: 'countAlong', emoji: '🐤', count: 5, done: 'Браво, пет пиленца!' }
{ type: 'picture', picture: { emoji: '🍎', count: 4 }, caption: 'четири ябълки' }
{ type: 'tones', items: [{ pic: '🐘', label: 'нисък', notes: [{ f: 130, d: 0.6 }] }] }
{ type: 'draw', height: 60, guides: ['M10 30 L90 30'] }   // finger drawing; guides are SVG paths
```

In `cards`, `label` is read aloud in Bulgarian. For English words, add `voice: { lang: 'en-GB' }`.

**For older students** (more text):

```js
{ type: 'text', text: 'Обикновен абзац.' }
{ type: 'rule', title: '📌 Запомни', text: 'Правилото или определението.' }
{ type: 'list', ordered: true, items: ['първо', 'второ'] }
{ type: 'table', head: ['Дума', 'Род'], rows: [['стол', 'м. р.'], ['маса', 'ж. р.']], caption: 'optional' }
{ type: 'timeline', items: [{ year: '681', text: 'Създаване на българската държава', pic: '🏰' }] }
{ type: 'code', lang: 'python', code: 'print("Здравей")' }
```

## Pictures

Wherever a lesson takes `picture` (in a `picture` block or a task):

```js
{ pic: '☀️' }                                   // one big picture (can be several emoji)
{ emoji: '🍎', count: 3 }                       // the same picture N times (for counting)
{ sequence: ['1', '2', '?'] }                   // boxes in a row; '?' is a mystery box
{ rows: [{ emoji: '🍎', count: 3 }, { emoji: '🍐', count: 5 }] } // rows to compare
{ bars: [{ len: 40 }, { len: 90, color: '#e63946' }] }          // bars, len 0–100
{ grid: { cols: 3, rows: 3, items: [{ pic: '🐱', c: 1, r: 2 }] } } // grid, c/r start at 1
{ scene: [{ pic: '🌳', x: 20, y: 30, size: 2 }] }               // free positions in %
```

**Emoji:**
- Any emoji works. It's drawn the same on every device.
- New emoji load from the internet until someone runs `tools/sync-emoji.js` (see the README). That's optional.
- For a picture of our own, put an SVG in `assets/img/` and write `[name]` in `pic`.

## Tasks

```js
{ question: 'Колко са ябълките?', picture: { emoji: '🍎', count: 3 }, options: [2, 3, 4], answer: 3 }
{ question: 'Кое животно мяука?', options: [{ value: 'котка', pic: '🐱' }, { value: 'куче', pic: '🐶' }], answer: 'котка' }
{ question: 'Кой звук е по-висок?', sound: [{ f: 880, d: 0.4 }], options: ['висок', 'нисък'], answer: 'висок' }
{ question: 'Какво чу?', listen: { text: 'apple', lang: 'en-GB' }, options: ['ябълка', 'круша'], answer: 'ябълка' }
```

- **`hint`** (optional) is shown after a wrong answer.
- **Options with pictures:** `{ value, label, pic }`. `label` is shown instead of `value` if you give it.

## Check your work

Open **`check.html`**: `https://<your-github-name>.github.io/aq-everything-app/check.html`, or `http://localhost:8000/check.html` locally. It lists:
- **broken code:** missing commas or quotes, with the file and line;
- **duplicate ids;**
- **wrong `stage`, `subject` or `group`;**
- **unknown block types;**
- **answers that aren't among the options;**
- **lessons per subject and grade against the official yearly hours,** so you can see what's still missing.

Then open the lesson itself on the site and click through it once.

If you have Node and Playwright installed, `node tools/test-lessons.js <id-prefix>` plays every matching lesson in a real
browser. It answers every task correctly, then checks for errors, missing stars and pages wider than a phone. Start
`python3 -m http.server 8123` first.

## Writing lessons with an AI chat

Any AI chat (Claude, ChatGPT, Gemini…) can write lessons in this format. Paste this, fill in the brackets, and paste the answer into the right file:

```text
Write lessons for a Bulgarian learning website, in Bulgarian, for a girl named Ая.
Each lesson is one JavaScript object in this exact format (copy the field names):

[paste the Template section from docs/ADDING-LESSONS.md]

Allowed block types: say, text, rule, list, table, timeline, cards, story, picture, numbers, countAlong, code.
Pictures are emoji. Tasks are multiple choice; answer must be exactly one of the options.

Write [N] lessons for [subject], [grade], following the official МОН programme, one lesson per school hour,
in teaching order: [list the topics, e.g. from the textbook contents or the yearly plan].
stage: '[kg/primary/middle/high]', subject: '[id]', group: [grade].
Ids: '[prefix]-01', '[prefix]-02', … Each lesson after the previous one (after: previous id).
Each lesson: an intro, 2–3 sections, a "Запомни" rule, 4–6 tasks with hints, a parentTip.
Say "Ая", never "детето". Check every fact; if unsure about a detail, leave it out.
Output only the JavaScript code.
```

**Before you commit,** read the lesson once: AI makes mistakes with facts, grammar rules and dates. Then run `check.html`.

**Good sources for topic lists:**
- the МОН programme PDFs ("Учебна програма по … за … клас");
- the publishers' yearly plans ("годишно тематично разпределение"), which list one topic per school hour;
- the textbook's table of contents.
