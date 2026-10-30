window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-golyamo-malko'] = {
  stage: 'kg',
  subject: 'math',
  group: 1,
  title: 'Голямо и малко, високо и ниско',
  emoji: '🐘',
  minutes: 8,
  intro: 'Някои неща са големи, а други са малки. Някои са високи, а други — ниски. Да ги сравним!',
  parentTip: 'Сравнявайте вкъщи: голяма и малка лъжица, висок и нисък стол, тате и Ая. Нека Ая показва и казва думите „голямо“, „малко“, „високо“, „ниско“.',

  sections: [
    {
      title: 'Голямо и малко',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '🐘', x: 38, y: 55, size: 2.6 },
          { pic: '🐭', x: 80, y: 80, size: 0.7 }
        ] } },
        { type: 'say', text: 'Слонът е голям. Мишката е малка.' }
      ]
    },
    {
      title: 'Високо и ниско',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '🦒', x: 34, y: 50, size: 3 },
          { pic: '🦔', x: 76, y: 82, size: 0.9 }
        ] } },
        { type: 'say', text: 'Жирафът е висок. Таралежът е нисък.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Коя топка е голяма?',
      options: [
        { value: 'small', pic: '⚽', size: 0.5 },
        { value: 'big', pic: '⚽', size: 1.3 }
      ],
      answer: 'big'
    },
    {
      question: 'Кое мече е малко?',
      options: [
        { value: 'big', pic: '🧸', size: 1.3 },
        { value: 'small', pic: '🧸', size: 0.55 }
      ],
      answer: 'small'
    },
    {
      question: 'Кое животно е голямо?',
      options: [
        { value: 'mouse', pic: '🐁', label: 'мишка' },
        { value: 'elephant', pic: '🐘', label: 'слон' },
        { value: 'ladybug', pic: '🐞', label: 'калинка' }
      ],
      answer: 'elephant'
    },
    {
      question: 'Кое е по-високо?',
      options: [
        { value: 'tree', pic: '🌳', label: 'дървото', size: 1.4 },
        { value: 'flower', pic: '🌷', label: 'цветето', size: 0.7 }
      ],
      answer: 'tree'
    },
    {
      question: 'Кое животно е ниско?',
      options: [
        { value: 'giraffe', pic: '🦒', label: 'жираф', size: 1.4 },
        { value: 'hedgehog', pic: '🦔', label: 'таралеж', size: 0.7 }
      ],
      answer: 'hedgehog'
    }
  ]
};
