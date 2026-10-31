// 2. клас, Английски език: още теми от учебната програма (лексика и кратки изрази).
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'abc', title: 'The ABC — английската азбука', emoji: '🔤', core: 'Звукове и букви',
      intro: 'Английската азбука има 26 букви. Те са латински — различни от нашите кирилски букви.',
      tip: 'Пейте „ABC song“ (лесно се намира в интернет). Търсете латински букви по опаковки и надписи.',
      w: [['🍎', 'A — apple', 'ябълка'], ['🐝', 'B — bee', 'пчела'], ['🐱', 'C — cat', 'котка'], ['🐶', 'D — dog', 'куче'], ['🥚', 'E — egg', 'яйце'], ['🐟', 'F — fish', 'риба']],
      rule: 'Английската азбука има 26 букви: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.',
      extra: [['Колко букви има английската азбука?', [26, 30, 20], 26], ['С коя буква започва „cat“?', ['C', 'K', 'S'], 'C']] },
    { id: 'weather', title: 'The weather — времето', emoji: '🌦️', core: 'Природа',
      intro: 'What’s the weather like? Днес ще научим как да кажем какво е времето.',
      tip: 'Всяка сутрин гледайте през прозореца и питайте на английски: „What’s the weather like?“ Ая отговаря: „It’s sunny!“',
      w: [['☀️', 'sunny', 'слънчево'], ['🌧️', 'rainy', 'дъждовно'], ['☁️', 'cloudy', 'облачно'], ['❄️', 'snowy', 'снежно'], ['💨', 'windy', 'ветровито']],
      p: [['❓', 'What’s the weather like?', 'Какво е времето?'], ['☀️', 'It’s sunny.', 'Слънчево е.']],
      rule: 'За времето казваме „It’s …“: It’s sunny. It’s rainy. It’s cold.' },
    { id: 'clothes', title: 'Clothes — дрехите', emoji: '👕', core: 'Аз и другите',
      intro: 'Днес ще научим как се казват дрехите на английски.',
      tip: 'Докато обличате Ая сутрин, назовавайте дрехите на английски: „Your T-shirt! Your shoes!“',
      w: [['👕', 'T-shirt', 'тениска'], ['👖', 'trousers', 'панталон'], ['👗', 'dress', 'рокля'], ['👟', 'shoes', 'обувки'], ['🧢', 'hat', 'шапка'], ['🧥', 'coat', 'палто']],
      p: [['👗', 'I’m wearing a dress.', 'Облечена съм с рокля.']],
      rule: 'Панталонът и обувките са „по две“ — затова казваме trousers, shoes (множествено число).' },
    { id: 'house', title: 'My house — моят дом', emoji: '🏠', core: 'Аз и другите',
      intro: 'Where’s mum? She’s in the kitchen! Днес учим стаите вкъщи.',
      tip: 'Играйте на криеница с играчка и питайте: „Where’s Teddy?“ — „In the kitchen!“',
      w: [['🍳', 'kitchen', 'кухня'], ['🛏️', 'bedroom', 'спалня'], ['🛁', 'bathroom', 'баня'], ['🛋️', 'living room', 'хол'], ['🌳', 'garden', 'градина']],
      p: [['❓', 'Where’s Teddy?', 'Къде е мечето?'], ['🍳', 'In the kitchen.', 'В кухнята.']],
      rule: 'Където питаме „Where?“ — отговаряме „In the …“: in the bedroom, in the garden.' },
    { id: 'days', title: 'Days of the week — дните', emoji: '📅', core: 'Време',
      intro: 'Monday, Tuesday… Днес ще научим дните от седмицата на английски.',
      tip: 'Казвайте всяка сутрин „Today is Monday!“ и сочете календара.',
      w: [['1️⃣', 'Monday', 'понеделник'], ['2️⃣', 'Tuesday', 'вторник'], ['3️⃣', 'Wednesday', 'сряда'], ['4️⃣', 'Thursday', 'четвъртък'], ['5️⃣', 'Friday', 'петък'], ['6️⃣', 'Saturday', 'събота'], ['7️⃣', 'Sunday', 'неделя']],
      rule: 'На английски дните винаги се пишат с главна буква: Monday, Friday.',
      extra: [['Кой ден е след Friday?', ['Saturday', 'Monday', 'Thursday'], 'Saturday']] },
    { id: 'actions', title: 'I can… — какво мога', emoji: '🤸', core: 'Общуване',
      intro: 'I can run! I can jump! Днес ще кажем какво можем да правим.',
      tip: 'Играйте „Simon says“: „Simon says jump!“ — Ая скача. Ако не каже „Simon says“ — не мърда.',
      w: [['🏃', 'run', 'тичам'], ['🦘', 'jump', 'скачам'], ['🏊', 'swim', 'плувам'], ['🎤', 'sing', 'пея'], ['💃', 'dance', 'танцувам'], ['🎨', 'draw', 'рисувам']],
      p: [['💪', 'I can swim.', 'Мога да плувам.'], ['🙅', 'I can’t fly.', 'Не мога да летя.']],
      rule: '„I can“ — мога. „I can’t“ — не мога. I can sing, but I can’t fly.' },
    { id: 'like', title: 'I like… — харесвам', emoji: '❤️', core: 'Общуване',
      intro: 'I like ice cream! I don’t like rain. Днес казваме какво харесваме.',
      tip: 'На масата питайте: „Do you like carrots?“ — „Yes, I do!“ или „No, I don’t.“',
      w: [['🍦', 'ice cream', 'сладолед'], ['🍕', 'pizza', 'пица'], ['🥕', 'carrots', 'моркови'], ['🍫', 'chocolate', 'шоколад'], ['🍌', 'bananas', 'банани']],
      p: [['😋', 'I like pizza.', 'Харесвам пица.'], ['🙅', 'I don’t like carrots.', 'Не харесвам моркови.'], ['❓', 'Do you like bananas?', 'Харесваш ли банани?']],
      rule: '„I like“ — харесвам. „I don’t like“ — не харесвам. Отговор: „Yes, I do.“ / „No, I don’t.“' },
    { id: 'prepositions', title: 'In, on, under — къде е?', emoji: '📦', core: 'Общуване',
      intro: 'Where’s the cat? It’s on the bed! Днес учим как да кажем къде е нещо.',
      tip: 'Скрийте играчка и описвайте на английски: „The ball is under the table.“ Ая я намира.',
      w: [['📦', 'in', 'в'], ['🛏️', 'on', 'на, върху'], ['🪑', 'under', 'под'], ['↔️', 'next to', 'до']],
      p: [['🐱', 'The cat is on the bed.', 'Котката е на леглото.'], ['⚽', 'The ball is under the chair.', 'Топката е под стола.']],
      rule: 'in — в; on — на; under — под; next to — до.' },
    { id: 'feelings', title: 'Feelings — чувства', emoji: '😊', core: 'Аз и другите',
      intro: 'How are you? I’m happy! Днес казваме как се чувстваме.',
      tip: 'Направете „лица“ пред огледалото: „Show me happy! Show me sad!“',
      w: [['😊', 'happy', 'щастлив'], ['😢', 'sad', 'тъжен'], ['😠', 'angry', 'ядосан'], ['😴', 'tired', 'уморен'], ['😨', 'scared', 'уплашен'], ['🤤', 'hungry', 'гладен']],
      p: [['😊', 'I’m happy.', 'Щастлива съм.'], ['😴', 'I’m tired.', 'Уморена съм.']],
      rule: 'За чувства казваме „I’m …“: I’m happy. I’m hungry.' },
    { id: 'birthday', title: 'Happy birthday! — рожден ден', emoji: '🎂', core: 'Празници',
      intro: 'How old are you? I’m seven! Днес празнуваме рожден ден на английски.',
      tip: 'На 22 октомври изпейте на Ая „Happy Birthday to You“ на английски!',
      w: [['🎂', 'cake', 'торта'], ['🎁', 'present', 'подарък'], ['🎈', 'balloon', 'балон'], ['🕯️', 'candle', 'свещ'], ['🎉', 'party', 'парти']],
      p: [['🎂', 'Happy birthday!', 'Честит рожден ден!'], ['❓', 'How old are you?', 'На колко години си?'], ['7️⃣', 'I’m seven.', 'На седем съм.']],
      rule: 'За възраст питаме „How old are you?“ и отговаряме „I’m … (число)“.' },
    { id: 'pets', title: 'Pets — домашни любимци', emoji: '🐹', core: 'Природа',
      intro: 'I’ve got a dog! Днес учим домашните любимци.',
      tip: 'Питайте за любимците на приятели: „Has Maya got a cat?“',
      w: [['🐶', 'dog', 'куче'], ['🐱', 'cat', 'котка'], ['🐹', 'hamster', 'хамстер'], ['🐰', 'rabbit', 'заек'], ['🐠', 'fish', 'рибка'], ['🦜', 'parrot', 'папагал']],
      p: [['🐶', 'I’ve got a dog.', 'Имам куче.'], ['❓', 'Have you got a pet?', 'Имаш ли домашен любимец?']],
      rule: '„I’ve got“ — имам. „Have you got…?“ — имаш ли…?' },
    { id: 'shapes', title: 'Shapes — фигурите', emoji: '🔷', core: 'Лексика',
      intro: 'A circle, a square, a triangle… Днес учим фигурите на английски.',
      tip: 'Търсете фигури вкъщи и ги назовавайте на английски: „The clock is a circle!“',
      w: [['⚪', 'circle', 'кръг'], ['🟥', 'square', 'квадрат'], ['🔺', 'triangle', 'триъгълник'], ['⭐', 'star', 'звезда'], ['❤️', 'heart', 'сърце']],
      rule: 'Фигурите на английски: circle, square, triangle, rectangle (правоъгълник), star, heart.' },
    { id: 'seasons', title: 'Seasons — сезоните', emoji: '🍂', core: 'Природа',
      intro: 'Spring, summer, autumn, winter. Днес учим сезоните.',
      tip: 'Питайте: „What’s your favourite season?“ — „Summer!“ — „Why?“',
      w: [['🌷', 'spring', 'пролет'], ['☀️', 'summer', 'лято'], ['🍂', 'autumn', 'есен'], ['❄️', 'winter', 'зима']],
      p: [['❓', 'What’s your favourite season?', 'Кой е любимият ти сезон?'], ['☀️', 'I like summer.', 'Харесвам лятото.']],
      rule: 'Годината има четири сезона: spring, summer, autumn, winter.' },
    { id: 'transport', title: 'Transport — превозни средства', emoji: '🚌', core: 'Лексика',
      intro: 'A car, a bus, a train! Днес учим превозните средства.',
      tip: 'По пътя броете на английски: „One car, two cars, a bus!“',
      w: [['🚗', 'car', 'кола'], ['🚌', 'bus', 'автобус'], ['🚂', 'train', 'влак'], ['✈️', 'plane', 'самолет'], ['🚲', 'bike', 'колело'], ['🚢', 'ship', 'кораб']],
      p: [['🚌', 'I go to school by bus.', 'Ходя на училище с автобус.']],
      rule: 'С какво пътуваме: by car, by bus, by train. Пеша: on foot.' },
    { id: 'christmas', title: 'Christmas — Коледа', emoji: '🎄', core: 'Празници',
      intro: 'Merry Christmas! Днес учим думи за Коледа.',
      tip: 'Пейте „Jingle Bells“ заедно и украсявайте елхата, като назовавате играчките на английски.',
      w: [['🎄', 'Christmas tree', 'елха'], ['🎅', 'Father Christmas', 'Дядо Коледа'], ['⭐', 'star', 'звезда'], ['🔔', 'bell', 'звънче'], ['❄️', 'snowflake', 'снежинка'], ['🎁', 'present', 'подарък']],
      p: [['🎄', 'Merry Christmas!', 'Весела Коледа!'], ['🎆', 'Happy New Year!', 'Честита Нова година!']],
      rule: 'На Коледа казваме „Merry Christmas!“, а на Нова година — „Happy New Year!“' },
    { id: 'review', title: 'Review — преговор', emoji: '🏆', core: 'Преговор',
      intro: 'Well done, Aya! Тази година научи много английски думи. Да проверим!',
      tip: 'През лятото гледайте кратки детски филмчета на английски с Ая — 10–15 минути на ден са достатъчни.',
      w: [['👋', 'Hello!', 'Здравей!'], ['🔴', 'red', 'червено'], ['🐶', 'dog', 'куче'], ['☀️', 'sunny', 'слънчево'], ['😊', 'happy', 'щастлив'], ['🍳', 'kitchen', 'кухня']],
      rule: 'Well done! — Браво! See you next year! — До догодина!' }
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

    window.LESSONS[`p2-en-${t.id}`] = {
      stage: 'primary', subject: 'english', group: 2, core: t.core, minutes: 10,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();
