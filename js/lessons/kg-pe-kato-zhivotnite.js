window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-pe-kato-zhivotnite'] = {
  stage: 'kg',
  subject: 'pe',
  group: 1,
  title: 'Движи се като животните',
  emoji: '🐰',
  minutes: 10,
  intro: 'Стани и се раздвижи! Днес ще скачаме, ходим и пълзим като различни животни.',
  parentTip: 'Освободете място без остри ръбове и правете упражненията заедно. 5–10 минути са достатъчни. Спрете, ако Ая се умори, и дайте вода.',

  sections: [
    {
      title: 'Направи като…',
      blocks: [
        { type: 'say', text: 'Натисни картичката, чуй какво да направиш и опитай!' },
        { type: 'cards', items: [
          { pic: '🐰', label: 'Скачай като зайче', sub: 'с двата крака заедно', color: '#ff8fb1' },
          { pic: '🐈', label: 'Ходи като котка', sub: 'на пръсти, тихичко', color: '#ffb84d' },
          { pic: '🐻', label: 'Ходи като мечок', sub: 'на ръце и крака', color: '#c38bff' },
          { pic: '🐸', label: 'Скачай като жабка', sub: 'от клек нагоре', color: '#5fd068' },
          { pic: '🦩', label: 'Стой като фламинго', sub: 'на един крак', color: '#ff7a59' },
          { pic: '🐢', label: 'Пълзи като костенурка', sub: 'бавно, бавно', color: '#7bdcb5' },
          { pic: '🐎', label: 'Бягай като конче', sub: 'с високо вдигнати колене', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Игра',
      blocks: [
        { type: 'say', text: 'Възрастният казва животно, а ти се движиш като него. Накрая почиваме, свити като спящо котенце.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кое животно скача с двата крака заедно?',
      options: [
        { value: 'rabbit', pic: '🐰', label: 'зайче' },
        { value: 'turtle', pic: '🐢', label: 'костенурка' },
        { value: 'snake', pic: '🐍', label: 'змия' }
      ],
      answer: 'rabbit'
    },
    {
      question: 'Как ходи котката?',
      picture: { pic: '🐈' },
      options: ['Тихо, на пръсти.', 'Тропа силно.'],
      answer: 'Тихо, на пръсти.'
    },
    {
      question: 'Кой стои на един крак?',
      options: [
        { value: 'bear', pic: '🐻', label: 'мечок' },
        { value: 'flamingo', pic: '🦩', label: 'фламинго' }
      ],
      answer: 'flamingo'
    },
    {
      question: 'Кое животно пълзи бавно?',
      options: [
        { value: 'horse', pic: '🐎', label: 'конче' },
        { value: 'turtle', pic: '🐢', label: 'костенурка' }
      ],
      answer: 'turtle'
    }
  ]
};
