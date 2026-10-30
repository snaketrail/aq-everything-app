window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-art-cvetove'] = {
  stage: 'kg',
  subject: 'art',
  group: 1,
  title: 'Цветовете',
  emoji: '🎨',
  minutes: 10,
  intro: 'Светът е пълен с цветове! Днес ще ги назовем и ще видим какво става, когато ги смесим.',
  parentTip: 'Сложете в чинийка по малко червена, жълта и синя боя. Нека детето смеси с пръст или четка две от тях и види какъв цвят се получава. Пазете дрехите с престилка 🙂.',

  sections: [
    {
      title: 'Да познаем цветовете',
      blocks: [
        { type: 'cards', items: [
          { pic: '🔴🍓', label: 'червено', sub: 'като ягодата', color: '#ff7a59' },
          { pic: '🟡🍌', label: 'жълто', sub: 'като банана', color: '#ffd23f' },
          { pic: '🔵🐳', label: 'синьо', sub: 'като кита в морето', color: '#5ec8f2' },
          { pic: '🟢🐸', label: 'зелено', sub: 'като жабката', color: '#5fd068' },
          { pic: '🟠🍊', label: 'оранжево', sub: 'като портокала', color: '#ffb84d' },
          { pic: '🟣🍇', label: 'лилаво', sub: 'като гроздето', color: '#c38bff' }
        ] }
      ]
    },
    {
      title: 'Смесваме цветове',
      blocks: [
        { type: 'say', text: 'От три цвята — червено, жълто и синьо — можем да направим много нови!' },
        { type: 'cards', items: [
          { pic: '🔴➕🟡', label: 'червено и жълто дават оранжево 🟠', color: '#ffb84d' },
          { pic: '🔵➕🟡', label: 'синьо и жълто дават зелено 🟢', color: '#5fd068' },
          { pic: '🔴➕🔵', label: 'червено и синьо дават лилаво 🟣', color: '#c38bff' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какъв цвят е ягодата?',
      picture: { pic: '🍓' },
      options: [
        { value: 'red', pic: '🔴', label: 'червено' },
        { value: 'blue', pic: '🔵', label: 'синьо' },
        { value: 'yellow', pic: '🟡', label: 'жълто' }
      ],
      answer: 'red'
    },
    {
      question: 'Кое е жълто?',
      options: [
        { value: 'grapes', pic: '🍇', label: 'грозде' },
        { value: 'banana', pic: '🍌', label: 'банан' },
        { value: 'frog', pic: '🐸', label: 'жабка' }
      ],
      answer: 'banana'
    },
    {
      question: 'Какъв цвят е листото?',
      picture: { pic: '🌿' },
      options: [
        { value: 'green', pic: '🟢', label: 'зелено' },
        { value: 'purple', pic: '🟣', label: 'лилаво' }
      ],
      answer: 'green'
    },
    {
      question: 'Синьо и жълто дават…',
      picture: { pic: '🔵➕🟡' },
      options: [
        { value: 'green', pic: '🟢', label: 'зелено' },
        { value: 'purple', pic: '🟣', label: 'лилаво' },
        { value: 'orange', pic: '🟠', label: 'оранжево' }
      ],
      answer: 'green'
    },
    {
      question: 'Червено и жълто дават…',
      picture: { pic: '🔴➕🟡' },
      options: [
        { value: 'blue', pic: '🔵', label: 'синьо' },
        { value: 'orange', pic: '🟠', label: 'оранжево' },
        { value: 'green', pic: '🟢', label: 'зелено' }
      ],
      answer: 'orange'
    }
  ]
};
