window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-tech-oblichane'] = {
  stage: 'kg',
  subject: 'tech',
  group: 4,
  title: 'Обличам се сама',
  emoji: '👗',
  minutes: 10,
  intro: 'Голямо момиче можеш само да се облечеш! Важно е да знаеш кое се облича първо.',
  parentTip: 'Вечер приготвяйте заедно дрехите за утре, подредени по реда на обличане. Дайте време сутрин — обличането само отнема повече време, но учи на самостоятелност. Упражнявайте копчета и цип.',

  sections: [
    {
      title: 'Поред',
      blocks: [
        { type: 'story', panels: [
          { pic: '🩲', text: 'Първо обличам бельото.' },
          { pic: '🧦', text: 'После обувам чорапите.' },
          { pic: '👖', text: 'Обличам панталона или полата.' },
          { pic: '👕', text: 'Обличам блузата.' },
          { pic: '👟', text: 'Обувам обувките и ги закопчавам или завързвам.' },
          { pic: '🧥', text: 'Ако е студено, обличам якето.' }
        ] }
      ]
    },
    {
      title: 'Грижа за дрехите',
      blocks: [
        { type: 'cards', items: [
          { pic: '🧥🪝', label: 'Закачам якето на закачалката.', color: '#5ec8f2' },
          { pic: '👟', label: 'Подреждам обувките една до друга.', color: '#ffd23f' },
          { pic: '🧺', label: 'Слагам мръсните дрехи в коша за пране.', color: '#7bdcb5' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какво обуваме преди обувките?',
      options: [
        { value: 'socks', pic: '🧦', label: 'чорапите' },
        { value: 'coat', pic: '🧥', label: 'якето' }
      ],
      answer: 'socks'
    },
    {
      question: 'Какво обличаме последно, когато е студено?',
      options: [
        { value: 'coat', pic: '🧥', label: 'якето' },
        { value: 'socks', pic: '🧦', label: 'чорапите' }
      ],
      answer: 'coat'
    },
    {
      question: 'Къде слагаме мръсните дрехи?',
      options: [
        { value: 'basket', pic: '🧺', label: 'в коша за пране' },
        { value: 'bed', pic: '🛏️', label: 'под леглото' }
      ],
      answer: 'basket'
    },
    {
      question: 'Какво правим с якето, когато влезем вкъщи?',
      options: ['Закачаме го на закачалката.', 'Хвърляме го на пода.'],
      answer: 'Закачаме го на закачалката.'
    }
  ]
};
