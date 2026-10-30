window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-broim-do-10'] = {
  stage: 'kg',
  subject: 'math',
  group: 3,
  title: 'Да броим до 10',
  emoji: '🙌',
  minutes: 12,
  intro: 'Вече можеш да броиш до пет. Днес ще продължим до десет — колкото са пръстчетата на двете ръце!',
  parentTip: 'Броете стъпала, лъжици, коли на паркинга. Упражнявайте и обратното броене от 10 до 1 — като преди изстрелване на ракета 🚀.',

  sections: [
    {
      title: 'Нови числа',
      blocks: [
        { type: 'say', text: 'След пет идват шест, седем, осем, девет и десет. Натисни картичката, за да чуеш числото.' },
        { type: 'numbers', items: [
          { n: 6, word: 'шест', emoji: '🍓' },
          { n: 7, word: 'седем', emoji: '🐠' },
          { n: 8, word: 'осем', emoji: '🌼' },
          { n: 9, word: 'девет', emoji: '🍒' },
          { n: 10, word: 'десет', emoji: '🔵' }
        ] }
      ]
    },
    {
      title: 'Да броим заедно',
      blocks: [
        { type: 'say', text: 'Докосни всяко патенце по веднъж и брой на глас.' },
        { type: 'countAlong', emoji: '🦆', count: 8, done: 'Осем патенца! Браво!' }
      ]
    },
    {
      title: 'Числата в редица',
      blocks: [
        { type: 'picture', picture: { sequence: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] } },
        { type: 'say', text: 'Всяко следващо число е с едно повече от предишното.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Колко са звездичките?',
      picture: { emoji: '⭐', count: 7 },
      options: [6, 7, 8],
      answer: 7,
      hint: 'Докосвай всяка звездичка и брой.'
    },
    {
      question: 'Колко са балоните?',
      picture: { emoji: '🎈', count: 10 },
      options: [9, 10, 8],
      answer: 10
    },
    {
      question: 'Кое число липсва?',
      picture: { sequence: ['5', '6', '?', '8'] },
      options: [7, 9, 4],
      answer: 7,
      hint: 'Брой: пет, шест…'
    },
    {
      question: 'Кое число идва след 9?',
      options: [8, 10, 6],
      answer: 10
    },
    {
      question: 'Къде има шест кубчета?',
      options: [
        { value: 5, picture: { emoji: '🟦', count: 5 } },
        { value: 6, picture: { emoji: '🟦', count: 6 } },
        { value: 8, picture: { emoji: '🟦', count: 8 } }
      ],
      answer: 6
    },
    {
      question: 'Колко пръстчета имаш на двете ръце?',
      picture: { pic: '🙌' },
      options: [5, 10, 8],
      answer: 10
    }
  ]
};
