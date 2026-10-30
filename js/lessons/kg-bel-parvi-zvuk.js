window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-parvi-zvuk'] = {
  stage: 'kg',
  subject: 'bel',
  group: 4,
  title: 'С какъв звук започва думата?',
  emoji: '👂',
  minutes: 12,
  intro: 'Всяка дума е съставена от звукове. Днес ще се научим да чуваме първия звук.',
  parentTip: 'Казвайте думата бавно и протягайте първия звук: „ммм-ечка“, „ссс-лон“. Казвайте звука, а не името на буквата: „М“, а не „ем“. Играйте на „Виждам нещо, което започва със звука…“.',

  sections: [
    {
      title: 'Първият звук',
      blocks: [
        { type: 'say', text: 'Кажи бавно: „ммм-ечка“. Чуваш ли? Първият звук е М!' },
        { type: 'cards', items: [
          { pic: '🐻', label: 'М — мечка', say: 'Мечка започва със звука М.', color: '#ffb84d' },
          { pic: '🍌', label: 'Б — банан', say: 'Банан започва със звука Б.', color: '#ffd23f' },
          { pic: '🐈', label: 'К — котка', say: 'Котка започва със звука К.', color: '#ff8fb1' },
          { pic: '🐟', label: 'Р — риба', say: 'Риба започва със звука Р.', color: '#5ec8f2' },
          { pic: '🐘', label: 'С — слон', say: 'Слон започва със звука С.', color: '#c38bff' },
          { pic: '⚽', label: 'Т — топка', say: 'Топка започва със звука Т.', color: '#7bdcb5' },
          { pic: '🦁', label: 'Л — лъв', say: 'Лъв започва със звука Л.', color: '#ffb84d' },
          { pic: '🍎', label: 'Я — ябълка', say: 'Ябълка започва със звука Я.', color: '#ff7a59' }
        ] }
      ]
    },
    {
      title: 'Последният звук',
      blocks: [
        { type: 'say', text: 'Можем да чуем и последния звук. Кажи бавно: „сло-ннн“. Думата слон завършва на Н.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'С какъв звук започва думата котка?',
      picture: { pic: '🐈' },
      options: ['К', 'М', 'Р'],
      answer: 'К'
    },
    {
      question: 'С какъв звук започва думата слон?',
      picture: { pic: '🐘' },
      options: ['Л', 'С', 'Т'],
      answer: 'С',
      hint: 'Кажи бавно: ссс-лон.'
    },
    {
      question: 'Коя дума започва със звука Р?',
      options: [
        { value: 'fish', pic: '🐟', label: 'риба' },
        { value: 'banana', pic: '🍌', label: 'банан' },
        { value: 'lion', pic: '🦁', label: 'лъв' }
      ],
      answer: 'fish'
    },
    {
      question: 'Коя дума започва със звука Б?',
      options: [
        { value: 'bear', pic: '🐻', label: 'мечка' },
        { value: 'banana', pic: '🍌', label: 'банан' },
        { value: 'ball', pic: '⚽', label: 'топка' }
      ],
      answer: 'banana'
    },
    {
      question: 'Коя дума започва като „мама“?',
      options: [
        { value: 'mouse', pic: '🐭', label: 'мишка' },
        { value: 'cat', pic: '🐈', label: 'котка' },
        { value: 'fish', pic: '🐟', label: 'риба' }
      ],
      answer: 'mouse',
      hint: 'Мама започва със звука М.'
    },
    {
      question: 'С какъв звук завършва думата слон?',
      picture: { pic: '🐘' },
      options: ['Н', 'С', 'О'],
      answer: 'Н'
    }
  ]
};
