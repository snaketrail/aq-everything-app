window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-semeystvo'] = {
  stage: 'kg',
  subject: 'world',
  group: 1,
  title: 'Аз и моето семейство',
  emoji: '🏡',
  minutes: 8,
  intro: 'Семейството са хората, които ни обичат и се грижат за нас. И ние можем да се грижим за тях!',
  parentTip: 'Дайте на Ая малка „своя“ задача вкъщи — да слага лъжиците на масата или да прибира играчките. Хвалете усилието: „Ти много ни помогна!“',

  sections: [
    {
      title: 'Моят дом и моята детска градина',
      blocks: [
        { type: 'cards', items: [
          { pic: '🏠', label: 'вкъщи', sub: 'живея със семейството си', color: '#ffb84d' },
          { pic: '🏫', label: 'детската градина', sub: 'играя и уча с приятели', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Как се грижим един за друг',
      blocks: [
        { type: 'cards', items: [
          { pic: '👩🍲', label: 'Мама и тате готвят и се грижат за мен.', color: '#ff8fb1' },
          { pic: '👵📖', label: 'Баба ми чете приказки.', color: '#c38bff' },
          { pic: '🧒🧸', label: 'Аз прибирам играчките си.', color: '#7bdcb5' },
          { pic: '🧒🥄', label: 'Аз помагам да подредим масата.', color: '#ffd23f' },
          { pic: '🤗', label: 'Прегръщаме се, когато някой е тъжен.', color: '#ff8fb1' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Къде живееш със семейството си?',
      options: [
        { value: 'home', pic: '🏠', label: 'вкъщи' },
        { value: 'shop', pic: '🏪', label: 'в магазина' }
      ],
      answer: 'home'
    },
    {
      question: 'Къде играеш с приятелчетата през деня?',
      options: [
        { value: 'kg', pic: '🏫', label: 'в детската градина' },
        { value: 'hospital', pic: '🏥', label: 'в болницата' }
      ],
      answer: 'kg'
    },
    {
      question: 'Как можеш да помогнеш вкъщи?',
      options: ['Прибирам играчките си.', 'Разхвърлям всичко.'],
      answer: 'Прибирам играчките си.'
    },
    {
      question: 'Мама е тъжна. Какво можеш да направиш?',
      picture: { pic: '👩😢' },
      options: [
        { value: 'hug', pic: '🤗', label: 'да я прегърна' },
        { value: 'shout', pic: '📢', label: 'да викам' }
      ],
      answer: 'hug'
    }
  ]
};
