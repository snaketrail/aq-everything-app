window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-poravno'] = {
  stage: 'kg',
  subject: 'math',
  group: 2,
  title: 'Поравно, повече и по-малко',
  emoji: '⚖️',
  minutes: 10,
  intro: 'Можем да сравним две групи: в коя има повече, в коя — по-малко, и дали са поравно.',
  parentTip: 'Наредете две редици предмети една под друга — например чашки и лъжички. Ако на всяка чашка се пада лъжичка и нищо не остава, те са поравно. Това „свързване по двойки“ е основата на сравняването.',

  sections: [
    {
      title: 'Поравно',
      blocks: [
        { type: 'picture', picture: { rows: [{ emoji: '🐰', count: 3 }, { emoji: '🥕', count: 3 }] } },
        { type: 'say', text: 'Всяко зайче има морковче и нищо не остава. Зайчетата и морковчетата са поравно — толкова, колкото.' }
      ]
    },
    {
      title: 'Повече и по-малко',
      blocks: [
        { type: 'picture', picture: { rows: [{ emoji: '🐶', count: 4 }, { emoji: '🦴', count: 2 }] } },
        { type: 'say', text: 'Две кученца остават без кокалче. Кученцата са повече, а кокалчетата — по-малко.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Има ли за всяко пиленце червейче?',
      picture: { rows: [{ emoji: '🐥', count: 4 }, { emoji: '🪱', count: 4 }] },
      options: ['Да, поравно са.', 'Не, червейчетата са по-малко.'],
      answer: 'Да, поравно са.'
    },
    {
      question: 'Какво е повече — котета или кълбета?',
      picture: { rows: [{ emoji: '🐱', count: 5 }, { emoji: '🧶', count: 3 }] },
      options: [
        { value: 'cats', pic: '🐱', label: 'котетата' },
        { value: 'yarn', pic: '🧶', label: 'кълбетата' }
      ],
      answer: 'cats'
    },
    {
      question: 'Къде има повече ябълки?',
      options: [
        { value: 2, picture: { emoji: '🍎', count: 2 } },
        { value: 4, picture: { emoji: '🍎', count: 4 } }
      ],
      answer: 4
    },
    {
      question: 'Къде има по-малко звездички?',
      options: [
        { value: 5, picture: { emoji: '⭐', count: 5 } },
        { value: 1, picture: { emoji: '⭐', count: 1 } },
        { value: 3, picture: { emoji: '⭐', count: 3 } }
      ],
      answer: 1
    },
    {
      question: 'Какво е по-малко — пчели или цветя?',
      picture: { rows: [{ emoji: '🐝', count: 2 }, { emoji: '🌼', count: 5 }] },
      options: [
        { value: 'bees', pic: '🐝', label: 'пчелите' },
        { value: 'flowers', pic: '🌼', label: 'цветята' }
      ],
      answer: 'bees'
    }
  ]
};
