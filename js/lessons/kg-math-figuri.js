window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-figuri'] = {
  stage: 'kg',
  subject: 'math',
  group: 1,
  title: 'Кръг, квадрат и триъгълник',
  emoji: '🔺',
  minutes: 10,
  intro: 'Навсякъде около нас има фигури. Днес ще се запознаем с кръга, квадрата и триъгълника.',
  parentTip: 'Изрежете фигури от цветна хартия или картон. Нека детето ги пипне и обиколи с пръст по ръба. После търсете заедно кръгли, квадратни и триъгълни неща вкъщи.',

  sections: [
    {
      title: 'Запознай се с фигурите',
      blocks: [
        { type: 'say', text: 'Натисни фигурата, за да чуеш името ѝ.' },
        { type: 'cards', items: [
          { pic: '🔵', label: 'кръг', sub: 'кръгъл е, няма ъгли', color: '#5ec8f2' },
          { pic: '🟥', label: 'квадрат', sub: '4 еднакви страни', color: '#ff7a59' },
          { pic: '🔺', label: 'триъгълник', sub: '3 страни и 3 ъгъла', color: '#ffd23f' }
        ] }
      ]
    },
    {
      title: 'Фигурите около нас',
      blocks: [
        { type: 'cards', items: [
          { pic: '⚽', label: 'Топката е кръгла.', color: '#5ec8f2' },
          { pic: '🕐', label: 'Часовникът е кръгъл.', color: '#5ec8f2' },
          { pic: '🎁', label: 'Подаръкът е квадратен.', color: '#ff7a59' },
          { pic: '🖼️', label: 'Картината е квадратна.', color: '#ff7a59' },
          { pic: '🍕', label: 'Парчето пица е триъгълно.', color: '#ffd23f' },
          { pic: '⛺', label: 'Палатката прилича на триъгълник.', color: '#ffd23f' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кой е кръгът?',
      options: [
        { value: 'triangle', pic: '🔺' },
        { value: 'circle', pic: '🔵' },
        { value: 'square', pic: '🟥' }
      ],
      answer: 'circle',
      hint: 'Кръгът е кръгъл като топка.'
    },
    {
      question: 'Кой е триъгълникът?',
      options: [
        { value: 'square', pic: '🟥' },
        { value: 'circle', pic: '🔵' },
        { value: 'triangle', pic: '🔺' }
      ],
      answer: 'triangle',
      hint: 'Триъгълникът има три ъгъла.'
    },
    {
      question: 'Кой е квадратът?',
      options: [
        { value: 'square', pic: '🟥' },
        { value: 'triangle', pic: '🔺' },
        { value: 'circle', pic: '🔵' }
      ],
      answer: 'square',
      hint: 'Квадратът има четири еднакви страни.'
    },
    {
      question: 'Каква е топката?',
      picture: { pic: '⚽' },
      options: ['кръгла', 'квадратна', 'триъгълна'],
      answer: 'кръгла'
    },
    {
      question: 'Каква е формата на парчето пица?',
      picture: { pic: '🍕' },
      options: ['кръг', 'квадрат', 'триъгълник'],
      answer: 'триъгълник'
    }
  ]
};
