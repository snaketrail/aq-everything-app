window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-music-instrumenti'] = {
  stage: 'kg',
  subject: 'music',
  group: 2,
  title: 'Музикалните инструменти',
  emoji: '🎻',
  minutes: 10,
  intro: 'С музикалните инструменти свирим музика. Всеки инструмент изглежда и звучи различно.',
  parentTip: 'Пуснете кратки записи на всеки инструмент и нека Ая посочи картинката. Направете си вкъщи „тъпан“ от тенджера и дървена лъжица и „дрънкалка“ от бурканче с ориз.',

  sections: [
    {
      title: 'Запознай се с инструментите',
      blocks: [
        { type: 'cards', items: [
          { pic: '🎹', label: 'пиано', sub: 'има бели и черни клавиши', color: '#c38bff' },
          { pic: '🥁', label: 'тъпан', sub: 'удряме го и прави „бум-бум“', color: '#ff7a59' },
          { pic: '🪗', label: 'акордеон', sub: 'разтягаме го и го събираме', color: '#ff8fb1' },
          { pic: '🎻', label: 'цигулка', sub: 'свирим с лък по струните', color: '#ffb84d' },
          { pic: '🎺', label: 'тромпет', sub: 'духаме в него — звучи силно', color: '#ffd23f' },
          { pic: '🎸', label: 'китара', sub: 'подръпваме струните с пръсти', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Как свирим?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🥁', label: 'удряме', color: '#ff7a59' },
          { pic: '🎺', label: 'духаме', color: '#ffd23f' },
          { pic: '🎸', label: 'дърпаме струни', color: '#5ec8f2' },
          { pic: '🎹', label: 'натискаме клавиши', color: '#c38bff' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кой е тъпанът?',
      options: [
        { value: 'violin', pic: '🎻' },
        { value: 'drum', pic: '🥁' },
        { value: 'piano', pic: '🎹' }
      ],
      answer: 'drum'
    },
    {
      question: 'Кое е пианото?',
      options: [
        { value: 'piano', pic: '🎹' },
        { value: 'guitar', pic: '🎸' },
        { value: 'trumpet', pic: '🎺' }
      ],
      answer: 'piano',
      hint: 'Пианото има бели и черни клавиши.'
    },
    {
      question: 'На кой инструмент свирим с лък?',
      options: [
        { value: 'drum', pic: '🥁' },
        { value: 'trumpet', pic: '🎺' },
        { value: 'violin', pic: '🎻' }
      ],
      answer: 'violin'
    },
    {
      question: 'В кой инструмент духаме?',
      options: [
        { value: 'trumpet', pic: '🎺' },
        { value: 'piano', pic: '🎹' },
        { value: 'guitar', pic: '🎸' }
      ],
      answer: 'trumpet'
    },
    {
      question: 'Кой е акордеонът?',
      options: [
        { value: 'guitar', pic: '🎸' },
        { value: 'accordion', pic: '🪗' },
        { value: 'drum', pic: '🥁' }
      ],
      answer: 'accordion'
    }
  ]
};
