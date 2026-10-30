window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-shte-badam-uchenik'] = {
  stage: 'kg',
  subject: 'world',
  group: 4,
  title: 'Скоро ще бъда ученичка',
  emoji: '🎒',
  minutes: 10,
  intro: 'След детската градина идва училището! Там ще се научиш да четеш, да пишеш и да смяташ.',
  parentTip: 'Разходете се до бъдещото училище. Купете заедно раницата и пособията — нека Ая избира. Говорете за училището с радост, без да плашите („Там ще видиш, ти!“).',

  sections: [
    {
      title: 'Какво има в раницата?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🎒', label: 'раница', color: '#ff7a59' },
          { pic: '📓', label: 'тетрадка', color: '#5ec8f2' },
          { pic: '📚', label: 'учебници', color: '#c38bff' },
          { pic: '✏️', label: 'молив', color: '#ffd23f' },
          { pic: '🖍️', label: 'пастели', color: '#ff8fb1' },
          { pic: '📏', label: 'линийка', color: '#7bdcb5' }
        ] }
      ]
    },
    {
      title: 'В училище',
      blocks: [
        { type: 'story', panels: [
          { pic: '🗓️', text: 'Учебната година в България започва на 15 септември.' },
          { pic: '🔔', text: 'Звънецът бие — започва час. Сядаме на чина.' },
          { pic: '🙋', text: 'Когато искаме да кажем нещо, вдигаме ръка.' },
          { pic: '🧑‍🏫', text: 'Учителката ни учи да четем, да пишем и да смятаме.' },
          { pic: '⚽', text: 'В междучасието почиваме и играем.' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какво носим на училище?',
      options: [
        { value: 'bag', pic: '🎒', label: 'раница' },
        { value: 'bucket', pic: '🪣', label: 'кофичка за пясък' }
      ],
      answer: 'bag'
    },
    {
      question: 'Искаш да кажеш нещо в час. Какво правиш?',
      options: [
        { value: 'hand', pic: '🙋', label: 'вдигам ръка' },
        { value: 'shout', pic: '📢', label: 'викам силно' }
      ],
      answer: 'hand'
    },
    {
      question: 'С какво пишем?',
      options: [
        { value: 'pencil', pic: '✏️', label: 'молив' },
        { value: 'spoon', pic: '🥄', label: 'лъжица' }
      ],
      answer: 'pencil'
    },
    {
      question: 'Кога започва учебната година?',
      options: ['на 15 септември', 'на 1 януари', 'на 1 юни'],
      answer: 'на 15 септември'
    },
    {
      question: 'Кога почиваме и играем в училище?',
      options: ['в междучасието', 'по време на час'],
      answer: 'в междучасието'
    }
  ]
};
