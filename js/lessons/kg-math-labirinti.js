window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-labirinti'] = {
  stage: 'kg',
  subject: 'math',
  group: 4,
  title: 'Лабиринти и квадратна мрежа',
  emoji: '🧭',
  minutes: 12,
  intro: 'В квадратната мрежа всяко квадратче е една стъпка. Можем да кажем точно накъде и колко стъпки да направим.',
  parentTip: 'Начертайте мрежа с тебешир на двора и „водете робот“ с команди: „Две стъпки напред, една надясно.“ Нека Ая също дава команди на вас.',

  sections: [
    {
      title: 'Стъпки в мрежата',
      blocks: [
        { type: 'picture', picture: { grid: { cols: 5, rows: 1, items: [
          { pic: '🐰', c: 1, r: 1 }, { c: 2, r: 1, mark: true }, { c: 3, r: 1, mark: true }, { c: 4, r: 1, mark: true }, { pic: '🥕', c: 5, r: 1 }
        ] } } },
        { type: 'say', text: 'Зайчето прави 4 стъпки надясно и стига до морковчето.' }
      ]
    },
    {
      title: 'Лабиринт',
      blocks: [
        { type: 'say', text: 'Помогни на мишката да стигне до сиренцето. Начертай пътя с пръст, без да минаваш през стените.' },
        { type: 'draw', height: 60,
          walls: ['M3 3 H97 V57 H3 Z', 'M3 22 H72', 'M28 40 H97', 'M50 22 V31', 'M18 40 V57'],
          marks: [{ pic: '🐭', x: 10, y: 12 }, { pic: '🧀', x: 88, y: 49 }] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Колко стъпки надясно трябва да направи пиленцето до зрънцето?',
      picture: { grid: { cols: 4, rows: 1, items: [{ pic: '🐥', c: 1, r: 1 }, { pic: '🌾', c: 4, r: 1 }] } },
      options: [2, 3, 4],
      answer: 3,
      hint: 'Брой квадратчетата, през които минава.'
    },
    {
      question: 'Накъде трябва да тръгне кучето, за да стигне до кокалчето?',
      picture: { grid: { cols: 3, rows: 3, items: [{ pic: '🐶', c: 2, r: 3 }, { pic: '🦴', c: 2, r: 1 }] } },
      options: [
        { value: 'up', pic: '⬆️', label: 'нагоре' },
        { value: 'down', pic: '⬇️', label: 'надолу' },
        { value: 'left', pic: '⬅️', label: 'наляво' }
      ],
      answer: 'up'
    },
    {
      question: 'Котето е горе вляво. Къде е рибката?',
      picture: { grid: { cols: 3, rows: 3, items: [{ pic: '🐱', c: 1, r: 1 }, { pic: '🐟', c: 3, r: 3 }] } },
      options: ['долу вдясно', 'горе вдясно', 'долу вляво'],
      answer: 'долу вдясно'
    },
    {
      question: 'Колко стъпки надолу е от пчелата до цветето?',
      picture: { grid: { cols: 3, rows: 4, items: [{ pic: '🐝', c: 2, r: 1 }, { pic: '🌼', c: 2, r: 4 }] } },
      options: [2, 3, 4],
      answer: 3
    }
  ]
};
