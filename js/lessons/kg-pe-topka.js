window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-pe-topka'] = {
  stage: 'kg',
  subject: 'pe',
  group: 2,
  title: 'Хвърляме и ловим топка',
  emoji: '🏐',
  minutes: 10,
  intro: 'Топката е чудесна приятелка за игра! Днес ще се научим да я хвърляме и да я ловим.',
  parentTip: 'Използвайте мека, по-голяма топка. Застанете близо (2 крачки) и хвърляйте внимателно отдолу. Когато детето хваща уверено, отстъпете крачка назад.',

  sections: [
    {
      title: 'Как ловим топката?',
      blocks: [
        { type: 'story', panels: [
          { pic: '👀', text: 'Гледам топката през цялото време.' },
          { pic: '🙌', text: 'Протягам ръцете напред, с пръстчета нагоре.' },
          { pic: '🤗', text: 'Когато топката дойде, я прибирам към гърдите си.' }
        ] }
      ]
    },
    {
      title: 'Игри с топка',
      blocks: [
        { type: 'cards', items: [
          { pic: '🏐↗️', label: 'Хвърли нагоре и хвани', color: '#5ec8f2' },
          { pic: '🧒🏐🧑', label: 'Подай на приятел', color: '#7bdcb5' },
          { pic: '🏐⬇️', label: 'Удари в земята и хвани', color: '#ffd23f' },
          { pic: '🗑️🏐', label: 'Хвърли в кошче', color: '#ff8fb1' }
        ] },
        { type: 'say', text: 'Колко пъти можеш да хвърлиш топката нагоре и да я хванеш? Броим заедно!' },
        { type: 'countAlong', emoji: '🏐', count: 5, done: 'Пет пъти! Браво!' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какво гледаме, докато ловим?',
      options: [
        { value: 'ball', pic: '🏐', label: 'топката' },
        { value: 'sky', pic: '☁️', label: 'облаците' }
      ],
      answer: 'ball'
    },
    {
      question: 'Как държим ръцете, когато ловим?',
      options: [
        { value: 'out', pic: '🙌', label: 'протегнати напред' },
        { value: 'back', pic: '🙈', label: 'на очите' }
      ],
      answer: 'out'
    },
    {
      question: 'Къде е най-добре да играем с топка?',
      options: [
        { value: 'park', pic: '🌳', label: 'в парка' },
        { value: 'street', pic: '🚗', label: 'на улицата' }
      ],
      answer: 'park'
    },
    {
      question: 'Как подаваме топката на по-малко дете?',
      options: ['Внимателно и леко.', 'Силно, право в лицето.'],
      answer: 'Внимателно и леко.'
    }
  ]
};
