// 4. клас, Английски език: още теми от учебната програма (минало време, сравнения, пазаруване, посоки и др.).
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'was-were', title: 'Was and were — бях, беше', emoji: '⏪', core: 'Граматика',
      intro: 'Yesterday I was at the park. Днес говорим за миналото с was и were.',
      tip: 'Вечер питайте на английски: „Where were you today?“ — „I was at school.“',
      w: [['🏫', 'I was at school.', 'Бях на училище.'], ['🌳', 'She was in the park.', 'Тя беше в парка.'], ['🏖️', 'We were at the beach.', 'Бяхме на плажа.'], ['😴', 'They were tired.', 'Те бяха уморени.'], ['❓', 'Where were you?', 'Къде беше?']],
      rule: 'I / he / she / it — was. You / we / they — were. Yesterday — вчера, last week — миналата седмица.',
      extra: [['„We ___ at home yesterday.“', ['were', 'was'], 'were'], ['„She ___ happy.“', ['was', 'were'], 'was']] },
    { id: 'past-ed', title: 'Past Simple — какво направих', emoji: '📅', core: 'Граматика',
      intro: 'Yesterday I played football. За минали действия към много глаголи добавяме -ed.',
      tip: 'Разказвайте на английски за деня: „I played. I watched TV. I walked to school.“',
      w: [['⚽', 'played', 'играх'], ['📺', 'watched', 'гледах'], ['🚶', 'walked', 'вървях'], ['🍳', 'cooked', 'готвих'], ['🎨', 'painted', 'рисувах (с бои)'], ['📞', 'called', 'обадих се']],
      p: [['⚽', 'I played football yesterday.', 'Играх футбол вчера.']],
      rule: 'Правилните глаголи в минало време: + -ed (play → played). Някои са неправилни: go → went, eat → ate, see → saw.',
      extra: [['Минало време на „go“ е…', ['went', 'goed'], 'went']] },
    { id: 'comparatives', title: 'Bigger, faster — сравнение', emoji: '📏', core: 'Граматика',
      intro: 'An elephant is bigger than a dog. Днес сравняваме с -er и than.',
      tip: 'Сравнявайте членовете на семейството: „Dad is taller than mum.“',
      w: [['🐘', 'bigger', 'по-голям'], ['🐆', 'faster', 'по-бърз'], ['🦒', 'taller', 'по-висок'], ['🐭', 'smaller', 'по-малък'], ['🐢', 'slower', 'по-бавен']],
      p: [['🐘', 'An elephant is bigger than a dog.', 'Слонът е по-голям от кучето.']],
      rule: 'Сравняваме с -er + than: tall → taller than. Внимание: good → better, bad → worse.',
      extra: [['Сравнителната степен на „good“ е…', ['better', 'gooder'], 'better']] },
    { id: 'shopping', title: 'How much is it? — пазаруване', emoji: '🛍️', core: 'Общуване',
      intro: 'How much is this T-shirt? It’s ten euros. Днес пазаруваме на английски.',
      tip: 'Играйте на магазин с цени в евро. Ая е продавачката и отговаря на английски.',
      w: [['💶', 'euro', 'евро'], ['🪙', 'cent', 'цент'], ['🏷️', 'price', 'цена'], ['🛒', 'shop assistant', 'продавач'], ['💳', 'card', 'карта']],
      p: [['❓', 'How much is it?', 'Колко струва?'], ['💶', 'It’s five euros.', 'Пет евро е.'], ['🙂', 'I’ll take it.', 'Ще го взема.']],
      rule: 'Питаме за цена с „How much is it?“ (за едно) и „How much are they?“ (за много).' },
    { id: 'directions', title: 'Turn left! — посоки', emoji: '🧭', core: 'Общуване',
      intro: 'Excuse me, where is the station? Go straight on and turn left. Днес питаме и обясняваме пътя.',
      tip: 'Скрийте „съкровище“ вкъщи и давайте посоки на английски: „Go straight, turn right!“',
      w: [['⬆️', 'go straight on', 'върви направо'], ['⬅️', 'turn left', 'завий наляво'], ['➡️', 'turn right', 'завий надясно'], ['↔️', 'next to', 'до'], ['🔄', 'opposite', 'срещу']],
      p: [['❓', 'Where is the bank?', 'Къде е банката?'], ['➡️', 'Turn right. It’s next to the shop.', 'Завий надясно. До магазина е.']],
      rule: 'Учтиво питаме с „Excuse me, where is …?“ и благодарим с „Thank you!“' },
    { id: 'sports', title: 'Sports — спортове', emoji: '⚽', core: 'Лексика',
      intro: 'I play tennis. I go swimming. Днес учим спортовете на английски.',
      tip: 'Гледайте спорт и назовавайте на английски какво виждате: „He’s running! Goal!“',
      w: [['⚽', 'football', 'футбол'], ['🎾', 'tennis', 'тенис'], ['🏊', 'swimming', 'плуване'], ['🏀', 'basketball', 'баскетбол'], ['⛷️', 'skiing', 'ски'], ['🚴', 'cycling', 'колоездене']],
      p: [['🎾', 'I play tennis.', 'Играя тенис.'], ['🏊', 'I go swimming.', 'Ходя да плувам.']],
      rule: 'С игри с топка казваме „play“ (play football). С -ing спортове — „go“ (go swimming).' },
    { id: 'subjects', title: 'School subjects — предмети', emoji: '📚', core: 'Лексика',
      intro: 'My favourite subject is Maths! Днес учим училищните предмети.',
      tip: 'Направете програмата на Ая на английски и я закачете на стената.',
      w: [['🔢', 'Maths', 'математика'], ['📖', 'Bulgarian', 'български език'], ['🇬🇧', 'English', 'английски'], ['🎨', 'Art', 'изобразително изкуство'], ['🎵', 'Music', 'музика'], ['🏃', 'PE', 'физическо възпитание']],
      p: [['❓', 'What’s your favourite subject?', 'Кой е любимият ти предмет?'], ['🔢', 'My favourite subject is Maths.', 'Любимият ми предмет е математика.']],
      rule: 'Учебните предмети на английски се пишат с главна буква: Maths, English, Music.' },
    { id: 'going-to', title: 'Going to — ще направя', emoji: '🧳', core: 'Граматика',
      intro: 'Next summer I’m going to visit Greece! С „going to“ казваме какво смятаме да правим.',
      tip: 'Планирайте ваканцията на английски: „We’re going to swim. We’re going to eat ice cream.“',
      w: [['🏊', 'I’m going to swim.', 'Ще плувам.'], ['🧳', 'We’re going to travel.', 'Ще пътуваме.'], ['📖', 'She’s going to read.', 'Тя ще чете.'], ['🎂', 'They’re going to have a party.', 'Те ще правят парти.']],
      rule: 'За планове: am / is / are + going to + глагол. I’m going to play. He’s going to visit.',
      extra: [['„We ___ going to travel.“', ['are', 'is'], 'are']] },
    { id: 'countries', title: 'Countries — държави', emoji: '🌍', core: 'Лексика',
      intro: 'I’m from Bulgaria. I’m Bulgarian. Днес учим държави и националности.',
      tip: 'Разгледайте глобус и казвайте на английски: „This is Italy. People from Italy are Italian.“',
      w: [['🇧🇬', 'Bulgaria — Bulgarian', 'България — българин'], ['🇬🇧', 'the UK — British', 'Великобритания — британец'], ['🇮🇹', 'Italy — Italian', 'Италия — италианец'], ['🇫🇷', 'France — French', 'Франция — французин'], ['🇩🇪', 'Germany — German', 'Германия — германец'], ['🇬🇷', 'Greece — Greek', 'Гърция — грък']],
      p: [['🇧🇬', 'I’m from Bulgaria.', 'От България съм.'], ['❓', 'Where are you from?', 'Откъде си?']],
      rule: 'Държавите и националностите в английски се пишат с главна буква: Bulgaria, Bulgarian.' },
    { id: 'hobbies', title: 'I love reading — хобита', emoji: '🎸', core: 'Общуване',
      intro: 'I love reading. I don’t like cooking. След like и love глаголът е с -ing.',
      tip: 'Направете анкета в семейството на английски: „Do you like dancing?“',
      w: [['📖', 'reading', 'четене'], ['💃', 'dancing', 'танцуване'], ['🎸', 'playing the guitar', 'свирене на китара'], ['🍳', 'cooking', 'готвене'], ['🎨', 'drawing', 'рисуване'], ['🚲', 'riding a bike', 'каране на колело']],
      p: [['❤️', 'I love reading.', 'Обичам да чета.'], ['❓', 'Do you like dancing?', 'Обичаш ли да танцуваш?']],
      rule: 'Like / love / hate + глагол с -ing: I like swimming. She loves dancing.' },
    { id: 'nature', title: 'In nature — в природата', emoji: '🏞️', core: 'Природа',
      intro: 'There is a river in the forest. Днес учим думи за природата.',
      tip: 'На разходка назовавайте на английски: „Look, a lake! A mountain!“',
      w: [['🌲', 'forest', 'гора'], ['🏞️', 'river', 'река'], ['⛰️', 'mountain', 'планина'], ['🏝️', 'island', 'остров'], ['🌊', 'sea', 'море'], ['🏜️', 'desert', 'пустиня']],
      p: [['⛰️', 'Musala is the highest mountain peak in Bulgaria.', 'Мусала е най-високият връх в България.']],
      rule: 'Реки, морета и планини често се казват с „the“: the Danube, the Black Sea.' },
    { id: 'review', title: 'Review — преговор', emoji: '🏆', core: 'Преговор',
      intro: 'Well done, Aya! Завършваш четвърти клас. Да проверим какво помниш!',
      tip: 'Пред пети клас: четете заедно на английски кратки книжки с картинки (graded readers).',
      w: [['⏪', 'was', 'бях'], ['⚽', 'played', 'играх'], ['🐘', 'bigger', 'по-голям'], ['⬅️', 'turn left', 'завий наляво'], ['🇧🇬', 'Bulgaria — Bulgarian', 'България — българин'], ['📖', 'reading', 'четене']],
      rule: 'Good luck in year five! — Успех в пети клас!' }
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

    window.LESSONS[`p4-en-${t.id}`] = {
      stage: 'primary', subject: 'english', group: 4, core: t.core, minutes: 10,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();
