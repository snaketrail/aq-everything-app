// 1. клас, Математика: уроците час по час за числата до 10.
// По учебния план всяко число се учи отделно, после съставът му (как се получава чрез събиране),
// после свойствата на събирането. Уроците се нареждат сами между обобщителните уроци в p1-math.js.
window.LESSONS = window.LESSONS || {};

(function () {
  const L = (id, data) => { window.LESSONS[id] = Object.assign({ stage: 'primary', subject: 'math', group: 1, core: 'Числа' }, data); };
  const WORDS = ['нула', 'едно', 'две', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет', 'десет'];
  const COLORS = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));
  // Три различни отговора около верния, без отрицателни.
  const near = (n, k) => {
    const set = [n, n + 1, n - 1, n + 2].filter((x) => x >= 0).slice(0, 3);
    return rotate(set, k);
  };

  // ---------- Числата от 1 до 10 ----------
  const NUMBERS = [
    null,
    { emoji: '🌙', fact: 'На небето има една луна.', factPic: '🌙', write: 'Започни с малка наклонена чертичка нагоре, после дълга права черта надолу.' },
    { emoji: '👟', fact: 'Обуваме две обувки — по една на всеки крак.', factPic: '👟👟', write: 'Дъгичка отгоре, наклонена линия надолу и права чертичка отдолу — като лебед.' },
    { emoji: '🐷', fact: 'В приказката има три прасенца.', factPic: '🐷🐷🐷', write: 'Две дъгички една под друга — като птичка, която лети.' },
    { emoji: '🚗', fact: 'Колата има четири колела.', factPic: '🚗', write: 'Чертичка надолу, после настрани и дълга права черта надолу — като стол обърнат.' },
    { emoji: '⭐', fact: 'Ръката има пет пръста.', factPic: '🖐️', write: 'Къса чертичка надолу, голямо коремче и накрая капаче отгоре.' },
    { emoji: '🐞', fact: 'Калинката има шест крачета, както всички насекоми.', factPic: '🐞', write: 'Дъга отгоре надолу, която завършва с кръгче — като охлюв.' },
    { emoji: '🌈', fact: 'Дъгата има седем цвята.', factPic: '🌈', write: 'Права черта отгоре и дълга наклонена черта надолу — като коса.' },
    { emoji: '🐙', fact: 'Октоподът има осем пипала.', factPic: '🐙', write: 'Две кръгчета едно над друго — като снежен човек.' },
    { emoji: '🎈', fact: 'Девет е последното число, което пишем с една цифра.', factPic: '9️⃣', write: 'Кръгче отгоре и чертичка надолу — като балонче на връвчица.' },
    { emoji: '🍓', fact: 'На двете ръце имаме десет пръста.', factPic: '🙌', write: 'Десет се пише с две цифри: 1 и 0.' }
  ];

  NUMBERS.forEach((x, n) => {
    if (!x) return;
    const prev = n - 1;
    const next = n + 1;
    const tasks = [
      { question: `Къде има ${n === 1 ? 'една картинка' : WORDS[n] + ' картинки'}?`, options: rotate((n === 1 ? [1, 2, 3] : [n, n - 1, n + 1]).map((v) => ({ value: v, picture: { emoji: x.emoji, count: v } })), n), answer: n },
      { question: 'Колко са?', picture: { emoji: n % 2 ? '🐤' : '🍒', count: n }, options: near(n, n + 1), answer: n },
      { question: `Кое число идва след ${n}?`, picture: { sequence: [String(n), '?'] }, options: near(next, n), answer: next }
    ];
    if (n > 1) tasks.push({ question: `Кое число идва преди ${n}?`, picture: { sequence: ['?', String(n)] }, options: near(prev, n + 2), answer: prev });
    tasks.push({ question: `Коя е цифрата ${WORDS[n]}?`, options: rotate([String(n), String(n === 6 ? 9 : n === 9 ? 6 : (n + 3) % 10), String(n === 1 ? 7 : n === 7 ? 1 : (n + 5) % 10)], n), answer: String(n) });
    const other = n <= 5 ? n + 2 : n - 3;
    tasks.push({ question: `Кой знак слагаме? ${n} … ${other}`, options: ['>', '<', '='], answer: n > other ? '>' : '<', hint: 'Отворената страна на знака е към по-голямото число.' });

    L(`p1-math-chislo-${n}`, {
      before: n <= 5 ? 'p1-math-chisla-do-5' : 'p1-math-chisla-do-10',
      title: `Числото ${n}`,
      emoji: `${n}️⃣`.replace('10️⃣', '🔟'),
      minutes: 12,
      intro: `Днес ще се запознаем с числото ${WORDS[n]} и с цифрата ${n}. ${x.fact}`,
      parentTip: n === 1
        ? 'Броете всичко около вас: стъпалата, лъжиците, колите. Нека Ая докосва всеки предмет, докато брои — така числото и броят се свързват.'
        : `Търсете по ${WORDS[n]} еднакви предмета вкъщи и ги подреждайте в редица. Пишете цифрата ${n} с пръст по гърба на Ая — тя да познае коя е.`,
      sections: [
        { title: `Колко е ${WORDS[n]}?`, blocks: [
          { type: 'numbers', items: [{ n, word: WORDS[n], emoji: x.emoji }] },
          { type: 'say', text: x.fact },
          { type: 'picture', picture: { pic: x.factPic } },
          { type: 'countAlong', emoji: n % 2 ? '🐤' : '🍒', count: n, done: `Браво! ${WORDS[n][0].toUpperCase() + WORDS[n].slice(1)}!` }
        ] },
        { title: `Цифрата ${n}`, blocks: [
          { type: 'say', text: x.write },
          { type: 'draw', height: 50, marks: [{ pic: String(n), x: 8, y: 25 }], guides: ['M0 8 L100 8', 'M0 42 L100 42'] },
          { type: 'say', text: `Напиши с пръст цифрата ${n} няколко пъти по таблото. После — в тетрадката.` }
        ] },
        { title: 'Мястото в редицата', blocks: [
          { type: 'picture', picture: { sequence: Array.from({ length: Math.min(n + 2, 11) }, (_, i) => String(i)) } },
          { type: 'rule', text: n === 1
            ? 'Едно е първото число, с което броим. Преди него идва нула, а след него — две.'
            : `Числото ${n} идва след ${prev} и ${n < 10 ? `преди ${next}` : 'е последното число в първата десетица'}. ${n} е с едно повече от ${prev}.` }
        ] }
      ],
      tasks
    });
  });

  // ---------- Състав на числата от 2 до 10 ----------
  for (let n = 2; n <= 10; n++) {
    const pairs = Array.from({ length: n - 1 }, (_, i) => [i + 1, n - i - 1]);
    const tasks = [];
    const [a1, b1] = pairs[Math.floor(pairs.length / 2)];
    tasks.push({ question: `${a1} + ${b1} = ?`, picture: { pic: '🔴'.repeat(a1) + '🔵'.repeat(b1) }, options: near(n, n), answer: n });
    const a2 = 1 + (n % (n - 1));
    tasks.push({ question: `${n} = ${a2} + ?`, options: near(n - a2, n + 1), answer: n - a2, hint: `Колко още трябват на ${a2}, за да станат ${n}?` });
    const a3 = n - 1;
    tasks.push({ question: `${n} − ${a3} = ?`, options: near(n - a3, n + 2), answer: n - a3 });
    if (n >= 4) {
      const a4 = Math.ceil(n / 2) - 1;
      tasks.push({ question: `${n} − ${a4} = ?`, picture: { pic: '🍏'.repeat(n - a4) + '✖️'.repeat(a4) }, options: near(n - a4, n), answer: n - a4, hint: 'Задрасканите ги няма вече.' });
    }
    const wrongA = n === 2 ? [2, 1] : [n - 2, 1];
    const wrongB = [Math.max(1, n - 3), 1];
    tasks.push({ question: `Кое прави ${n}?`, options: rotate([`${pairs[0][0]} + ${pairs[0][1]}`, `${wrongA[0]} + ${wrongA[1]}`, `${wrongB[0]} + ${wrongB[1]}`].filter((v, i, a) => a.indexOf(v) === i), n), answer: `${pairs[0][0]} + ${pairs[0][1]}` });
    if (n >= 5) tasks.push({ question: `Ая имаше ${n} бонбона. Изяде ${n - 3}. Колко ѝ останаха?`, picture: { emoji: '🍬', count: n }, options: near(3, n), answer: 3 });

    L(`p1-math-sastav-${n}`, {
      after: n === 2 ? 'p1-math-sabirane-do-5' : n === 6 ? 'p1-math-chisla-do-10' : `p1-math-sastav-${n - 1}`,
      title: `Съставът на числото ${n}`,
      emoji: '🧮',
      minutes: 12,
      intro: `Числото ${n} може да се получи по различни начини: от две по-малки числа. Това се нарича състав на числото.`,
      parentTip: `Вземете ${n} копчета и две чашки. Нека Ая ги разпредели по всички начини (${pairs.map((p) => p.join(' и ')).join(', ')}) и казва: „${pairs[0][0]} и ${pairs[0][1]} правят ${n}“. Повтаряйте, докато го казва без броене.`,
      sections: [
        { title: `Как се получава ${n}`, blocks: [
          { type: 'cards', items: pairs.map(([a, b], i) => ({
            pic: '🔴'.repeat(a) + '🔵'.repeat(b),
            label: `${a} + ${b} = ${n}`,
            say: `${WORDS[a]} и ${WORDS[b]} правят ${WORDS[n]}`,
            color: COLORS[i % COLORS.length]
          })) },
          { type: 'rule', text: `${n} = ${pairs.map(([a, b]) => `${a} + ${b}`).join(' = ')}` }
        ] },
        { title: 'И обратно — изваждане', blocks: [
          { type: 'say', text: `Щом ${pairs[0][0]} и ${pairs[0][1]} правят ${n}, значи ${n} без ${pairs[0][0]} е ${pairs[0][1]}.` },
          { type: 'table', head: ['Събиране', 'Изваждане'], rows: pairs.slice(0, Math.ceil(pairs.length / 2)).map(([a, b]) => [`${a} + ${b} = ${n}`, `${n} − ${a} = ${b}`]) }
        ] }
      ],
      tasks
    });
  }

  // ---------- Нулата и свойствата на събирането ----------
  L('p1-math-nula', {
    after: 'p1-math-sastav-5',
    title: 'Числото 0',
    emoji: '0️⃣',
    minutes: 12,
    intro: 'Нула означава „нищо“, „нито един“. Когато няма нито една ябълка в кошницата — ябълките са 0.',
    parentTip: 'Играйте „Изяж всички“: сложете 3 гроздови зърна, Ая ги изяжда едно по едно — „3, 2, 1, 0 — няма!“. Покажете, че 4 + 0 = 4: не сме добавили нищо.',
    sections: [
      { title: 'Нищо не остана', blocks: [
        { type: 'story', panels: [
          { pic: '🍎🍎🍎', text: 'В кошницата има 3 ябълки.' },
          { pic: '🍎🍎', text: 'Ая изяде една. Останаха 2.' },
          { pic: '🍎', text: 'Изяде още една. Остана 1.' },
          { pic: '🧺', text: 'Изяде и последната. Останаха 0 — нито една.' }
        ] },
        { type: 'say', text: 'Нулата се пише като овал. Започваме отгоре и завъртаме наляво.' }
      ] },
      { title: 'Сметки с нула', blocks: [
        { type: 'table', head: ['Сметка', 'Защо'], rows: [
          ['4 + 0 = 4', 'не сме добавили нищо'],
          ['4 − 0 = 4', 'не сме махнали нищо'],
          ['4 − 4 = 0', 'махнали сме всичко']
        ] },
        { type: 'rule', text: 'Число + 0 = същото число. Число − 0 = същото число. Число − същото число = 0.' }
      ] }
    ],
    tasks: [
      { question: 'Колко са рибките в аквариума?', picture: { pic: '🫙' }, options: [0, 1, 2], answer: 0 },
      { question: '5 + 0 = ?', options: [0, 5, 6], answer: 5 },
      { question: '3 − 3 = ?', options: [0, 3, 6], answer: 0 },
      { question: '2 − 0 = ?', options: [0, 1, 2], answer: 2 },
      { question: 'Кое число е преди 1?', picture: { sequence: ['?', '1', '2'] }, options: [0, 3, 2], answer: 0 },
      { question: 'Кой знак слагаме? 0 … 1', options: ['>', '<', '='], answer: '<' }
    ]
  });

  L('p1-math-razmestitelno', {
    after: 'p1-math-sabirane-do-10',
    title: 'Разместване на събираемите',
    emoji: '🔄',
    minutes: 10,
    intro: 'Има ли значение дали ще съберем 2 + 5 или 5 + 2? Не! Сборът е един и същ. Това прави смятането по-лесно.',
    parentTip: 'Сложете 2 червени и 5 сини кубчета в редица. Обърнете редицата — сега са 5 сини и 2 червени, но кубчетата са пак 7. Научете Ая да започва от по-голямото число: 2 + 7 = 7 + 2, броим само два пъти напред от 7.',
    sections: [
      { title: 'Обърни редицата', blocks: [
        { type: 'picture', picture: { pic: '🔴🔴🔵🔵🔵🔵🔵' }, caption: '2 + 5 = 7' },
        { type: 'picture', picture: { pic: '🔵🔵🔵🔵🔵🔴🔴' }, caption: '5 + 2 = 7' },
        { type: 'rule', text: 'Ако разменим местата на събираемите, сборът не се променя: 2 + 5 = 5 + 2.' }
      ] },
      { title: 'Хитър начин', blocks: [
        { type: 'say', text: 'По-лесно е да започнеш от по-голямото число. 1 + 8? Започни от 8 и добави 1 — става 9.' }
      ] }
    ],
    tasks: [
      { question: '3 + 6 = 6 + ?', options: [3, 6, 9], answer: 3 },
      { question: 'Ако 4 + 5 = 9, колко е 5 + 4?', options: [8, 9, 10], answer: 9 },
      { question: '1 + 7 = ?', picture: { pic: '🔴🔵🔵🔵🔵🔵🔵🔵' }, options: [6, 7, 8], answer: 8 },
      { question: 'Кое е равно на 2 + 8?', options: ['8 + 2', '8 + 1', '2 + 6'], answer: '8 + 2' },
      { question: '2 + 6 … 6 + 2', options: ['>', '<', '='], answer: '=' }
    ]
  });

  L('p1-math-vrazka', {
    after: 'p1-math-razmestitelno',
    title: 'Събиране и изваждане са свързани',
    emoji: '🔗',
    minutes: 12,
    intro: 'От една сметка за събиране можем да направим две сметки за изваждане. Трите числа са едно „семейство“.',
    parentTip: 'Нарисувайте къщичка: на покрива голямото число (7), долу двете по-малки (3 и 4). Нека Ая каже четирите сметки: 3 + 4, 4 + 3, 7 − 3, 7 − 4.',
    sections: [
      { title: 'Семейството на числата 3, 4 и 7', blocks: [
        { type: 'picture', picture: { pic: '🟡🟡🟡🟢🟢🟢🟢' }, caption: '3 жълти и 4 зелени — общо 7' },
        { type: 'table', head: ['Събиране', 'Изваждане'], rows: [['3 + 4 = 7', '7 − 4 = 3'], ['4 + 3 = 7', '7 − 3 = 4']] },
        { type: 'rule', text: 'Ако от сбора извадим едното събираемо, получаваме другото събираемо.' }
      ] },
      { title: 'Проверка', blocks: [
        { type: 'say', text: 'Можем да проверим изваждането със събиране: 9 − 5 = 4, защото 4 + 5 = 9.' }
      ] }
    ],
    tasks: [
      { question: '2 + 6 = 8. Колко е 8 − 6?', options: [2, 6, 8], answer: 2 },
      { question: '5 + 3 = 8. Колко е 8 − 5?', options: [3, 5, 8], answer: 3 },
      { question: 'Коя сметка е от семейството на 1, 9 и 10?', options: ['10 − 9 = 1', '10 − 8 = 2', '9 − 1 = 8'], answer: '10 − 9 = 1' },
      { question: 'Как проверяваме 7 − 2 = 5?', options: ['5 + 2 = 7', '7 + 2 = 9', '5 − 2 = 3'], answer: '5 + 2 = 7' },
      { question: '6 − 4 = ?', picture: { pic: '🟡🟡🟢🟢🟢🟢' }, options: [1, 2, 3], answer: 2 }
    ]
  });

  L('p1-math-neizvestno', {
    after: 'p1-math-vrazka',
    title: 'Кое число липсва?',
    emoji: '🕵️‍♀️',
    minutes: 12,
    intro: 'Понякога в сметката едно число е скрито: ? + 3 = 7. Как да го намерим? С изваждане!',
    parentTip: 'Скрийте няколко бонбона под чаша, сложете 3 до нея и кажете: „Общо са 7. Колко са под чашата?“ Нека Ая отгатне, после проверете.',
    sections: [
      { title: 'Скритото число', blocks: [
        { type: 'picture', picture: { pic: '🥤➕🍬🍬🍬🟰7️⃣' }, caption: '? + 3 = 7' },
        { type: 'say', text: 'Общо са 7. Три се виждат. Под чашата са 7 − 3 = 4.' },
        { type: 'rule', text: 'Неизвестното събираемо намираме, като от сбора извадим познатото събираемо.' }
      ] },
      { title: 'Провери', blocks: [
        { type: 'say', text: 'Сложи намереното число на мястото на въпросителния знак: 4 + 3 = 7. Вярно е!' }
      ] }
    ],
    tasks: [
      { question: '? + 2 = 5', options: [2, 3, 7], answer: 3, hint: '5 − 2 = ?' },
      { question: '4 + ? = 10', options: [5, 6, 14], answer: 6 },
      { question: '? + 5 = 8', options: [3, 4, 13], answer: 3 },
      { question: '7 − ? = 4', options: [2, 3, 11], answer: 3, hint: 'Колко трябва да махнем от 7, за да останат 4?' },
      { question: 'Под чашата има бонбони. Общо с тези отвън са 9. Колко са под чашата?', picture: { pic: '🥤🍬🍬🍬🍬🍬' }, options: [3, 4, 5], answer: 4 }
    ]
  });

  L('p1-math-poveche', {
    after: 'p1-math-neizvestno',
    core: 'Моделиране',
    title: 'С повече и с по-малко',
    emoji: '⚖️',
    minutes: 12,
    intro: '„С 2 повече“ значи да добавим 2. „С 2 по-малко“ значи да махнем 2. Тези думи ни казват дали да събираме, или да изваждаме.',
    parentTip: 'Сравнявайте в ежедневието: „Аз имам 5 ягоди, ти имаш с 2 повече — колко имаш?“ Нека Ая подреди ягодите в две редици една под друга, за да види разликата.',
    sections: [
      { title: 'С повече', blocks: [
        { type: 'picture', picture: { rows: [{ emoji: '🍓', count: 4 }, { emoji: '🍓', count: 6 }] }, caption: 'Във втората редица има с 2 повече: 4 + 2 = 6' },
        { type: 'rule', text: '„С … повече“ — събираме.' }
      ] },
      { title: 'С по-малко', blocks: [
        { type: 'picture', picture: { rows: [{ emoji: '🎈', count: 7 }, { emoji: '🎈', count: 4 }] }, caption: 'Във втората редица има с 3 по-малко: 7 − 3 = 4' },
        { type: 'rule', text: '„С … по-малко“ — изваждаме.' }
      ] }
    ],
    tasks: [
      { question: 'Ая има 3 балона. Мая има с 2 повече. Колко балона има Мая?', picture: { emoji: '🎈', count: 3 }, options: [1, 5, 6], answer: 5 },
      { question: 'На дървото има 8 птички. На храста има с 3 по-малко. Колко са на храста?', options: [5, 11, 6], answer: 5 },
      { question: 'Число с 1 повече от 9 е…', options: [8, 10, 11], answer: 10 },
      { question: 'Число с 4 по-малко от 6 е…', options: [2, 10, 3], answer: 2 },
      { question: '„С повече“ значи…', options: ['събираме', 'изваждаме'], answer: 'събираме' }
    ]
  });

  L('p1-math-linii', {
    before: 'p1-math-santimetar',
    core: 'Геометрични фигури',
    title: 'Точка, права, крива и начупена линия',
    emoji: '〰️',
    minutes: 10,
    intro: 'Всяка рисунка е от точки и линии. Линиите са прави, криви или начупени.',
    parentTip: 'Търсете линии наоколо: ръбът на масата (права), пътечката в парка (крива), назъбената планина (начупена). Нека Ая ги нарисува с пръст във въздуха.',
    sections: [
      { title: 'Видове линии', blocks: [
        { type: 'cards', items: [
          { pic: '[liniya-prava]', label: 'права линия', color: '#5ec8f2' },
          { pic: '[liniya-kriva]', label: 'крива линия', color: '#ff8fb1' },
          { pic: '[liniya-chupena]', label: 'начупена линия', color: '#ffd23f' },
          { pic: '•', label: 'точка', color: '#7bdcb5' }
        ] },
        { type: 'rule', text: 'Правата линия чертаем с линия (линийка). Кривата — без линийка. Начупената е от прави части, събрани под ъгъл.' }
      ] },
      { title: 'Начертай', blocks: [
        { type: 'say', text: 'Следвай пунктира: права, крива и начупена.' },
        { type: 'draw', height: 50, guides: ['M5 10 L95 10', 'M5 28 Q25 15 45 28 Q65 41 95 28', 'M5 45 L20 35 L35 45 L50 35 L65 45 L80 35 L95 45'] }
      ] }
    ],
    tasks: [
      { question: 'Каква е тази линия?', picture: { pic: '[liniya-kriva]' }, options: ['крива', 'права', 'начупена'], answer: 'крива' },
      { question: 'Каква е тази линия?', picture: { pic: '[liniya-chupena]' }, options: ['начупена', 'крива', 'права'], answer: 'начупена' },
      { question: 'С какво чертаем права линия?', options: [{ value: 'линийка', pic: '📏' }, { value: 'ножица', pic: '✂️' }], answer: 'линийка' },
      { question: 'Какъв е ръбът на масата?', options: ['права линия', 'крива линия'], answer: 'права линия' },
      { question: 'Каква линия прави скачащата топка?', picture: { pic: '⚽' }, options: ['крива', 'права'], answer: 'крива' }
    ]
  });
})();
