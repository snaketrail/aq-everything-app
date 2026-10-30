window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-chasti-na-denonoshtieto'] = {
  stage: 'kg',
  subject: 'math',
  group: 2,
  title: 'Сутрин, обед, вечер, нощ',
  emoji: '🌅',
  minutes: 8,
  intro: 'Денят и нощта заедно се наричат денонощие. То има четири части: сутрин, обед, вечер и нощ.',
  parentTip: 'Свържете частите на денонощието с това, което правите всеки ден: „Сутрин закусваме. На обед обядваме. Вечер се къпем. Нощем спим.“',

  sections: [
    {
      title: 'Четирите части',
      blocks: [
        { type: 'cards', items: [
          { pic: '🌅', label: 'сутрин', sub: 'Ставаме, мием се и закусваме.', color: '#ffb84d' },
          { pic: '☀️', label: 'обед', sub: 'Слънцето е най-високо. Обядваме и почиваме.', color: '#ffd23f' },
          { pic: '🌇', label: 'вечер', sub: 'Вечеряме и играем със семейството.', color: '#ff8fb1' },
          { pic: '🌙', label: 'нощ', sub: 'Тъмно е. Спим, а на небето светят луната и звездите.', color: '#8a7cf0' }
        ] }
      ]
    },
    {
      title: 'Една след друга',
      blocks: [
        { type: 'picture', picture: { sequence: ['🌅', '☀️', '🌇', '🌙'] } },
        { type: 'say', text: 'След сутринта идва обедът, после вечерта, а след нея — нощта. И после пак сутрин!' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кога спим?',
      options: [
        { value: 'morning', pic: '🌅', label: 'сутрин' },
        { value: 'night', pic: '🌙', label: 'нощ' },
        { value: 'noon', pic: '☀️', label: 'обед' }
      ],
      answer: 'night'
    },
    {
      question: 'Кога закусваме?',
      picture: { pic: '🥣' },
      options: ['сутрин', 'вечер', 'нощ'],
      answer: 'сутрин'
    },
    {
      question: 'Какво идва след сутринта?',
      picture: { sequence: ['🌅', '?'] },
      options: [
        { value: 'night', pic: '🌙', label: 'нощ' },
        { value: 'noon', pic: '☀️', label: 'обед' }
      ],
      answer: 'noon'
    },
    {
      question: 'Кога на небето свети луната?',
      options: ['на обед', 'нощем'],
      answer: 'нощем'
    },
    {
      question: 'Какво идва след вечерта?',
      picture: { sequence: ['🌅', '☀️', '🌇', '?'] },
      options: [
        { value: 'night', pic: '🌙', label: 'нощ' },
        { value: 'morning', pic: '🌅', label: 'сутрин' }
      ],
      answer: 'night'
    }
  ]
};
