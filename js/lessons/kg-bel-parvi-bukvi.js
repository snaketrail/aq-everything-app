window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-parvi-bukvi'] = {
  stage: 'kg',
  subject: 'bel',
  group: 4,
  title: 'Първите печатни букви',
  emoji: '🔠',
  minutes: 10,
  intro: 'Звуковете, които чуваме, можем да запишем с букви. Днес ще се запознаем с първите букви.',
  parentTip: 'Покажете на детето буквите в неговото име — те са най-интересни. Търсете ги по табелите на улицата и по кутиите в магазина. Казвайте звука на буквата („М“), не името ѝ („ем“).',

  sections: [
    {
      title: 'Гласните букви',
      blocks: [
        { type: 'say', text: 'Тези букви можем да пеем дълго: ааа, ооо, ууу. Натисни картичката!' },
        { type: 'cards', items: [
          { pic: '🍍', label: 'А а', sub: 'ананас', say: 'А, като ананас', color: '#ffd23f' },
          { pic: '👓', label: 'О о', sub: 'очила', say: 'О, като очила', color: '#5ec8f2' },
          { pic: '👂', label: 'У у', sub: 'ухо', say: 'У, като ухо', color: '#ff8fb1' },
          { pic: '🦔', label: 'Е е', sub: 'еж', say: 'Е, като еж', color: '#7bdcb5' },
          { pic: '🪡', label: 'И и', sub: 'игла', say: 'И, като игла', color: '#c38bff' }
        ] }
      ]
    },
    {
      title: 'Още букви',
      blocks: [
        { type: 'cards', items: [
          { pic: '🐻', label: 'М м', sub: 'мечка', say: 'М, като мечка', color: '#ffb84d' },
          { pic: '🍌', label: 'Б б', sub: 'банан', say: 'Б, като банан', color: '#ffd23f' },
          { pic: '🐘', label: 'С с', sub: 'слон', say: 'С, като слон', color: '#5ec8f2' },
          { pic: '⚽', label: 'Т т', sub: 'топка', say: 'Т, като топка', color: '#7bdcb5' }
        ] },
        { type: 'say', text: 'От буквите М и А можем да напишем МАМА!' },
        { type: 'picture', picture: { sequence: ['М', 'А', 'М', 'А'] } }
      ]
    }
  ],

  tasks: [
    {
      question: 'Коя е буквата А?',
      options: ['О', 'А', 'М'],
      answer: 'А'
    },
    {
      question: 'Коя е буквата М?',
      options: ['М', 'Т', 'С'],
      answer: 'М'
    },
    {
      question: 'С коя буква започва думата слон?',
      picture: { pic: '🐘' },
      options: ['Б', 'С', 'У'],
      answer: 'С'
    },
    {
      question: 'Какво пише тук?',
      picture: { sequence: ['М', 'А', 'М', 'А'] },
      options: ['МАМА', 'ТАТЕ', 'БАБА'],
      answer: 'МАМА'
    },
    {
      question: 'С коя буква започва думата очила?',
      picture: { pic: '👓' },
      options: ['А', 'О', 'И'],
      answer: 'О'
    }
  ]
};
