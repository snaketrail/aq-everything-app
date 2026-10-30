window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-profesii'] = {
  stage: 'kg',
  subject: 'world',
  group: 3,
  title: 'Професиите',
  emoji: '🧑‍🚒',
  minutes: 10,
  intro: 'Възрастните ходят на работа. Всяка професия е важна, защото помага на другите хора.',
  parentTip: 'Разкажете на детето какво работите вие и защо работата ви е полезна. Играйте на „Кой съм аз?“ — показвате с движения професия, а детето познава.',

  sections: [
    {
      title: 'Кой какво работи?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🧑‍⚕️', label: 'лекар', sub: 'лекува хората', color: '#5ec8f2' },
          { pic: '🧑‍🏫', label: 'учител', sub: 'учи децата', color: '#ffd23f' },
          { pic: '🧑‍🍳', label: 'готвач', sub: 'готви вкусна храна', color: '#ffb84d' },
          { pic: '🧑‍🚒', label: 'пожарникар', sub: 'гаси пожари', color: '#ff7a59' },
          { pic: '👮', label: 'полицай', sub: 'пази реда', color: '#8a7cf0' },
          { pic: '🧑‍🌾', label: 'фермер', sub: 'отглежда растения и животни', color: '#7bdcb5' },
          { pic: '👷', label: 'строител', sub: 'строи къщи', color: '#ffd23f' },
          { pic: '🚌', label: 'шофьор', sub: 'кара автобуса', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Какво им трябва за работа?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🩺', label: 'слушалката на лекаря', color: '#5ec8f2' },
          { pic: '🍳', label: 'тиганът на готвача', color: '#ffb84d' },
          { pic: '🚒', label: 'колата на пожарникаря', color: '#ff7a59' },
          { pic: '🚜', label: 'тракторът на фермера', color: '#7bdcb5' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кой гаси пожари?',
      options: [
        { value: 'chef', pic: '🧑‍🍳', label: 'готвач' },
        { value: 'fire', pic: '🧑‍🚒', label: 'пожарникар' },
        { value: 'teacher', pic: '🧑‍🏫', label: 'учител' }
      ],
      answer: 'fire'
    },
    {
      question: 'Какво използва лекарят?',
      options: [
        { value: 'hammer', pic: '🔨', label: 'чук' },
        { value: 'pan', pic: '🍳', label: 'тиган' },
        { value: 'stetho', pic: '🩺', label: 'слушалка' }
      ],
      answer: 'stetho'
    },
    {
      question: 'Кой строи къщи?',
      options: [
        { value: 'builder', pic: '👷', label: 'строител' },
        { value: 'police', pic: '👮', label: 'полицай' },
        { value: 'doctor', pic: '🧑‍⚕️', label: 'лекар' }
      ],
      answer: 'builder'
    },
    {
      question: 'Кой кара трактор?',
      picture: { pic: '🚜' },
      options: [
        { value: 'farmer', pic: '🧑‍🌾', label: 'фермер' },
        { value: 'teacher', pic: '🧑‍🏫', label: 'учител' }
      ],
      answer: 'farmer'
    },
    {
      question: 'Кой учи децата в училище?',
      options: [
        { value: 'teacher', pic: '🧑‍🏫', label: 'учител' },
        { value: 'chef', pic: '🧑‍🍳', label: 'готвач' }
      ],
      answer: 'teacher'
    }
  ]
};
