window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-sezoni'] = {
  stage: 'kg',
  subject: 'world',
  group: 2,
  title: 'Годишните сезони',
  emoji: '🍂',
  minutes: 10,
  intro: 'Годината има четири сезона: пролет, лято, есен и зима. Всеки сезон е различен и красив.',
  parentTip: 'На разходка обръщайте внимание на дърветата: пъпки напролет, зелени листа през лятото, жълти листа наесен, голи клони през зимата. Съберете листа и ги залепете в тетрадка.',

  sections: [
    {
      title: 'Четирите сезона',
      blocks: [
        { type: 'cards', items: [
          { pic: '🌷🐝', label: 'пролет', sub: 'Цъфтят цветя, лястовиците се връщат.', color: '#7bdcb5' },
          { pic: '☀️🏖️', label: 'лято', sub: 'Топло е. Ходим на море и ядем дини.', color: '#ffd23f' },
          { pic: '🍂🍇', label: 'есен', sub: 'Листата пожълтяват и падат. Берем грозде.', color: '#ffb84d' },
          { pic: '⛄❄️', label: 'зима', sub: 'Студено е и вали сняг. Правим снежен човек.', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Един след друг',
      blocks: [
        { type: 'picture', picture: { sequence: ['🌷', '☀️', '🍂', '⛄'] } },
        { type: 'say', text: 'След пролетта идва лятото, после есента, после зимата. След зимата пак идва пролет!' }
      ]
    },
    {
      title: 'Какво обличаме?',
      blocks: [
        { type: 'cards', items: [
          { pic: '👕🩳', label: 'лятото — тениска и къси панталонки', color: '#ffd23f' },
          { pic: '🧥🧣🧤', label: 'зимата — палто, шал и ръкавици', color: '#5ec8f2' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кога правим снежен човек?',
      options: [
        { value: 'spring', pic: '🌷', label: 'пролет' },
        { value: 'winter', pic: '⛄', label: 'зима' },
        { value: 'summer', pic: '☀️', label: 'лято' }
      ],
      answer: 'winter'
    },
    {
      question: 'Кога падат жълтите листа?',
      options: [
        { value: 'autumn', pic: '🍂', label: 'есен' },
        { value: 'summer', pic: '☀️', label: 'лято' }
      ],
      answer: 'autumn'
    },
    {
      question: 'Кога ходим на море?',
      picture: { pic: '🏖️' },
      options: ['лятото', 'зимата'],
      answer: 'лятото'
    },
    {
      question: 'Кой сезон идва след зимата?',
      picture: { sequence: ['⛄', '?'] },
      options: [
        { value: 'spring', pic: '🌷', label: 'пролет' },
        { value: 'autumn', pic: '🍂', label: 'есен' },
        { value: 'summer', pic: '☀️', label: 'лято' }
      ],
      answer: 'spring'
    },
    {
      question: 'Какво обличаме зиме?',
      options: [
        { value: 'winter', pic: '🧣🧤', label: 'шал и ръкавици' },
        { value: 'summer', pic: '🩳', label: 'къси панталонки' }
      ],
      answer: 'winter'
    }
  ]
};
