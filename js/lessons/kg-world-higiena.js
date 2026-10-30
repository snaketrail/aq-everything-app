window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-higiena'] = {
  stage: 'kg',
  subject: 'world',
  group: 1,
  title: 'Мием си ръцете',
  emoji: '🧼',
  minutes: 8,
  intro: 'По ръцете ни има малки микробчета, които не виждаме. Сапунът и водата ги прогонват!',
  parentTip: 'Мийте ръцете заедно и пейте кратка песничка (около 20 секунди), докато търкате. Нека детето само натиска сапуна и спира водата.',

  sections: [
    {
      title: 'Как мием ръцете?',
      blocks: [
        { type: 'story', panels: [
          { pic: '🚰', text: 'Пусни водата и намокри ръцете.' },
          { pic: '🧼', text: 'Сложи сапун.' },
          { pic: '🙌🫧', text: 'Търкай дланите, пръстчетата и между тях, докато изпееш една кратка песничка.' },
          { pic: '💧', text: 'Изплакни сапуна с вода и спри водата.' },
          { pic: '🤲', text: 'Подсуши ръцете с кърпа.' },
          { pic: '✨', text: 'Готово! Ръцете са чисти.' }
        ] }
      ]
    },
    {
      title: 'Кога мием ръцете?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🍽️', label: 'преди ядене', color: '#ffb84d' },
          { pic: '🚽', label: 'след тоалетна', color: '#5ec8f2' },
          { pic: '🌳', label: 'след игра навън', color: '#7bdcb5' },
          { pic: '🐕', label: 'след като погалим животно', color: '#ff8fb1' },
          { pic: '🤧', label: 'след като кихнем', color: '#c38bff' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какво ни трябва, за да измием ръцете?',
      options: [
        { value: 'soap', pic: '🧼', label: 'сапун' },
        { value: 'lollipop', pic: '🍭', label: 'близалка' },
        { value: 'teddy', pic: '🧸', label: 'мече' }
      ],
      answer: 'soap'
    },
    {
      question: 'Кога мием ръцете?',
      options: [
        { value: 'meal', pic: '🍽️', label: 'преди ядене' },
        { value: 'tv', pic: '📺', label: 'докато гледаме филмче' }
      ],
      answer: 'meal'
    },
    {
      question: 'Играла си навън на пясъка. Какво правиш после?',
      picture: { pic: '🏖️' },
      options: ['Мия си ръцете.', 'Веднага ям.'],
      answer: 'Мия си ръцете.'
    },
    {
      question: 'Какво правим накрая, след като измием ръцете?',
      options: ['Подсушаваме ги.', 'Слагаме още сапун.'],
      answer: 'Подсушаваме ги.'
    },
    {
      question: 'Как кихаме?',
      picture: { pic: '🤧' },
      options: ['В кърпичка или в лакътя.', 'Право към приятелчето.'],
      answer: 'В кърпичка или в лакътя.'
    }
  ]
};
