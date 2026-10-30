// 2. клас, Английски език. Думите се четат на английски (voice: en-GB).
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const COLORS = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  // Картичка с английска дума: голяма картинка, думата на английски, превод отдолу.
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: COLORS[i % COLORS.length] })) });
  // Задача: чуваш дума на английски и избираш картинката.
  const listen = (en, answerPic, others) => ({
    question: 'Чуй думата. Коя е картинката?',
    listen: { text: en },
    options: [{ value: en, pic: answerPic }, ...others.map(([w, p]) => ({ value: w, pic: p }))].sort((a, b) => a.value.localeCompare(b.value)),
    answer: en
  });
  // Задача: как е на английски?
  const translate = (bg, en, wrong) => ({ question: `Как е на английски „${bg}“?`, options: [en, ...wrong].sort(), answer: en });

  const L = (id, data) => { window.LESSONS[id] = Object.assign({
    stage: 'primary', subject: 'english', group: 2, minutes: 10,
    parentTip: 'Натискайте картичките и повтаряйте думите на глас заедно. Не превеждайте всичко — сочете предметите и казвайте думата на английски. Кратко и често е най-добре.'
  }, data); };

  L('p2-en-hello', {
    title: 'Hello! Поздрави и представяне',
    emoji: '👋',
    intro: 'Hello! Днес ще се научим да поздравяваме и да казваме името си на английски.',
    sections: [
      { title: 'Поздрави', blocks: [words([
        ['👋', 'Hello!', 'Здравей!'], ['🙋', 'Hi!', 'Здрасти!'], ['👋🚪', 'Goodbye!', 'Довиждане!'],
        ['🌅', 'Good morning!', 'Добро утро!'], ['🙏', 'Thank you!', 'Благодаря!']
      ])] },
      { title: 'Как се казваш?', blocks: [words([
        ['❓', 'What’s your name?', 'Как се казваш?'], ['👧', 'I’m Aya.', 'Аз съм Ая.'],
        ['🙂', 'How are you?', 'Как си?'], ['😊', 'I’m fine, thank you.', 'Добре съм, благодаря.']
      ])] }
    ],
    tasks: [
      translate('Здравей!', 'Hello!', ['Goodbye!', 'Thank you!']),
      translate('Довиждане!', 'Goodbye!', ['Hello!', 'Good morning!']),
      { question: 'Някой те пита „What’s your name?“. Какво отговаряш?', options: ['I’m Aya.', 'I’m fine.'], answer: 'I’m Aya.' },
      { question: 'Какво значи „Thank you!“?', options: ['Благодаря!', 'Здравей!'], answer: 'Благодаря!' }
    ]
  });

  L('p2-en-colours', {
    title: 'Colours — цветовете',
    emoji: '🌈',
    intro: 'Red, blue, yellow… Да научим цветовете на английски!',
    sections: [
      { title: 'Цветовете', blocks: [words([
        ['🔴', 'red', 'червено'], ['🔵', 'blue', 'синьо'], ['🟡', 'yellow', 'жълто'], ['🟢', 'green', 'зелено'],
        ['🟠', 'orange', 'оранжево'], ['🟣', 'purple', 'лилаво'], ['🩷', 'pink', 'розово'], ['⚫', 'black', 'черно'],
        ['⚪', 'white', 'бяло'], ['🟤', 'brown', 'кафяво']
      ])] }
    ],
    tasks: [
      listen('green', '🟢', [['red', '🔴'], ['blue', '🔵']]),
      listen('yellow', '🟡', [['purple', '🟣'], ['black', '⚫']]),
      translate('червено', 'red', ['blue', 'green']),
      { question: 'What colour is the banana?', picture: { pic: '🍌' }, options: ['yellow', 'blue', 'pink'], answer: 'yellow' },
      { question: 'What colour is the frog?', picture: { pic: '🐸' }, options: ['brown', 'green', 'white'], answer: 'green' }
    ]
  });

  const NUM = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  L('p2-en-numbers', {
    title: 'Numbers — числата до 20',
    emoji: '🔢',
    intro: 'One, two, three… Да броим на английски!',
    sections: [
      { title: 'От 1 до 10', blocks: [words(NUM.slice(0, 10).map((w, i) => [String(i + 1), w, '']))] },
      { title: 'От 11 до 20', blocks: [words(NUM.slice(10).map((w, i) => [String(i + 11), w, '']))] }
    ],
    tasks: [
      { question: 'Чуй числото. Кое е?', listen: { text: 'seven' }, options: [5, 7, 9], answer: 7 },
      { question: 'Чуй числото. Кое е?', listen: { text: 'twelve' }, options: [12, 20, 2], answer: 12 },
      { question: 'How many apples?', picture: { emoji: '🍎', count: 4 }, options: ['three', 'four', 'five'], answer: 'four' },
      translate('десет', 'ten', ['two', 'twenty']),
      { question: 'Five + one = ?', options: ['six', 'seven', 'four'], answer: 'six' }
    ]
  });

  L('p2-en-family', {
    title: 'My family — семейството',
    emoji: '👨‍👩‍👧',
    intro: 'This is my family! Да научим как се казват хората от семейството.',
    sections: [
      { title: 'Семейството', blocks: [words([
        ['👩', 'mum', 'мама'], ['👨', 'dad', 'тате'], ['👧', 'sister', 'сестра'], ['👦', 'brother', 'брат'],
        ['👵', 'grandma', 'баба'], ['👴', 'grandpa', 'дядо'], ['👶', 'baby', 'бебе'], ['🧔', 'uncle', 'чичо']
      ])] },
      { title: 'Това е…', blocks: [words([['👩', 'This is my mum.', 'Това е моята мама.'], ['🧔', 'This is my uncle.', 'Това е моят чичо.']])] }
    ],
    tasks: [
      listen('grandma', '👵', [['baby', '👶'], ['dad', '👨']]),
      listen('brother', '👦', [['sister', '👧'], ['grandpa', '👴']]),
      translate('тате', 'dad', ['mum', 'uncle']),
      { question: 'Какво значи „uncle“?', options: ['чичо', 'баба', 'брат'], answer: 'чичо' }
    ]
  });

  L('p2-en-animals', {
    title: 'Animals — животните',
    emoji: '🐶',
    intro: 'Cat, dog, bird… Животните на английски!',
    sections: [
      { title: 'Животните', blocks: [words([
        ['🐈', 'cat', 'котка'], ['🐶', 'dog', 'куче'], ['🐦', 'bird', 'птица'], ['🐟', 'fish', 'риба'],
        ['🐰', 'rabbit', 'заек'], ['🐴', 'horse', 'кон'], ['🐄', 'cow', 'крава'], ['🦆', 'duck', 'патица'],
        ['🦁', 'lion', 'лъв'], ['🐘', 'elephant', 'слон']
      ])] }
    ],
    tasks: [
      listen('dog', '🐶', [['cat', '🐈'], ['cow', '🐄']]),
      listen('elephant', '🐘', [['lion', '🦁'], ['horse', '🐴']]),
      listen('fish', '🐟', [['bird', '🐦'], ['duck', '🦆']]),
      translate('заек', 'rabbit', ['horse', 'duck']),
      { question: 'What is it?', picture: { pic: '🦁' }, options: ['lion', 'cat', 'dog'], answer: 'lion' }
    ]
  });

  L('p2-en-toys', {
    title: 'Toys and school — играчки и училище',
    emoji: '🧸',
    intro: 'Ball, doll, pencil, book… Нещата, с които играем и учим.',
    sections: [
      { title: 'Играчки', blocks: [words([
        ['⚽', 'ball', 'топка'], ['🪆', 'doll', 'кукла'], ['🚗', 'car', 'количка'], ['🧸', 'teddy bear', 'мече'], ['🪁', 'kite', 'хвърчило']
      ])] },
      { title: 'В училище', blocks: [words([
        ['✏️', 'pencil', 'молив'], ['🖊️', 'pen', 'химикалка'], ['📖', 'book', 'книга'], ['🎒', 'bag', 'раница'], ['📏', 'ruler', 'линийка']
      ])] }
    ],
    tasks: [
      listen('ball', '⚽', [['kite', '🪁'], ['book', '📖']]),
      listen('pencil', '✏️', [['ruler', '📏'], ['bag', '🎒']]),
      translate('мече', 'teddy bear', ['doll', 'car']),
      { question: 'What is it?', picture: { pic: '🎒' }, options: ['bag', 'pen', 'ball'], answer: 'bag' }
    ]
  });

  L('p2-en-body', {
    title: 'My body — тялото',
    emoji: '👃',
    intro: 'Head, eyes, nose… Да научим частите на тялото. Touch your nose!',
    sections: [
      { title: 'Тялото', blocks: [words([
        ['🙂', 'head', 'глава'], ['👀', 'eyes', 'очи'], ['👂', 'ears', 'уши'], ['👃', 'nose', 'нос'],
        ['👄', 'mouth', 'уста'], ['🙌', 'hands', 'ръце'], ['🦵', 'legs', 'крака'], ['🦶', 'feet', 'стъпала']
      ])] },
      { title: 'Игра: Touch your…', blocks: [
        { type: 'say', text: 'Натисни картичката и направи каквото казва гласът!' },
        words([['👃', 'Touch your nose!', 'Пипни си носа!'], ['👂', 'Touch your ears!', 'Пипни си ушите!'], ['🙌', 'Clap your hands!', 'Плесни с ръце!']])
      ] }
    ],
    tasks: [
      listen('nose', '👃', [['ears', '👂'], ['mouth', '👄']]),
      listen('legs', '🦵', [['hands', '🙌'], ['eyes', '👀']]),
      translate('очи', 'eyes', ['ears', 'feet']),
      { question: 'Какво значи „Clap your hands!“?', options: ['Плесни с ръце!', 'Пипни си носа!'], answer: 'Плесни с ръце!' }
    ]
  });

  L('p2-en-food', {
    title: 'Food — храната',
    emoji: '🍎',
    intro: 'Apple, bread, milk… I like apples! Да говорим за храна.',
    sections: [
      { title: 'Храна и напитки', blocks: [words([
        ['🍎', 'apple', 'ябълка'], ['🍌', 'banana', 'банан'], ['🍞', 'bread', 'хляб'], ['🥛', 'milk', 'мляко'],
        ['💧', 'water', 'вода'], ['🧀', 'cheese', 'сирене'], ['🥚', 'egg', 'яйце'], ['🎂', 'cake', 'торта']
      ])] },
      { title: 'Харесвам…', blocks: [words([['😋🍎', 'I like apples.', 'Харесвам ябълки.'], ['🙅🧀', 'I don’t like cheese.', 'Не харесвам сирене.']])] }
    ],
    tasks: [
      listen('milk', '🥛', [['water', '💧'], ['cake', '🎂']]),
      listen('banana', '🍌', [['apple', '🍎'], ['egg', '🥚']]),
      translate('хляб', 'bread', ['cheese', 'cake']),
      { question: 'Какво значи „I like cake“?', options: ['Харесвам торта.', 'Не харесвам торта.'], answer: 'Харесвам торта.' }
    ]
  });
})();
