(function () {
  'use strict';

  const STAGES = window.CURRICULUM.stages;
  const LESSONS = window.LESSONS || {};
  const CONFIG = window.APP_CONFIG || {};
  const app = document.getElementById('app');

  // Нов урок, към който никоя тема в curriculum.js не сочи, се показва сам
  // в своя предмет: преди урока `before` или след урока `after`, ако са зададени, иначе най-отзад.
  Object.entries(LESSONS).forEach(([id, l]) => {
    const sub = (STAGES.find((s) => s.id === l.stage) || { subjects: [] }).subjects.find((s) => s.id === l.subject);
    if (!sub) { console.warn('Урок ' + id + ': няма предмет ' + l.stage + '/' + l.subject); return; }
    if (sub.topics.some((t) => t.lessonId === id)) return;
    const topic = { group: l.group, title: l.title, core: l.core || 'Още уроци', lessonId: id };
    const before = l.before ? sub.topics.findIndex((t) => t.lessonId === l.before) : -1;
    const at = l.after ? sub.topics.findIndex((t) => t.lessonId === l.after) : -1;
    if (before >= 0) sub.topics.splice(before, 0, topic);
    else if (at >= 0) sub.topics.splice(at + 1 + sub.topics.slice(at + 1).filter((t) => t.after === l.after).length, 0, Object.assign(topic, { after: l.after }));
    else sub.topics.push(topic);
  });

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
    const entries = Object.entries(stage.groups);
    const btn = (k, text, cls = '') => `<button type="button" class="gs-btn ${cls} ${k === g ? 'is-active' : ''}" data-group-btn="${stage.id}" data-g="${k}" aria-pressed="${k === g}">${text}</button>`;
    switch (stage.theme) {
      case 'kg': {
        const chicks = ['🐣', '🐥', '🐤', '🦉'];
        return `<div class="group-switch gs-kg" role="group" aria-label="${esc(label)}">${entries.map(([k, v], i) =>
          btn(k, `<span class="gs-pic">${chicks[i] || '⭐'}</span><span class="gs-name">${esc(v.split(' · ')[0])}</span><small>${esc(v.split(' · ')[1] || '')}</small>`)).join('')}</div>`;
      }
      case 'primary':
        return `<div class="group-switch gs-tabs" role="group" aria-label="${esc(label)}">${entries.map(([k, v]) => btn(k, esc(v))).join('')}${btn('all', 'Всички', 'gs-all')}</div>`;
      case 'middle':
        return `<div class="group-switch gs-seg" role="group" aria-label="${esc(label)}">${entries.map(([k, v]) => btn(k, esc(v))).join('')}${btn('all', 'Всички')}</div>`;
      case 'high':
        return `<div class="group-switch gs-text" role="group" aria-label="${esc(label)}"><span class="gs-label">${esc(label)}:</span>${entries.map(([k]) => btn(k, esc(k))).join('<span class="gs-sep">·</span>')}<span class="gs-sep">·</span>${btn('all', 'всички')}</div>`;
      default:
        return `
      <label class="group-picker">
        <span>${esc(label)}:</span>
        <select data-group-select="${stage.id}">
          ${entries.map(([k, v]) => `<option value="${k}" ${k === g ? 'selected' : ''}>${esc(v)}</option>`).join('')}
          <option value="all" ${g === 'all' ? 'selected' : ''}>Всички</option>
        </select>
      </label>`;
    }
  }

  // Колко урока има и колко са минати в даден предмет (за избрания клас).
  function subjectStats(stage, sub, g) {
    const topics = sub.topics.filter((t) => inGroup(t, g));
    const ready = topics.filter((t) => t.lessonId && LESSONS[t.lessonId]);
    const done = ready.filter((t) => progress.get(t.lessonId));
    const stars = done.reduce((a, t) => a + progress.get(t.lessonId).stars, 0);
    const planned = sub.hours && g !== 'all' ? sub.hours[g] || 0 : 0;
    return { topics, ready, done, stars, planned };
  }
  const visibleSubjects = (stage, g) => stage.subjects.filter((sub) =>
    g === 'all' || !sub.topics.some((t) => t.group) || sub.topics.some((t) => inGroup(t, g)));
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
  const shortName = (name) => name.replace('Български език и литература', 'Български език').replace(' и предприемачество', '').replace('Физическо възпитание и спорт', 'Спорт').replace('Изобразително изкуство', 'Рисуване');

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
        <p class="lead">Университет и Бизнес са готови. Живот идва скоро.</p>
        <div class="stage-grid">
          ${STAGES.filter((s) => s.group === 'after').map((s) => stageCard(s, nowId)).join('')}
        </div>
      </section>`;
  }

  function stageCard(s, nowId) {
    return `
      <a class="stage-card" data-stage="${s.id}" href="#/stage/${s.id}">
        ${s.id === nowId ? '<span class="now-badge">Сега сме тук</span>' : ''}
        ${s.group === 'after' && !s.subjects.some((sub) => sub.topics.length) ? '<span class="soon-badge">Скоро</span>' : ''}
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
    const g = selectedGroup(stage);
    const subs = visibleSubjects(stage, g);
    const crumb = crumbs([{ label: 'Начало', href: '#/' }, { label: stage.name }]);
    const name = esc(CONFIG.learnerName || 'приятел');

    if (stage.theme === 'kg') {
      app.innerHTML = `
        ${crumb}
        <div class="mascot-say kg-hello">
          <span class="mascot" aria-hidden="true">🦉</span>
          <p class="bubble">Здравей, ${name}! С какво ще играем днес?</p>
        </div>
        ${groupPicker(stage)}
        <section class="kg-bubbles" aria-label="Занимания">
          ${subs.map((sub) => {
            const st = subjectStats(stage, sub, g);
            return `
              <a class="kg-bubble" style="--c:${sub.color}" href="#/stage/${stage.id}/${sub.id}">
                <span class="kg-bubble-pic" aria-hidden="true">${sub.emoji}</span>
                <span class="kg-bubble-name">${esc(shortName(sub.name))}</span>
                <span class="kg-bubble-stars">${st.ready.length ? `${'⭐'.repeat(Math.min(3, st.done.length))}${st.done.length ? '' : '▶'}` : '…'}</span>
              </a>`;
          }).join('')}
        </section>`;
      return;
    }

    if (stage.theme === 'primary') {
      app.innerHTML = `
        ${crumb}
        <header class="nb-head">
          <span class="nb-head-pic" aria-hidden="true">${stage.emoji}</span>
          <div><h1>Моята раница</h1><p class="page-sub">${esc(stage.name)} · ${esc(stage.grades)}</p></div>
        </header>
        ${groupPicker(stage)}
        <section class="nb-shelf" aria-label="Предмети">
          ${subs.map((sub) => {
            const st = subjectStats(stage, sub, g);
            return `
              <a class="nb-book" style="--c:${sub.color}" href="#/stage/${stage.id}/${sub.id}">
                <span class="nb-label">
                  <span class="nb-emoji" aria-hidden="true">${sub.emoji}</span>
                  <span class="nb-name">${esc(sub.name)}</span>
                  <span class="nb-line">${g === 'all' ? esc(stage.grades) : esc(stage.groups[g] || '')}</span>
                </span>
                <span class="nb-count">${st.ready.length ? plural(st.ready.length, 'урок', 'урока') : 'Скоро'}${st.done.length ? ` · ✔ ${st.done.length}` : ''}</span>
              </a>`;
          }).join('')}
        </section>`;
      return;
    }

    if (stage.theme === 'middle') {
      const all = subs.map((sub) => ({ sub, st: subjectStats(stage, sub, g) }));
      const total = all.reduce((a, x) => a + x.st.ready.length, 0);
      const done = all.reduce((a, x) => a + x.st.done.length, 0);
      const stars = all.reduce((a, x) => a + x.st.stars, 0);
      let next = null;
      for (const { sub, st } of all) {
        const t = st.ready.find((x) => !progress.get(x.lessonId));
        if (t) { next = { sub, t, l: LESSONS[t.lessonId] }; break; }
      }
      const pct = (a, b2) => (b2 ? Math.round((a / b2) * 100) : 0);
      app.innerHTML = `
        ${crumb}
        <div class="app-shell">
          <aside class="app-side">
            <p class="app-side-title">${stage.emoji} ${esc(stage.name)}</p>
            ${groupPicker(stage)}
            <nav class="app-nav" aria-label="Предмети">
              ${all.map(({ sub, st }) => `
                <a class="app-nav-item" style="--c:${sub.color}" href="#/stage/${stage.id}/${sub.id}">
                  <span class="app-dot" aria-hidden="true"></span>
                  <span class="app-nav-name">${esc(sub.name)}</span>
                  <span class="app-badge">${st.ready.length}</span>
                </a>`).join('')}
            </nav>
          </aside>
          <div class="app-main">
            <header class="app-hello">
              <h1>Здравей, ${name} 👋</h1>
              <p class="page-sub">${g === 'all' ? esc(stage.grades) : esc(stage.groups[g])} · ${esc(stage.description)}</p>
            </header>
            <div class="app-stats">
              <div class="app-stat"><strong>${total}</strong><span>урока</span></div>
              <div class="app-stat"><strong>${done}</strong><span>завършени</span></div>
              <div class="app-stat"><strong>${stars}</strong><span>звезди</span></div>
              <div class="app-stat"><strong>${pct(done, total)}%</strong><span>напредък</span></div>
            </div>
            ${next ? `
              <h2 class="app-h2">Продължи</h2>
              <a class="app-next" style="--c:${next.sub.color}" href="#/lesson/${next.t.lessonId}">
                <span class="app-next-pic" aria-hidden="true">${pics(next.l.emoji)}</span>
                <span class="app-next-text"><small>${esc(next.sub.name)}</small>${esc(next.l.title)}</span>
                <span class="btn btn-primary">Започни</span>
              </a>` : ''}
            <h2 class="app-h2">Предмети</h2>
            <div class="app-cards">
              ${all.map(({ sub, st }) => `
                <a class="app-card" style="--c:${sub.color}" href="#/stage/${stage.id}/${sub.id}">
                  <span class="app-card-top"><span class="app-card-pic" aria-hidden="true">${sub.emoji}</span><span class="app-card-name">${esc(sub.name)}</span></span>
                  <span class="app-progress" role="progressbar" aria-valuenow="${pct(st.done.length, st.ready.length)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct(st.done.length, st.ready.length)}%"></span></span>
                  <span class="app-card-meta">${st.done.length} / ${st.ready.length} урока</span>
                </a>`).join('')}
            </div>
          </div>
        </div>`;
      return;
    }

    if (stage.theme === 'high') {
      app.innerHTML = `
        ${crumb}
        <header class="book-head">
          <p class="book-kicker">${esc(stage.name)} · ${esc(stage.grades)}</p>
          <h1>Съдържание</h1>
          <p class="book-lead">${esc(stage.description)}</p>
        </header>
        ${groupPicker(stage)}
        <ol class="book-toc">
          ${subs.map((sub, i) => {
            const st = subjectStats(stage, sub, g);
            const first = st.ready.slice(0, 3).map((t) => t.title).join(' · ');
            return `
              <li>
                <a href="#/stage/${stage.id}/${sub.id}">
                  <span class="toc-num">${ROMAN[i] || i + 1}</span>
                  <span class="toc-name">${esc(sub.name)}${first ? `<small>${esc(first)}</small>` : ''}</span>
                  <span class="toc-leader" aria-hidden="true"></span>
                  <span class="toc-count">${st.ready.length ? plural(st.ready.length, 'урок', 'урока') : '—'}</span>
                </a>
              </li>`;
          }).join('')}
        </ol>`;
      return;
    }

    app.innerHTML = `
      ${crumb}
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
        ${subs.map((sub) => {
          const n = subjectStats(stage, sub, g).ready.length;
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
    const crumb = crumbs([{ label: 'Начало', href: '#/' }, { label: stage.name, href: `#/stage/${stage.id}` }, { label: subject.name }]);
    const picker = subject.topics.some((t) => t.group) ? groupPicker(stage) : '';
    const body = subject.topics.length ? topicSections(stage, subject) : `
        <div class="empty">
          <span aria-hidden="true">🌱</span>
          <p>Уроците по този предмет се подготвят. Скоро ще са тук!</p>
        </div>`;
    const g = selectedGroup(stage);
    const st = subjectStats(stage, subject, g);

    if (stage.theme === 'high') {
      app.innerHTML = `
        ${crumb}
        <header class="book-head" style="--c:${subject.color}">
          <p class="book-kicker">${esc(stage.name)}${subject.grades ? ' · ' + esc(subject.grades) : ''}</p>
          <h1>${esc(subject.name)}</h1>
          <p class="book-lead">${plural(st.ready.length, 'урок', 'урока')}${st.planned ? ` от около ${st.planned} часа по учебен план` : ''}${st.done.length ? ` · ${st.done.length} прочетени` : ''}</p>
        </header>
        ${picker}${body}`;
      return;
    }
    if (stage.theme === 'middle') {
      const pct = st.ready.length ? Math.round((st.done.length / st.ready.length) * 100) : 0;
      app.innerHTML = `
        ${crumb}
        <header class="app-subject-head" style="--c:${subject.color}">
          <span class="app-card-pic" aria-hidden="true">${subject.emoji}</span>
          <div class="app-subject-text">
            <h1>${esc(subject.name)}</h1>
            <p class="page-sub">${st.done.length} от ${plural(st.ready.length, 'урок', 'урока')} · ${st.stars} ⭐${st.planned ? ` · по учебен план около ${st.planned} часа` : ''}</p>
            <span class="app-progress"><span style="width:${pct}%"></span></span>
          </div>
        </header>
        ${picker}${body}`;
      return;
    }
    if (stage.theme === 'kg') {
      app.innerHTML = `
        ${crumb}
        <div class="mascot-say kg-hello" style="--c:${subject.color}">
          <span class="mascot" aria-hidden="true">${subject.emoji}</span>
          <p class="bubble">${esc(subject.name)}! Избери картинка.</p>
        </div>
        ${picker}${body}`;
      return;
    }
    if (stage.theme === 'primary') {
      app.innerHTML = `
        ${crumb}
        <header class="nb-cover" style="--c:${subject.color}">
          <span class="nb-cover-label">
            <span class="nb-emoji" aria-hidden="true">${subject.emoji}</span>
            <span class="nb-cover-title">${esc(subject.name)}</span>
            <span class="nb-line">Тетрадка на ${esc(CONFIG.learnerName || '')}${st.planned ? ` · ${st.ready.length} от ≈${st.planned} урока` : ''}</span>
          </span>
        </header>
        ${picker}${body}`;
      return;
    }
    app.innerHTML = `
      ${crumb}
      <header class="page-head" style="--c:${subject.color}">
        <span class="page-emoji tinted" aria-hidden="true">${subject.emoji}</span>
        <div>
          <h1>${esc(subject.name)}</h1>
          <p class="page-sub">${esc(stage.name)}${subject.grades ? ' · ' + esc(subject.grades) : ''}</p>
        </div>
      </header>
      ${picker}${body}`;
  }

  // Темите — по класове/групи; всеки етап ги показва по свой начин.
  function topicSections(stage, subject) {
    const L = stage.theme;
    const list = (topics) => {
      if (L === 'kg') return `<div class="kg-cards" style="--c:${subject.color}">${topics.map(kgCard).join('')}</div>`;
      if (L === 'primary') return `<ol class="nb-page" style="--c:${subject.color}">${topics.map((t, i) => nbRow(t, i)).join('')}</ol>`;
      {
        // Обединяваме по раздели (ядра), както в учебниците.
        const units = [];
        topics.forEach((t) => {
          const key = t.core || '';
          let u = units.find((x) => x.key === key);
          if (!u) { u = { key, items: [] }; units.push(u); }
          u.items.push(t);
        });
        let n = 0;
        return units.map((u, ui) => L !== 'middle' ? `
          <section class="book-chapter">
            <h3><span>Глава ${ROMAN[ui] || ui + 1}</span>${esc(u.key)}</h3>
            <ol class="book-lessons">${u.items.map((t) => bookRow(t, ++n)).join('')}</ol>
          </section>` : `
          <section class="app-unit" style="--c:${subject.color}">
            <h3>${esc(u.key)} <small>${plural(u.items.length, 'урок', 'урока')}</small></h3>
            <ul class="app-rows">${u.items.map((t) => appRow(t, ++n)).join('')}</ul>
          </section>`).join('');
      }
    };
    if (!stage.groups || !subject.topics.some((t) => t.group)) return list(subject.topics);

    const selected = selectedGroup(stage);
    const html = Object.keys(stage.groups).filter((g) => selected === 'all' || g === selected).map((g) => {
      const topics = subject.topics.filter((t) => String(t.group) === g);
      if (!topics.length) return '';
      // Заглавие на класа само при „Всички“ — иначе го показва превключвателят.
      return `
        <section class="topic-group">
          ${selected === 'all' ? `<h2 class="group-title"><span class="group-badge">${g}</span>${esc(stage.groups[g])}</h2>` : ''}
          ${list(topics)}
        </section>`;
    }).join('');
    return html || `
      <div class="empty">
        <span aria-hidden="true">📅</span>
        <p>Този предмет не се учи в ${esc(stage.groups[selected] || '')}. Избери друг клас.</p>
      </div>`;
  }

  const lessonOf = (t) => t.lessonId && LESSONS[t.lessonId];

  function kgCard(t) {
    const l = lessonOf(t);
    const done = l && progress.get(t.lessonId);
    const inner = `
      <span class="kg-card-pic" aria-hidden="true">${l ? pics(l.emoji) : (t.emoji || '🌱')}</span>
      <span class="kg-card-title">${esc(t.title)}</span>
      <span class="kg-card-stars">${done ? '⭐'.repeat(Math.max(1, Math.min(5, done.stars))) : l ? '▶ Играй' : 'Скоро'}</span>`;
    return l ? `<a class="kg-card" href="#/lesson/${t.lessonId}">${inner}</a>` : `<span class="kg-card is-soon">${inner}</span>`;
  }

  function nbRow(t, i) {
    const l = lessonOf(t);
    const done = l && progress.get(t.lessonId);
    const inner = `
      <span class="nb-num">Урок ${i + 1}</span>
      <span class="nb-title">${l ? `<span class="nb-pic" aria-hidden="true">${pics(l.emoji)}</span>` : ''}${esc(t.title)}</span>
      <span class="nb-mark">${done ? `${'⭐'.repeat(Math.min(3, done.stars))}` : l ? '✏️' : 'скоро'}</span>`;
    return `<li class="${l ? '' : 'is-soon'}">${l ? `<a href="#/lesson/${t.lessonId}">${inner}</a>` : `<span class="nb-row">${inner}</span>`}</li>`;
  }

  function appRow(t, n) {
    const l = lessonOf(t);
    const done = l && progress.get(t.lessonId);
    const chip = done ? `<span class="chip chip-done">✔ ${done.stars}/${done.total}</span>` : l ? '<span class="chip chip-new">Нов</span>' : '<span class="chip">Скоро</span>';
    const inner = `<span class="app-row-num">${n}</span><span class="app-row-title">${esc(t.title)}</span>${chip}`;
    return `<li class="${l ? '' : 'is-soon'}">${l ? `<a href="#/lesson/${t.lessonId}">${inner}</a>` : `<span class="app-row">${inner}</span>`}</li>`;
  }

  function bookRow(t, n) {
    const l = lessonOf(t);
    const done = l && progress.get(t.lessonId);
    const inner = `<span class="bk-num">§ ${n}</span><span class="bk-title">${esc(t.title)}</span><span class="toc-leader" aria-hidden="true"></span><span class="bk-mark">${done ? '✓' : l ? '→' : '—'}</span>`;
    return `<li class="${l ? '' : 'is-soon'}">${l ? `<a href="#/lesson/${t.lessonId}">${inner}</a>` : `<span class="bk-row">${inner}</span>`}</li>`;
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

      case 'code':
        // Програмен код (Информатика). `lang` е само надпис.
        return `<figure class="code-block">${b.lang ? `<figcaption>${esc(b.lang)}</figcaption>` : ''}<pre><code>${esc(b.code)}</code></pre></figure>`;

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
    const L = stage.theme;
    const crumb = crumbs([
      { label: 'Начало', href: '#/' },
      { label: stage.name, href: `#/stage/${stage.id}` },
      { label: subject.name, href: `#/stage/${stage.id}/${subject.id}` },
      { label: lesson.title }
    ]);
    const meta = `${lesson.group && stage.groups ? `${esc(stage.groups[lesson.group])}` : ''}${lesson.group && stage.groups && lesson.minutes ? ' · ' : ''}${lesson.minutes ? `⏱️ около ${lesson.minutes} минути` : ''}`;
    const tip = lesson.parentTip ? `
        <details class="parent-tip" ${L === 'high' ? 'open' : ''}>
          <summary>👪 ${esc(CONFIG.parentTipLabel || 'Съвет за родителя')}</summary>
          <p>${esc(lesson.parentTip)}</p>
        </details>` : '';
    const stepMark = (i) => (L === 'high' ? `§ ${i + 1}` : String(i + 1));
    const sections = lesson.sections.map((s, i) => `
        <section class="lesson-section" id="sec-${i + 1}">
          <h2><span class="step">${stepMark(i)}</span>${esc(s.title)}</h2>
          ${s.blocks.map(renderBlock).join('')}
        </section>`).join('');
    const taskTitle = { kg: 'Да поиграем!', primary: 'Задачи в тетрадката', middle: 'Провери се', high: 'Проверка на знанията' }[L] || 'Да опитаме!';
    const tasks = lesson.tasks && lesson.tasks.length ? `
        <section class="lesson-section tasks" id="sec-tasks">
          <h2><span class="step">✏️</span>${taskTitle}</h2>
          <div id="task-runner"></div>
        </section>` : '';
    // В учебника първата буква е буквица — освен ако текстът започва с кавички.
    const introText = L === 'high' && /^[A-Za-zА-Яа-яЁё]/.test(lesson.intro)
      ? `<span class="dropcap">${esc(lesson.intro[0])}</span>${esc(lesson.intro.slice(1))}`
      : esc(lesson.intro);
    const intro = `<p class="say intro">${speakBtn(lesson.intro)}<span>${introText}</span></p>`;

    if (L === 'kg') {
      app.innerHTML = `
        ${crumb}
        <header class="lesson-head kg-lesson-head" style="--c:${subject.color}">
          <span class="lesson-emoji" aria-hidden="true">${pics(lesson.emoji)}</span>
          <h1>${esc(lesson.title)}</h1>
        </header>
        <div class="mascot-say"><span class="mascot" aria-hidden="true">🦉</span>${intro}</div>
        ${tip}${sections}${tasks}`;
    } else if (L === 'primary') {
      app.innerHTML = `
        ${crumb}
        <article class="nb-sheet" style="--c:${subject.color}">
          <header class="lesson-head nb-lesson-head">
            <p class="nb-date">${esc(subject.name)} · ${meta}</p>
            <h1><span class="lesson-emoji" aria-hidden="true">${pics(lesson.emoji)}</span>${esc(lesson.title)}</h1>
          </header>
          ${intro}${tip}${sections}${tasks}
        </article>`;
    } else if (L === 'middle') {
      const toc = lesson.sections.map((s, i) => `<a href="#sec-${i + 1}" data-jump="sec-${i + 1}"><span>${i + 1}</span>${esc(s.title)}</a>`).join('')
        + (tasks ? `<a href="#sec-tasks" data-jump="sec-tasks"><span>✓</span>${taskTitle}</a>` : '');
      app.innerHTML = `
        ${crumb}
        <header class="app-lesson-head" style="--c:${subject.color}">
          <span class="app-card-pic" aria-hidden="true">${pics(lesson.emoji)}</span>
          <div><p class="app-kicker">${esc(subject.name)}</p><h1>${esc(lesson.title)}</h1><p class="page-sub">${meta}</p></div>
        </header>
        <div class="lesson-layout">
          <nav class="lesson-toc" aria-label="Съдържание на урока"><p>В този урок</p>${toc}</nav>
          <div class="lesson-body">${intro}${tip}${sections}${tasks}</div>
        </div>`;
    } else if (L === 'high') {
      app.innerHTML = `
        ${crumb}
        <article class="book-article" style="--c:${subject.color}">
          <header class="book-head">
            <p class="book-kicker">${esc(subject.name)} · ${meta}</p>
            <h1>${esc(lesson.title)}</h1>
          </header>
          <div class="book-cols">
            <div class="book-main">${intro}${sections}${tasks}</div>
            <aside class="book-margin">${tip}</aside>
          </div>
        </article>`;
    } else {
      app.innerHTML = `
        ${crumb}
        <header class="lesson-head" style="--c:${subject.color}">
          <span class="lesson-emoji" aria-hidden="true">${pics(lesson.emoji)}</span>
          <h1>${esc(lesson.title)}</h1>
          <p class="page-sub">${meta}</p>
        </header>
        ${intro}${tip}${sections}${tasks}`;
    }

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

  document.addEventListener('click', (e) => {
    const gb = e.target.closest('[data-group-btn]');
    if (gb) {
      setSelectedGroup(findStage(gb.dataset.groupBtn), gb.dataset.g);
      route();
      const again = app.querySelector(`[data-group-btn][data-g="${gb.dataset.g}"]`);
      if (again) again.focus();
      return;
    }
    const jump = e.target.closest('[data-jump]');
    if (jump) {
      e.preventDefault();
      const el = document.getElementById(jump.dataset.jump);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
