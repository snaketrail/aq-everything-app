window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-blizo-daleche'] = {
  stage: 'kg',
  subject: 'math',
  group: 2,
  title: 'Близо и далече',
  emoji: '🔭',
  minutes: 6,
  intro: 'Нещата, които са близо до нас, изглеждат големи. Нещата, които са далече, изглеждат малки.',
  parentTip: 'На разходка питайте: „Кое е по-близо до нас — пейката или онази къща?“ Нека детето посочи нещо далечно и нещо близко.',

  sections: [
    {
      title: 'Близо и далече',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '⛰️', x: 78, y: 40, size: 0.9 },
          { pic: '🏠', x: 55, y: 62, size: 0.6 },
          { pic: '🧒', x: 14, y: 76, size: 1.4 },
          { pic: '🌳', x: 32, y: 66, size: 1.6 }
        ] } },
        { type: 'say', text: 'Дървото е близо до детето. Къщичката и планината са далече.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кое е близо до детето?',
      picture: { scene: [
        { pic: '🧒', x: 15, y: 74, size: 1.4 },
        { pic: '⚽', x: 34, y: 84, size: 0.9 },
        { pic: '🪁', x: 82, y: 20, size: 0.6 }
      ] },
      options: [
        { value: 'ball', pic: '⚽', label: 'топката' },
        { value: 'kite', pic: '🪁', label: 'хвърчилото' }
      ],
      answer: 'ball'
    },
    {
      question: 'Кое е далече от кучето?',
      picture: { scene: [
        { pic: '🐕', x: 18, y: 78, size: 1.3 },
        { pic: '🦴', x: 36, y: 86, size: 0.8 },
        { pic: '🐈', x: 86, y: 70, size: 0.6 }
      ] },
      options: [
        { value: 'bone', pic: '🦴', label: 'кокалчето' },
        { value: 'cat', pic: '🐈', label: 'котето' }
      ],
      answer: 'cat'
    },
    {
      question: 'Кое изглежда малко, защото е далече?',
      picture: { scene: [
        { pic: '🌳', x: 22, y: 60, size: 2 },
        { pic: '🌳', x: 80, y: 50, size: 0.6 }
      ] },
      options: ['дървото отляво', 'дървото отдясно'],
      answer: 'дървото отдясно'
    }
  ]
};
