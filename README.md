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
| `js/config.js` | Birth date (used to mark the current stage), optional name |
| `js/curriculum.js` | Stages → subjects → topics. A topic with `lessonId` links to a lesson |
| `js/lessons/*.js` | One file per lesson |
| `js/app.js` | Router, page rendering, tasks, read-aloud |
| `css/style.css` | One theme per stage: `kg`, `primary`, `middle`, `high` |

## Adding a lesson

1. Copy `js/lessons/kg-math-broim-do-5.js` and change the id and content.
2. Add a `<script>` tag for it in `index.html`.
3. Set `lessonId` on the matching topic in `js/curriculum.js`.

Block types: `say` (text with a 🔊 button), `text`, `numbers` (number cards), `countAlong` (tap-to-count).
Tasks use multiple choice: `question`, an optional `picture` (`{emoji, count}` or `{sequence: [...]}`), `options`, `answer` and `hint`.

Progress (stars) is saved in the browser's `localStorage`.

## Birthday

On 22 October (all day, by local time) a banner appears at the top with a different wish for each age up to 200. The wishes live in `js/birthday.js`; the birth date is in `js/config.js`.
