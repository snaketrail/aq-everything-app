# Уча с радост 🦉

A static learning site (in Bulgarian) that follows the Bulgarian school system, from kindergarten to 12th grade. It has no database and no build step, and GitHub Pages serves it as-is.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

Settings → Pages → Source: "Deploy from a branch" → pick the branch and `/ (root)`.

## Structure

| File | What it holds |
|---|---|
| `js/config.js` | Birth date (used to mark the current stage and for the birthday banner), optional name |
| `js/curriculum.js` | Stages → subjects → topics. A topic with `lessonId` links to a lesson. Kindergarten topics carry `group` (1–4) and `core` (образователно ядро) |
| `js/lessons/*.js` | One file per lesson |
| `js/app.js` | Router, page rendering, tasks, read-aloud, sounds |
| `js/emoji.js` | Swaps emoji for local Twemoji drawings so pictures look the same on every device |
| `assets/emoji/` | Twemoji SVGs actually used (generated, see below) |
| `assets/img/` | Our own drawings, used in content as `[name]` (e.g. `[ryapa]`) |
| `css/style.css` | One theme per stage |

## Kindergarten curriculum

Topics follow **Наредба № 5 от 3 юни 2016 г. за предучилищното образование** (consolidated text, 2021): seven
educational areas, each split into образователни ядра, with expected results for 1.–4. група.

## Primary curriculum (1.–4. клас)

Lessons follow the МОН subject programmes. Topic order for each grade was checked against openly published
annual plans (годишни тематични разпределения) from Prosveta and teachers. Lesson files are `js/lessons/p<grade>-*.js`.

## Adding a lesson

1. Copy any file in `js/lessons/` and change the id and content.
2. Add a `<script>` tag for it in `index.html`.
3. Set `lessonId` on the matching topic in `js/curriculum.js`.
4. If you used new emoji, refresh the drawings:

```bash
npm install --prefix /tmp/tw @twemoji/svg@15.0.0
node tools/sync-emoji.js /tmp/tw/node_modules/@twemoji/svg
```

Block types: `say`, `text`, `numbers`, `countAlong` (tap-to-count), `cards` (picture cards, read aloud on tap),
`story` (numbered panels), `picture`, `tones` (buttons that play short melodies).

Pictures: `{ emoji, count }`, `{ sequence: [...] }`, `{ pic: '☀️' }` or `{ scene: [{ pic, x, y, size }] }`.

Tasks are multiple choice: `question`, optional `picture` or `sound`, `options` (plain values or `{ value, label, pic, size }`), `answer`, `hint`.

Progress (stars) is saved in the browser's `localStorage`.

## Credits

Drawings: [Twemoji](https://github.com/jdecked/twemoji), CC-BY 4.0.

## Birthday

On 22 October (all day, by local time) a banner appears at the top with a different wish for each age up to 200. The wishes live in `js/birthday.js`; the birth date is in `js/config.js`.
