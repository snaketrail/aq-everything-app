window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-art-aplikatsiya'] = {
  stage: 'kg',
  subject: 'art',
  group: 3,
  title: 'Апликация от изрязани форми',
  emoji: '✂️',
  minutes: 15,
  intro: 'Апликация е картина, която правим, като лепим изрязани форми от цветна хартия. Днес ще направим къщичка!',
  parentTip: 'Изрежете предварително формите или нека Ая реже по начертани прави линии с детска ножица. Дайте ѝ свобода да подреди формите по свой начин — няма „грешна“ апликация.',

  sections: [
    {
      title: 'Какво ни трябва?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🟥🟦🟨', label: 'цветна хартия', color: '#ff8fb1' },
          { pic: '✂️', label: 'детска ножица', color: '#5ec8f2' },
          { pic: '[lepilo]', label: 'лепило', color: '#ffd23f' },
          { pic: '📄', label: 'бял лист', color: '#dfe6ee' }
        ] }
      ]
    },
    {
      title: 'Да направим къщичка',
      blocks: [
        { type: 'story', panels: [
          { pic: '🟥', text: 'Изрежи голям квадрат — това е стената на къщичката.' },
          { pic: '🔺', text: 'Изрежи триъгълник — това е покривът. Залепи го над квадрата.' },
          { pic: '🟦🟦', text: 'Изрежи малки квадратчета за прозорци и правоъгълник за врата.' },
          { pic: '🟡', text: 'Изрежи жълт кръг за слънце и залепи го горе в ъгъла.' },
          { pic: '🏠☀️', text: 'Готово! Къщичката е направена само от фигури.' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'От кои фигури направихме къщичката?',
      picture: { pic: '🟥🔺' },
      options: ['квадрат и триъгълник', 'два кръга'],
      answer: 'квадрат и триъгълник'
    },
    {
      question: 'Коя фигура е покривът?',
      options: [
        { value: 'triangle', pic: '🔺' },
        { value: 'circle', pic: '🟡' },
        { value: 'square', pic: '🟥' }
      ],
      answer: 'triangle'
    },
    {
      question: 'С какво залепваме формите?',
      options: [
        { value: 'glue', pic: '[lepilo]', label: 'лепило' },
        { value: 'water', pic: '💧', label: 'вода' }
      ],
      answer: 'glue'
    },
    {
      question: 'Коя фигура ще използваш за слънце?',
      options: [
        { value: 'circle', pic: '🟡', label: 'кръг' },
        { value: 'triangle', pic: '🔺', label: 'триъгълник' }
      ],
      answer: 'circle'
    }
  ]
};
