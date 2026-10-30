window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-den-i-nosht'] = {
  stage: 'kg',
  subject: 'math',
  group: 1,
  title: 'Ден и нощ',
  emoji: '🌗',
  minutes: 6,
  intro: 'Денят и нощта се сменят един след друг. Денем е светло, а нощем е тъмно.',
  parentTip: 'Вечер погледнете заедно през прозореца — луната и звездите. Сутрин отбележете: „Виж, слънцето изгря, вече е ден!“',

  sections: [
    {
      title: 'Ден',
      blocks: [
        { type: 'picture', picture: { scene: [
          { pic: '☀️', x: 78, y: 20, size: 1.4 },
          { pic: '🌳', x: 25, y: 62, size: 1.6 },
          { pic: '🧒⚽', x: 58, y: 82 }
        ] } },
        { type: 'say', text: 'Денем грее слънцето. Светло е. Играем, ходим на детска градина и на разходка.' }
      ]
    },
    {
      title: 'Нощ',
      blocks: [
        { type: 'picture', picture: { pic: '🌙⭐✨' } },
        { type: 'say', text: 'Нощем е тъмно. На небето светят луната и звездите. Спим в леглото си.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кога грее слънцето?',
      options: [
        { value: 'day', pic: '☀️', label: 'денем' },
        { value: 'night', pic: '🌙', label: 'нощем' }
      ],
      answer: 'day'
    },
    {
      question: 'Кога спим?',
      picture: { pic: '🛏️' },
      options: [
        { value: 'night', pic: '🌙', label: 'нощем' },
        { value: 'day', pic: '☀️', label: 'денем' }
      ],
      answer: 'night'
    },
    {
      question: 'Кога е тъмно?',
      options: ['денем', 'нощем'],
      answer: 'нощем'
    },
    {
      question: 'Кога играем на площадката?',
      picture: { pic: '🛝' },
      options: [
        { value: 'day', pic: '☀️', label: 'денем' },
        { value: 'night', pic: '🌙', label: 'нощем' }
      ],
      answer: 'day'
    }
  ]
};
