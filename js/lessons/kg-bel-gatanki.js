window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-gatanki'] = {
  stage: 'kg',
  subject: 'bel',
  group: 3,
  title: 'Гатанки',
  emoji: '❓',
  minutes: 10,
  intro: 'Гатанката описва нещо, без да казва името му. Слушай внимателно и познай какво е!',
  parentTip: 'Четете гатанките бавно и изразително. После разменете ролите — нека Ая измисли своя гатанка за играчка или животно („Има четири крака и казва бау…“).',

  sections: [
    {
      title: 'Как се решава гатанка?',
      blocks: [
        { type: 'say', text: 'Слушай за всяка подсказка: какъв цвят е, какво прави, какъв звук издава.' },
        { type: 'story', panels: [
          { pic: '👂', text: 'Има дълги уши и къса опашка. Скача и обича морков. Кой е?' },
          { pic: '🤔', text: 'Дълги уши… скача… морков… Знам!' },
          { pic: '🐰', text: 'Зайчето!' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Жълто е, топло е, свети през деня. Какво е?',
      options: [
        { value: 'sun', pic: '☀️', label: 'слънце' },
        { value: 'moon', pic: '🌙', label: 'луна' },
        { value: 'star', pic: '⭐', label: 'звезда' }
      ],
      answer: 'sun'
    },
    {
      question: 'Бял е и студен, пада от небето зиме. Какво е?',
      options: [
        { value: 'rain', pic: '🌧️', label: 'дъжд' },
        { value: 'snow', pic: '❄️', label: 'сняг' },
        { value: 'leaves', pic: '🍂', label: 'листа' }
      ],
      answer: 'snow'
    },
    {
      question: 'Има четири крака, но не ходи. На него сядаш. Какво е?',
      options: [
        { value: 'chair', pic: '🪑', label: 'стол' },
        { value: 'dog', pic: '🐕', label: 'куче' },
        { value: 'bed', pic: '🛏️', label: 'легло' }
      ],
      answer: 'chair'
    },
    {
      question: 'Бодлив е, но не е кактус. Когато се уплаши, се свива на топка. Кой е?',
      options: [
        { value: 'turtle', pic: '🐢', label: 'костенурка' },
        { value: 'squirrel', pic: '🐿️', label: 'катеричка' },
        { value: 'hedgehog', pic: '🦔', label: 'таралеж' }
      ],
      answer: 'hedgehog'
    },
    {
      question: 'И зиме, и лете е зелена, а по Коледа я украсяваме. Какво е?',
      options: [
        { value: 'tree', pic: '🎄', label: 'елха' },
        { value: 'cactus', pic: '🌵', label: 'кактус' },
        { value: 'tulip', pic: '🌷', label: 'лале' }
      ],
      answer: 'tree'
    },
    {
      question: 'Мяука, мие се с лапичка и лови мишки. Кой е?',
      options: [
        { value: 'cat', pic: '🐈', label: 'котка' },
        { value: 'cow', pic: '🐄', label: 'крава' },
        { value: 'frog', pic: '🐸', label: 'жаба' }
      ],
      answer: 'cat'
    }
  ]
};
