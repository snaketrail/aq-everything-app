window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-gore-dolu'] = {
  stage: 'kg',
  subject: 'math',
  group: 1,
  title: 'Горе, долу, отпред, отзад',
  emoji: '⬆️',
  minutes: 8,
  intro: 'Днес ще кажем къде се намират нещата — горе или долу, отпред или отзад.',
  parentTip: 'Започнете от тялото на Ая: „Покажи горе! Покажи долу! Какво е отпред — коремчето или гърбът?“ После питайте за предмети в стаята.',

  sections: [
    {
      title: 'Горе и долу',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '🌳', x: 50, y: 52, size: 2.4 },
          { pic: '🐦', x: 50, y: 12 },
          { pic: '🐈', x: 24, y: 86 }
        ] } },
        { type: 'say', text: 'Птичето е горе. Котето е долу.' }
      ]
    },
    {
      title: 'Отпред и отзад',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '🌳', x: 66, y: 40, size: 2 },
          { pic: '🏠', x: 44, y: 56, size: 2.4 },
          { pic: '🐕', x: 26, y: 84, size: 1.2 }
        ] } },
        { type: 'say', text: 'Кучето е пред къщата. Дървото е зад къщата.' }
      ]
    },
    {
      title: 'Моето тяло',
      blocks: [
        { type: 'cards', items: [
          { pic: '🙆', label: 'главата е горе', color: '#5ec8f2' },
          { pic: '🦶', label: 'краката са долу', color: '#ffb84d' },
          { pic: '👀', label: 'очите са отпред', color: '#7bdcb5' },
          { pic: '🎒', label: 'раничката е на гърба — отзад', color: '#ff8fb1' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Къде е балонът?',
      picture: { scene: [
        { pic: '🎈', x: 50, y: 16 },
        { pic: '🧒', x: 50, y: 78, size: 1.6 }
      ] },
      options: ['горе', 'долу'],
      answer: 'горе'
    },
    {
      question: 'Къде е топката?',
      picture: { scene: [
        { pic: '🪑', x: 50, y: 45, size: 2.2 },
        { pic: '⚽', x: 50, y: 86, size: 0.9 }
      ] },
      options: ['горе', 'долу'],
      answer: 'долу'
    },
    {
      question: 'Къде е цветето?',
      picture: { scene: [
        { pic: '☁️', x: 28, y: 18 },
        { pic: '☀️', x: 72, y: 16 },
        { pic: '🌷', x: 50, y: 84 }
      ] },
      options: ['горе', 'долу'],
      answer: 'долу'
    },
    {
      question: 'Къде са очите ти?',
      picture: { pic: '👀' },
      options: ['отпред', 'отзад'],
      answer: 'отпред'
    },
    {
      question: 'Къде е гърбът ти?',
      picture: { pic: '🧍' },
      options: ['отпред', 'отзад'],
      answer: 'отзад',
      hint: 'Гърбът е там, където не го виждаш.'
    }
  ]
};
