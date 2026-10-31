// 1. клас, Математика: числата до 20 и събиране и изваждане с преминаване на десетицата, час по час.
// Сметките с преминаване се генерират: стъпките (9 + 4 = 9 + 1 + 3) се смятат, не се пишат на ръка.
window.LESSONS = window.LESSONS || {};

(function () {
  const L = (id, data) => { window.LESSONS[id] = Object.assign({ stage: 'primary', subject: 'math', group: 1, core: 'Числа' }, data); };
  const W = ['нула', 'едно', 'две', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет', 'десет',
    'единадесет', 'дванадесет', 'тринадесет', 'четиринадесет', 'петнадесет', 'шестнадесет', 'седемнадесет', 'осемнадесет', 'деветнадесет', 'двадесет'];
  const COLORS = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));
  const near = (n, k) => rotate([n, n + 1, n - 1].filter((x) => x >= 0), k);
  const tensRows = (n) => ({ rows: [{ emoji: '🔵', count: Math.min(n, 10) }, ...(n > 10 ? [{ emoji: '🔴', count: n - 10 }] : [])] });

  // ---------- Числата от 11 до 20 ----------
  L('p1-math-desetitsa', {
    before: 'p1-math-chisla-do-20',
    title: 'Десетица и единици',
    emoji: '🔟',
    minutes: 12,
    intro: 'Десет единици правят една десетица. С десетиците броим по-бързо — като с пакетчета по десет.',
    parentTip: 'Връзвайте по 10 клечки с ластик — това е „десетица“. После показвайте числа: 13 = една връзка и 3 отделни клечки. Ая бързо ще види, че не е нужно да брои всичко отначало.',
    sections: [
      { title: 'Едно пакетче — десет', blocks: [
        { type: 'picture', picture: { emoji: '🖍️', count: 10 }, caption: '10 единици' },
        { type: 'picture', picture: { pic: '📦' }, caption: '= 1 десетица' },
        { type: 'rule', text: '10 единици = 1 десетица.' }
      ] },
      { title: 'Десетица и още', blocks: [
        { type: 'picture', picture: tensRows(13), caption: '1 десетица и 3 единици = 13' },
        { type: 'say', text: 'В числото 13 цифрата 1 показва десетицата, а цифрата 3 — единиците.' }
      ] }
    ],
    tasks: [
      { question: 'Колко единици има в една десетица?', options: [1, 10, 100], answer: 10 },
      { question: '1 десетица и 5 единици = ?', options: [15, 51, 6], answer: 15 },
      { question: 'Колко е?', picture: tensRows(12), options: [12, 21, 2], answer: 12 },
      { question: 'Колко единици има в 17 освен десетицата?', options: [1, 7, 17], answer: 7 },
      { question: '2 десетици = ?', options: [2, 12, 20], answer: 20 }
    ]
  });

  [[11, 15], [16, 20]].forEach(([from, to], gi) => {
    const nums = Array.from({ length: to - from + 1 }, (_, i) => from + i);
    L(`p1-math-chisla-${from}-${to}`, {
      after: gi === 0 ? 'p1-math-desetitsa' : 'p1-math-chisla-11-15',
      title: `Числата от ${from} до ${to}`,
      emoji: '🔢',
      minutes: 12,
      intro: `Числата от ${from} до ${to} са двуцифрени: имат една ${to === 20 ? 'или две десетици' : 'десетица'} и единици.`,
      parentTip: 'Казвайте числата по два начина: книжовно („единадесет“) и както ги казваме всеки ден („единайсет“). И двете са правилни, но в писмените задачи се пише книжовната форма.',
      sections: [
        { title: 'Броим нататък', blocks: [
          { type: 'cards', items: nums.map((n, i) => ({ pic: String(n), label: W[n], sub: n < 20 ? `10 и ${n - 10}` : '2 десетици', say: W[n], color: COLORS[i % COLORS.length] })) }
        ] },
        { title: 'Как се казват', blocks: [
          { type: 'say', text: nums.includes(20) ? 'Двадесет са две десетици. В ежедневието казваме и „двайсет“.' : 'Единадесет е „едно на десет“. В ежедневието казваме и „единайсет“.' },
          { type: 'picture', picture: tensRows(nums[2]), caption: `${nums[2]} = 10 + ${nums[2] - 10}` },
          { type: 'picture', picture: { sequence: nums.map(String) } }
        ] }
      ],
      tasks: [
        { question: 'Колко е?', picture: tensRows(nums[1]), options: near(nums[1], gi), answer: nums[1] },
        { question: `Кое число е след ${nums[2]}?`, options: near(nums[3], gi + 1), answer: nums[3] },
        { question: `Кое число е преди ${nums[1]}?`, options: near(nums[0], gi + 2), answer: nums[0] },
        { question: `10 + ${nums[3] - 10} = ?`, options: near(nums[3], gi), answer: nums[3] },
        { question: `Как се пише „${W[nums[4]]}“?`, options: rotate([String(nums[4]), String(nums[4]).split('').reverse().join(''), String(nums[4] - 10)], gi + 1), answer: String(nums[4]) }
      ]
    });
  });

  L('p1-math-dvutsifreni', {
    after: 'p1-math-chisla-do-20',
    title: 'Едноцифрени и двуцифрени числа',
    emoji: '🔠',
    minutes: 10,
    intro: 'Някои числа пишем с една цифра, а други — с две. Затова ги наричаме едноцифрени и двуцифрени.',
    parentTip: 'Търсете числа по табели, часовници и опаковки и питайте: „С колко цифри е написано?“',
    sections: [
      { title: 'Две групи числа', blocks: [
        { type: 'cards', items: [
          { pic: '0 1 2 … 9', label: 'едноцифрени', sub: 'с една цифра', color: '#5ec8f2' },
          { pic: '10 11 … 20', label: 'двуцифрени', sub: 'с две цифри', color: '#ff8fb1' }
        ] },
        { type: 'rule', text: 'Най-малкото двуцифрено число е 10. Най-голямото едноцифрено е 9.' }
      ] }
    ],
    tasks: [
      { question: 'Кое число е двуцифрено?', options: [7, 14, 9], answer: 14 },
      { question: 'Кое число е едноцифрено?', options: [11, 20, 8], answer: 8 },
      { question: 'Най-малкото двуцифрено число е…', options: [10, 11, 9], answer: 10 },
      { question: 'Най-голямото едноцифрено число е…', options: [9, 10, 1], answer: 9 },
      { question: 'С колко цифри е написано 16?', options: [1, 2, 16], answer: 2 }
    ]
  });

  L('p1-math-sravnyavane-20', {
    after: 'p1-math-dvutsifreni',
    title: 'Сравняване на числата до 20',
    emoji: '⚖️',
    minutes: 10,
    intro: 'Как да сравним 13 и 17? Двете имат по една десетица — значи сравняваме единиците: 3 < 7, затова 13 < 17.',
    parentTip: 'Нарисувайте числова линия от 0 до 20 на лист. Числото, което е по-надясно, е по-голямо. Скачайте по нея с играчка.',
    sections: [
      { title: 'Сравняваме', blocks: [
        { type: 'picture', picture: tensRows(13), caption: '13 = 10 + 3' },
        { type: 'picture', picture: tensRows(17), caption: '17 = 10 + 7' },
        { type: 'rule', text: 'Всяко двуцифрено число е по-голямо от всяко едноцифрено. Ако десетиците са равни, сравняваме единиците.' },
        { type: 'picture', picture: { sequence: ['9', '<', '11'] } }
      ] }
    ],
    tasks: [
      { question: '13 … 17', options: ['>', '<', '='], answer: '<' },
      { question: '19 … 9', options: ['>', '<', '='], answer: '>' },
      { question: '20 … 18', options: ['>', '<', '='], answer: '>' },
      { question: 'Кое е най-голямото число?', options: [15, 19, 12], answer: 19 },
      { question: 'Кое е най-малкото число?', options: [11, 9, 14], answer: 9 },
      { question: '10 + 5 … 15', options: ['>', '<', '='], answer: '=' }
    ]
  });

  // ---------- Без преминаване ----------
  const simple = [
    { id: 'p1-math-10-plus', title: 'Сметки от вида 10 + 4 и 14 − 4', intro: 'Към 10 прибавяме единици: 10 + 4 = 14. От 14 махаме единиците: 14 − 4 = 10. Лесно — просто сменяме цифрата на единиците!',
      rule: '10 + 4 = 14 · 14 − 4 = 10 · 14 − 10 = 4',
      ex: [[10, '+', 3], [10, '+', 8], [16, '−', 6], [19, '−', 9], [15, '−', 10]] },
    { id: 'p1-math-13-plus-4', title: 'Събиране от вида 13 + 4', intro: 'Как да съберем 13 + 4? Десетицата остава, събираме само единиците: 3 + 4 = 7. Значи 13 + 4 = 17.',
      rule: '13 + 4 = 10 + 3 + 4 = 10 + 7 = 17',
      ex: [[12, '+', 5], [14, '+', 3], [11, '+', 7], [15, '+', 4], [6, '+', 13]] },
    { id: 'p1-math-17-minus-3', title: 'Изваждане от вида 17 − 3', intro: 'Как да извадим 17 − 3? Десетицата остава, изваждаме само от единиците: 7 − 3 = 4. Значи 17 − 3 = 14.',
      rule: '17 − 3 = 10 + 7 − 3 = 10 + 4 = 14',
      ex: [[18, '−', 5], [16, '−', 2], [19, '−', 7], [15, '−', 4], [17, '−', 6]] }
  ];
  simple.forEach((x, i) => {
    const calc = ([a, op, b]) => (op === '+' ? a + b : a - b);
    L(x.id, {
      before: 'p1-math-do-20',
      title: x.title,
      emoji: i === 2 ? '➖' : '➕',
      minutes: 12,
      intro: x.intro,
      parentTip: 'Използвайте връзките от 10 клечки: десетицата стои настрана, работим само с отделните клечки. Така Ая вижда, че сметката е същата като до 10.',
      sections: [
        { title: 'Как смятаме', blocks: [
          { type: 'picture', picture: tensRows(x.ex[0][0]), caption: `${x.ex[0][0]}` },
          { type: 'rule', text: x.rule }
        ] },
        { title: 'Примери', blocks: [
          { type: 'table', head: ['Сметка', 'Отговор'], rows: x.ex.map((e) => [`${e[0]} ${e[1]} ${e[2]}`, String(calc(e))]) }
        ] }
      ],
      tasks: x.ex.map((e, k) => ({ question: `${e[0]} ${e[1]} ${e[2]} = ?`, options: near(calc(e), k + i), answer: calc(e) }))
    });
  });

  // ---------- С преминаване: събиране ----------
  L('p1-math-doplvane', {
    before: 'p1-math-sabirane-s-preminavane',
    title: 'Допълване до 10',
    emoji: '🧩',
    minutes: 10,
    intro: 'Колко трябват на 7, за да станат 10? Три! Ако знаеш това наизуст, ще събираш лесно и до 20.',
    parentTip: 'Играйте на „Двойките на десет“: казвате число, Ая казва колко му трябва до 10 (6 — 4, 8 — 2). Използвайте 10-те пръста: свийте 6 — колко остават изправени?',
    sections: [
      { title: 'Двойки, които правят 10', blocks: [
        { type: 'cards', items: [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]].map(([a, b], i) => ({ pic: '🔴'.repeat(a) + '🔵'.repeat(b), label: `${a} + ${b} = 10`, color: COLORS[i] })) },
        { type: 'rule', text: 'Двойките на 10: 1 и 9, 2 и 8, 3 и 7, 4 и 6, 5 и 5.' }
      ] }
    ],
    tasks: [
      { question: '7 + ? = 10', options: [2, 3, 4], answer: 3 },
      { question: '9 + ? = 10', options: [1, 2, 0], answer: 1 },
      { question: '4 + ? = 10', options: [5, 6, 7], answer: 6 },
      { question: '? + 8 = 10', options: [1, 2, 3], answer: 2 },
      { question: '5 + ? = 10', options: [4, 5, 6], answer: 5 }
    ]
  });

  const ADD = [[9], [8], [7], [6], [5, 4], [3, 2]];
  ADD.forEach((ks, gi) => {
    const facts = [];
    ks.forEach((k) => { for (let a = 2; a <= 9; a++) if (a + k > 10) facts.push([a, k]); });
    // Започваме от по-голямото число: 4 + 9 = 9 + 4.
    const steps = ([a, k]) => {
      const big = Math.max(a, k);
      const small = Math.min(a, k);
      const fill = 10 - big;
      return `${a} + ${k} = ${a < k ? `${big} + ${small} = ` : ''}${big} + ${fill} + ${small - fill} = 10 + ${small - fill} = ${a + k}`;
    };
    const name = ks.join(' и ');
    const shown = facts.slice(0, 8);
    const ex = facts[Math.floor(facts.length / 2)];
    const big = Math.max(...ex);
    const small = Math.min(...ex);
    const tasks = facts.filter((_, i) => i % Math.max(1, Math.floor(facts.length / 4)) === 0).slice(0, 4)
      .map(([a, k], i) => ({ question: `${a} + ${k} = ?`, options: near(a + k, i + gi), answer: a + k, hint: 'Първо допълни до 10.' }));
    tasks.push({ question: `${big} + ${small} = ${big} + ${10 - big} + ?`, options: near(small - (10 - big), gi), answer: small - (10 - big), hint: `Колко остават от ${small}, след като дадем ${10 - big} на ${big}?` });
    tasks.push({ question: `Ая има ${big} стикера. Получи още ${small}. Колко стикера има сега?`, picture: { pic: '⭐' }, options: near(big + small, gi + 1), answer: big + small });

    L(`p1-math-pribavyane-${ks.join('-')}`, {
      after: gi === 0 ? 'p1-math-sabirane-s-preminavane' : `p1-math-pribavyane-${ADD[gi - 1].join('-')}`,
      title: `Прибавяне на ${name} с преминаване`,
      emoji: '➕',
      minutes: 15,
      intro: `Как да прибавим ${name}, когато минаваме през 10? Първо допълваме до 10, после прибавяме каквото е останало.`,
      parentTip: `Подредете ${big} копчета в кутия за яйца с 10 места (или нарисувайте 10 квадратчета). Добавяйте ${small}: първо запълнете кутията, после сложете останалите отвън. Ая вижда: 10 и още ${small - (10 - big)}.`,
      sections: [
        { title: 'Как минаваме през 10', blocks: [
          { type: 'picture', picture: { rows: [{ emoji: '🔵', count: big }, { emoji: '🔴', count: small }] }, caption: `${big} + ${small}` },
          { type: 'picture', picture: { rows: [{ emoji: '🔵', count: 10 }, { emoji: '🔴', count: small - (10 - big) }] }, caption: `= 10 + ${small - (10 - big)} = ${big + small}` },
          { type: 'rule', text: steps([big, small]) }
        ] },
        { title: 'Всички сметки', blocks: [
          { type: 'table', head: ['Сметка', 'Стъпки'], rows: shown.map((f) => [`${f[0]} + ${f[1]} = ${f[0] + f[1]}`, steps(f).split(' = ').slice(1, -1).join(' = ')]) },
          { type: 'say', text: 'Когато първото число е по-малко, разменяме местата: започваме от по-голямото.' }
        ] }
      ],
      tasks
    });
  });

  L('p1-math-tablitsa-20', {
    after: 'p1-math-pribavyane-3-2',
    title: 'Таблица за събиране до 20',
    emoji: '📋',
    minutes: 15,
    intro: 'Събрахме всички сметки с преминаване в една таблица. Колкото по-бързо ги казваш, толкова по-лесно ще смяташ занапред.',
    parentTip: 'Направете карти: отпред сметката (8 + 5), отзад отговорът. По 5 минути на ден, като отделяте „знам ги“ и „още ги уча“. Не бързайте — точността е по-важна.',
    sections: [
      { title: 'Таблицата', blocks: [
        { type: 'table', head: ['+', '2', '3', '4', '5', '6', '7', '8', '9'], rows: [9, 8, 7, 6, 5].map((a) => [String(a), ...[2, 3, 4, 5, 6, 7, 8, 9].map((b) => (a + b > 10 ? String(a + b) : '·'))]) },
        { type: 'say', text: 'Точката значи, че там не минаваме през 10.' }
      ] },
      { title: 'Хитрини', blocks: [
        { type: 'list', items: ['Двойни: 6 + 6 = 12, 7 + 7 = 14, 8 + 8 = 16, 9 + 9 = 18.', 'Почти двойни: 7 + 8 = 7 + 7 + 1 = 15.', 'С 9: прибави 10 и махни 1. 9 + 6 = 16 − 1 = 15.'] }
      ] }
    ],
    tasks: [
      { question: '8 + 8 = ?', options: [15, 16, 17], answer: 16 },
      { question: '7 + 8 = ?', options: [14, 15, 16], answer: 15 },
      { question: '9 + 6 = ?', options: [14, 15, 16], answer: 15 },
      { question: '6 + 5 = ?', options: [10, 11, 12], answer: 11 },
      { question: '9 + 9 = ?', options: [17, 18, 19], answer: 18 },
      { question: '4 + 8 = ?', options: [11, 12, 13], answer: 12 }
    ]
  });

  // ---------- С преминаване: изваждане ----------
  const SUB = [[11], [12], [13], [14], [15, 16], [17, 18]];
  SUB.forEach((ms, gi) => {
    const facts = [];
    ms.forEach((m) => { const u = m - 10; for (let k = u + 1; k <= 9; k++) facts.push([m, k]); });
    const steps = ([m, k]) => { const u = m - 10; return `${m} − ${k} = ${m} − ${u} − ${k - u} = 10 − ${k - u} = ${m - k}`; };
    const ex = facts[Math.floor(facts.length / 2)];
    const [m0, k0] = ex;
    const u0 = m0 - 10;
    const tasks = facts.filter((_, i) => i % Math.max(1, Math.floor(facts.length / 4)) === 0).slice(0, 4)
      .map(([m, k], i) => ({ question: `${m} − ${k} = ?`, options: near(m - k, i + gi), answer: m - k, hint: 'Първо махни единиците до 10.' }));
    tasks.push({ question: `${m0} − ${k0} = ${m0} − ${u0} − ?`, options: near(k0 - u0, gi), answer: k0 - u0, hint: `${k0} = ${u0} + ?` });
    tasks.push({ question: `${m0} − ? = ${m0 - k0}`, options: near(k0, gi + 1), answer: k0, hint: 'Провери със събиране.' });
    L(`p1-math-izvazhdane-${ms.join('-')}`, {
      after: gi === 0 ? 'p1-math-izvazhdane-s-preminavane' : `p1-math-izvazhdane-${SUB[gi - 1].join('-')}`,
      title: `Изваждане от ${ms.join(' и ')} с преминаване`,
      emoji: '➖',
      minutes: 15,
      intro: `Как да извадим от ${ms.join(' и ')} повече, отколкото са единиците? Първо стигаме до 10, после махаме останалото.`,
      parentTip: `Сложете ${m0} копчета: 10 в кутия и ${u0} отвън. За да махнете ${k0}, първо махнете тези отвън (${u0}), после още ${k0 - u0} от кутията. Проверявайте със събиране: ${m0 - k0} + ${k0} = ${m0}.`,
      sections: [
        { title: 'Две стъпки', blocks: [
          { type: 'picture', picture: tensRows(m0), caption: `${m0} = 10 + ${u0}` },
          { type: 'rule', text: steps(ex) },
          { type: 'say', text: 'Провери: събери отговора с това, което извади. Трябва да се получи началното число.' }
        ] },
        { title: 'Всички сметки', blocks: [
          { type: 'table', head: ['Сметка', 'Стъпки'], rows: facts.slice(0, 8).map((f) => [`${f[0]} − ${f[1]} = ${f[0] - f[1]}`, steps(f).split(' = ').slice(1, -1).join(' = ')]) }
        ] }
      ],
      tasks
    });
  });

  // ---------- Задачи и преговор ----------
  L('p1-math-zadachi-20', {
    after: 'p1-math-tekstovi',
    core: 'Моделиране',
    title: 'Задачи до 20',
    emoji: '📝',
    minutes: 15,
    intro: 'Задачата разказва история с числа. Прочети я, помисли какво се пита и реши дали да събираш, или да изваждаш.',
    parentTip: 'Решавайте задачи от живота: в магазина, в кухнята, на разходка. Питайте: „Какво знаем? Какво търсим? Повече ли ще станат, или по-малко?“',
    sections: [
      { title: 'Как решаваме задача', blocks: [
        { type: 'list', ordered: true, items: ['Прочитам задачата внимателно.', 'Казвам какво знам и какво търся.', 'Решавам: стават повече — събирам; стават по-малко — изваждам.', 'Пиша решение и отговор.'] },
        { type: 'rule', title: '📖 Пример', text: 'В автобуса има 9 деца. На спирката се качват още 5. Колко деца има сега? Решение: 9 + 5 = 14. Отговор: 14 деца.' }
      ] }
    ],
    tasks: [
      { question: 'На поляната има 8 зайчета. Дойдоха още 6. Колко са зайчетата?', picture: { pic: '🐰' }, options: [13, 14, 2], answer: 14 },
      { question: 'Ая имаше 15 лепенки. Подари 7. Колко ѝ останаха?', options: [8, 9, 22], answer: 8 },
      { question: 'В кошницата има 12 ябълки и 5 круши. Колко плода има общо?', picture: { pic: '🧺' }, options: [17, 7, 16], answer: 17 },
      { question: 'На дървото имаше 13 птички. Отлетяха 4. Колко останаха?', picture: { pic: '🐦' }, options: [9, 8, 17], answer: 9 },
      { question: 'Мама купи 11 яйца. Счупи 2. Колко са здравите?', picture: { pic: '🥚' }, options: [9, 13, 8], answer: 9 },
      { question: 'Ако „стават по-малко“, какво правим?', options: ['изваждаме', 'събираме'], answer: 'изваждаме' }
    ]
  });

  L('p1-math-pregovor', {
    after: 'p1-math-desetitsi',
    core: 'Преговор',
    title: 'Преговор: какво научих в първи клас',
    emoji: '🏆',
    minutes: 20,
    intro: 'Браво, Ая! Цяла година смяташ. Да видим колко много вече знаеш.',
    parentTip: 'Направете „изпит за шампиони“ с награда: всяка вярна задача е звезда. Ако Ая се затрудни с нещо, върнете се към урока по тази тема през лятото — по малко, с игра.',
    sections: [
      { title: 'Научих', blocks: [
        { type: 'list', items: ['числата до 20 и десетиците до 100', 'да сравнявам с >, < и =', 'да събирам и изваждам до 20, и с преминаване', 'фигурите: триъгълник, кръг, квадрат, правоъгълник', 'да меря в сантиметри и килограми, да познавам часа', 'евро и евроцент', 'да решавам задачи'] }
      ] }
    ],
    tasks: [
      { question: '8 + 7 = ?', options: [14, 15, 16], answer: 15 },
      { question: '16 − 9 = ?', options: [6, 7, 8], answer: 7 },
      { question: '14 … 11', options: ['>', '<', '='], answer: '>' },
      { question: '? + 6 = 13', options: [6, 7, 8], answer: 7 },
      { question: 'Коя фигура има 3 ъгъла?', options: [{ value: 'триъгълник', pic: '🔺' }, { value: 'кръг', pic: '🔵' }, { value: 'квадрат', pic: '🟥' }], answer: 'триъгълник' },
      { question: '50 + 30 = ?', options: [70, 80, 90], answer: 80 },
      { question: 'В клас има 9 момичета и 8 момчета. Колко са децата?', options: [16, 17, 18], answer: 17 }
    ]
  });
})();
