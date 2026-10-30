window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-bulgaria'] = {
  stage: 'kg',
  subject: 'world',
  group: 3,
  title: 'Моята родина — България',
  emoji: '🇧🇬',
  minutes: 10,
  intro: 'Нашата страна се казва България. Тя има свое знаме, свой химн и свои празници.',
  parentTip: 'Покажете на Ая знамето на някоя сграда и пуснете химна „Мила Родино“. Обяснете, че при химна стоим изправени. На 1 март си разменете мартеници.',

  sections: [
    {
      title: 'Знамето',
      blocks: [
        { type: 'picture', picture: { pic: '🇧🇬' }, caption: 'Знамето на България' },
        { type: 'say', text: 'Знамето има три цвята: най-отгоре е бяло, по средата е зелено, а най-отдолу — червено.' },
        { type: 'cards', items: [
          { pic: '⬜', label: 'бяло', sub: 'за мира', color: '#dfe6ee' },
          { pic: '🟩', label: 'зелено', sub: 'за природата и полята', color: '#5fd068' },
          { pic: '🟥', label: 'червено', sub: 'за смелостта на хората, които са се борили за свобода', color: '#ff7a59' }
        ] }
      ]
    },
    {
      title: 'Важно за България',
      blocks: [
        { type: 'cards', items: [
          { pic: '🏛️', label: 'Столицата е София.', color: '#5ec8f2' },
          { pic: '🎶', label: 'Химнът е „Мила Родино“.', color: '#c38bff' },
          { pic: '⛰️', label: 'Най-високият връх е Мусала.', color: '#7bdcb5' },
          { pic: '🌊', label: 'На изток е Черно море.', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Празници',
      blocks: [
        { type: 'cards', items: [
          { pic: '❤️🤍', label: '1 март — Баба Марта', sub: 'Връзваме си мартеници за здраве.', color: '#ff8fb1' },
          { pic: '🇧🇬', label: '3 март', sub: 'Национален празник — Освобождението на България.', color: '#7bdcb5' },
          { pic: '📚', label: '24 май', sub: 'Празник на буквите и на светите братя Кирил и Методий.', color: '#ffd23f' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кое е знамето на България?',
      options: [
        { value: 'it', pic: '🇮🇹' },
        { value: 'bg', pic: '🇧🇬' },
        { value: 'fr', pic: '🇫🇷' }
      ],
      answer: 'bg',
      hint: 'Нашето знаме е бяло, зелено и червено — на ивици една под друга.'
    },
    {
      question: 'Кой цвят е най-отгоре на нашето знаме?',
      options: [
        { value: 'white', pic: '⬜', label: 'бяло' },
        { value: 'green', pic: '🟩', label: 'зелено' },
        { value: 'red', pic: '🟥', label: 'червено' }
      ],
      answer: 'white'
    },
    {
      question: 'Кой цвят е по средата?',
      picture: { pic: '🇧🇬' },
      options: [
        { value: 'red', pic: '🟥', label: 'червено' },
        { value: 'green', pic: '🟩', label: 'зелено' },
        { value: 'white', pic: '⬜', label: 'бяло' }
      ],
      answer: 'green'
    },
    {
      question: 'Как се казва столицата на България?',
      options: ['Пловдив', 'София', 'Варна'],
      answer: 'София'
    },
    {
      question: 'Кога си връзваме мартеници?',
      picture: { pic: '❤️🤍' },
      options: ['на 1 март', 'на 24 май', 'на Коледа'],
      answer: 'на 1 март'
    }
  ]
};
