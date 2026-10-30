window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-music-pevets'] = (function () {
  const MELODY = [523, 587, 659, 523, 659, 784, 784];
  // Соло: една мелодия. Оркестър: същата мелодия с акорди (много звуци наведнъж).
  const SOLO = MELODY.map((f) => ({ f, d: 0.32 }));
  const ORCHESTRA = MELODY.map((f) => ({ f: [f, f * 1.25, f * 1.5, f / 2], d: 0.32, v: 1 }));

  return {
    stage: 'kg',
    subject: 'music',
    group: 4,
    title: 'Певец, музикант и слушател',
    emoji: '🎤',
    minutes: 10,
    intro: 'В музиката всеки има роля: певецът пее, музикантът свири, а слушателят слуша внимателно.',
    parentTip: 'Играйте на концерт: детето е певица, вие — музикант с тенджера-тъпан, а мечето е слушател. Сменяйте ролите. Ако имате възможност, отидете заедно на детски концерт.',

    sections: [
      {
        title: 'Кой какво прави?',
        blocks: [
          { type: 'cards', items: [
            { pic: '🧑‍🎤', label: 'певец', sub: 'пее с глас', color: '#ff8fb1' },
            { pic: '🎻', label: 'музикант', sub: 'свири на инструмент', color: '#ffb84d' },
            { pic: '👂👏', label: 'слушател', sub: 'слуша тихо и ръкопляска накрая', color: '#5ec8f2' }
          ] }
        ]
      },
      {
        title: 'Соло и оркестър',
        blocks: [
          { type: 'say', text: 'Когато свири един музикант, това е соло. Когато свирят много музиканти заедно, това е оркестър.' },
          { type: 'tones', items: [
            { pic: '🎻', label: 'соло', notes: SOLO },
            { pic: '🎻🎺🥁🎹', label: 'оркестър', notes: ORCHESTRA }
          ] }
        ]
      }
    ],

    tasks: [
      {
        question: 'Кой пее?',
        options: [
          { value: 'singer', pic: '🧑‍🎤', label: 'певецът' },
          { value: 'listener', pic: '👂', label: 'слушателят' }
        ],
        answer: 'singer'
      },
      {
        question: 'Какво прави слушателят по време на песента?',
        options: ['Слуша тихо.', 'Говори по телефона.'],
        answer: 'Слуша тихо.'
      },
      {
        question: 'Чуй музиката. Соло ли е, или оркестър?',
        sound: ORCHESTRA,
        options: [
          { value: 'solo', pic: '🎻', label: 'соло' },
          { value: 'orchestra', pic: '🎻🎺🥁', label: 'оркестър' }
        ],
        answer: 'orchestra'
      },
      {
        question: 'Чуй музиката. Соло ли е, или оркестър?',
        sound: SOLO,
        options: [
          { value: 'solo', pic: '🎻', label: 'соло' },
          { value: 'orchestra', pic: '🎻🎺🥁', label: 'оркестър' }
        ],
        answer: 'solo'
      },
      {
        question: 'Какво прави слушателят, когато песента свърши?',
        options: [
          { value: 'clap', pic: '👏', label: 'ръкопляска' },
          { value: 'leave', pic: '🚪', label: 'тръгва си, без да каже нищо' }
        ],
        answer: 'clap'
      }
    ]
  };
})();
