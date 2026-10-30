window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-stihcheta'] = {
  stage: 'kg',
  subject: 'bel',
  group: 1,
  title: 'Стихчета и римушки',
  emoji: '📜',
  minutes: 8,
  intro: 'Стихчетата звучат като песничка, защото думите в края им си приличат. Това се казва рима.',
  parentTip: 'Казвайте стихчето с движения — скачайте като зайче, правете „хрус-хрус“. Повтаряйте го няколко дни подред, докато Ая го каже сама. После търсете римуващи се думи: слон — балон, жаба — баба.',

  sections: [
    {
      title: 'Стихче за зайчето',
      blocks: [
        { type: 'story', panels: [
          { pic: '🐰', text: 'Зайче малко — скок-подскок,' },
          { pic: '🍃', text: 'скри се под зелен листок.' },
          { pic: '🥕', text: 'Морковче си намери,' },
          { pic: '🐰🐿️', text: 'с катеричка го дели.' }
        ] },
        { type: 'say', text: 'Чуваш ли? Подскок — листок. Тези думи звучат еднакво накрая. Това е рима!' }
      ]
    },
    {
      title: 'Думи, които се римуват',
      blocks: [
        { type: 'cards', items: [
          { pic: '🐘🎈', label: 'слон — балон', color: '#5ec8f2' },
          { pic: '🐸👵', label: 'жаба — баба', color: '#7bdcb5' },
          { pic: '🐭📖', label: 'мишка — книжка', color: '#ffd23f' },
          { pic: '🥄🐦', label: 'лъжица — птица', color: '#ff8fb1' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Коя дума се римува със „слон“?',
      picture: { pic: '🐘' },
      options: [
        { value: 'balloon', pic: '🎈', label: 'балон' },
        { value: 'cat', pic: '🐈', label: 'котка' }
      ],
      answer: 'balloon'
    },
    {
      question: 'Коя дума се римува с „жаба“?',
      picture: { pic: '🐸' },
      options: [
        { value: 'fish', pic: '🐟', label: 'риба' },
        { value: 'grandma', pic: '👵', label: 'баба' }
      ],
      answer: 'grandma'
    },
    {
      question: 'Коя дума се римува с „мишка“?',
      picture: { pic: '🐭' },
      options: [
        { value: 'book', pic: '📖', label: 'книжка' },
        { value: 'sun', pic: '☀️', label: 'слънце' }
      ],
      answer: 'book'
    },
    {
      question: 'Какво намерило зайчето в стихчето?',
      options: [
        { value: 'carrot', pic: '🥕', label: 'морковче' },
        { value: 'apple', pic: '🍎', label: 'ябълка' }
      ],
      answer: 'carrot'
    },
    {
      question: 'С кого зайчето разделило морковчето?',
      options: [
        { value: 'squirrel', pic: '🐿️', label: 'с катеричка' },
        { value: 'bear', pic: '🐻', label: 'с мечо' }
      ],
      answer: 'squirrel'
    }
  ]
};
