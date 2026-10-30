window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-myasto-v-redica'] = {
  stage: 'kg',
  subject: 'math',
  group: 3,
  title: 'Кой е пръв? Място в редица',
  emoji: '🥇',
  minutes: 10,
  intro: 'Когато нещата са наредени, всяко има свое място: първо, второ, трето, четвърто, пето.',
  parentTip: 'Наредете играчки „на опашка“ и питайте: „Кой е първи? Кой е трети?“ Уговорете се откъде започваме да броим — обикновено отляво или откъм „финала“.',

  sections: [
    {
      title: 'Надбягване',
      blocks: [
        { type: 'say', text: 'Животните тичат към финала 🏁. Броим отляво: първи е заекът.' },
        { type: 'picture', picture: { sequence: ['🐇', '🐕', '🐢', '🐌', '🐛'] } },
        { type: 'cards', items: [
          { pic: '🐇', label: 'първи', color: '#ffd23f' },
          { pic: '🐕', label: 'втори', color: '#dfe6ee' },
          { pic: '🐢', label: 'трети', color: '#ffb84d' },
          { pic: '🐌', label: 'четвърти', color: '#7bdcb5' },
          { pic: '🐛', label: 'пети', color: '#c38bff' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кой е първи?',
      picture: { sequence: ['🐈', '🐭', '🐶'] },
      options: [
        { value: 'cat', pic: '🐈' },
        { value: 'mouse', pic: '🐭' },
        { value: 'dog', pic: '🐶' }
      ],
      answer: 'cat'
    },
    {
      question: 'Кой е трети?',
      picture: { sequence: ['🐸', '🦆', '🐟', '🐢'] },
      options: [
        { value: 'duck', pic: '🦆' },
        { value: 'fish', pic: '🐟' },
        { value: 'turtle', pic: '🐢' }
      ],
      answer: 'fish',
      hint: 'Брой отляво: първи, втори, трети.'
    },
    {
      question: 'На кое място е звездичката?',
      picture: { sequence: ['🍎', '🍐', '⭐', '🍋', '🍇'] },
      options: ['втора', 'трета', 'пета'],
      answer: 'трета'
    },
    {
      question: 'Кой е последен?',
      picture: { sequence: ['🚗', '🚌', '🚲', '🛴', '🚂'] },
      options: [
        { value: 'car', pic: '🚗' },
        { value: 'train', pic: '🚂' },
        { value: 'bike', pic: '🚲' }
      ],
      answer: 'train'
    },
    {
      question: 'Кой е втори?',
      picture: { sequence: ['🐻', '🐼', '🐨'] },
      options: [
        { value: 'bear', pic: '🐻' },
        { value: 'panda', pic: '🐼' },
        { value: 'koala', pic: '🐨' }
      ],
      answer: 'panda'
    }
  ]
};
