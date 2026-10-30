// 1. клас, Математика — по реда на учебната година.
window.LESSONS = window.LESSONS || {};

(function () {
  const L = (id, data) => { window.LESSONS[id] = Object.assign({ stage: 'primary', subject: 'math', group: 1 }, data); };

  L('p1-math-chisla-do-5', {
    title: 'Числата от 0 до 5',
    emoji: '🔢',
    minutes: 12,
    intro: 'Всяко число си има цифра — знак, с който го пишем. Днес ще се запознаем с цифрите от 0 до 5.',
    parentTip: 'Пишете цифрите заедно с пръст върху ориз или брашно в тава — така ръката запомня формата. Нулата обяснете с празна чиния: „Колко ябълки има? Нула — нито една.“',
    sections: [
      { title: 'Числа и цифри', blocks: [
        { type: 'numbers', items: [
          { n: 1, word: 'едно', emoji: '🍎' }, { n: 2, word: 'две', emoji: '🍎' }, { n: 3, word: 'три', emoji: '🍎' },
          { n: 4, word: 'четири', emoji: '🍎' }, { n: 5, word: 'пет', emoji: '🍎' }
        ] }
      ] },
      { title: 'Нулата', blocks: [
        { type: 'picture', picture: { pic: '🍽️' }, caption: '0 — нула, нито една ябълка' },
        { type: 'say', text: 'Когато няма нито един предмет, казваме нула и пишем 0.' }
      ] },
      { title: 'Редът на числата', blocks: [
        { type: 'picture', picture: { sequence: ['0', '1', '2', '3', '4', '5'] } }
      ] }
    ],
    tasks: [
      { question: 'Колко са рибките?', picture: { emoji: '🐟', count: 4 }, options: [3, 4, 5], answer: 4 },
      { question: 'Колко са бонбоните в празната купа?', picture: { pic: '🥣' }, options: [0, 1, 2], answer: 0 },
      { question: 'Кое число е между 2 и 4?', picture: { sequence: ['2', '?', '4'] }, options: [1, 3, 5], answer: 3 },
      { question: 'Кое е най-голямото число?', options: [5, 1, 3], answer: 5 },
      { question: 'Къде има 2 звезди?', options: [{ value: 1, picture: { emoji: '⭐', count: 1 } }, { value: 2, picture: { emoji: '⭐', count: 2 } }, { value: 3, picture: { emoji: '⭐', count: 3 } }], answer: 2 }
    ]
  });

  L('p1-math-sravnyavane', {
    title: 'Сравняване: >, < и =',
    emoji: '⚖️',
    minutes: 12,
    intro: 'С три знака сравняваме числата: > (по-голямо), < (по-малко) и = (равно).',
    parentTip: 'Нарисувайте знаците > и < като уста на крокодил, която винаги иска да изяде по-голямото число. Децата лесно запомнят „гладния крокодил“.',
    sections: [
      { title: 'Трите знака', blocks: [
        { type: 'cards', items: [
          { pic: '4 > 2', label: 'по-голямо', sub: '4 е по-голямо от 2', say: 'Четири е по-голямо от две.', color: '#5ec8f2' },
          { pic: '1 < 3', label: 'по-малко', sub: '1 е по-малко от 3', say: 'Едно е по-малко от три.', color: '#ffd23f' },
          { pic: '5 = 5', label: 'равно', sub: '5 е равно на 5', say: 'Пет е равно на пет.', color: '#7bdcb5' }
        ] },
        { type: 'say', text: 'Отворената страна на знака винаги е към по-голямото число — като уста на гладен крокодил 🐊.' }
      ] },
      { title: 'Сравни групите', blocks: [
        { type: 'picture', picture: { rows: [{ emoji: '🐊', count: 4 }, { emoji: '🐟', count: 2 }] }, caption: '4 > 2' }
      ] }
    ],
    tasks: [
      { question: 'Кой знак слагаме? 3 … 5', options: ['>', '<', '='], answer: '<' },
      { question: 'Кой знак слагаме? 4 … 1', options: ['>', '<', '='], answer: '>' },
      { question: 'Кой знак слагаме? 2 … 2', options: ['>', '<', '='], answer: '=' },
      { question: 'Кое е вярно?', options: ['5 > 3', '5 < 3'], answer: '5 > 3' },
      { question: 'Сравни групите.', picture: { rows: [{ emoji: '🍓', count: 2 }, { emoji: '🍋', count: 5 }] }, options: ['2 < 5', '2 > 5', '2 = 5'], answer: '2 < 5' }
    ]
  });

  L('p1-math-sabirane-do-5', {
    title: 'Събиране и изваждане до 5',
    emoji: '➕',
    minutes: 15,
    intro: 'Събирането е добавяне (знак +). Изваждането е отнемане (знак −). Резултатът пишем след знака =.',
    parentTip: 'Разказвайте кратки истории с играчки: „На масата има 2 мечета. Дойде още 1. Колко станаха?“ После запишете историята с цифри: 2 + 1 = 3.',
    sections: [
      { title: 'Събиране', blocks: [
        { type: 'picture', picture: { pic: '🐥🐥 ➕ 🐥🐥🐥' } },
        { type: 'say', text: '2 + 3 = 5. Две пиленца и още три пиленца стават пет пиленца.' }
      ] },
      { title: 'Изваждане', blocks: [
        { type: 'picture', picture: { pic: '🎈🎈🎈🎈 ➖ 🎈' } },
        { type: 'say', text: '4 − 1 = 3. Имаше четири балона, един отлетя, останаха три.' }
      ] },
      { title: 'Събирането и изваждането са приятели', blocks: [
        { type: 'say', text: 'Ако 2 + 3 = 5, то 5 − 3 = 2 и 5 − 2 = 3.' }
      ] }
    ],
    tasks: [
      { question: '1 + 2 = ?', picture: { pic: '🍎 ➕ 🍎🍎' }, options: [2, 3, 4], answer: 3 },
      { question: '4 + 1 = ?', options: [3, 5, 4], answer: 5 },
      { question: '5 − 2 = ?', picture: { pic: '🐟🐟🐟🐟🐟 ➖ 🐟🐟' }, options: [2, 3, 4], answer: 3 },
      { question: '3 − 3 = ?', options: [0, 1, 3], answer: 0 },
      { question: '2 + 2 = ?', options: [3, 4, 5], answer: 4 },
      { question: 'Ако 1 + 4 = 5, колко е 5 − 4?', options: [1, 4, 5], answer: 1 }
    ]
  });

  L('p1-math-chisla-do-10', {
    title: 'Числата до 10',
    emoji: '🔟',
    minutes: 12,
    intro: 'След 5 идват 6, 7, 8, 9 и 10. Числото 10 пишем с две цифри: 1 и 0.',
    parentTip: 'Пребройте пръстите на двете ръце. Покажете, че 6 = 5 и още 1 (една цяла ръка и едно пръстче) — така децата смятат по-бързо.',
    sections: [
      { title: 'Новите числа', blocks: [
        { type: 'numbers', items: [
          { n: 6, word: 'шест', emoji: '🔵' }, { n: 7, word: 'седем', emoji: '🔵' }, { n: 8, word: 'осем', emoji: '🔵' },
          { n: 9, word: 'девет', emoji: '🔵' }, { n: 10, word: 'десет', emoji: '🔵' }
        ] }
      ] },
      { title: 'Пет и още', blocks: [
        { type: 'cards', items: [
          { pic: '🖐️☝️', label: '6 = 5 + 1', color: '#5ec8f2' },
          { pic: '🖐️✌️', label: '7 = 5 + 2', color: '#ffd23f' },
          { pic: '🖐️🖐️', label: '10 = 5 + 5', color: '#7bdcb5' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Колко са топките?', picture: { emoji: '⚽', count: 8 }, options: [7, 8, 9], answer: 8 },
      { question: 'Кое число е след 9?', options: [8, 10, 7], answer: 10 },
      { question: 'Кое число липсва?', picture: { sequence: ['6', '7', '?', '9'] }, options: [5, 8, 10], answer: 8 },
      { question: 'Кое е по-голямо?', options: [6, 9], answer: 9 },
      { question: 'Колко пръста показват ръцете?', picture: { pic: '🖐️✌️' }, options: [6, 7, 8], answer: 7 }
    ]
  });

  L('p1-math-sabirane-do-10', {
    title: 'Събиране и изваждане до 10',
    emoji: '🧮',
    minutes: 15,
    intro: 'Сега ще събираме и изваждаме с числата до 10. Помагай си с пръстчетата!',
    parentTip: 'Упражнявайте „приятелите на 10“: 1 и 9, 2 и 8, 3 и 7, 4 и 6, 5 и 5. Те ще помогнат много при смятането до 20.',
    sections: [
      { title: 'Приятелите на 10', blocks: [
        { type: 'cards', items: [
          { pic: '1 + 9', label: '= 10', color: '#ff8fb1' }, { pic: '2 + 8', label: '= 10', color: '#5ec8f2' },
          { pic: '3 + 7', label: '= 10', color: '#ffd23f' }, { pic: '4 + 6', label: '= 10', color: '#7bdcb5' },
          { pic: '5 + 5', label: '= 10', color: '#c38bff' }
        ] }
      ] },
      { title: 'Пример', blocks: [
        { type: 'picture', picture: { pic: '🍬🍬🍬🍬🍬🍬 ➖ 🍬🍬' } },
        { type: 'say', text: '6 − 2 = 4. Имах шест бонбона, изядох два, останаха четири.' }
      ] }
    ],
    tasks: [
      { question: '6 + 3 = ?', options: [8, 9, 10], answer: 9 },
      { question: '10 − 4 = ?', options: [5, 6, 7], answer: 6 },
      { question: '7 + 3 = ?', options: [9, 10, 11], answer: 10 },
      { question: '8 − 5 = ?', options: [2, 3, 4], answer: 3 },
      { question: 'Колко трябва да добавим към 6, за да стане 10?', options: [3, 4, 5], answer: 4 },
      { question: '9 − 9 = ?', options: [0, 1, 9], answer: 0 }
    ]
  });

  L('p1-math-tri-chisla', {
    title: 'Събиране на три числа',
    emoji: '🧮',
    minutes: 10,
    intro: 'Можем да съберем и три числа. Събираме първите две, а после добавяме третото.',
    parentTip: 'Покажете хитрост: 3 + 5 + 7 = 3 + 7 + 5 — първо търсим две числа, които правят 10.',
    sections: [
      { title: 'Стъпка по стъпка', blocks: [
        { type: 'story', panels: [
          { pic: '2 + 3 + 4', text: 'Трябва да пресметнем 2 + 3 + 4.' },
          { pic: '2 + 3 = 5', text: 'Първо събираме 2 и 3. Получаваме 5.' },
          { pic: '5 + 4 = 9', text: 'После към 5 добавяме 4. Получаваме 9.' }
        ] }
      ] }
    ],
    tasks: [
      { question: '1 + 2 + 3 = ?', options: [5, 6, 7], answer: 6 },
      { question: '2 + 2 + 2 = ?', options: [4, 6, 8], answer: 6 },
      { question: '4 + 1 + 5 = ?', options: [9, 10, 11], answer: 10 },
      { question: 'В кошницата има 3 ябълки, 2 круши и 4 сливи. Колко плода има?', picture: { pic: '🍎🍎🍎 🍐🍐 🫐🫐🫐🫐' }, options: [8, 9, 10], answer: 9 }
    ]
  });

  L('p1-math-evro', {
    title: 'Евро и евроцент',
    emoji: '💶',
    minutes: 12,
    intro: 'От 1 януари 2026 г. парите в България са евро. Едно евро има сто евроцента.',
    parentTip: 'Нека Ая разгледа истински монети и подреди от най-малката до най-голямата. В магазина нека плати сама нещо малко и вземе ресто.',
    sections: [
      { title: 'Монети и банкноти', blocks: [
        { type: 'cards', items: [
          { pic: '🪙', label: 'монети в центове', sub: '1, 2, 5, 10, 20 и 50 цента', color: '#ffb84d' },
          { pic: '🪙', label: 'монети в евро', sub: '1 евро и 2 евро', color: '#ffd23f' },
          { pic: '💶', label: 'банкноти', sub: '5, 10, 20, 50, 100 и 200 евро', color: '#5ec8f2' }
        ] },
        { type: 'say', text: '1 евро = 100 евроцента. Знакът на еврото е €.' }
      ] },
      { title: 'Пазаруваме', blocks: [
        { type: 'cards', items: [
          { pic: '🍎', label: '1 €', color: '#ff8fb1' },
          { pic: '🍞', label: '2 €', color: '#ffd23f' },
          { pic: '🧸', label: '8 €', color: '#c38bff' }
        ] },
        { type: 'say', text: 'Ябълка и хляб струват 1 € + 2 € = 3 €.' }
      ] }
    ],
    tasks: [
      { question: 'Колко евроцента има в 1 евро?', options: [10, 50, 100], answer: 100 },
      { question: 'Ябълка струва 1 €, хлябът — 2 €. Колко струват заедно?', picture: { pic: '🍎 ➕ 🍞' }, options: ['2 €', '3 €', '4 €'], answer: '3 €' },
      { question: 'Имаш 10 €. Купуваш мече за 8 €. Колко ти остават?', picture: { pic: '🧸' }, options: ['1 €', '2 €', '3 €'], answer: '2 €' },
      { question: 'Кой е знакът на еврото?', options: ['€', '$', '%'], answer: '€' },
      { question: 'Какво е по-голямо: 2 евро или 20 цента?', options: ['2 евро', '20 цента'], answer: '2 евро' }
    ]
  });

  L('p1-math-kilogram', {
    title: 'Килограм',
    emoji: '⚖️',
    minutes: 10,
    intro: 'Тежестта мерим с везна. Мерната единица е килограм. Пишем го накратко кг.',
    parentTip: 'Вдигнете заедно пакет захар или брашно от 1 кг — нека Ая усети колко тежи. После сравнете с други неща: по-леко ли е или по-тежко от 1 кг?',
    sections: [
      { title: 'Колко тежи?', blocks: [
        { type: 'cards', items: [
          { pic: '🧂', label: 'пакет захар — 1 кг', color: '#dfe6ee' },
          { pic: '🍉', label: 'диня — около 5 кг', color: '#7bdcb5' },
          { pic: '🍎', label: 'ябълка — по-малко от 1 кг', color: '#ff8fb1' },
          { pic: '🎒', label: 'раница — около 3 кг', color: '#5ec8f2' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'С какво мерим тежестта?', options: [{ value: 'scale', pic: '⚖️', label: 'с везна' }, { value: 'ruler', pic: '📏', label: 'с линийка' }], answer: 'scale' },
      { question: 'Как пишем накратко килограм?', options: ['кг', 'см', 'л'], answer: 'кг' },
      { question: '2 кг ябълки и 3 кг портокали. Колко кг плодове?', options: ['4 кг', '5 кг', '6 кг'], answer: '5 кг' },
      { question: 'Кое тежи повече от 1 кг?', options: [{ value: 'melon', pic: '🍉', label: 'диня' }, { value: 'feather', pic: '🪶', label: 'перо' }], answer: 'melon' }
    ]
  });

  L('p1-math-chisla-do-20', {
    title: 'Числата от 11 до 20',
    emoji: '🔢',
    minutes: 12,
    intro: 'Числата от 11 до 20 са двуцифрени. Те са съставени от една десетица и още единици.',
    parentTip: 'Използвайте връзки от по 10 клечки (десетица) и отделни клечки (единици). 13 = една връзка и 3 клечки.',
    sections: [
      { title: 'Десетица и единици', blocks: [
        { type: 'cards', items: [
          { pic: '10 + 1', label: '11 = 10 + 1', say: 'Единадесет е десет и едно.', color: '#5ec8f2' },
          { pic: '10 + 5', label: '15 = 10 + 5', say: 'Петнадесет е десет и пет.', color: '#ffd23f' },
          { pic: '10 + 10', label: '20 = 10 + 10', say: 'Двадесет е две десетици.', color: '#7bdcb5' }
        ] },
        { type: 'say', text: 'В числото 14 цифрата 1 показва една десетица, а 4 — четири единици.' }
      ] },
      { title: 'Редът', blocks: [
        { type: 'picture', picture: { sequence: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'] } }
      ] }
    ],
    tasks: [
      { question: '10 + 3 = ?', options: [12, 13, 31], answer: 13 },
      { question: 'Колко единици има в числото 17?', options: [1, 7, 17], answer: 7 },
      { question: 'Кое число е след 15?', options: [14, 16, 17], answer: 16 },
      { question: 'Кое е по-голямо?', options: [12, 19], answer: 19 },
      { question: 'Едноцифрено или двуцифрено е числото 8?', options: ['едноцифрено', 'двуцифрено'], answer: 'едноцифрено' }
    ]
  });

  L('p1-math-santimetar', {
    title: 'Отсечка и сантиметър',
    emoji: '📏',
    minutes: 12,
    intro: 'Отсечката е права линия с начало и край. Дължината ѝ мерим с линийка в сантиметри (см).',
    parentTip: 'Мерете с линийка заедно: молив, гума, пръст. Покажете, че мерим от нулата, а не от края на линийката.',
    sections: [
      { title: 'Отсечка', blocks: [
        { type: 'draw', height: 30, guides: ['M15 15 L85 15'], marks: [{ pic: '🔴', x: 15, y: 15 }, { pic: '🔴', x: 85, y: 15 }] },
        { type: 'say', text: 'Свържи двете точки с права линия. Получи отсечка!' }
      ] },
      { title: 'Сантиметър', blocks: [
        { type: 'picture', picture: { grid: { cols: 6, rows: 1, items: [{ c: 1, r: 1, mark: true }, { c: 2, r: 1, mark: true }, { c: 3, r: 1, mark: true }, { c: 4, r: 1, mark: true }] } }, caption: 'Всяко квадратче е 1 см. Отсечката е 4 см.' },
        { type: 'say', text: 'Като мерим с линийка, започваме от нулата.' }
      ] }
    ],
    tasks: [
      { question: 'Колко сантиметра е оцветената отсечка?', picture: { grid: { cols: 8, rows: 1, items: [{ c: 1, r: 1, mark: true }, { c: 2, r: 1, mark: true }, { c: 3, r: 1, mark: true }, { c: 4, r: 1, mark: true }, { c: 5, r: 1, mark: true }, { c: 6, r: 1, mark: true }] } }, options: ['5 см', '6 см', '8 см'], answer: '6 см' },
      { question: 'С какво мерим дължина?', options: [{ value: 'ruler', pic: '📏', label: 'с линийка' }, { value: 'scale', pic: '⚖️', label: 'с везна' }], answer: 'ruler' },
      { question: 'Откъде започваме да мерим?', options: ['от нулата', 'от единицата'], answer: 'от нулата' },
      { question: 'Отсечка от 3 см и отсечка от 4 см. Колко общо?', options: ['6 см', '7 см', '8 см'], answer: '7 см' }
    ]
  });

  L('p1-math-figuri', {
    title: 'Триъгълник, кръг, квадрат, правоъгълник',
    emoji: '🔷',
    minutes: 10,
    intro: 'Фигурите имат страни и върхове. Да ги преброим!',
    parentTip: 'Търсете фигури в стаята и броете страните им с пръст. Начертайте фигура и нека Ая отбележи върховете с точки.',
    sections: [
      { title: 'Страни и върхове', blocks: [
        { type: 'cards', items: [
          { pic: '🔺', label: 'триъгълник', sub: '3 страни, 3 върха', color: '#ffd23f' },
          { pic: '🟥', label: 'квадрат', sub: '4 еднакви страни, 4 върха', color: '#ff8fb1' },
          { pic: '[pravoagalnik]', label: 'правоъгълник', sub: '2 дълги и 2 къси страни, 4 върха', color: '#5ec8f2' },
          { pic: '🔵', label: 'кръг', sub: 'няма страни и върхове', color: '#7bdcb5' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Колко върха има триъгълникът?', picture: { pic: '🔺' }, options: [3, 4, 5], answer: 3 },
      { question: 'Коя фигура няма върхове?', options: [{ value: 'circle', pic: '🔵' }, { value: 'square', pic: '🟥' }, { value: 'triangle', pic: '🔺' }], answer: 'circle' },
      { question: 'Колко страни имат общо 2 квадрата?', picture: { pic: '🟥🟥' }, options: [6, 8, 10], answer: 8 },
      { question: 'Коя фигура има 2 дълги и 2 къси страни?', options: [{ value: 'rect', pic: '[pravoagalnik]' }, { value: 'square', pic: '🟥' }], answer: 'rect' }
    ]
  });

  L('p1-math-do-20', {
    title: 'Събиране и изваждане до 20 без преминаване',
    emoji: '➕',
    minutes: 12,
    intro: 'Когато събираме 12 + 5, десетицата остава, а събираме само единиците: 2 + 5 = 7, значи 12 + 5 = 17.',
    parentTip: 'Обяснявайте с „десетицата стои, единиците работят“. Пишете задачите в колонка, за да се виждат десетиците и единиците.',
    sections: [
      { title: 'Десетицата стои', blocks: [
        { type: 'story', panels: [
          { pic: '13 + 4', text: 'В 13 има 1 десетица и 3 единици.' },
          { pic: '3 + 4 = 7', text: 'Събираме единиците: 3 + 4 = 7.' },
          { pic: '13 + 4 = 17', text: 'Десетицата остава: 17.' }
        ] },
        { type: 'say', text: 'Същото при изваждане: 18 − 5. Единиците: 8 − 5 = 3. Значи 18 − 5 = 13.' }
      ] }
    ],
    tasks: [
      { question: '12 + 5 = ?', options: [16, 17, 18], answer: 17 },
      { question: '14 + 3 = ?', options: [16, 17, 18], answer: 17 },
      { question: '19 − 6 = ?', options: [12, 13, 14], answer: 13 },
      { question: '16 − 6 = ?', options: [10, 11, 12], answer: 10 },
      { question: '11 + 8 = ?', options: [18, 19, 20], answer: 19 }
    ]
  });

  L('p1-math-sabirane-s-preminavane', {
    title: 'Събиране с преминаване на десетицата',
    emoji: '🔁',
    minutes: 15,
    intro: 'Когато сборът мине 10, допълваме първо до 10, а после добавяме останалото.',
    parentTip: 'Ключът е „допълни до 10“: 8 + 5 → 8 + 2 = 10, остават 3 → 13. Упражнявайте първо приятелите на 10.',
    sections: [
      { title: 'Допълни до 10', blocks: [
        { type: 'story', panels: [
          { pic: '9 + 4', text: 'Колко е 9 + 4?' },
          { pic: '9 + 1 = 10', text: 'От 4 взимаме 1, за да допълним 9 до 10.' },
          { pic: '10 + 3 = 13', text: 'Остават 3. 10 + 3 = 13.' }
        ] }
      ] },
      { title: 'Още примери', blocks: [
        { type: 'cards', items: [
          { pic: '8 + 5', label: '8 + 2 + 3 = 13', color: '#5ec8f2' },
          { pic: '7 + 6', label: '7 + 3 + 3 = 13', color: '#ffd23f' },
          { pic: '6 + 6', label: '6 + 4 + 2 = 12', color: '#7bdcb5' }
        ] }
      ] }
    ],
    tasks: [
      { question: '9 + 3 = ?', options: [11, 12, 13], answer: 12 },
      { question: '8 + 4 = ?', options: [11, 12, 13], answer: 12 },
      { question: '7 + 5 = ?', options: [11, 12, 13], answer: 12 },
      { question: '6 + 7 = ?', options: [12, 13, 14], answer: 13 },
      { question: '9 + 9 = ?', options: [17, 18, 19], answer: 18 },
      { question: 'Колко добавяме към 8, за да стане 10?', options: [1, 2, 3], answer: 2 }
    ]
  });

  L('p1-math-izvazhdane-s-preminavane', {
    title: 'Изваждане с преминаване на десетицата',
    emoji: '➖',
    minutes: 15,
    intro: 'Когато изваждаме 13 − 5, първо слизаме до 10, а после изваждаме останалото.',
    parentTip: 'Покажете на числова линия: от 13 правим 3 крачки назад до 10, после още 2 — до 8.',
    sections: [
      { title: 'Първо до 10', blocks: [
        { type: 'story', panels: [
          { pic: '13 − 5', text: 'Колко е 13 − 5?' },
          { pic: '13 − 3 = 10', text: 'Първо изваждаме 3, за да стигнем до 10.' },
          { pic: '10 − 2 = 8', text: 'От 5 остават още 2. 10 − 2 = 8.' }
        ] }
      ] }
    ],
    tasks: [
      { question: '12 − 3 = ?', options: [8, 9, 10], answer: 9 },
      { question: '14 − 6 = ?', options: [7, 8, 9], answer: 8 },
      { question: '11 − 4 = ?', options: [6, 7, 8], answer: 7 },
      { question: '15 − 7 = ?', options: [7, 8, 9], answer: 8 },
      { question: '17 − 9 = ?', options: [7, 8, 9], answer: 8 }
    ]
  });

  L('p1-math-komponenti', {
    title: 'Събираемо, сбор, умаляемо, умалител, разлика',
    emoji: '🏷️',
    minutes: 10,
    intro: 'Числата в задачите си имат имена. Така по-лесно говорим за тях.',
    parentTip: 'Използвайте имената при всяка задача: „Кое е умалителят тук?“. Покажете проверката: разликата + умалителя = умаляемото.',
    sections: [
      { title: 'При събиране', blocks: [
        { type: 'cards', items: [
          { pic: '7', label: 'събираемо', color: '#5ec8f2' },
          { pic: '+ 5', label: 'събираемо', color: '#5ec8f2' },
          { pic: '= 12', label: 'сбор', color: '#7bdcb5' }
        ] }
      ] },
      { title: 'При изваждане', blocks: [
        { type: 'cards', items: [
          { pic: '12', label: 'умаляемо', color: '#ffd23f' },
          { pic: '− 5', label: 'умалител', color: '#ff8fb1' },
          { pic: '= 7', label: 'разлика', color: '#7bdcb5' }
        ] },
        { type: 'say', text: 'Проверка: 7 + 5 = 12. Разликата и умалителят дават умаляемото.' }
      ] }
    ],
    tasks: [
      { question: 'Как се казва резултатът при събиране?', options: ['сбор', 'разлика', 'умалител'], answer: 'сбор' },
      { question: 'Как се казва резултатът при изваждане?', options: ['сбор', 'разлика'], answer: 'разлика' },
      { question: 'В 15 − 4 = 11 кое число е умалителят?', options: [15, 4, 11], answer: 4 },
      { question: 'Събираемите са 6 и 8. Колко е сборът?', options: [13, 14, 15], answer: 14 }
    ]
  });

  L('p1-math-chas', {
    title: 'Час',
    emoji: '🕐',
    minutes: 10,
    intro: 'Времето мерим с часовник. Малката стрелка показва часа. Когато голямата сочи 12, часът е точен.',
    parentTip: 'Използвайте истински часовник със стрелки. Свързвайте часовете с дневния режим: „В 8 часа тръгваме за училище.“',
    sections: [
      { title: 'Точни часове', blocks: [
        { type: 'cards', items: [
          { pic: '🕗', label: '8 часа', sub: 'тръгваме за училище', color: '#ffd23f' },
          { pic: '🕛', label: '12 часа', sub: 'обед', color: '#5ec8f2' },
          { pic: '🕔', label: '5 часа', sub: 'игра в парка', color: '#7bdcb5' },
          { pic: '🕘', label: '9 часа', sub: 'време за сън', color: '#c38bff' }
        ] },
        { type: 'say', text: 'Денонощието има 24 часа.' }
      ] }
    ],
    tasks: [
      { question: 'Колко часа показва часовникът?', picture: { pic: '🕒' }, options: ['2 часа', '3 часа', '12 часа'], answer: '3 часа' },
      { question: 'Колко часа показва часовникът?', picture: { pic: '🕖' }, options: ['7 часа', '6 часа', '8 часа'], answer: '7 часа' },
      { question: 'Кой часовник показва 10 часа?', options: [{ value: 10, pic: '🕙' }, { value: 2, pic: '🕑' }, { value: 4, pic: '🕓' }], answer: 10 },
      { question: 'Колко часа има едно денонощие?', options: [12, 24, 60], answer: 24 }
    ]
  });

  L('p1-math-tekstovi', {
    title: 'Текстови задачи',
    emoji: '📝',
    minutes: 15,
    intro: 'Текстовата задача е малка история с въпрос. Четем внимателно, решаваме и пишем отговор.',
    parentTip: 'Учете Ая на три стъпки: 1) Какво знаем? 2) Какво търсим? 3) Събиране или изваждане? Нека разказва задачата със свои думи.',
    sections: [
      { title: 'Три стъпки', blocks: [
        { type: 'story', panels: [
          { pic: '📖', text: 'Задача: Ая има 8 молива. Мама ѝ купила още 5. Колко молива има Ая?' },
          { pic: '🔍', text: 'Знаем: 8 молива и още 5. Търсим: колко са всичко.' },
          { pic: '➕', text: '„Още“ — значи събираме: 8 + 5 = 13.' },
          { pic: '✅', text: 'Отговор: Ая има 13 молива.' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'В клетката има 7 папагала. Долетели още 4. Колко папагала има?', picture: { pic: '🦜' }, options: [3, 11, 12], answer: 11 },
      { question: 'На дървото имало 15 ябълки. Паднали 6. Колко ябълки останали?', picture: { pic: '🍎🌳' }, options: [8, 9, 21], answer: 9 },
      { question: 'Ая има 9 евро, а приятелката ѝ — 3 евро повече. Колко евро има приятелката ѝ?', options: [6, 12, 13], answer: 12 },
      { question: 'В „Имало 12 бонбона, изядени били 4“ какво правим?', options: ['изваждаме', 'събираме'], answer: 'изваждаме' }
    ]
  });

  L('p1-math-desetitsi', {
    title: 'Числата 10, 20, 30, …, 100',
    emoji: '💯',
    minutes: 10,
    intro: 'Когато броим по десетици, казваме: десет, двадесет, тридесет… до сто.',
    parentTip: 'Броете монети по 10 цента или клечки на връзки по 10. Покажете, че 30 + 20 = 50 е същото като 3 + 2 = 5, но с десетици.',
    sections: [
      { title: 'Кръгли десетици', blocks: [
        { type: 'picture', picture: { sequence: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'] } },
        { type: 'say', text: '100 — сто — е десет десетици.' }
      ] },
      { title: 'Смятаме с десетици', blocks: [
        { type: 'cards', items: [
          { pic: '20 + 30', label: '= 50', sub: '2 + 3 = 5 десетици', color: '#5ec8f2' },
          { pic: '70 − 40', label: '= 30', sub: '7 − 4 = 3 десетици', color: '#ffd23f' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Кое число е след 40?', picture: { sequence: ['30', '40', '?'] }, options: [41, 50, 60], answer: 50 },
      { question: '30 + 40 = ?', options: [60, 70, 80], answer: 70 },
      { question: '90 − 50 = ?', options: [30, 40, 50], answer: 40 },
      { question: 'Колко десетици има в 100?', options: [1, 10, 100], answer: 10 }
    ]
  });
})();
