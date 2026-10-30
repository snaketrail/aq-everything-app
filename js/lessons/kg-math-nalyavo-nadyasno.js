window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-nalyavo-nadyasno'] = {
  stage: 'kg',
  subject: 'math',
  group: 4,
  title: 'Наляво и надясно',
  emoji: '↔️',
  minutes: 10,
  intro: 'Имаме лява и дясна ръка, ляв и десен крак. Днес ще се научим да казваме кое е отляво и кое — отдясно.',
  parentTip: 'Играйте на „Вдигни дясната ръка! Докосни лявото ухо!“. Ако се бърка, сложете гривничка или лепенка на дясната ръка. Не се притеснявайте — лявото и дясното се затвърждават до 7–8 години.',

  sections: [
    {
      title: 'Ляво и дясно',
      blocks: [
        { type: 'cards', items: [
          { pic: '⬅️', label: 'наляво', color: '#ff8fb1' },
          { pic: '➡️', label: 'надясно', color: '#5ec8f2' }
        ] },
        { type: 'say', text: 'Вдигни дясната ръка! А сега — лявата. Пишем и четем отляво надясно.' }
      ]
    },
    {
      title: 'Какво е отляво и отдясно?',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '🏠', x: 18, y: 58, size: 1.6 },
          { pic: '🧒', x: 50, y: 70, size: 1.4 },
          { pic: '🌳', x: 82, y: 56, size: 1.7 }
        ] } },
        { type: 'say', text: 'Къщата е отляво на детето. Дървото е отдясно на детето.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какво е отляво на котето?',
      picture: { scene: [
        { pic: '🌷', x: 20, y: 75 },
        { pic: '🐈', x: 50, y: 72, size: 1.3 },
        { pic: '⚽', x: 80, y: 78 }
      ] },
      options: [
        { value: 'flower', pic: '🌷', label: 'цветето' },
        { value: 'ball', pic: '⚽', label: 'топката' }
      ],
      answer: 'flower'
    },
    {
      question: 'Какво е отдясно на мечето?',
      picture: { scene: [
        { pic: '🍯', x: 20, y: 72 },
        { pic: '🐻', x: 50, y: 66, size: 1.4 },
        { pic: '🐝', x: 80, y: 55 }
      ] },
      options: [
        { value: 'honey', pic: '🍯', label: 'медът' },
        { value: 'bee', pic: '🐝', label: 'пчелата' }
      ],
      answer: 'bee'
    },
    {
      question: 'Коя стрелка сочи надясно?',
      options: [
        { value: 'left', pic: '⬅️' },
        { value: 'right', pic: '➡️' }
      ],
      answer: 'right'
    },
    {
      question: 'Коя стрелка сочи наляво?',
      options: [
        { value: 'up', pic: '⬆️' },
        { value: 'right', pic: '➡️' },
        { value: 'left', pic: '⬅️' }
      ],
      answer: 'left'
    },
    {
      question: 'Откъде започваме да четем?',
      options: ['отляво', 'отдясно'],
      answer: 'отляво'
    }
  ]
};
