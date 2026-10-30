window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-tech-kasane'] = {
  stage: 'kg',
  subject: 'tech',
  group: 1,
  title: 'Късаме и лепим хартия',
  emoji: '📄',
  minutes: 12,
  intro: 'Хартията може да се къса на ленти и парченца. От тях ще направим есенно дърво!',
  parentTip: 'Късането на хартия е отлично упражнение за пръстчетата. Използвайте стари списания и цветна хартия. Нанесете вие лепилото върху ствола, а Ая да лепи парченцата.',

  sections: [
    {
      title: 'Какво ни трябва?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🟨🟧🟥', label: 'цветна хартия', color: '#ffb84d' },
          { pic: '[lepilo]', label: 'лепило', color: '#5ec8f2' },
          { pic: '📄', label: 'лист с нарисуван ствол', color: '#dfe6ee' }
        ] }
      ]
    },
    {
      title: 'Есенно дърво',
      blocks: [
        { type: 'story', panels: [
          { pic: '✋📄', text: 'Хвани хартията с двете ръце — пръстчетата близо едно до друго.' },
          { pic: '🟧', text: 'Дръпни едната ръка към себе си, а другата — напред. Откъсна лента!' },
          { pic: '🟨🟧🟥', text: 'Откъсни от лентата малки парченца — това са листата.' },
          { pic: '[lepilo]', text: 'Намажи лепило около клоните на дървото.' },
          { pic: '🍂🌳', text: 'Залепи парченцата. Ето го есенното дърво!' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'С какво лепим хартията?',
      options: [
        { value: 'glue', pic: '[lepilo]', label: 'с лепило' },
        { value: 'spoon', pic: '🥄', label: 'с лъжица' }
      ],
      answer: 'glue'
    },
    {
      question: 'Какви цветове са есенните листа?',
      options: [
        { value: 'autumn', pic: '🟨🟧🟥', label: 'жълти, оранжеви, червени' },
        { value: 'blue', pic: '🟦🟪', label: 'сини и лилави' }
      ],
      answer: 'autumn'
    },
    {
      question: 'Как късаме хартията?',
      options: ['С пръстите на двете ръце.', 'Със зъби.'],
      answer: 'С пръстите на двете ръце.'
    },
    {
      question: 'Какво правим накрая с остатъците от хартия?',
      options: [
        { value: 'bin', pic: '🟦', label: 'прибираме ги в синия контейнер' },
        { value: 'floor', pic: '🧹', label: 'оставяме ги на пода' }
      ],
      answer: 'bin'
    }
  ]
};
