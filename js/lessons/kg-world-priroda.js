window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-priroda'] = {
  stage: 'kg',
  subject: 'world',
  group: 4,
  title: 'Пазим природата чиста',
  emoji: '♻️',
  minutes: 10,
  intro: 'Природата е нашият общ дом. Всеки от нас може да я пази — дори с малки неща.',
  parentTip: 'Разделяйте отпадъците вкъщи заедно с Ая и ги изнасяйте до цветните контейнери. На излет вземете торбичка за боклука и я носете обратно.',

  sections: [
    {
      title: 'Цветните контейнери',
      blocks: [
        { type: 'say', text: 'В България има контейнери с различни цветове. Във всеки слагаме различни неща, за да може те да се използват отново.' },
        { type: 'cards', items: [
          { pic: '🟨🥤', label: 'жълт', sub: 'пластмаса и метал — бутилки, кенчета', color: '#ffd23f' },
          { pic: '🟦📰', label: 'син', sub: 'хартия и картон', color: '#5ec8f2' },
          { pic: '🟩🍾', label: 'зелен', sub: 'стъкло — бурканчета и бутилки', color: '#5fd068' }
        ] }
      ]
    },
    {
      title: 'Какво можем да направим?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🗑️', label: 'Хвърлям боклука в кошчето.', color: '#7bdcb5' },
          { pic: '🚰', label: 'Спирам водата, докато си мия зъбите.', color: '#5ec8f2' },
          { pic: '💡', label: 'Гася лампата, когато излизам.', color: '#ffd23f' },
          { pic: '🌷', label: 'Не късам цветята в парка и в гората.', color: '#ff8fb1' },
          { pic: '🌳', label: 'Садим дървета.', color: '#5fd068' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Къде хвърляме празна пластмасова бутилка?',
      picture: { pic: '🥤' },
      options: [
        { value: 'yellow', pic: '🟨', label: 'в жълтия' },
        { value: 'green', pic: '🟩', label: 'в зеления' }
      ],
      answer: 'yellow'
    },
    {
      question: 'Къде хвърляме стар вестник?',
      picture: { pic: '📰' },
      options: [
        { value: 'blue', pic: '🟦', label: 'в синия' },
        { value: 'yellow', pic: '🟨', label: 'в жълтия' }
      ],
      answer: 'blue'
    },
    {
      question: 'Къде хвърляме стъклено бурканче?',
      picture: { pic: '🫙' },
      options: [
        { value: 'green', pic: '🟩', label: 'в зеления' },
        { value: 'blue', pic: '🟦', label: 'в синия' }
      ],
      answer: 'green'
    },
    {
      question: 'Мием си зъбите. Какво правим с водата?',
      picture: { pic: '🪥' },
      options: ['Спираме я, докато търкаме.', 'Оставяме я да тече.'],
      answer: 'Спираме я, докато търкаме.'
    },
    {
      question: 'На излет изядохме сандвичите. Какво правим с хартията?',
      options: ['Прибираме я в торбичка.', 'Оставяме я на тревата.'],
      answer: 'Прибираме я в торбичка.'
    }
  ]
};
