// 3. клас, Английски език.
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
    stage: 'primary', subject: 'english', group: 3, minutes: 10,
    parentTip: 'Повтаряйте изреченията на глас с картичките. Използвайте английския в ежедневието: „Where is your bag?“, „What day is it today?“'
  }, data); };

  L('p3-en-classroom', {
    title: 'In the classroom — в класната стая',
    emoji: '🏫',
    intro: 'Open your book! Sit down, please! Да научим думите и командите в класната стая.',
    sections: [
      { title: 'В класната стая', blocks: [words([
        ['🪑', 'chair', 'стол'], ['🟫', 'desk', 'чин'], ['🧑‍🏫', 'teacher', 'учител'], ['🖍️', 'crayon', 'пастел'],
        ['🧽', 'rubber', 'гума'], ['🪟', 'window', 'прозорец'], ['🚪', 'door', 'врата'], ['🗺️', 'map', 'карта']
      ])] },
      { title: 'Команди', blocks: [words([
        ['📖', 'Open your book!', 'Отвори книгата си!'], ['📕', 'Close your book!', 'Затвори книгата си!'],
        ['🪑', 'Sit down, please!', 'Седни, моля!'], ['🧍', 'Stand up!', 'Стани!'], ['👂', 'Listen!', 'Слушай!']
      ])] }
    ],
    tasks: [
      listen('chair', '🪑', [['door', '🚪'], ['window', '🪟']]),
      listen('teacher', '🧑‍🏫', [['map', '🗺️'], ['crayon', '🖍️']]),
      translate('врата', 'door', ['desk', 'window']),
      { question: 'Какво значи „Stand up!“?', options: ['Стани!', 'Седни!'], answer: 'Стани!' }
    ]
  });

  L('p3-en-house', {
    title: 'My house — моят дом',
    emoji: '🏠',
    intro: 'This is my house. There is a kitchen and there are two bedrooms. Да опознаем стаите!',
    sections: [
      { title: 'Стаите', blocks: [words([
        ['🍳', 'kitchen', 'кухня'], ['🛏️', 'bedroom', 'спалня'], ['🛁', 'bathroom', 'баня'], ['🛋️', 'living room', 'хол'], ['🌳', 'garden', 'градина']
      ])] },
      { title: 'There is / There are', blocks: [words([
        ['🛋️', 'There is a sofa.', 'Има един диван.'], ['🪑🪑', 'There are two chairs.', 'Има два стола.']
      ])] }
    ],
    tasks: [
      listen('kitchen', '🍳', [['bathroom', '🛁'], ['garden', '🌳']]),
      listen('bedroom', '🛏️', [['living room', '🛋️'], ['kitchen', '🍳']]),
      { question: 'Кое е правилно: „There ___ three cats.“', options: ['is', 'are'], answer: 'are' },
      { question: 'Кое е правилно: „There ___ a table.“', options: ['is', 'are'], answer: 'is' }
    ]
  });

  L('p3-en-clothes', {
    title: 'Clothes — дрехите',
    emoji: '👕',
    intro: 'I’m wearing a red T-shirt! Да научим дрехите на английски.',
    sections: [
      { title: 'Дрехите', blocks: [words([
        ['👕', 'T-shirt', 'тениска'], ['👖', 'jeans', 'дънки'], ['👗', 'dress', 'рокля'], ['🧥', 'coat', 'палто'],
        ['👟', 'shoes', 'обувки'], ['🧦', 'socks', 'чорапи'], ['🧢', 'cap', 'шапка с козирка'], ['🧣', 'scarf', 'шал']
      ])] }
    ],
    tasks: [
      listen('dress', '👗', [['coat', '🧥'], ['socks', '🧦']]),
      listen('shoes', '👟', [['cap', '🧢'], ['scarf', '🧣']]),
      translate('дънки', 'jeans', ['dress', 'T-shirt']),
      { question: 'Какво обличаме, когато е студено?', options: ['coat', 'T-shirt'], answer: 'coat' }
    ]
  });

  L('p3-en-can', {
    title: 'I can… — мога',
    emoji: '💪',
    intro: 'I can swim. I can’t fly. С „can“ казваме какво можем, а с „can’t“ — какво не можем.',
    sections: [
      { title: 'Действия', blocks: [words([
        ['🏊', 'swim', 'плувам'], ['🏃', 'run', 'тичам'], ['🦘', 'jump', 'скачам'], ['🎤', 'sing', 'пея'],
        ['💃', 'dance', 'танцувам'], ['🚲', 'ride a bike', 'карам колело'], ['🐦', 'fly', 'летя']
      ])] },
      { title: 'Мога — не мога', blocks: [words([
        ['🐟', 'A fish can swim.', 'Рибата може да плува.'], ['🐟🚫', 'A fish can’t run.', 'Рибата не може да тича.'],
        ['❓', 'Can you dance?', 'Можеш ли да танцуваш?'], ['👍', 'Yes, I can!', 'Да, мога!']
      ])] }
    ],
    tasks: [
      listen('swim', '🏊', [['run', '🏃'], ['sing', '🎤']]),
      listen('jump', '🦘', [['dance', '💃'], ['fly', '🐦']]),
      { question: 'A bird can ___.', picture: { pic: '🐦' }, options: ['fly', 'swim', 'ride a bike'], answer: 'fly' },
      { question: 'Какво значи „I can’t sing.“?', options: ['Не мога да пея.', 'Мога да пея.'], answer: 'Не мога да пея.' }
    ]
  });

  L('p3-en-days', {
    title: 'Days and weather — дни и време',
    emoji: '🌦️',
    intro: 'What day is it today? What’s the weather like? Дните на седмицата и времето на английски.',
    sections: [
      { title: 'Дните', blocks: [words([
        ['1', 'Monday', 'понеделник'], ['2', 'Tuesday', 'вторник'], ['3', 'Wednesday', 'сряда'], ['4', 'Thursday', 'четвъртък'],
        ['5', 'Friday', 'петък'], ['6', 'Saturday', 'събота'], ['7', 'Sunday', 'неделя']
      ])] },
      { title: 'Времето', blocks: [words([
        ['☀️', 'It’s sunny.', 'Слънчево е.'], ['🌧️', 'It’s rainy.', 'Вали дъжд.'], ['❄️', 'It’s snowy.', 'Вали сняг.'],
        ['☁️', 'It’s cloudy.', 'Облачно е.'], ['💨', 'It’s windy.', 'Ветровито е.']
      ])] }
    ],
    tasks: [
      translate('петък', 'Friday', ['Monday', 'Sunday']),
      { question: 'Кой ден е след Monday?', options: ['Tuesday', 'Thursday', 'Sunday'], answer: 'Tuesday' },
      { question: 'What’s the weather like?', picture: { pic: '🌧️' }, options: ['It’s rainy.', 'It’s sunny.'], answer: 'It’s rainy.' },
      listen('It’s snowy.', '❄️', [['It’s sunny.', '☀️'], ['It’s windy.', '💨']])
    ]
  });

  L('p3-en-like', {
    title: 'I like… — хобита',
    emoji: '⚽',
    intro: 'I like football. I don’t like… Какво обичаш да правиш?',
    sections: [
      { title: 'Хобита', blocks: [words([
        ['⚽', 'football', 'футбол'], ['🎨', 'painting', 'рисуване'], ['📚', 'reading', 'четене'],
        ['🎮', 'computer games', 'компютърни игри'], ['🎹', 'music', 'музика'], ['🩰', 'ballet', 'балет']
      ])] },
      { title: 'Харесвам', blocks: [words([
        ['😍', 'I like reading.', 'Обичам да чета.'], ['🙅', 'I don’t like football.', 'Не обичам футбол.'],
        ['❓', 'Do you like music?', 'Обичаш ли музика?'], ['👍', 'Yes, I do!', 'Да!']
      ])] }
    ],
    tasks: [
      listen('painting', '🎨', [['reading', '📚'], ['football', '⚽']]),
      translate('четене', 'reading', ['painting', 'ballet']),
      { question: 'Какво значи „I don’t like football.“?', options: ['Не обичам футбол.', 'Обичам футбол.'], answer: 'Не обичам футбол.' },
      { question: '„Do you like music?“ — ?', options: ['Yes, I do!', 'Yes, I am!'], answer: 'Yes, I do!' }
    ]
  });
})();
