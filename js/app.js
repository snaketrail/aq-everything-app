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

  // ---------- Четене на глас ----------

  const canSpeak = 'speechSynthesis' in window;
  let bgVoice = null;
  if (canSpeak) {
    const pickVoice = () => {
      bgVoice = speechSynthesis.getVoices().find((v) => v.lang && v.lang.toLowerCase().startsWith('bg')) || null;
    };
    pickVoice();
    speechSynthesis.addEventListener('voiceschanged', pickVoice);
  }

  function speak(text) {
    if (!canSpeak) return;
    const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, ''));
    u.lang = 'bg-BG';
    u.rate = 0.9;
    if (bgVoice) u.voice = bgVoice;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
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

  function picture(p, extraClass = '') {
    if (!p) return '';
    if (p.sequence) {
      return `<div class="pic pic-seq ${extraClass}">${p.sequence.map((x) =>
        `<span class="seq-item${x === '?' ? ' is-mystery' : ''}">${esc(x)}</span>`).join('')}</div>`;
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
        <p class="lead">Уроци, примери и задачи по всеки предмет от българското училище — от детската градина до 12. клас.</p>
        ${age ? `<p class="age-pill">🍼 ${name} е на <strong>${esc(age.label)}</strong> — пътешествието започва!</p>` : ''}
      </section>

      <section class="stage-grid" aria-label="Етапи">
        ${STAGES.map((s) => `
          <a class="stage-card" data-stage="${s.id}" href="#/stage/${s.id}">
            ${s.id === nowId ? '<span class="now-badge">Сега сме тук</span>' : ''}
            <span class="stage-emoji" aria-hidden="true">${s.emoji}</span>
            <span class="stage-name">${esc(s.name)}</span>
            <span class="stage-meta">${esc(s.grades)} · ${esc(s.ages)}</span>
            <span class="stage-desc">${esc(s.description)}</span>
          </a>`).join('')}
      </section>`;
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

      <section class="subject-grid" aria-label="Предмети">
        ${stage.subjects.map((sub) => {
          const n = lessonCount(sub);
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

      ${topics.length ? `
        <ol class="topic-list" style="--c:${subject.color}">
          ${topics.map((t, i) => {
            const lesson = t.lessonId && LESSONS[t.lessonId];
            if (!lesson) {
              return `<li class="topic is-soon"><span class="topic-num">${i + 1}</span><span class="topic-title">${esc(t.title)}</span><span class="topic-tag">Скоро</span></li>`;
            }
            const done = progress.get(t.lessonId);
            return `
              <li class="topic">
                <a href="#/lesson/${t.lessonId}">
                  <span class="topic-num">${lesson.emoji || i + 1}</span>
                  <span class="topic-title">${esc(t.title)}</span>
                  <span class="topic-tag ${done ? 'is-done' : ''}">${done ? `⭐ ${done.stars}/${done.total}` : 'Започни →'}</span>
                </a>
              </li>`;
          }).join('')}
        </ol>` : `
        <div class="empty">
          <span aria-hidden="true">🌱</span>
          <p>Уроците по този предмет се подготвят. Скоро ще са тук!</p>
        </div>`}`;
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

      case 'text':
        return `<p>${esc(b.text)}</p>`;

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
        <span class="lesson-emoji" aria-hidden="true">${lesson.emoji}</span>
        <h1>${esc(lesson.title)}</h1>
        ${lesson.minutes ? `<p class="page-sub">⏱️ около ${lesson.minutes} минути</p>` : ''}
      </header>

      <p class="say intro">${speakBtn(lesson.intro)}<span>${esc(lesson.intro)}</span></p>

      ${lesson.parentTip ? `
        <details class="parent-tip">
          <summary>👪 Съвет за родителя</summary>
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

  // ---------- Задачи ----------

  function startTasks(id, lesson, stage, subject) {
    const root = document.getElementById('task-runner');
    const tasks = lesson.tasks;
    let index = 0;
    let stars = 0;

    const normalize = (o) => (typeof o === 'object' ? { label: String(o.value), ...o } : { value: o, label: String(o) });

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
          ${picture(t.picture, 'pic-task')}
          <div class="options ${options.some((o) => o.picture) ? 'has-pictures' : ''}">
            ${options.map((o, i) => `
              <button class="option" type="button" data-i="${i}">
                ${o.picture ? picture(o.picture, 'pic-small') : `<span class="option-label">${esc(o.label)}</span>`}
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
    const el = e.target.closest('[data-say]');
    if (!el) return;
    speak(el.dataset.say);
    if (el.classList.contains('number-card')) {
      el.classList.remove('is-pop');
      void el.offsetWidth;
      el.classList.add('is-pop');
    }
  });

  window.addEventListener('hashchange', route);
  route();
})();
