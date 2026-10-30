// 4. клас, Английски език.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const COLORS = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: COLORS[i % COLORS.length] })) });
  const listen = (en, answerPic, others) => ({
    question: 'Чуй. Коя е картинката?',
    listen: { text: en },
    options: [{ value: en, pic: answerPic }, ...others.map(([w, p]) => ({ value: w, pic: p }))].sort((a, b) => a.value.localeCompare(b.value)),
    answer: en
  });
  const translate = (bg, en, wrong) => ({ question: `Как е на английски „${bg}“?`, options: [en, ...wrong].sort(), answer: en });
  const L = (id, data) => { window.LESSONS[id] = Object.assign({
    stage: 'primary', subject: 'english', group: 4, minutes: 10,
    parentTip: 'Говорете по малко на английски всеки ден: „What time is it?“, „What do you have for breakfast?“ Хвалете всеки опит, дори с грешки.'
  }, data); };

  L('p4-en-my-day', {
    title: 'My day — моят ден',
    emoji: '⏰',
    intro: 'I get up at seven o’clock. Да разкажем за деня си на английски!',
    sections: [
      { title: 'Какво правя', blocks: [words([
        ['⏰', 'get up', 'ставам'], ['🪥', 'brush my teeth', 'мия си зъбите'], ['🥣', 'have breakfast', 'закусвам'],
        ['🏫', 'go to school', 'отивам на училище'], ['🍝', 'have lunch', 'обядвам'], ['📝', 'do my homework', 'пиша домашни'],
        ['🛌', 'go to bed', 'лягам си']
      ])] },
      { title: 'Колко е часът?', blocks: [words([
        ['🕖', 'It’s seven o’clock.', 'Седем часът е.'], ['🕢', 'It’s half past seven.', 'Седем и половина е.'],
        ['❓', 'What time is it?', 'Колко е часът?']
      ])] }
    ],
    tasks: [
      listen('have breakfast', '🥣', [['go to bed', '🛌'], ['go to school', '🏫']]),
      listen('brush my teeth', '🪥', [['get up', '⏰'], ['do my homework', '📝']]),
      { question: 'What time is it?', picture: { pic: '🕖' }, options: ['It’s seven o’clock.', 'It’s half past seven.'], answer: 'It’s seven o’clock.' },
      translate('лягам си', 'go to bed', ['get up', 'have lunch'])
    ]
  });

  L('p4-en-present-simple', {
    title: 'Present Simple — he plays',
    emoji: '📅',
    intro: 'I play. She plays! Когато говорим за he, she или it, добавяме -s към глагола.',
    sections: [
      { title: 'Добавяме -s', blocks: [words([
        ['🙋‍♀️', 'I play tennis.', 'Аз играя тенис.'], ['👧', 'She plays tennis.', 'Тя играе тенис.'],
        ['👦', 'He reads books.', 'Той чете книги.'], ['🐱', 'It drinks milk.', 'То пие мляко.']
      ])] },
      { title: 'Не и въпрос', blocks: [words([
        ['🙅', 'I don’t like fish.', 'Не обичам риба.'], ['🙅‍♀️', 'She doesn’t like fish.', 'Тя не обича риба.'],
        ['❓', 'Does he play football?', 'Той играе ли футбол?'], ['👍', 'Yes, he does.', 'Да.']
      ])] }
    ],
    tasks: [
      { question: 'She ___ to school every day.', options: ['goes', 'go'], answer: 'goes' },
      { question: 'I ___ milk in the morning.', options: ['drink', 'drinks'], answer: 'drink' },
      { question: 'He ___ like spiders.', options: ['doesn’t', 'don’t'], answer: 'doesn’t' },
      { question: '___ she play the piano?', options: ['Does', 'Do'], answer: 'Does' },
      { question: 'Какво значи „He reads books.“?', options: ['Той чете книги.', 'Аз чета книги.'], answer: 'Той чете книги.' }
    ]
  });

  L('p4-en-town', {
    title: 'My town — моят град',
    emoji: '🏙️',
    intro: 'There is a park next to my school. Да научим местата в града и къде се намират.',
    sections: [
      { title: 'Места', blocks: [words([
        ['🏫', 'school', 'училище'], ['🏞️', 'park', 'парк'], ['🏪', 'shop', 'магазин'], ['🏥', 'hospital', 'болница'],
        ['📚', 'library', 'библиотека'], ['☕', 'café', 'кафене'], ['🏦', 'bank', 'банка'], ['🚉', 'station', 'гара']
      ])] },
      { title: 'Къде е?', blocks: [words([
        ['📦', 'in', 'в'], ['🔝', 'on', 'на (върху)'], ['⬇️', 'under', 'под'], ['↔️', 'next to', 'до'], ['⏸️', 'between', 'между']
      ]), { type: 'say', text: 'There is a café next to the bank. There are two shops in my street.' }] }
    ],
    tasks: [
      listen('library', '📚', [['hospital', '🏥'], ['station', '🚉']]),
      listen('park', '🏞️', [['shop', '🏪'], ['bank', '🏦']]),
      translate('до', 'next to', ['under', 'between']),
      { question: 'The cat is ___ the table.', picture: { pic: '🐈⬇️' }, options: ['under', 'on'], answer: 'under' },
      { question: 'There ___ a hospital in my town.', options: ['is', 'are'], answer: 'is' }
    ]
  });

  L('p4-en-months', {
    title: 'Seasons and months — сезони и месеци',
    emoji: '🍂',
    intro: 'My birthday is in October! Да научим сезоните и месеците.',
    sections: [
      { title: 'Сезоните', blocks: [words([
        ['🌸', 'spring', 'пролет'], ['☀️', 'summer', 'лято'], ['🍂', 'autumn', 'есен'], ['❄️', 'winter', 'зима']
      ])] },
      { title: 'Месеците', blocks: [words([
        ['❄️', 'January', 'януари'], ['❄️', 'February', 'февруари'], ['🌸', 'March', 'март'], ['🌸', 'April', 'април'],
        ['🌸', 'May', 'май'], ['☀️', 'June', 'юни'], ['☀️', 'July', 'юли'], ['☀️', 'August', 'август'],
        ['🍂', 'September', 'септември'], ['🎂', 'October', 'октомври'], ['🍂', 'November', 'ноември'], ['🎄', 'December', 'декември']
      ]), { type: 'say', text: 'Месеците на английски винаги се пишат с главна буква: October.' }] }
    ],
    tasks: [
      listen('autumn', '🍂', [['spring', '🌸'], ['winter', '❄️']]),
      { question: 'When is Ая’s birthday?', picture: { pic: '🎂' }, options: ['in October', 'in May', 'in July'], answer: 'in October' },
      translate('декември', 'December', ['November', 'September']),
      { question: 'Кой месец е след March?', options: ['April', 'May', 'February'], answer: 'April' },
      { question: 'It’s hot and sunny. It’s ___.', options: ['summer', 'winter'], answer: 'summer' }
    ]
  });

  L('p4-en-food', {
    title: 'Food — храна',
    emoji: '🥪',
    intro: 'Can I have a sandwich, please? Да научим храните и как учтиво да си поръчаме.',
    sections: [
      { title: 'Храни и напитки', blocks: [words([
        ['🍞', 'bread', 'хляб'], ['🧀', 'cheese', 'сирене'], ['🥚', 'eggs', 'яйца'], ['🥪', 'sandwich', 'сандвич'],
        ['🥛', 'milk', 'мляко'], ['🧃', 'juice', 'сок'], ['🍗', 'chicken', 'пиле'], ['🥗', 'salad', 'салата']
      ])] },
      { title: 'Учтиво', blocks: [words([
        ['🙋‍♀️', 'Can I have some juice, please?', 'Може ли малко сок, моля?'], ['🙏', 'Thank you!', 'Благодаря!'],
        ['😋', 'I’m hungry.', 'Гладна съм.'], ['🥤', 'I’m thirsty.', 'Жадна съм.']
      ])] }
    ],
    tasks: [
      listen('cheese', '🧀', [['bread', '🍞'], ['eggs', '🥚']]),
      listen('juice', '🧃', [['milk', '🥛'], ['salad', '🥗']]),
      translate('пиле', 'chicken', ['cheese', 'sandwich']),
      { question: 'Кое е учтиво?', options: ['Can I have some milk, please?', 'Milk!'], answer: 'Can I have some milk, please?' },
      { question: 'Какво значи „I’m thirsty.“?', options: ['Жадна съм.', 'Гладна съм.'], answer: 'Жадна съм.' }
    ]
  });

  L('p4-en-animals', {
    title: 'Wild animals — дивите животни',
    emoji: '🦁',
    intro: 'An elephant has got big ears. С „has got“ казваме какво има едно животно.',
    sections: [
      { title: 'В зоопарка', blocks: [words([
        ['🦁', 'lion', 'лъв'], ['🐘', 'elephant', 'слон'], ['🦒', 'giraffe', 'жираф'], ['🦓', 'zebra', 'зебра'],
        ['🐒', 'monkey', 'маймуна'], ['🐊', 'crocodile', 'крокодил'], ['🐻', 'bear', 'мечка'], ['🐍', 'snake', 'змия']
      ])] },
      { title: 'Has got', blocks: [words([
        ['🦒', 'A giraffe has got a long neck.', 'Жирафът има дълга шия.'],
        ['🐘', 'An elephant has got big ears.', 'Слонът има големи уши.'],
        ['🦓', 'A zebra has got stripes.', 'Зебрата има ивици.'],
        ['🐍', 'A snake hasn’t got legs.', 'Змията няма крака.']
      ])] }
    ],
    tasks: [
      listen('giraffe', '🦒', [['zebra', '🦓'], ['lion', '🦁']]),
      listen('monkey', '🐒', [['bear', '🐻'], ['crocodile', '🐊']]),
      { question: 'Кое животно има дълга шия?', options: [{ value: 'giraffe', pic: '🦒' }, { value: 'snake', pic: '🐍' }], answer: 'giraffe' },
      { question: 'A snake ___ got legs.', options: ['hasn’t', 'has'], answer: 'hasn’t' },
      translate('мечка', 'bear', ['lion', 'monkey'])
    ]
  });
})();
