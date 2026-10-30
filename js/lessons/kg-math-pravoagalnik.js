window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-pravoagalnik'] = {
  stage: 'kg',
  subject: 'math',
  group: 3,
  title: 'Правоъгълник',
  emoji: '[pravoagalnik]',
  minutes: 8,
  intro: 'Вече познаваш кръга, квадрата и триъгълника. Днес ще се запознаем с правоъгълника.',
  parentTip: 'Сравнете квадрат и правоъгълник от хартия: и двата имат четири ъгъла, но квадратът има еднакви страни, а правоъгълникът — две дълги и две къси. Търсете правоъгълници вкъщи: врата, книга, телефон, кутия.',

  sections: [
    {
      title: 'Какво е правоъгълник?',
      blocks: [
        { type: 'picture', picture: { pic: '[pravoagalnik]' } },
        { type: 'say', text: 'Правоъгълникът има четири ъгъла и четири страни: две дълги и две къси.' },
        { type: 'cards', items: [
          { pic: '🟥', label: 'квадрат', sub: 'всички страни са еднакви', color: '#ff7a59' },
          { pic: '[pravoagalnik]', label: 'правоъгълник', sub: 'две дълги и две къси страни', color: '#5ec8f2' }
        ] }
      ]
    },
    {
      title: 'Правоъгълници около нас',
      blocks: [
        { type: 'cards', items: [
          { pic: '🚪', label: 'врата', color: '#ffb84d' },
          { pic: '📱', label: 'телефон', color: '#c38bff' },
          { pic: '📕', label: 'книга', color: '#ff8fb1' },
          { pic: '🍫', label: 'шоколад', color: '#ffb84d' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кой е правоъгълникът?',
      options: [
        { value: 'circle', pic: '🔵' },
        { value: 'rect', pic: '[pravoagalnik]' },
        { value: 'triangle', pic: '🔺' }
      ],
      answer: 'rect'
    },
    {
      question: 'Колко ъгъла има правоъгълникът?',
      picture: { pic: '[pravoagalnik]' },
      options: [3, 4, 5],
      answer: 4
    },
    {
      question: 'Коя фигура има всички страни еднакви?',
      options: [
        { value: 'square', pic: '🟥', label: 'квадрат' },
        { value: 'rect', pic: '[pravoagalnik]', label: 'правоъгълник' }
      ],
      answer: 'square'
    },
    {
      question: 'Каква форма има вратата?',
      picture: { pic: '🚪' },
      options: ['кръг', 'правоъгълник', 'триъгълник'],
      answer: 'правоъгълник'
    }
  ]
};
