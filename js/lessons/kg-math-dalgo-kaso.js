window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-dalgo-kaso'] = {
  stage: 'kg',
  subject: 'math',
  group: 2,
  title: 'Дълго и късо',
  emoji: '📏',
  minutes: 8,
  intro: 'Някои неща са дълги, а други — къси. За да ги сравним, ги слагаме едно до друго, от една и съща черта.',
  parentTip: 'Сравнявайте шалове, връзки за обувки, моливи. Важното правило: двата предмета започват от едно и също място. Тогава лесно се вижда кой стърчи повече.',

  sections: [
    {
      title: 'Сравняваме дължина',
      blocks: [
        { type: 'picture', picture: { bars: [{ len: 90, color: '#5fd068' }, { len: 40, color: '#ff7a59' }] } },
        { type: 'say', text: 'Зелената лентичка е дълга. Червената лентичка е къса.' },
        { type: 'cards', items: [
          { pic: '🐍', label: 'змията е дълга', color: '#7bdcb5' },
          { pic: '🐛', label: 'гъсеницата е къса', color: '#ffd23f' },
          { pic: '🚂🚃🚃🚃', label: 'влакът е дълъг', color: '#5ec8f2' },
          { pic: '🚗', label: 'колата е къса', color: '#ff8fb1' }
        ] }
      ]
    },
    {
      title: 'По-дълго и по-късо',
      blocks: [
        { type: 'picture', picture: { bars: [{ len: 95, color: '#3a86ff' }, { len: 65, color: '#ffb703' }, { len: 30, color: '#e63946' }] } },
        { type: 'say', text: 'Синята лента е най-дълга. Жълтата е по-къса от синята. Червената е най-къса.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Коя лентичка е дълга?',
      options: [
        { value: 'short', picture: { bars: [{ len: 35, color: '#ff7a59' }] } },
        { value: 'long', picture: { bars: [{ len: 95, color: '#5fd068' }] } }
      ],
      answer: 'long'
    },
    {
      question: 'Коя лентичка е къса?',
      options: [
        { value: 'long', picture: { bars: [{ len: 90, color: '#3a86ff' }] } },
        { value: 'short', picture: { bars: [{ len: 30, color: '#ffb703' }] } }
      ],
      answer: 'short'
    },
    {
      question: 'Кое е по-дълго?',
      options: [
        { value: 'train', pic: '🚂🚃🚃', label: 'влакът' },
        { value: 'car', pic: '🚗', label: 'колата' }
      ],
      answer: 'train'
    },
    {
      question: 'Кой цвят е най-късата лентичка?',
      picture: { bars: [{ len: 80, color: '#5fd068' }, { len: 25, color: '#e63946' }, { len: 55, color: '#3a86ff' }] },
      options: [
        { value: 'green', pic: '🟢', label: 'зелена' },
        { value: 'red', pic: '🔴', label: 'червена' },
        { value: 'blue', pic: '🔵', label: 'синя' }
      ],
      answer: 'red'
    }
  ]
};
