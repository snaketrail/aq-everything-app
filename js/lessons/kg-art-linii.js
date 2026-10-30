window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-art-linii'] = {
  stage: 'kg',
  subject: 'art',
  group: 2,
  title: 'Прави и криви линии',
  emoji: '〰️',
  minutes: 10,
  intro: 'С линии можем да нарисуваме всичко! Някои линии са прави, други — криви, а трети — начупени.',
  parentTip: 'Рисувайте линии с различни материали: молив, пастел, флумастер, четка с боя. Питайте: „Каква линия е тревата? А вълните?“',

  sections: [
    {
      title: 'Видове линии',
      blocks: [
        { type: 'cards', items: [
          { pic: '[liniya-prava]', label: 'права линия', sub: 'като струна или лъч', color: '#5ec8f2' },
          { pic: '[liniya-kriva]', label: 'крива линия', sub: 'като вълна или змийче', color: '#ff8fb1' },
          { pic: '[liniya-chupena]', label: 'начупена линия', sub: 'като планини или зъбчета', color: '#7bdcb5' }
        ] }
      ]
    },
    {
      title: 'Нарисувай картина с линии',
      blocks: [
        { type: 'say', text: 'Следвай пунктира: дъжд от прави линии, вълни от криви линии и планини от начупена линия. После оцвети както искаш!' },
        { type: 'draw', height: 70, guides: [
          'M15 6 L12 18', 'M30 6 L27 18', 'M45 6 L42 18', 'M60 6 L57 18', 'M75 6 L72 18', 'M90 6 L87 18',
          'M5 40 L20 26 L35 40 L50 24 L65 40 L80 28 L95 40',
          'M5 58 Q12 50 20 58 T35 58 T50 58 T65 58 T80 58 T95 58'
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Коя линия е права?',
      options: [
        { value: 'wavy', pic: '[liniya-kriva]' },
        { value: 'straight', pic: '[liniya-prava]' },
        { value: 'zigzag', pic: '[liniya-chupena]' }
      ],
      answer: 'straight'
    },
    {
      question: 'Коя линия е начупена?',
      options: [
        { value: 'zigzag', pic: '[liniya-chupena]' },
        { value: 'straight', pic: '[liniya-prava]' },
        { value: 'wavy', pic: '[liniya-kriva]' }
      ],
      answer: 'zigzag'
    },
    {
      question: 'С каква линия рисуваме морските вълни?',
      picture: { pic: '🌊' },
      options: ['с крива', 'с права'],
      answer: 'с крива'
    },
    {
      question: 'С каква линия рисуваме върховете на планините?',
      picture: { pic: '🏔️' },
      options: ['с начупена', 'с крива'],
      answer: 'с начупена'
    }
  ]
};
