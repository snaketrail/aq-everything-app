window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-mesetsi'] = {
  stage: 'kg',
  subject: 'math',
  group: 4,
  title: 'Месеците и сезоните',
  emoji: '🗓️',
  minutes: 12,
  intro: 'Годината има дванадесет месеца. Всеки сезон има по три месеца.',
  parentTip: 'Покажете на Ая календар и отбележете важните дати: рождени дни, Коледа, 1 март, първия учебен ден. Питайте: „В кой месец е твоят рожден ден? През кой сезон е?“',

  sections: [
    {
      title: 'Дванадесетте месеца',
      blocks: [
        { type: 'cards', items: [
          { pic: '⛄', label: 'зима', sub: 'декември, януари, февруари', color: '#5ec8f2' },
          { pic: '🌷', label: 'пролет', sub: 'март, април, май', color: '#7bdcb5' },
          { pic: '☀️', label: 'лято', sub: 'юни, юли, август', color: '#ffd23f' },
          { pic: '🍂', label: 'есен', sub: 'септември, октомври, ноември', color: '#ffb84d' }
        ] },
        { type: 'say', text: 'Годината започва с януари и завършва с декември.' }
      ]
    },
    {
      title: 'Важни дни',
      blocks: [
        { type: 'cards', items: [
          { pic: '🎆', label: '1 януари', sub: 'Нова година', color: '#c38bff' },
          { pic: '[martenitsa]', label: '1 март', sub: 'Баба Марта', color: '#ff8fb1' },
          { pic: '🎒', label: '15 септември', sub: 'първият учебен ден', color: '#5ec8f2' },
          { pic: '🎂', label: '22 октомври', sub: 'твоят рожден ден!', color: '#ffd23f' },
          { pic: '🎄', label: '25 декември', sub: 'Коледа', color: '#7bdcb5' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Колко месеца има годината?',
      options: [7, 10, 12],
      answer: 12
    },
    {
      question: 'Кой месец идва след януари?',
      options: ['март', 'февруари', 'декември'],
      answer: 'февруари'
    },
    {
      question: 'Твоят рожден ден е през октомври. Кой сезон е тогава?',
      picture: { pic: '🎂' },
      options: [
        { value: 'autumn', pic: '🍂', label: 'есен' },
        { value: 'spring', pic: '🌷', label: 'пролет' },
        { value: 'summer', pic: '☀️', label: 'лято' }
      ],
      answer: 'autumn'
    },
    {
      question: 'Кой месец е летен?',
      options: ['юли', 'януари', 'ноември'],
      answer: 'юли'
    },
    {
      question: 'С кой месец започва годината?',
      options: ['декември', 'януари', 'март'],
      answer: 'януари'
    },
    {
      question: 'През кой сезон е Коледа?',
      picture: { pic: '🎄' },
      options: [
        { value: 'winter', pic: '⛄', label: 'зима' },
        { value: 'summer', pic: '☀️', label: 'лято' }
      ],
      answer: 'winter'
    }
  ]
};
