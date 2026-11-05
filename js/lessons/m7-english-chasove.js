// 7. клас, Чужд език (английски): граматика и лексика, ниво A2–B1.
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'second-conditional', title: 'If I were… — нереални условия', emoji: '💭', core: 'Граматика',
      intro: 'If I were a bird, I would fly. С второ условно изречение мечтаем или говорим за нещо нереално в настоящето.',
      tip: 'Играйте „Ако бях…“: „If I were a superhero, I would…“ — всеки довършва.',
      w: [['🐦', 'If I were a bird, I would fly.', 'Ако бях птица, щях да летя.'], ['💰', 'If I had money, I would travel.', 'Ако имах пари, щях да пътувам.'], ['🦸', 'If I could fly, I would visit you.', 'Ако можех да летя, щях да те посетя.'], ['🤔', 'What would you do?', 'Какво би направила?']],
      rule: 'If + минало време, would + глагол. С „to be“ казваме were за всички лица: If I were, if she were.',
      extra: [['„If I ___ rich, I would buy a horse.“', ['were', 'am', 'will be'], 'were'], ['„If she had time, she ___ help.“', ['would', 'will'], 'would']] },
    { id: 'reported-speech', title: 'He said that… — непряка реч', emoji: '🗨️', core: 'Граматика',
      intro: '„I am tired,“ she said. → She said (that) she was tired. В непряката реч времето „крачи назад“.',
      tip: 'Предавайте си съобщения на английски: „Dad said that dinner was ready.“',
      w: [['🗣️', 'She said she was tired.', 'Тя каза, че е уморена.'], ['📞', 'He told me he lived in Varna.', 'Той ми каза, че живее във Варна.'], ['❓', 'She asked if I was OK.', 'Тя попита дали съм добре.'], ['🙏', 'Mum told me to tidy my room.', 'Мама ми каза да подредя стаята.']],
      rule: 'Present → Past: „I am“ → she was; „I like“ → she liked. will → would. said (без лице) — told + лице (told me).',
      extra: [['„I am hungry,“ he said. → He said he ___ hungry.', ['was', 'is'], 'was'], ['She ___ me the answer.', ['told', 'said'], 'told']] },
    { id: 'past-perfect', title: 'Past Perfect — беше направил', emoji: '⏮️', core: 'Граматика',
      intro: 'When we arrived, the film had started. Past Perfect показва действие, което е станало ПРЕДИ друго действие в миналото.',
      tip: 'Начертайте лента на времето с две точки в миналото — коя е по-рано? Тя е в Past Perfect.',
      w: [['🎬', 'The film had started.', 'Филмът беше започнал.'], ['🚌', 'The bus had left.', 'Автобусът беше тръгнал.'], ['🍽️', 'We had eaten before we went out.', 'Бяхме яли, преди да излезем.'], ['🔑', 'I had lost my key.', 'Бях загубила ключа си.']],
      rule: 'had + 3 форма на глагола (had gone, had seen, had finished).',
      extra: [['When I got to the station, the train ___.', ['had left', 'has left', 'leaves'], 'had left']] },
    { id: 'present-perfect-continuous', title: 'I have been waiting — от доста време', emoji: '⌛', core: 'Граматика',
      intro: 'I have been waiting for an hour! Present Perfect Continuous показва действие, което е започнало в миналото и продължава досега.',
      tip: 'Питайте: „How long have you been learning English?“ — Ая отговаря с for/since.',
      w: [['⌛', 'I have been waiting for an hour.', 'Чакам от час.'], ['📚', 'She has been studying all day.', 'Тя учи цял ден.'], ['🌧️', 'It has been raining since morning.', 'Вали от сутринта.'], ['❓', 'How long have you been learning English?', 'Откога учиш английски?']],
      rule: 'have/has been + глагол с -ing. Често с for и since.',
      extra: [['„It ___ been raining since Monday.“', ['has', 'have'], 'has']] },
    { id: 'might-may', title: 'Might, may, could — може би', emoji: '🤷', core: 'Граматика',
      intro: 'It might rain later. She may be at home. С might, may и could говорим за възможности, когато не сме сигурни.',
      tip: 'Прогнозирайте времето на английски: „It might rain. It may be sunny.“',
      w: [['🌦️', 'It might rain.', 'Може да завали.'], ['🏠', 'She may be at home.', 'Може да е вкъщи.'], ['🚌', 'We could take the bus.', 'Можем да вземем автобуса.'], ['🤔', 'I might not come.', 'Може и да не дойда.']],
      rule: 'might / may / could + глагол (без to). Отрицание: might not, may not.',
      extra: [['„I’m not sure. It ___ snow.“', ['might', 'must'], 'might']] },
    { id: 'question-tags', title: 'Question tags — нали?', emoji: '❓', core: 'Граматика',
      intro: 'It’s cold, isn’t it? You like pizza, don’t you? Кратките въпроси накрая означават „нали?“.',
      tip: 'Цял ден завършвайте изреченията си с „…, isn’t it?“ и „…, don’t you?“',
      w: [['🥶', 'It’s cold, isn’t it?', 'Студено е, нали?'], ['🍕', 'You like pizza, don’t you?', 'Обичаш пица, нали?'], ['🙅', 'She isn’t here, is she?', 'Тя не е тук, нали?'], ['🚲', 'He can ride a bike, can’t he?', 'Той може да кара колело, нали?']],
      rule: 'Положително изречение → отрицателен въпрос (is → isn’t). Отрицателно → положителен (isn’t → is). Използваме същия спомагателен глагол.',
      extra: [['„You are Aya, ___?“', ['aren’t you', 'are you', 'don’t you'], 'aren’t you'], ['„She doesn’t eat meat, ___?“', ['does she', 'doesn’t she'], 'does she']] },
    { id: 'phrasal-verbs', title: 'Phrasal verbs — глаголи с частица', emoji: '🧩', core: 'Лексика',
      intro: 'get up, look for, give up, turn on… Глагол + малка дума = ново значение. Те са много чести в разговора.',
      tip: 'Казвайте сутрешната си рутина с phrasal verbs: „I wake up, get up, put on my clothes…“',
      w: [['⏰', 'get up', 'ставам'], ['🔎', 'look for', 'търся'], ['🏳️', 'give up', 'отказвам се'], ['💡', 'turn on', 'включвам'], ['🌙', 'turn off', 'изключвам'], ['👕', 'put on', 'обличам']],
      rule: 'Значението често не се познава от частите: give up = отказвам се, а не „давам нагоре“.',
      extra: [['„Don’t ___ up! You can do it!“', ['give', 'get'], 'give']] },
    { id: 'to-or-ing', title: 'Want to or enjoy -ing?', emoji: '🔀', core: 'Граматика',
      intro: 'I want to go. I enjoy going. След някои глаголи идва „to + глагол“, а след други — „глагол + -ing“.',
      tip: 'Направете две колони на хладилника: „+ to“ и „+ -ing“, и добавяйте нови глаголи.',
      w: [['🎯', 'I want to win.', 'Искам да спечеля.'], ['🗓️', 'I decided to stay.', 'Реших да остана.'], ['😊', 'I enjoy reading.', 'Харесва ми да чета.'], ['🏁', 'I finished writing.', 'Свърших да пиша.'], ['🚭', 'Stop talking!', 'Спри да говориш!']],
      rule: '+ to: want, decide, hope, plan, need, would like. + -ing: enjoy, finish, stop, mind, can’t stand.',
      extra: [['„I hope ___ you soon.“', ['to see', 'seeing'], 'to see'], ['„She finished ___ her homework.“', ['doing', 'to do'], 'doing']] },
    { id: 'so-neither', title: 'So do I / Neither do I — и аз', emoji: '🤝', core: 'Граматика',
      intro: '„I love music.“ — „So do I!“ „I don’t like snakes.“ — „Neither do I!“ Така казваме „и аз“ и „и аз не“.',
      tip: 'Казвайте си факти и отговаряйте бързо: „So do I!“ / „Neither do I!“ / „I don’t!“',
      w: [['🎵', 'So do I.', 'И аз (също).'], ['🐍', 'Neither do I.', 'И аз не.'], ['😴', 'So am I.', 'И аз (съм).'], ['🙅', 'Neither can I.', 'И аз не мога.']],
      rule: 'So + спомагателен глагол + аз — за положително. Neither + спомагателен + аз — за отрицателно. Глаголът е същият като в репликата (do, am, can, did).',
      extra: [['„I’m tired.“ — „___ am I.“', ['So', 'Neither'], 'So'], ['„I can’t swim.“ — „Neither ___ I.“', ['can', 'do'], 'can']] },
    { id: 'describing-people', title: 'Describing people — външност и характер', emoji: '🧑', core: 'Лексика',
      intro: 'She’s tall with curly hair. He’s kind and funny. Днес описваме хора — как изглеждат и какви са.',
      tip: 'Опишете на английски член от семейството, без да казвате името — другите да познаят кой е.',
      w: [['📏', 'tall — short', 'висок — нисък'], ['🌀', 'curly hair', 'къдрава коса'], ['😊', 'kind', 'мил, добър'], ['😂', 'funny', 'забавен'], ['🙈', 'shy', 'срамежлив'], ['💪', 'brave', 'смел']],
      p: [['❓', 'What does she look like?', 'Как изглежда тя?'], ['❓', 'What is he like?', 'Какъв (човек) е той?']],
      rule: 'What does she look like? — за външност. What is she like? — за характер.' },
    { id: 'technology', title: 'Technology — технологии', emoji: '💻', core: 'Лексика',
      intro: 'download, upload, password, screen… Днес учим думи, които използваме всеки ден с телефона и компютъра.',
      tip: 'Превключете езика на един от уредите у дома на английски за седмица.',
      w: [['⬇️', 'download', 'изтеглям'], ['⬆️', 'upload', 'качвам'], ['🔑', 'password', 'парола'], ['📱', 'screen', 'екран'], ['🔋', 'charge', 'зареждам'], ['📶', 'connection', 'връзка']],
      p: [['🔋', 'My phone needs charging.', 'Телефонът ми трябва да се зареди.'], ['📶', 'The connection is slow.', 'Връзката е бавна.']],
      rule: 'Много технологични думи са еднакви в българския: компютър, интернет, имейл, лаптоп.' },
    { id: 'review', title: 'Review — преговор', emoji: '⭐', core: 'Лексика',
      intro: 'Годишен преговор по английски в 7. клас.',
      tip: 'През лятото четете една адаптирана книга на английски (ниво A2–B1) и гледайте анимации без превод.',
      w: [['🐦', 'If I were a bird…', 'Ако бях птица…'], ['🗣️', 'She said she was tired.', 'Тя каза, че е уморена.'], ['🎬', 'The film had started.', 'Филмът беше започнал.'], ['🌦️', 'It might rain.', 'Може да завали.'], ['🥶', 'It’s cold, isn’t it?', 'Студено е, нали?'], ['🎵', 'So do I.', 'И аз (също).']],
      rule: 'Well done! — Браво!' }
  ];

  TOPICS.forEach((t, ti) => {
    const ws = t.w;
    const tasks = [];
    [0, 2, 4].filter((i) => i < ws.length).forEach((i, k) => {
      const [pic, en] = ws[i];
      const say = en.includes(' — ') ? en.split(' — ')[1] : en;
      const others = ws.filter((x) => x !== ws[i]);
      tasks.push({
        question: 'Чуй думата. Коя е картинката?',
        listen: { text: say },
        options: rotate([[pic, en], others[(k + 1) % others.length], others[(k + 3) % others.length]], k + ti).map(([p, e]) => ({ value: e, pic: p })),
        answer: en
      });
    });
    [1, 3].filter((i) => i < ws.length).forEach((i, k) => {
      const [, en, bg] = ws[i];
      const others = ws.filter((x) => x !== ws[i]).map((x) => x[1]);
      tasks.push({ question: `Как е на английски „${bg}“?`, options: rotate([en, others[k % others.length], others[(k + 2) % others.length]], k + ti + 1), answer: en });
    });
    if (t.p && t.p.length) {
      const [, en, bg] = t.p[0];
      tasks.push({ question: `Какво значи „${en}“?`, options: rotate([bg, ...(TOPICS[(ti + 1) % TOPICS.length].p || [[0, 0, 'Довиждане!']]).slice(0, 1).map((x) => x[2]), 'Благодаря!'], ti), answer: bg });
    }
    (t.extra || []).forEach(([q, o, a]) => tasks.push({ question: q, options: o, answer: a }));

    window.LESSONS[`m7-en-${t.id}`] = {
      stage: 'middle', subject: 'lang', group: 7, core: t.core, minutes: 10,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();
