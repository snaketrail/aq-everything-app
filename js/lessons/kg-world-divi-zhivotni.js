window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-divi-zhivotni'] = {
  stage: 'kg',
  subject: 'world',
  group: 2,
  title: 'Диви животни в гората',
  emoji: '🦊',
  minutes: 10,
  intro: 'Дивите животни живеят сами в природата — в гората, в планината, в полето. Никой не ги храни; те сами си намират храна.',
  parentTip: 'Разгледайте книжка за животните в българската гора. Обяснете, че дивите животни не се галят и не се хранят — гледаме ги отдалече.',

  sections: [
    {
      title: 'Животните в българската гора',
      blocks: [
        { type: 'cards', items: [
          { pic: '🐻', label: 'мечка', sub: 'обича мед и горски плодове', color: '#ffb84d' },
          { pic: '🐺', label: 'вълк', sub: 'живее на глутница', color: '#dfe6ee' },
          { pic: '🦊', label: 'лисица', sub: 'хитра, с пухкава опашка', color: '#ff7a59' },
          { pic: '🐇', label: 'заек', sub: 'бързо тича и скача', color: '#7bdcb5' },
          { pic: '🦌', label: 'елен', sub: 'има големи рога', color: '#ffd23f' },
          { pic: '🦔', label: 'таралеж', sub: 'има бодли', color: '#c38bff' },
          { pic: '🐿️', label: 'катерица', sub: 'събира лешници и жълъди', color: '#ffb84d' },
          { pic: '🦉', label: 'сова', sub: 'буди се нощем', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Къде живеят?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🐻🕳️', label: 'Мечката живее в бърлога.', color: '#ffb84d' },
          { pic: '🦊🕳️', label: 'Лисицата живее в дупка (леговище).', color: '#ff7a59' },
          { pic: '🐿️🌳', label: 'Катерицата живее в хралупа в дървото.', color: '#7bdcb5' },
          { pic: '🐦🪺', label: 'Птиците живеят в гнезда.', color: '#5ec8f2' }
        ] },
        { type: 'say', text: 'Мечката и таралежът спят през зимата. Това се казва зимен сън.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кое животно е диво?',
      options: [
        { value: 'cow', pic: '🐄', label: 'крава' },
        { value: 'wolf', pic: '🐺', label: 'вълк' },
        { value: 'dog', pic: '🐕', label: 'куче' }
      ],
      answer: 'wolf'
    },
    {
      question: 'Къде живее катерицата?',
      picture: { pic: '🐿️' },
      options: ['в хралупа в дървото', 'в бърлога', 'в морето'],
      answer: 'в хралупа в дървото'
    },
    {
      question: 'Кой спи зимен сън?',
      options: [
        { value: 'bear', pic: '🐻', label: 'мечката' },
        { value: 'fox', pic: '🦊', label: 'лисицата' }
      ],
      answer: 'bear'
    },
    {
      question: 'Кой има големи рога?',
      options: [
        { value: 'deer', pic: '🦌', label: 'елен' },
        { value: 'rabbit', pic: '🐇', label: 'заек' },
        { value: 'hedgehog', pic: '🦔', label: 'таралеж' }
      ],
      answer: 'deer'
    },
    {
      question: 'В гората виждаш лисица. Какво правиш?',
      picture: { pic: '🦊' },
      options: ['Гледам я отдалече.', 'Отивам да я погаля.'],
      answer: 'Гледам я отдалече.'
    }
  ]
};
