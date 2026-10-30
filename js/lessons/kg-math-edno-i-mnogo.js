window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-edno-i-mnogo'] = {
  stage: 'kg',
  subject: 'math',
  group: 1,
  title: 'Едно и много',
  emoji: '☝️',
  minutes: 8,
  intro: 'Днес ще разберем кога нещо е едно и кога е много.',
  parentTip: 'Играйте вкъщи с истински предмети: „Дай ми една лъжица. А сега — много лъжици.“ Подходящи са играчки, плодове, копчета и кубчета.',

  sections: [
    {
      title: 'Едно или много?',
      blocks: [
        { type: 'say', text: 'Едно е само едно. Много са, когато са повече от едно.' },
        { type: 'cards', items: [
          { pic: '🌞', label: 'едно слънце', color: '#ffd23f' },
          { pic: '⭐⭐⭐⭐⭐', label: 'много звезди', color: '#c38bff' },
          { pic: '🐘', label: 'един слон', color: '#5ec8f2' },
          { pic: '🐟🐟🐟🐟', label: 'много рибки', color: '#7bdcb5' }
        ] }
      ]
    },
    {
      title: 'Около нас',
      blocks: [
        { type: 'say', text: 'Имаш едно носле, но много косъмчета. Имаш една уста, но много зъбки!' },
        { type: 'cards', items: [
          { pic: '👃', label: 'едно носле', color: '#ffb84d' },
          { pic: '🦷🦷🦷', label: 'много зъбки', color: '#5ec8f2' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Къде има много ябълки?',
      options: [
        { value: 'one', pic: '🍎' },
        { value: 'many', pic: '🍎🍎🍎🍎' }
      ],
      answer: 'many',
      hint: 'Много са, когато са повече от една.'
    },
    {
      question: 'Къде има едно мече?',
      options: [
        { value: 'many', pic: '🧸🧸🧸' },
        { value: 'one', pic: '🧸' }
      ],
      answer: 'one',
      hint: 'Търси само едно мече.'
    },
    {
      question: 'Колко са звездите на небето?',
      picture: { emoji: '⭐', count: 7 },
      options: ['една', 'много'],
      answer: 'много'
    },
    {
      question: 'Колко носле имаш?',
      picture: { pic: '👃' },
      options: ['едно', 'много'],
      answer: 'едно',
      hint: 'Пипни си носа. Колко са?'
    },
    {
      question: 'Къде има много балони?',
      options: [
        { value: 'many', pic: '🎈🎈🎈' },
        { value: 'one', pic: '🎈' }
      ],
      answer: 'many'
    }
  ]
};
