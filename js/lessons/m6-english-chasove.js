// 6. клас, Чужд език (английски): граматика и лексика, ниво A2.
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'much-many', title: 'Much, many, a lot of — колко много', emoji: '🍎', core: 'Граматика',
      intro: 'Някои неща можем да броим (apples, books), а други — не (water, milk, money). Затова казваме many apples, но much water.',
      tip: 'В кухнята питайте: „How many eggs? How much milk?“ — и Ая отговаря.',
      w: [['🍎', 'many apples', 'много ябълки'], ['💧', 'much water', 'много вода'], ['📚', 'a lot of books', 'много книги'], ['🥛', 'How much milk?', 'Колко мляко?'], ['🥚', 'How many eggs?', 'Колко яйца?'], ['🧀', 'a little cheese', 'малко сирене']],
      rule: 'many / a few — с броими (many cars, a few friends). much / a little — с неброими (much time, a little sugar). a lot of — и с двете.',
      extra: [['„How ___ money have you got?“', ['much', 'many'], 'much'], ['„There are ___ people here.“', ['many', 'much'], 'many']] },
    { id: 'too-enough', title: 'Too and enough — твърде и достатъчно', emoji: '📏', core: 'Граматика',
      intro: 'The tea is too hot. I’m not old enough to drive. „Too“ значи повече, отколкото трябва; „enough“ — колкото трябва.',
      tip: 'Пробвайте дрехи и казвайте на английски: „It’s too big. It’s big enough.“',
      w: [['🔥', 'too hot', 'твърде горещ'], ['🥶', 'too cold', 'твърде студен'], ['✅', 'big enough', 'достатъчно голям'], ['👟', 'too small', 'твърде малък'], ['⏰', 'enough time', 'достатъчно време']],
      p: [['☕', 'The tea is too hot to drink.', 'Чаят е твърде горещ, за да се пие.'], ['🚗', 'I’m not old enough to drive.', 'Не съм достатъчно голяма, за да карам.']],
      rule: 'too + прилагателно (too hot). прилагателно + enough (old enough). enough + съществително (enough money).',
      extra: [['„She is tall ___.“', ['enough', 'too'], 'enough']] },
    { id: 'adverbs', title: 'Quickly, slowly, well — как?', emoji: '🏃', core: 'Граматика',
      intro: 'She runs quickly. He speaks English well. Наречията за начин казват КАК правим нещо. Често се образуват с -ly.',
      tip: 'Играйте „направи го…“: Ая върви slowly, quickly, quietly, loudly.',
      w: [['🐇', 'quickly', 'бързо'], ['🐢', 'slowly', 'бавно'], ['🤫', 'quietly', 'тихо'], ['📢', 'loudly', 'силно, шумно'], ['👍', 'well', 'добре'], ['🎯', 'carefully', 'внимателно']],
      rule: 'Прилагателно + -ly: quick → quickly, careful → carefully. Изключения: good → well, fast → fast, hard → hard.',
      extra: [['Наречие от „good“ е…', ['well', 'goodly'], 'well'], ['„She drives ___.“', ['carefully', 'careful'], 'carefully']] },
    { id: 'first-conditional', title: 'If it rains… — условни изречения', emoji: '🌦️', core: 'Граматика',
      intro: 'If it rains, we will stay at home. С „if“ говорим за реално възможно бъдеще и последствията му.',
      tip: 'Правете верига от условия: „If I eat chocolate, I will be happy. If I am happy, I will sing…“',
      w: [['🌧️', 'If it rains, we’ll stay home.', 'Ако вали, ще си останем вкъщи.'], ['📖', 'If you study, you’ll pass.', 'Ако учиш, ще издържиш.'], ['☀️', 'If it’s sunny, we’ll go out.', 'Ако е слънчево, ще излезем.'], ['😴', 'If I’m tired, I’ll sleep.', 'Ако съм уморена, ще спя.']],
      rule: 'If + сегашно време, will + глагол. След „if“ НЕ слагаме will: If it rains (не: If it will rain).',
      extra: [['„If it ___ tomorrow, we’ll stay home.“', ['rains', 'will rain'], 'rains'], ['„If you study, you ___ pass.“', ['will', 'did'], 'will']] },
    { id: 'relative', title: 'Who, which, where — който, която', emoji: '🔗', core: 'Граматика',
      intro: 'A doctor is a person who helps sick people. С who, which и where свързваме две изречения в едно.',
      tip: 'Играйте „Какво е това?“ с определения: „It’s an animal which gives us milk.“ (a cow)',
      w: [['🧑‍⚕️', 'a person who helps sick people', 'човек, който помага на болните'], ['🐄', 'an animal which gives milk', 'животно, което дава мляко'], ['🏫', 'a place where we learn', 'място, където учим'], ['🔑', 'a thing which opens doors', 'нещо, което отваря врати']],
      rule: 'who — за хора. which (или that) — за предмети и животни. where — за места.',
      extra: [['„A teacher is a person ___ teaches.“', ['who', 'which', 'where'], 'who'], ['„A library is a place ___ we read.“', ['where', 'who'], 'where']] },
    { id: 'already-yet', title: 'Already, yet, just — вече, още', emoji: '✅', core: 'Граматика',
      intro: 'I have just eaten. Have you finished yet? She has already left. Тези думи вървят с Present Perfect.',
      tip: 'Списък със задачи на английски: „I have already made my bed. I haven’t done my homework yet.“',
      w: [['⚡', 'I have just eaten.', 'Току-що ядох.'], ['✅', 'I have already finished.', 'Вече свърших.'], ['❓', 'Have you finished yet?', 'Свърши ли вече?'], ['⏳', 'I haven’t finished yet.', 'Още не съм свършила.']],
      rule: 'just — току-що (пред глагола). already — вече (пред глагола). yet — във въпроси и отрицания, в края на изречението.',
      extra: [['„I haven’t done it ___.“', ['yet', 'already'], 'yet'], ['„just“ означава…', ['току-що', 'никога'], 'току-що']] },
    { id: 'for-since', title: 'For and since — от колко време', emoji: '⏳', core: 'Граматика',
      intro: 'I have lived here for five years. I have lived here since 2020. С for казваме колко време, а със since — от кога.',
      tip: 'Питайте: „How long have you known your best friend?“ — Ая отговаря с for и since.',
      w: [['5️⃣', 'for five years', 'от пет години'], ['📆', 'since 2020', 'от 2020 г.'], ['🕐', 'for two hours', 'от два часа'], ['🌅', 'since Monday', 'от понеделник'], ['🎂', 'since my birthday', 'от рождения ми ден']],
      rule: 'for + период (for a week, for 3 days). since + начален момент (since Monday, since 9 o’clock).',
      extra: [['„___ three weeks“', ['for', 'since'], 'for'], ['„___ January“', ['since', 'for'], 'since']] },
    { id: 'like-ing', title: 'I love dancing — харесвам да…', emoji: '💃', core: 'Граматика',
      intro: 'I love dancing. She hates getting up early. След like, love, hate, enjoy глаголът получава -ing.',
      tip: 'Направете на английски списък „I love… / I hate…“ — по три неща.',
      w: [['💃', 'I love dancing.', 'Обичам да танцувам.'], ['📖', 'I enjoy reading.', 'Харесва ми да чета.'], ['⏰', 'I hate getting up early.', 'Мразя да ставам рано.'], ['🏊', 'She likes swimming.', 'Тя обича да плува.'], ['🎨', 'He’s good at drawing.', 'Той рисува добре.']],
      rule: 'like / love / hate / enjoy / be good at + глагол с -ing. Правопис: swim → swimming, dance → dancing.',
      extra: [['„I enjoy ___.“', ['reading', 'read'], 'reading']] },
    { id: 'used-to', title: 'Used to — навремето', emoji: '🕰️', core: 'Граматика',
      intro: 'I used to have long hair. Когато разказваме за навици в миналото, които вече ги няма, използваме used to.',
      tip: 'Разгледайте стари снимки: „When I was little, I used to…“',
      w: [['👶', 'I used to cry a lot.', 'Плачех много (като малка).'], ['🧸', 'I used to play with teddies.', 'Играех с плюшени играчки.'], ['🚲', 'He used to ride a bike.', 'Той караше колело (навремето).'], ['❓', 'Did you use to…?', 'Навремето…ли?']],
      rule: 'used to + глагол = нещо, което е било навик, но вече не е. Въпрос: Did you use to…? Отрицание: I didn’t use to…',
      extra: [['„I ___ to live in Plovdiv.“', ['used', 'use'], 'used']] },
    { id: 'jobs', title: 'Jobs — професии', emoji: '👩‍🔬', core: 'Лексика',
      intro: 'What do you want to be? Днес учим професии и как да кажем какво правят хората.',
      tip: 'Питайте Ая: „What does dad do? What does Desi do?“ — и тя отговаря на английски.',
      w: [['👩‍🔬', 'scientist', 'учен'], ['👨‍🚒', 'firefighter', 'пожарникар'], ['🧑‍🍳', 'chef', 'готвач'], ['🧑‍✈️', 'pilot', 'пилот'], ['🧑‍💻', 'programmer', 'програмист'], ['👩‍🏫', 'teacher', 'учител']],
      p: [['❓', 'What do you want to be?', 'Какъв искаш да станеш?'], ['🧑‍⚕️', 'I want to be a doctor.', 'Искам да стана лекар.']],
      rule: 'Пред професията слагаме a/an: She is a pilot. He is an engineer.' },
    { id: 'shopping', title: 'Shopping — в магазина', emoji: '🛍️', core: 'Лексика',
      intro: 'How much is it? Can I try it on? Днес учим изрази за пазаруване.',
      tip: 'Играйте на магазин вкъщи с етикети с цени на английски.',
      w: [['🏷️', 'price', 'цена'], ['💳', 'card', 'карта'], ['💵', 'cash', 'в брой'], ['🧾', 'receipt', 'касова бележка'], ['👕', 'size', 'размер'], ['🛒', 'trolley', 'количка']],
      p: [['💰', 'How much is it?', 'Колко струва?'], ['👗', 'Can I try it on?', 'Мога ли да го пробвам?']],
      rule: 'How much is it? (за едно) — How much are they? (за много).' },
    { id: 'feelings', title: 'Bored or boring? — чувства', emoji: '😴', core: 'Лексика',
      intro: 'The film is boring, so I am bored. Прилагателните с -ing описват нещо, а с -ed — как се чувстваме.',
      tip: 'Описвайте филми и книги на английски: „It was exciting! I was excited!“',
      w: [['😴', 'bored — boring', 'отегчен — скучен'], ['🤩', 'excited — exciting', 'развълнуван — вълнуващ'], ['😨', 'frightened — frightening', 'уплашен — страшен'], ['😲', 'surprised — surprising', 'изненадан — изненадващ'], ['😮‍💨', 'tired — tiring', 'уморен — изморителен']],
      rule: '-ed: как се чувства човек (I am bored). -ing: какво е нещо (The lesson is boring).',
      extra: [['„The film was ___.“', ['exciting', 'excited'], 'exciting'], ['„I am ___.“ (отегчена)', ['bored', 'boring'], 'bored']] },
    { id: 'review', title: 'Review — преговор', emoji: '⭐', core: 'Лексика',
      intro: 'Годишен преговор по английски в 6. клас.',
      tip: 'Опитайте кратки видеа на английски за деца (например научни) с английски субтитри.',
      w: [['💧', 'much water', 'много вода'], ['🔥', 'too hot', 'твърде горещ'], ['🐇', 'quickly', 'бързо'], ['✅', 'already', 'вече'], ['📆', 'since 2020', 'от 2020 г.'], ['💃', 'I love dancing.', 'Обичам да танцувам.']],
      rule: 'Practice makes perfect! — Упражнението води до съвършенство!' }
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

    window.LESSONS[`m6-en-${t.id}`] = {
      stage: 'middle', subject: 'lang', group: 6, core: t.core, minutes: 10,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();
