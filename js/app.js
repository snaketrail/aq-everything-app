(function () {
  'use strict';

  const STAGES = window.CURRICULUM.stages;
  const LESSONS = window.LESSONS || {};
  const CONFIG = window.APP_CONFIG || {};
  const app = document.getElementById('app');

  const NUMBER_WORDS = ['нула', 'едно', 'две', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет', 'десет'];
  const PRAISE = ['Браво! 🎉', 'Супер! ⭐', 'Точно така! 🌈', 'Умница! 💛', 'Чудесно! 🎈'];

  // ---------- Помощни функции ----------

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

  const findStage = (id) => STAGES.find((s) => s.id === id);
  const findSubject = (stage, id) => stage && stage.subjects.find((s) => s.id === id);
  const lessonCount = (subject) => subject.topics.filter((t) => t.lessonId && LESSONS[t.lessonId]).length;

  // ---------- Прогрес (само в този браузър) ----------

  const PROGRESS_KEY = 'ucha-progress-v1';
  const progress = {
    all() {
      try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch (e) { return {}; }
    },
    get(id) { return this.all()[id]; },
    save(id, stars, total) {
      const all = this.all();
      const prev = all[id];
      if (!prev || stars > prev.stars) all[id] = { stars, total };
      try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(all)); } catch (e) { /* няма място — пропускаме */ }
    }
  };

  // ---------- Избран клас / група (помни се в този браузър) ----------

  const groupKey = (stage) => `ucha-group-${stage.id}`;
  function selectedGroup(stage) {
    if (!stage.groups) return 'all';
    let g = null;
    try { g = localStorage.getItem(groupKey(stage)); } catch (e) { /* няма достъп */ }
    return g && (g === 'all' || stage.groups[g]) ? g : Object.keys(stage.groups)[0];
  }
  function setSelectedGroup(stage, g) {
    try { localStorage.setItem(groupKey(stage), g); } catch (e) { /* няма достъп */ }
  }
  const inGroup = (t, g) => g === 'all' || String(t.group) === g;

  function groupPicker(stage) {
    if (!stage.groups) return '';
    const g = selectedGroup(stage);
    const label = stage.groupLabel || 'Клас';
    return `
      <label class="group-picker">
        <span>${esc(label)}:</span>
        <select data-group-select="${stage.id}">
          ${Object.entries(stage.groups).map(([k, v]) => `<option value="${k}" ${k === g ? 'selected' : ''}>${esc(v)}</option>`).join('')}
          <option value="all" ${g === 'all' ? 'selected' : ''}>Всички</option>
        </select>
      </label>`;
  }

  // ---------- Четене на глас ----------

  const canSpeak = 'speechSynthesis' in window;
  const voiceFor = (lang) => (canSpeak
    ? speechSynthesis.getVoices().find((v) => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(lang.toLowerCase())) || null
    : null);

  // voice: { rate, volume, pitch, lang } – по желание (напр. „говори тихо“ или английски: lang: 'en-GB').
  function speak(text, voice = {}) {
    if (!canSpeak) return;
    const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, ''));
    const lang = voice.lang || 'bg-BG';
    u.lang = lang;
    const v = voiceFor(lang) || voiceFor(lang.slice(0, 2));
    u.rate = voice.rate || 0.9;
    if (voice.volume != null) u.volume = voice.volume;
    if (voice.pitch != null) u.pitch = voice.pitch;
    if (v) u.voice = v;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  // ---------- Звуци (Web Audio) ----------
  // Мелодия = списък от ноти { f: честота в Hz (0 = пауза) или масив от честоти (акорд),
  // d: продължителност в s, v: сила 0–1, type: форма на вълната }.

  let audio = null;
  function playNotes(notes) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx || !notes) return;
    audio = audio || new Ctx();
    if (audio.state === 'suspended') audio.resume();
    let t = audio.currentTime + 0.05;
    notes.forEach((n) => {
      const freqs = [].concat(n.f || []);
      freqs.forEach((f) => {
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        osc.type = n.type || 'triangle';
        osc.frequency.value = f;
        const vol = 0.35 * (n.v == null ? 0.7 : n.v) / Math.sqrt(freqs.length);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(vol, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + n.d);
        osc.connect(gain).connect(audio.destination);
        osc.start(t);
        osc.stop(t + n.d + 0.02);
      });
      t += n.d;
    });
  }

  const speakBtn = (text) => canSpeak
    ? `<button class="speak" type="button" data-say="${esc(text)}" aria-label="Чуй на глас" title="Чуй на глас">🔊</button>`
    : '';

  // ---------- Възраст ----------

  function ageInfo() {
    if (!CONFIG.birthDate) return null;
    const birth = new Date(CONFIG.birthDate + 'T00:00:00');
    const now = new Date();
    const days = Math.floor((now - birth) / 86400000);
    if (Number.isNaN(days) || days < 0) return null;
    let months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
    if (now.getDate() < birth.getDate()) months -= 1;
    const years = Math.floor(months / 12);

    let label;
    if (days < 7) label = plural(days, 'ден', 'дни');
    else if (months < 1) label = plural(Math.floor(days / 7), 'седмица', 'седмици');
    else if (years < 2) label = plural(months, 'месец', 'месеца');
    else label = plural(years, 'година', 'години');

    return { years, label };
  }

  function currentStageId(age) {
    if (!age) return null;
    const stage = STAGES.find((s) => age.years >= s.minAge && age.years <= s.maxAge);
    return stage ? stage.id : null;
  }

  // ---------- Картинки ----------

  // Текст за картинка: емоджита + собствени рисунки като [ryapa] → assets/img/ryapa.svg
  const pics = (str) => esc(str).replace(/\[([a-z0-9-]+)\]/g, '<img class="emo" src="assets/img/$1.svg" alt="">');

  // Видове картинки:
  //   { emoji: '🍎', count: 3 }               – няколко еднакви предмета
  //   { sequence: ['1', '2', '?'] }            – редица от квадратчета
  //   { pic: '☀️' }                            – една голяма картинка (може и няколко емоджита)
  //   { scene: [{ pic, x, y, size }] }         – сцена: x, y в % от кутията, size = мащаб (1 = нормално)
  //   { rows: [{ emoji, count }, …] }          – редове един под друг, подравнени (за сравняване)
  //   { bars: [{ len, color }, …] }            – ленти с дължина len (0–100)
  //   { grid: { cols, rows, items: [{ pic, c, r }] } } – квадратна мрежа (c, r започват от 1)
  function picture(p, extraClass = '') {
    if (!p) return '';
    if (typeof p === 'string') p = { pic: p };
    if (p.rows) {
      return `<div class="pic-rows ${extraClass}">${p.rows.map((r) =>
        `<div class="pic-row">${Array.from({ length: r.count }, () => `<span>${pics(r.emoji)}</span>`).join('')}</div>`).join('')}</div>`;
    }
    if (p.bars) {
      return `<div class="pic-bars ${extraClass}">${p.bars.map((b) =>
        `<span class="bar" style="width:${b.len}%;--bar:${b.color || '#5ec8f2'}"></span>`).join('')}</div>`;
    }
    if (p.grid) {
      const g = p.grid;
      const at = (c, r) => g.items.find((it) => it.c === c && it.r === r);
      let cells = '';
      for (let r = 1; r <= g.rows; r++) {
        for (let c = 1; c <= g.cols; c++) {
          const it = at(c, r);
          cells += `<span class="grid-cell${it && it.mark ? ' is-marked' : ''}">${it && it.pic ? pics(it.pic) : ''}</span>`;
        }
      }
      return `<div class="pic-grid ${extraClass}" style="--cols:${g.cols}">${cells}</div>`;
    }
    if (p.pic) {
      return `<div class="pic pic-big ${extraClass}">${pics(p.pic)}</div>`;
    }
    if (p.scene) {
      return `<div class="pic-scene ${extraClass}" style="--h:${p.height || 11}em">${p.scene.map((s) =>
        `<span class="scene-item" style="left:${s.x}%;top:${s.y}%;--s:${s.size || 1}">${pics(s.pic)}</span>`).join('')}</div>`;
    }
    if (p.sequence) {
      return `<div class="pic pic-seq ${extraClass}">${p.sequence.map((x) =>
        `<span class="seq-item${x === '?' ? ' is-mystery' : ''}${x.length > 2 && !/\p{Extended_Pictographic}/u.test(x) ? ' is-word' : ''}">${pics(x)}</span>`).join('')}</div>`;
    }
    const items = Array.from({ length: p.count }, (_, i) =>
      `<span class="pic-item" style="--i:${i}">${p.emoji}</span>`).join('');
    return `<div class="pic ${extraClass}" role="img" aria-label="${p.count}">${items}</div>`;
  }

  // ---------- Страници ----------

  function setTheme(theme) {
    document.body.dataset.theme = theme;
  }

  function crumbs(list) {
    return `<nav class="crumbs" aria-label="Навигация">${list.map((c, i) =>
      i === list.length - 1
        ? `<span aria-current="page">${esc(c.label)}</span>`
        : `<a href="${c.href}">${esc(c.label)}</a>`
    ).join('<span class="crumb-sep" aria-hidden="true">›</span>')}</nav>`;
  }

  function renderHome() {
    setTheme('home');
    const age = ageInfo();
    const nowId = currentStageId(age);
    const name = CONFIG.learnerName ? esc(CONFIG.learnerName) : 'нашата ученичка';

    app.innerHTML = `
      <section class="hero">
        <div class="hero-owl" aria-hidden="true">🦉</div>
        <h1>Какво ще учим днес?</h1>
        <p class="lead">Уроци, примери и задачи по всеки предмет от детската градина до 12. клас.</p>
        ${age ? `<p class="age-pill">🍼 ${name} е на <strong>${esc(age.label)}</strong> — пътешествието започва!</p>` : ''}
      </section>

      <section class="stage-grid" aria-label="Училище">
        ${STAGES.filter((s) => s.group !== 'after').map((s) => stageCard(s, nowId)).join('')}
      </section>

      <section class="after-school" aria-labelledby="after-title">
        <h2 id="after-title">След училище</h2>
        <p class="lead">Тези раздели ще ги подготвим, след като завършим училищните етапи.</p>
        <div class="stage-grid">
          ${STAGES.filter((s) => s.group === 'after').map((s) => stageCard(s, nowId)).join('')}
        </div>
      </section>`;
  }

  function stageCard(s, nowId) {
    return `
      <a class="stage-card" data-stage="${s.id}" href="#/stage/${s.id}">
        ${s.id === nowId ? '<span class="now-badge">Сега сме тук</span>' : ''}
        ${s.group === 'after' ? '<span class="soon-badge">Скоро</span>' : ''}
        <span class="stage-emoji" aria-hidden="true">${s.emoji}</span>
        <span class="stage-name">${esc(s.name)}</span>
        <span class="stage-meta">${esc(s.grades)} · ${esc(s.ages)}</span>
        <span class="stage-desc">${esc(s.description)}</span>
      </a>`;
  }

  // ---------- Рожден ден ----------

  function renderBirthday() {
    const box = document.getElementById('birthday');
    const B = window.BIRTHDAY;
    if (!box || !B || !CONFIG.birthDate) return;
    const now = new Date();
    const age = B.ageOn(CONFIG.birthDate, now);
    if (!B.isBirthday(now) || age < 0 || age > 200) { box.hidden = true; return; }

    const name = CONFIG.learnerName ? `, ${esc(CONFIG.learnerName)}` : '';
    const ageText = age === 0 ? 'Днес се роди!' : `Днес ставаш на ${plural(age, 'година', 'години')}!`;
    box.innerHTML = `
      <div class="birthday-inner">
        <span class="birthday-cake" aria-hidden="true">🎂</span>
        <div class="birthday-text">
          <p class="birthday-title">Честит рожден ден${name}! <span aria-hidden="true">🎉</span></p>
          <p class="birthday-age">${esc(ageText)}</p>
          <p class="birthday-wish">${esc(B.wishFor(age))}</p>
        </div>
        <span class="birthday-cake" aria-hidden="true">🎈</span>
      </div>`;
    box.hidden = false;
  }

  function renderStage(stage) {
    setTheme(stage.theme);
    app.innerHTML = `
      ${crumbs([{ label: 'Начало', href: '#/' }, { label: stage.name }])}
      <header class="page-head">
        <span class="page-emoji" aria-hidden="true">${stage.emoji}</span>
        <div>
          <h1>${esc(stage.name)}</h1>
          <p class="page-sub">${esc(stage.grades)} · ${esc(stage.ages)}</p>
        </div>
      </header>
      <p class="lead">${esc(stage.description)}</p>
      ${groupPicker(stage)}

      <section class="subject-grid" aria-label="Предмети">
        ${stage.subjects.filter((sub) => {
          // Скриваме предметите, които не се учат в избрания клас.
          const g = selectedGroup(stage);
          return g === 'all' || !sub.topics.some((t) => t.group) || sub.topics.some((t) => inGroup(t, g));
        }).map((sub) => {
          const g = selectedGroup(stage);
          const n = sub.topics.filter((t) => inGroup(t, g) && t.lessonId && LESSONS[t.lessonId]).length;
          return `
            <a class="subject-card" style="--c:${sub.color}" href="#/stage/${stage.id}/${sub.id}">
              <span class="subject-emoji" aria-hidden="true">${sub.emoji}</span>
              <span class="subject-name">${esc(sub.name)}</span>
              ${sub.grades ? `<span class="subject-grades">${esc(sub.grades)}</span>` : ''}
              <span class="subject-count ${n ? '' : 'is-soon'}">${n ? plural(n, 'урок', 'урока') : 'Скоро'}</span>
            </a>`;
        }).join('')}
      </section>`;
  }

  function renderSubject(stage, subject) {
    setTheme(stage.theme);
    const topics = subject.topics;
    app.innerHTML = `
      ${crumbs([{ label: 'Начало', href: '#/' }, { label: stage.name, href: `#/stage/${stage.id}` }, { label: subject.name }])}
      <header class="page-head" style="--c:${subject.color}">
        <span class="page-emoji tinted" aria-hidden="true">${subject.emoji}</span>
        <div>
          <h1>${esc(subject.name)}</h1>
          <p class="page-sub">${esc(stage.name)}${subject.grades ? ' · ' + esc(subject.grades) : ''}</p>
        </div>
      </header>
      ${subject.topics.some((t) => t.group) ? groupPicker(stage) : ''}

      ${topics.length ? topicSections(stage, subject) : `
        <div class="empty">
          <span aria-hidden="true">🌱</span>
          <p>Уроците по този предмет се подготвят. Скоро ще са тук!</p>
        </div>`}`;
  }

  // Темите се показват по възрастови групи, ако етапът има такива (детската градина).
  function topicSections(stage, subject) {
    const list = (topics) => `
      <ol class="topic-list" style="--c:${subject.color}">${topics.map(topicItem).join('')}</ol>`;
    if (!stage.groups || !subject.topics.some((t) => t.group)) return list(subject.topics);

    const selected = selectedGroup(stage);
    const html = Object.keys(stage.groups).filter((g) => selected === 'all' || g === selected).map((g) => {
      const topics = subject.topics.filter((t) => String(t.group) === g);
      if (!topics.length) return '';
      return `
        <section class="topic-group">
          <h2 class="group-title"><span class="group-badge">${g}</span>${esc(stage.groups[g])}</h2>
          ${list(topics)}
        </section>`;
    }).join('');
    return html || `
      <div class="empty">
        <span aria-hidden="true">📅</span>
        <p>Този предмет не се учи в ${esc(stage.groups[selected] || '')}. Избери друг клас.</p>
      </div>`;
  }

  function topicItem(t) {
    const lesson = t.lessonId && LESSONS[t.lessonId];
    if (!lesson) {
      return `
        <li class="topic is-soon">
          <span class="topic-num">${t.emoji || '•'}</span>
          <span class="topic-title">${esc(t.title)}${t.core ? `<small>${esc(t.core)}</small>` : ''}</span>
          <span class="topic-tag">Скоро</span>
        </li>`;
    }
    const done = progress.get(t.lessonId);
    return `
      <li class="topic">
        <a href="#/lesson/${t.lessonId}">
          <span class="topic-num">${pics(lesson.emoji)}</span>
          <span class="topic-title">${esc(t.title)}${t.core ? `<small>${esc(t.core)}</small>` : ''}</span>
          <span class="topic-tag ${done ? 'is-done' : ''}">${done ? `⭐ ${done.stars}/${done.total}` : 'Започни →'}</span>
        </a>
      </li>`;
  }

  // ---------- Урок ----------

  function renderBlock(b) {
    switch (b.type) {
      case 'say':
        return `<p class="say">${speakBtn(b.text)}<span>${esc(b.text)}</span></p>`;

      case 'numbers':
        return `<div class="number-cards">${b.items.map((it) => `
          <button class="number-card" type="button" data-say="${esc(it.word)}">
            <span class="nc-digit">${it.n}</span>
            <span class="nc-word">${esc(it.word)}</span>
            ${picture({ emoji: it.emoji, count: it.n }, 'pic-small')}
          </button>`).join('')}</div>`;

      case 'countAlong':
        return `
          <div class="count-along" data-done="${esc(b.done)}">
            <div class="ca-items">
              ${Array.from({ length: b.count }, () =>
                `<button class="ca-item" type="button" aria-label="Преброй">${b.emoji}<span class="ca-badge"></span></button>`).join('')}
            </div>
            <p class="ca-status" aria-live="polite">Докосни първото 👆</p>
            <button class="btn btn-ghost ca-reset" type="button">↺ Отначало</button>
          </div>`;

      case 'cards':
        // Картички с картинка и надпис; натискането чете надписа (или `say`).
        return `<div class="pic-cards">${b.items.map((it) => `
          <button class="pic-card" type="button" data-say="${esc(it.say || it.label)}" ${it.voice ? `data-voice="${esc(JSON.stringify(it.voice))}"` : ''} ${it.color ? `style="--card:${it.color}"` : ''}>
            <span class="pc-pic">${pics(it.pic)}</span>
            <span class="pc-label">${esc(it.label)}</span>
            ${it.sub ? `<span class="pc-sub">${esc(it.sub)}</span>` : ''}
          </button>`).join('')}</div>`;

      case 'story':
        // Приказка или стъпки: номерирани картинки с текст.
        return `<ol class="story">${b.panels.map((p) => `
          <li class="story-panel">
            <span class="sp-pic">${pics(p.pic)}</span>
            <p class="sp-text">${speakBtn(p.text)}<span>${esc(p.text)}</span></p>
          </li>`).join('')}</ol>`;

      case 'tones':
        // Бутони, които свирят кратки мелодии (без звукови файлове).
        return `<div class="pic-cards">${b.items.map((it, i) => `
          <button class="pic-card tone-card" type="button" data-tone="${esc(JSON.stringify(it.notes))}" data-i="${i}">
            <span class="pc-pic">${pics(it.pic)}</span>
            <span class="pc-label">${esc(it.label)}</span>
            <span class="pc-sub">▶ Чуй</span>
          </button>`).join('')}</div>`;

      case 'draw':
        // Табло за рисуване с пръст/мишка. Координати 0–100 × 0–height.
        // guides: пунктирни SVG пътища за следване; walls: плътни линии (лабиринт);
        // marks: картинки върху таблото [{ pic, x, y }].
        return `
          <div class="draw" data-h="${b.height || 60}">
            <div class="draw-board" style="aspect-ratio:100/${b.height || 60}">
              <svg class="draw-guides" viewBox="0 0 100 ${b.height || 60}" preserveAspectRatio="none" aria-hidden="true">
                ${(b.guides || []).map((d) => `<path d="${esc(d)}"/>`).join('')}
                ${(b.walls || []).map((d) => `<path class="wall" d="${esc(d)}"/>`).join('')}
              </svg>
              ${(b.marks || []).map((m) => `<span class="draw-mark" style="left:${m.x}%;top:${m.y / (b.height || 60) * 100}%">${pics(m.pic)}</span>`).join('')}
              <canvas aria-label="Табло за рисуване"></canvas>
            </div>
            <div class="draw-tools">
              ${['#e63946', '#3a86ff', '#2a9d8f', '#ffb703', '#3d2c1e'].map((c, i) =>
                `<button type="button" class="draw-color${i === 0 ? ' is-active' : ''}" style="--dc:${c}" data-color="${c}" aria-label="Цвят"></button>`).join('')}
              <button type="button" class="btn btn-ghost draw-clear">↺ Изчисти</button>
            </div>
          </div>`;

      case 'picture':
        return `${picture(b.picture)}${b.caption ? `<p class="caption">${esc(b.caption)}</p>` : ''}`;

      case 'text':
        return `<p>${esc(b.text)}</p>`;

      // ---- Блокове за по-големите: повече текст, таблици, хронология ----

      case 'rule':
        // Рамка „Запомни“ с основното правило или определение.
        return `<div class="rule-box"><p class="rule-title">${pics(b.title || '📌 Запомни')}</p><p>${esc(b.text)}</p></div>`;

      case 'list':
        return `<${b.ordered ? 'ol' : 'ul'} class="text-list">${b.items.map((it) => `<li>${esc(it)}</li>`).join('')}</${b.ordered ? 'ol' : 'ul'}>`;

      case 'table':
        return `
          <div class="table-wrap">
            <table class="data-table">
              ${b.head ? `<thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}
              <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${pics(String(c))}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>
          </div>${b.caption ? `<p class="caption">${esc(b.caption)}</p>` : ''}`;

      case 'timeline':
        return `<ol class="timeline">${b.items.map((it) => `
          <li><span class="tl-year">${esc(it.year)}</span><span class="tl-text">${it.pic ? `${pics(it.pic)} ` : ''}${esc(it.text)}</span></li>`).join('')}</ol>`;

      default:
        return '';
    }
  }

  function renderLesson(id) {
    const lesson = LESSONS[id];
    const stage = lesson && findStage(lesson.stage);
    const subject = findSubject(stage, lesson && lesson.subject);
    if (!lesson || !stage || !subject) return renderNotFound();

    setTheme(stage.theme);
    app.innerHTML = `
      ${crumbs([
        { label: 'Начало', href: '#/' },
        { label: stage.name, href: `#/stage/${stage.id}` },
        { label: subject.name, href: `#/stage/${stage.id}/${subject.id}` },
        { label: lesson.title }
      ])}

      <header class="lesson-head" style="--c:${subject.color}">
        <span class="lesson-emoji" aria-hidden="true">${pics(lesson.emoji)}</span>
        <h1>${esc(lesson.title)}</h1>
        <p class="page-sub">${lesson.group && stage.groups ? `${esc(stage.groups[lesson.group])}` : ''}${lesson.group && stage.groups && lesson.minutes ? ' · ' : ''}${lesson.minutes ? `⏱️ около ${lesson.minutes} минути` : ''}</p>
      </header>

      <p class="say intro">${speakBtn(lesson.intro)}<span>${esc(lesson.intro)}</span></p>

      ${lesson.parentTip ? `
        <details class="parent-tip">
          <summary>👪 ${esc(CONFIG.parentTipLabel || 'Съвет за родителя')}</summary>
          <p>${esc(lesson.parentTip)}</p>
        </details>` : ''}

      ${lesson.sections.map((s, i) => `
        <section class="lesson-section">
          <h2><span class="step">${i + 1}</span>${esc(s.title)}</h2>
          ${s.blocks.map(renderBlock).join('')}
        </section>`).join('')}

      ${lesson.tasks && lesson.tasks.length ? `
        <section class="lesson-section tasks">
          <h2><span class="step">✏️</span>Да опитаме!</h2>
          <div id="task-runner"></div>
        </section>` : ''}
    `;

    wireCountAlong();
    wireDraw();
    if (lesson.tasks && lesson.tasks.length) startTasks(id, lesson, stage, subject);
  }

  function wireCountAlong() {
    app.querySelectorAll('.count-along').forEach((box) => {
      const items = [...box.querySelectorAll('.ca-item')];
      const status = box.querySelector('.ca-status');
      let counted = 0;

      items.forEach((item) => item.addEventListener('click', () => {
        if (item.classList.contains('is-counted')) return;
        counted += 1;
        item.classList.add('is-counted');
        item.querySelector('.ca-badge').textContent = counted;
        const word = NUMBER_WORDS[counted] || String(counted);
        if (counted === items.length) {
          status.textContent = box.dataset.done;
          status.classList.add('is-done');
          speak(`${word}! ${box.dataset.done}`);
        } else {
          status.textContent = `${counted}… ${word}`;
          speak(word);
        }
      }));

      box.querySelector('.ca-reset').addEventListener('click', () => {
        counted = 0;
        items.forEach((it) => { it.classList.remove('is-counted'); it.querySelector('.ca-badge').textContent = ''; });
        status.textContent = 'Докосни първото 👆';
        status.classList.remove('is-done');
      });
    });
  }

  function wireDraw() {
    app.querySelectorAll('.draw').forEach((box) => {
      const canvas = box.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      let color = '#e63946';
      let drawing = false;
      let last = null;

      const fit = () => {
        const r = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(r.width * dpr);
        canvas.height = Math.round(r.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = Math.max(6, r.width / 60);
      };
      fit();
      new ResizeObserver(fit).observe(canvas);

      const pos = (e) => {
        const r = canvas.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top };
      };
      canvas.addEventListener('pointerdown', (e) => {
        drawing = true;
        last = pos(e);
        canvas.setPointerCapture(e.pointerId);
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(last.x, last.y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
      canvas.addEventListener('pointermove', (e) => {
        if (!drawing) return;
        const p = pos(e);
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        last = p;
      });
      const stop = () => { drawing = false; };
      canvas.addEventListener('pointerup', stop);
      canvas.addEventListener('pointercancel', stop);

      box.querySelectorAll('.draw-color').forEach((btn) => btn.addEventListener('click', () => {
        color = btn.dataset.color;
        box.querySelectorAll('.draw-color').forEach((b) => b.classList.toggle('is-active', b === btn));
      }));
      box.querySelector('.draw-clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
    });
  }

  // ---------- Задачи ----------

  function startTasks(id, lesson, stage, subject) {
    const root = document.getElementById('task-runner');
    const tasks = lesson.tasks;
    let index = 0;
    let stars = 0;

    // Отговор: число/текст или { value, label?, pic?, picture? }.
    const normalize = (o) => (typeof o === 'object'
      ? { label: o.pic || o.picture ? '' : String(o.value), ...o }
      : { value: o, label: String(o) });

    function showTask() {
      const t = tasks[index];
      const options = t.options.map(normalize);
      let firstTry = true;

      root.innerHTML = `
        <div class="task">
          <div class="task-dots" aria-label="Задача ${index + 1} от ${tasks.length}">
            ${tasks.map((_, i) => `<span class="dot ${i < index ? 'is-done' : ''} ${i === index ? 'is-current' : ''}"></span>`).join('')}
          </div>
          <p class="task-q">${speakBtn(t.question)}<span>${esc(t.question)}</span></p>
          ${t.sound ? `<button class="btn btn-ghost sound-btn" type="button" data-tone="${esc(JSON.stringify(t.sound))}">🎵 Чуй звука</button>` : ''}
          ${t.listen ? `<button class="btn btn-ghost sound-btn" type="button" data-say="${esc(t.listen.text)}" data-voice="${esc(JSON.stringify({ lang: t.listen.lang || 'en-GB', rate: 0.85 }))}">🔊 Чуй думата</button>` : ''}
          ${picture(t.picture, 'pic-task')}
          <div class="options ${options.some((o) => o.picture || o.pic) ? 'has-pictures' : ''} ${options.some((o) => o.label.length > 3) ? 'has-words' : ''}">
            ${options.map((o, i) => `
              <button class="option" type="button" data-i="${i}">
                ${o.picture ? picture(o.picture, 'pic-small') : ''}
                ${o.pic ? `<span class="option-pic" ${o.size ? `style="--os:${o.size}"` : ''}>${pics(o.pic)}</span>` : ''}
                ${o.label ? `<span class="option-label">${esc(o.label)}</span>` : ''}
              </button>`).join('')}
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="task-actions"></div>
        </div>`;

      const feedback = root.querySelector('.feedback');
      const actions = root.querySelector('.task-actions');

      root.querySelectorAll('.option').forEach((btn) => btn.addEventListener('click', () => {
        const o = options[Number(btn.dataset.i)];
        if (o.value === t.answer) {
          if (firstTry) stars += 1;
          root.querySelectorAll('.option').forEach((b) => { b.disabled = true; });
          btn.classList.add('is-right');
          const praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
          feedback.className = 'feedback is-right';
          feedback.textContent = praise;
          speak(praise);
          const last = index === tasks.length - 1;
          actions.innerHTML = `<button class="btn btn-primary" type="button">${last ? 'Готово! 🏁' : 'Напред →'}</button>`;
          actions.querySelector('button').addEventListener('click', () => {
            index += 1;
            if (index < tasks.length) showTask(); else showFinish();
          });
          actions.querySelector('button').focus();
        } else {
          firstTry = false;
          btn.classList.remove('is-wrong');
          void btn.offsetWidth; // рестартира анимацията
          btn.classList.add('is-wrong');
          const msg = t.hint ? `Опитай пак 🙂 ${t.hint}` : 'Опитай пак 🙂';
          feedback.className = 'feedback is-wrong';
          feedback.textContent = msg;
          speak(msg);
        }
      }));
    }

    function showFinish() {
      progress.save(id, stars, tasks.length);
      const msg = stars === tasks.length ? 'Всичко от първия път! Ти си звезда!' : 'Справи се! Продължавай да се упражняваш.';
      root.innerHTML = `
        <div class="finish">
          <div class="confetti" aria-hidden="true">🎉🎈⭐🎈🎉</div>
          <h3>${esc(msg)}</h3>
          <p class="stars" aria-label="${stars} от ${tasks.length} звезди">
            ${tasks.map((_, i) => `<span class="${i < stars ? 'on' : ''}">⭐</span>`).join('')}
          </p>
          <div class="task-actions">
            <button class="btn btn-ghost" type="button" data-again>↺ Още веднъж</button>
            <a class="btn btn-primary" href="#/stage/${stage.id}/${subject.id}">Към темите →</a>
          </div>
        </div>`;
      speak(msg);
      root.querySelector('[data-again]').addEventListener('click', () => { index = 0; stars = 0; showTask(); });
    }

    showTask();
  }

  function renderNotFound() {
    setTheme('home');
    app.innerHTML = `
      <div class="empty">
        <span aria-hidden="true">🙈</span>
        <p>Тази страница не съществува.</p>
        <a class="btn btn-primary" href="#/">Към началото</a>
      </div>`;
  }

  // ---------- Маршрути ----------

  function route() {
    if (canSpeak) speechSynthesis.cancel();
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);

    if (parts.length === 0) renderHome();
    else if (parts[0] === 'stage' && findStage(parts[1])) {
      const stage = findStage(parts[1]);
      if (parts.length === 2) renderStage(stage);
      else if (findSubject(stage, parts[2])) renderSubject(stage, findSubject(stage, parts[2]));
      else renderNotFound();
    } else if (parts[0] === 'lesson' && parts[1]) renderLesson(parts[1]);
    else renderNotFound();

    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  // Бутоните „Чуй“ и картичките с числа работят навсякъде.
  document.addEventListener('click', (e) => {
    const tone = e.target.closest('[data-tone]');
    if (tone) {
      playNotes(JSON.parse(tone.dataset.tone));
      tone.classList.remove('is-pop');
      void tone.offsetWidth;
      tone.classList.add('is-pop');
      return;
    }
    const el = e.target.closest('[data-say]');
    if (!el) return;
    speak(el.dataset.say, el.dataset.voice ? JSON.parse(el.dataset.voice) : {});
    if (el.classList.contains('number-card') || el.classList.contains('pic-card')) {
      el.classList.remove('is-pop');
      void el.offsetWidth;
      el.classList.add('is-pop');
    }
  });

  // Смяна на класа/групата: запомняме избора и прерисуваме страницата.
  document.addEventListener('change', (e) => {
    const sel = e.target.closest('[data-group-select]');
    if (!sel) return;
    const stage = findStage(sel.dataset.groupSelect);
    setSelectedGroup(stage, sel.value);
    route();
    const again = app.querySelector('[data-group-select]');
    if (again) again.focus();
  });

  window.addEventListener('hashchange', route);
  route();

  // Проверяваме всяка минута, за да се покаже/скрие точно в полунощ.
  renderBirthday();
  setInterval(renderBirthday, 60000);
})();
