// 5. клас, Чужд език (английски): граматика и лексика по програмата за ниво A1–A2.
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'irregular', title: 'Irregular verbs — неправилни глаголи', emoji: '📚', core: 'Граматика',
      intro: 'Много често срещани глаголи нямат -ed в минало време: go → went, see → saw, eat → ate. Тях трябва да ги научим наизуст.',
      tip: 'Учете по 5 неправилни глагола седмично с карти: отпред go, отзад went. Казвайте ги като песничка.',
      w: [['🚶', 'go — went', 'отивам — отидох'], ['👀', 'see — saw', 'виждам — видях'], ['🍽️', 'eat — ate', 'ям — ядох'], ['🛒', 'buy — bought', 'купувам — купих'], ['✍️', 'write — wrote', 'пиша — писах'], ['🏊', 'swim — swam', 'плувам — плувах']],
      rule: 'Неправилните глаголи имат своя форма за минало време. Въпрос и отрицание в Past Simple: Did you go? I didn’t go.',
      extra: [['Минало време на „buy“?', ['bought', 'buyed'], 'bought'], ['„___ you see the film?“', ['Did', 'Do'], 'Did']] },
    { id: 'will', title: 'Future with will — бъдеще', emoji: '🔮', core: 'Граматика',
      intro: 'I think it will rain tomorrow. С will говорим за бъдещето, за предположения и за бързи решения.',
      tip: 'Правете „предсказания“ на английски: „Tomorrow will be sunny. I will win!“',
      w: [['🌧️', 'It will rain.', 'Ще вали.'], ['📞', 'I’ll call you.', 'Ще ти се обадя.'], ['🚫', 'I won’t be late.', 'Няма да закъснея.'], ['❓', 'Will you help me?', 'Ще ми помогнеш ли?']],
      rule: 'will + глагол: I will go. Отрицание: won’t (= will not). Съкратено: I’ll, you’ll, she’ll.',
      extra: [['„won’t“ означава…', ['will not', 'want not'], 'will not']] },
    { id: 'frequency', title: 'Always, often, never — колко често', emoji: '🔁', core: 'Граматика',
      intro: 'I always brush my teeth. I never eat fish. Наречията за честота казват колко често правим нещо.',
      tip: 'Направете „таблица на навиците“ на Ая на английски: always, usually, sometimes, never.',
      w: [['💯', 'always', 'винаги'], ['🔂', 'usually', 'обикновено'], ['🔁', 'often', 'често'], ['🎲', 'sometimes', 'понякога'], ['🚫', 'never', 'никога']],
      p: [['🪥', 'I always brush my teeth.', 'Винаги си мия зъбите.'], ['🐟', 'She never eats fish.', 'Тя никога не яде риба.']],
      rule: 'Наречията за честота стоят пред глагола: I often read. Но след „to be“: I am always happy.' },
    { id: 'prepositions-time', title: 'In, on, at — предлози за време', emoji: '🕐', core: 'Граматика',
      intro: 'at 7 o’clock, on Monday, in May. Различните предлози за време объркват всички — но има правило.',
      tip: 'Пишете рождените дни на семейството на английски: „on 22nd October“, „in October“.',
      w: [['🕖', 'at 7 o’clock', 'в 7 часа'], ['📅', 'on Monday', 'в понеделник'], ['🎂', 'on 22nd October', 'на 22 октомври'], ['🍂', 'in October', 'през октомври'], ['☀️', 'in summer', 'през лятото'], ['📆', 'in 2026', 'през 2026 г.']],
      rule: 'at — за час (at 5 o’clock). on — за ден и дата (on Friday, on 3rd March). in — за месец, сезон, година (in June, in winter, in 2030).',
      extra: [['„___ Monday“', ['on', 'in', 'at'], 'on'], ['„___ summer“', ['in', 'on', 'at'], 'in']] },
    { id: 'must', title: 'Must, have to, should — трябва', emoji: '⚠️', core: 'Граматика',
      intro: 'You must wear a helmet. You should drink water. Тези думи изразяват задължение и съвет.',
      tip: 'Пишете заедно „правилата на дома“ на английски: „We must tidy our rooms. We should go to bed early.“',
      w: [['⛑️', 'You must wear a helmet.', 'Трябва да носиш каска.'], ['🚭', 'You mustn’t smoke.', 'Не бива да пушиш.'], ['💧', 'You should drink water.', 'Трябва (е добре) да пиеш вода.'], ['🏫', 'I have to go to school.', 'Трябва да ходя на училище.']],
      rule: 'must — силно задължение или правило. mustn’t — забрана. should — съвет. have to — задължение отвън (правило, график).',
      extra: [['Кое изразява съвет?', ['should', 'mustn’t'], 'should']] },
    { id: 'possessive', title: 'My, your, Aya’s — притежание', emoji: '🏷️', core: 'Граматика',
      intro: 'This is Aya’s bag. It’s her bag. It’s hers. Днес учим как да кажем чие е нещо.',
      tip: 'Посочвайте вещи вкъщи: „Whose is this? It’s dad’s phone.“',
      w: [['👜', 'Aya’s bag', 'чантата на Ая'], ['👧', 'her book', 'нейната книга'], ['👦', 'his ball', 'неговата топка'], ['👨‍👩‍👧', 'our house', 'нашата къща'], ['👥', 'their dog', 'тяхното куче']],
      p: [['❓', 'Whose is this?', 'Чие е това?'], ['👜', 'It’s Aya’s.', 'На Ая е.']],
      rule: 'Притежание с ’s: Aya’s, mum’s. Притежателни думи: my, your, his, her, its, our, their.' },
    { id: 'questions', title: 'Who, where, when, why — въпросителни думи', emoji: '❓', core: 'Граматика',
      intro: 'Who? What? Where? When? Why? How? С тези думи задаваме въпроси.',
      tip: 'Играйте „интервю“ на английски: Ая задава 5 въпроса с различни въпросителни думи.',
      w: [['👤', 'Who?', 'Кой?'], ['❔', 'What?', 'Какво?'], ['📍', 'Where?', 'Къде?'], ['🕐', 'When?', 'Кога?'], ['🤔', 'Why?', 'Защо?'], ['🛠️', 'How?', 'Как?']],
      rule: 'Въпросителната дума е в началото: Where do you live? Why are you sad? На „Why?“ отговаряме с „Because…“.',
      extra: [['На кой въпрос отговаряме с „Because…“?', ['Why?', 'Where?'], 'Why?']] },
    { id: 'there-was', title: 'There was / there were — имаше', emoji: '🏰', core: 'Граматика',
      intro: 'Once upon a time there was a king. В миналото казваме „there was“ (за едно) и „there were“ (за много).',
      tip: 'Разказвайте приказки на английски, започвайки с „Once upon a time there was…“.',
      w: [['👑', 'There was a king.', 'Имаше един цар.'], ['🏰', 'There were two castles.', 'Имаше два замъка.'], ['🚫', 'There wasn’t any water.', 'Нямаше вода.'], ['❓', 'Were there any dragons?', 'Имаше ли дракони?']],
      rule: 'there is → there was; there are → there were.',
      extra: [['„There ___ many people.“', ['were', 'was'], 'were']] },
    { id: 'travel', title: 'Travel — пътуване', emoji: '✈️', core: 'Лексика',
      intro: 'At the airport, at the hotel. Днес учим думи, които ни трябват на път.',
      tip: 'Преди пътуване в чужбина упражнете с Ая фразите за хотел, ресторант и летище.',
      w: [['🛂', 'passport', 'паспорт'], ['🎫', 'ticket', 'билет'], ['🧳', 'suitcase', 'куфар'], ['🏨', 'hotel', 'хотел'], ['🗺️', 'map', 'карта'], ['✈️', 'airport', 'летище']],
      p: [['🙋', 'I’d like a room for two nights.', 'Бих искала стая за две нощувки.'], ['❓', 'Where is the gate?', 'Къде е изходът (към самолета)?']],
      rule: '„I’d like…“ (= I would like) е учтиво „искам“.' },
    { id: 'body-health', title: 'Health advice — здраве и съвети', emoji: '🩺', core: 'Лексика',
      intro: 'I’ve got a sore throat. You should rest. Днес казваме как се чувстваме и даваме съвети.',
      tip: 'Играйте на доктор на английски: Ая е лекарят и дава съвети с „You should…“.',
      w: [['🤒', 'a fever', 'температура'], ['😮‍💨', 'a cough', 'кашлица'], ['🗣️', 'a sore throat', 'възпалено гърло'], ['🤕', 'a headache', 'главоболие'], ['🛌', 'rest', 'почивка']],
      p: [['🩺', 'What’s wrong?', 'Какво ти е?'], ['🛌', 'You should stay in bed.', 'Трябва да лежиш.']],
      rule: 'Съвет: You should… / You shouldn’t… Оплакване: I’ve got a…' },
    { id: 'environment', title: 'The environment — околната среда', emoji: '♻️', core: 'Лексика',
      intro: 'We should recycle. We must save water. Днес говорим как да пазим планетата.',
      tip: 'Направете на английски плакат с 5 правила за опазване на природата.',
      w: [['♻️', 'recycle', 'рециклирам'], ['💧', 'save water', 'пестя вода'], ['🌳', 'plant trees', 'садя дървета'], ['🗑️', 'rubbish', 'боклук'], ['🏭', 'pollution', 'замърсяване']],
      p: [['♻️', 'We should recycle plastic.', 'Трябва да рециклираме пластмасата.']],
      rule: 'Reduce, reuse, recycle — намали, използвай пак, рециклирай.' },
    { id: 'review', title: 'Review — преговор', emoji: '🏆', core: 'Преговор',
      intro: 'Годишен преговор по английски в 5. клас.',
      tip: 'Гледайте сериал или филм с английски субтитри. Четете кратки адаптирани книги (graded readers, ниво A2).',
      w: [['🚶', 'go — went', 'отивам — отидох'], ['🔮', 'will', 'ще'], ['🔁', 'often', 'често'], ['📅', 'on Monday', 'в понеделник'], ['⚠️', 'must', 'трябва'], ['❓', 'Why?', 'Защо?']],
      rule: 'Keep practising! — Продължавай да упражняваш!' }
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

    window.LESSONS[`m5-en-${t.id}`] = {
      stage: 'middle', subject: 'lang', group: 5, core: t.core, minutes: 10,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();
