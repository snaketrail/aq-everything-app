window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-opishi-igrachkata'] = {
  stage: 'kg',
  subject: 'bel',
  group: 2,
  title: 'Опиши играчката си',
  emoji: '🧸',
  minutes: 8,
  intro: 'Когато описваме нещо, казваме какъв цвят е, голямо ли е или малко, и за какво служи.',
  parentTip: 'Сложете любимата играчка на Ая пред нея и задавайте въпроси: „Какъв цвят е? Голяма ли е? Мека ли е? Какво правиш с нея?“ После разменете ролите — вие описвате, Ая познава.',

  sections: [
    {
      title: 'Как описваме?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🎨', label: 'Какъв цвят е?', color: '#c38bff' },
          { pic: '📏', label: 'Голямо ли е, или малко?', color: '#5ec8f2' },
          { pic: '✋', label: 'Меко ли е, или твърдо?', color: '#ff8fb1' },
          { pic: '🎯', label: 'За какво служи?', color: '#ffd23f' }
        ] }
      ]
    },
    {
      title: 'Пример',
      blocks: [
        { type: 'picture', picture: { pic: '⚽' } },
        { type: 'say', text: 'Моята топка е кръгла, бяла с черни петна. Не е много голяма. С нея ритам на двора.' },
        { type: 'picture', picture: { pic: '🧸' } },
        { type: 'say', text: 'Моето мече е кафяво, меко и малко. Гушкам го, когато заспивам.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кафяво е, меко е, гушкам го вечер. Коя е играчката?',
      options: [
        { value: 'teddy', pic: '🧸', label: 'мече' },
        { value: 'ball', pic: '⚽', label: 'топка' },
        { value: 'car', pic: '🚗', label: 'количка' }
      ],
      answer: 'teddy'
    },
    {
      question: 'Червена е, има колела и кара бързо. Коя е играчката?',
      options: [
        { value: 'kite', pic: '🪁', label: 'хвърчило' },
        { value: 'car', pic: '🚗', label: 'количка' },
        { value: 'doll', pic: '🪆', label: 'кукла' }
      ],
      answer: 'car'
    },
    {
      question: 'Лети високо на вятъра и има дълга опашка. Коя е играчката?',
      options: [
        { value: 'kite', pic: '🪁', label: 'хвърчило' },
        { value: 'teddy', pic: '🧸', label: 'мече' }
      ],
      answer: 'kite'
    },
    {
      question: 'Какъв цвят е балонът?',
      picture: { pic: '🎈' },
      options: ['червен', 'зелен', 'син'],
      answer: 'червен'
    },
    {
      question: 'Какво правим с топката?',
      picture: { pic: '⚽' },
      options: ['Ритаме я.', 'Обличаме я.'],
      answer: 'Ритаме я.'
    }
  ]
};
