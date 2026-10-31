// 3. клас, Английски език: още теми от учебната програма (лексика, кратки изрази и граматика).
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'numbers', title: 'Numbers 20–100 — числата до 100', emoji: '💯', core: 'Лексика',
      intro: 'Twenty, thirty, forty… Днес броим до сто на английски.',
      tip: 'Броете на английски стъпалата, колите, страниците. Кажете цените в магазина на английски.',
      w: [['2️⃣', 'twenty', '20'], ['3️⃣', 'thirty', '30'], ['4️⃣', 'forty', '40'], ['5️⃣', 'fifty', '50'], ['💯', 'one hundred', '100'], ['🔢', 'twenty-five', '25']],
      rule: 'Десетиците завършват на -ty: twenty, thirty, forty, fifty. Двадесет и пет е twenty-five — с тире.',
      extra: [['Как е 13 на английски?', ['thirteen', 'thirty'], 'thirteen'], ['Как е 30?', ['thirty', 'thirteen'], 'thirty']] },
    { id: 'food', title: 'Can I have…? — в кафенето', emoji: '🥪', core: 'Общуване',
      intro: 'Can I have a sandwich, please? Днес учим как да поръчаме храна учтиво.',
      tip: 'Играйте на кафене: Ая е сервитьорка, вие поръчвате на английски. После сменете ролите.',
      w: [['🥪', 'sandwich', 'сандвич'], ['🧃', 'juice', 'сок'], ['🍰', 'cake', 'торта'], ['🥗', 'salad', 'салата'], ['🍝', 'pasta', 'макарони'], ['💧', 'water', 'вода']],
      p: [['🙋', 'Can I have a juice, please?', 'Може ли един сок, моля?'], ['🙏', 'Here you are.', 'Заповядай.']],
      rule: 'Учтиво искаме с „Can I have …, please?“ и благодарим с „Thank you!“' },
    { id: 'health', title: 'At the doctor — при лекаря', emoji: '🤒', core: 'Аз и другите',
      intro: 'What’s the matter? I’ve got a headache. Днес казваме какво ни боли.',
      tip: 'Играйте на доктор с плюшени играчки: „What’s the matter, Teddy?“ — „I’ve got a cold.“',
      w: [['🤕', 'headache', 'главоболие'], ['🦷', 'toothache', 'зъбобол'], ['🤧', 'a cold', 'настинка'], ['🤒', 'temperature', 'температура'], ['😣', 'tummy ache', 'болен корем']],
      p: [['❓', 'What’s the matter?', 'Какво ти е?'], ['🤕', 'I’ve got a headache.', 'Боли ме главата.']],
      rule: 'Какво ти е? — What’s the matter? Отговаряме с „I’ve got a …“.' },
    { id: 'zoo', title: 'At the zoo — в зоопарка', emoji: '🦒', core: 'Природа',
      intro: 'It’s got a long neck! Днес описваме животни в зоопарка.',
      tip: 'Описвайте животно на английски, Ая познава: „It’s big and grey. It’s got a long nose.“',
      w: [['🦒', 'giraffe', 'жираф'], ['🐒', 'monkey', 'маймуна'], ['🐘', 'elephant', 'слон'], ['🦓', 'zebra', 'зебра'], ['🐊', 'crocodile', 'крокодил'], ['🦁', 'lion', 'лъв']],
      p: [['🦒', 'It’s got a long neck.', 'Има дълга шия.'], ['🐘', 'It’s big and grey.', 'Голям и сив е.']],
      rule: 'За животно казваме „It’s got …“ (има) и „It’s …“ (то е): It’s got a long tail. It’s small.' },
    { id: 'jobs', title: 'Jobs — професии', emoji: '👩‍⚕️', core: 'Аз и другите',
      intro: 'What does she do? She’s a doctor. Днес учим професиите.',
      tip: 'Питайте за роднините: „What does grandpa do?“ — „He’s a driver.“',
      w: [['👩‍⚕️', 'doctor', 'лекар'], ['👩‍🏫', 'teacher', 'учител'], ['👨‍🍳', 'cook', 'готвач'], ['👨‍🚒', 'firefighter', 'пожарникар'], ['👩‍🌾', 'farmer', 'фермер'], ['👮', 'police officer', 'полицай']],
      p: [['❓', 'What do you want to be?', 'Какъв искаш да станеш?'], ['👩‍⚕️', 'I want to be a doctor.', 'Искам да стана лекар.']],
      rule: 'Пред професията казваме „a“: She’s a teacher. He’s a cook.' },
    { id: 'time', title: 'What time is it? — колко е часът', emoji: '🕐', core: 'Време',
      intro: 'What time is it? It’s three o’clock. Днес казваме часа на английски.',
      tip: 'Питайте всеки път, когато минавате покрай часовник: „What time is it?“',
      w: [['🕐', 'one o’clock', 'един часа'], ['🕒', 'three o’clock', 'три часа'], ['🕡', 'half past six', 'шест и половина'], ['🕗', 'eight o’clock', 'осем часа'], ['🕛', 'twelve o’clock', 'дванадесет часа']],
      p: [['❓', 'What time is it?', 'Колко е часът?'], ['🕒', 'It’s three o’clock.', 'Три часа е.']],
      rule: 'Кръгъл час: „It’s … o’clock.“ И половина: „half past …“.' },
    { id: 'routine', title: 'My day — моят ден', emoji: '⏰', core: 'Време',
      intro: 'I get up at seven. Днес разказваме какво правим през деня.',
      tip: 'Сутрин и вечер казвайте на английски какво правите: „I brush my teeth.“',
      w: [['⏰', 'get up', 'ставам'], ['🪥', 'brush my teeth', 'мия си зъбите'], ['🥣', 'have breakfast', 'закусвам'], ['🏫', 'go to school', 'отивам на училище'], ['📚', 'do my homework', 'пиша домашните'], ['🛏️', 'go to bed', 'лягам си']],
      p: [['⏰', 'I get up at seven.', 'Ставам в седем.']],
      rule: 'За нещо, което правим всеки ден, казваме: I get up. I go to school. Със „she/he“ добавяме -s: She gets up.' },
    { id: 'family', title: 'This is my family — семейството ми', emoji: '👨‍👩‍👧', core: 'Аз и другите',
      intro: 'This is my brother. He’s ten. Днес представяме семейството си.',
      tip: 'Разгледайте семейни снимки и нека Ая представя роднините на английски.',
      w: [['👨', 'father / dad', 'баща / тате'], ['👩', 'mother / mum', 'майка / мама'], ['👦', 'brother', 'брат'], ['👧', 'sister', 'сестра'], ['👴', 'grandfather', 'дядо'], ['👵', 'grandmother', 'баба']],
      p: [['👦', 'This is my brother.', 'Това е брат ми.'], ['🙂', 'He’s ten.', 'Той е на десет.']],
      rule: 'За мъж казваме „he“ (той), за жена — „she“ (тя): He’s my dad. She’s my mum.' },
    { id: 'town', title: 'My town — моят град', emoji: '🏙️', core: 'Лексика',
      intro: 'There’s a park in my town. Днес учим местата в града.',
      tip: 'На разходка назовавайте сградите на английски: „Look, a bakery!“',
      w: [['🌳', 'park', 'парк'], ['🏫', 'school', 'училище'], ['🏥', 'hospital', 'болница'], ['🏪', 'shop', 'магазин'], ['📚', 'library', 'библиотека'], ['🚉', 'station', 'гара']],
      p: [['🌳', 'There’s a park in my town.', 'В моя град има парк.'], ['📚', 'There are two libraries.', 'Има две библиотеки.']],
      rule: '„There is“ за едно нещо (There’s a park). „There are“ за много (There are two shops).' },
    { id: 'months', title: 'Months — месеците', emoji: '🗓️', core: 'Време',
      intro: 'When’s your birthday? It’s in October! Днес учим месеците.',
      tip: 'Направете календар с рождените дни на семейството с английските имена на месеците.',
      w: [['❄️', 'January', 'януари'], ['🌷', 'April', 'април'], ['☀️', 'July', 'юли'], ['🍂', 'October', 'октомври'], ['🎄', 'December', 'декември'], ['🌸', 'May', 'май']],
      p: [['❓', 'When’s your birthday?', 'Кога е рожденият ти ден?'], ['🎂', 'It’s in October.', 'През октомври е.']],
      rule: 'Месеците се пишат с главна буква. „През месеца“ е „in“: in May, in October.',
      extra: [['През кой месец е рожденият ден на Ая?', ['October', 'April', 'July'], 'October']] },
    { id: 'now', title: 'What are you doing? — какво правиш сега', emoji: '📖', core: 'Граматика',
      intro: 'I’m reading. She’s swimming. Днес казваме какво правим точно сега.',
      tip: 'Играйте на „Какво правя?“: показвате действие с жест, Ая казва на английски: „You’re cooking!“',
      w: [['📖', 'reading', 'чета'], ['🏊', 'swimming', 'плувам'], ['🍳', 'cooking', 'готвя'], ['😴', 'sleeping', 'спя'], ['🎨', 'painting', 'рисувам'], ['⚽', 'playing football', 'играя футбол']],
      p: [['❓', 'What are you doing?', 'Какво правиш?'], ['📖', 'I’m reading a book.', 'Чета книга.']],
      rule: 'За действие сега: am / is / are + глагол с -ing: I’m reading. He’s sleeping.' },
    { id: 'opposites', title: 'Big and small — противоположности', emoji: '↔️', core: 'Лексика',
      intro: 'The elephant is big. The mouse is small. Днес учим думи с противоположно значение.',
      tip: 'Играйте „Opposites“: казвате „hot“, Ая казва „cold“.',
      w: [['🐘', 'big', 'голям'], ['🐭', 'small', 'малък'], ['🔥', 'hot', 'горещ'], ['🧊', 'cold', 'студен'], ['🦒', 'tall', 'висок'], ['🐢', 'slow', 'бавен']],
      rule: 'Противоположни двойки: big — small, hot — cold, fast — slow, old — new, happy — sad.',
      extra: [['Обратното на „fast“ е…', ['slow', 'big'], 'slow']] },
    { id: 'easter', title: 'Holidays — празници', emoji: '🥚', core: 'Празници',
      intro: 'Happy Easter! Днес учим празнични думи и пожелания на английски.',
      tip: 'Изпратете картичка на английски до приятел или роднина в чужбина.',
      w: [['🥚', 'Easter egg', 'великденско яйце'], ['🐰', 'Easter bunny', 'великденско зайче'], ['🎃', 'pumpkin', 'тиква'], ['🎆', 'fireworks', 'фойерверки'], ['💌', 'card', 'картичка']],
      p: [['🥚', 'Happy Easter!', 'Честит Великден!'], ['🎆', 'Happy New Year!', 'Честита Нова година!']],
      rule: 'Пожелания: Happy Easter! Happy New Year! Merry Christmas! Happy birthday!' },
    { id: 'review', title: 'Review — преговор', emoji: '🏆', core: 'Преговор',
      intro: 'Well done, Aya! Тази година научи много нови думи и изрази. Да проверим!',
      tip: 'Пуснете анимационен филм на английски с английски субтитри — един път седмично през лятото.',
      w: [['🕒', 'three o’clock', 'три часа'], ['🦒', 'giraffe', 'жираф'], ['👩‍⚕️', 'doctor', 'лекар'], ['📖', 'reading', 'чета'], ['🍂', 'October', 'октомври'], ['🌳', 'park', 'парк']],
      rule: 'See you in year four! — До среща в четвърти клас!' }
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

    window.LESSONS[`p3-en-${t.id}`] = {
      stage: 'primary', subject: 'english', group: 3, core: t.core, minutes: 10,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();
