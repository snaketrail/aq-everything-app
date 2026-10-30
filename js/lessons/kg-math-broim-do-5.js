window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-broim-do-5'] = {
  stage: 'kg',
  subject: 'math',
  group: 2,
  title: 'Да броим до 5',
  emoji: '🖐️',
  minutes: 10,
  intro: 'Здравей! Днес ще се научим да броим до пет. Точно толкова пръстчета имаш на едната ръчичка!',
  parentTip: 'Броете заедно на глас. Нека Ая докосва всеки предмет само по веднъж, докато брои. Пръстите на ръката са най-добрият помощник — покажете всяко число и с тях.',

  sections: [
    {
      title: 'Запознай се с числата',
      blocks: [
        { type: 'say', text: 'Всяко число си има име. Натисни картичката, за да го чуеш.' },
        { type: 'numbers', items: [
          { n: 1, word: 'едно', emoji: '🍎' },
          { n: 2, word: 'две', emoji: '🐥' },
          { n: 3, word: 'три', emoji: '⭐' },
          { n: 4, word: 'четири', emoji: '🌸' },
          { n: 5, word: 'пет', emoji: '🎈' }
        ] }
      ]
    },
    {
      title: 'Да броим заедно',
      blocks: [
        { type: 'say', text: 'Докосни всяко зайче по веднъж и брой на глас.' },
        { type: 'countAlong', emoji: '🐰', count: 3, done: 'Три зайчета! Браво!' },
        { type: 'say', text: 'Последното число, което казваме, показва колко са всички.' }
      ]
    },
    {
      title: 'Още един пример',
      blocks: [
        { type: 'say', text: 'Сега преброй калинките.' },
        { type: 'countAlong', emoji: '🐞', count: 5, done: 'Пет калинки! Колкото пръстчетата на ръката ✋' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Колко са ябълките?',
      picture: { emoji: '🍎', count: 4 },
      options: [3, 4, 5],
      answer: 4,
      hint: 'Докосвай всяка ябълка и брой: едно, две…'
    },
    {
      question: 'Къде има две топки?',
      options: [
        { value: 1, picture: { emoji: '⚽', count: 1 } },
        { value: 2, picture: { emoji: '⚽', count: 2 } },
        { value: 3, picture: { emoji: '⚽', count: 3 } }
      ],
      answer: 2,
      hint: 'Две — колкото са очичките ти 👀'
    },
    {
      question: 'Колко са рибките?',
      picture: { emoji: '🐟', count: 5 },
      options: [2, 5, 4],
      answer: 5,
      hint: 'Колкото пръстчета има на ръката ✋'
    },
    {
      question: 'Кое число идва след 3?',
      picture: { sequence: ['1', '2', '3', '?'] },
      options: [2, 4, 5],
      answer: 4,
      hint: 'Брой на глас: едно, две, три…'
    },
    {
      question: 'Колко пеперуди виждаш?',
      picture: { emoji: '🦋', count: 1 },
      options: [1, 2, 3],
      answer: 1
    }
  ]
};
