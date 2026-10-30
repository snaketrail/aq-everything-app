window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-music-silno-tiho'] = (function () {
  // Мелодиите се свирят от браузъра (Web Audio): f = честота (Hz), d = секунди, v = сила.
  const TUNE = [523, 659, 784, 659, 523];
  const tune = (opts) => TUNE.map((f) => ({ f: f * (opts.pitch || 1), d: opts.d || 0.3, v: opts.v }));

  return {
    stage: 'kg',
    subject: 'music',
    group: 1,
    title: 'Силно и тихо, високо и ниско',
    emoji: '🎶',
    minutes: 10,
    intro: 'Музиката може да звучи силно или тихо, високо или ниско, бързо или бавно. Натисни картичките и слушай!',
    parentTip: 'Проверете звука на устройството, преди да започнете. После играйте без екран: пейте една песничка ту силно като слон, ту тихичко като мишка; ту високо като птичка, ту ниско като мечок.',
  
    sections: [
      {
        title: 'Силно и тихо',
        blocks: [
          { type: 'tones', items: [
            { pic: '🐘', label: 'силно', notes: tune({ v: 1 }) },
            { pic: '🐭', label: 'тихо', notes: tune({ v: 0.12 }) }
          ] }
        ]
      },
      {
        title: 'Високо и ниско',
        blocks: [
          { type: 'tones', items: [
            { pic: '🐦', label: 'високо', notes: tune({ pitch: 2 }) },
            { pic: '🐻', label: 'ниско', notes: tune({ pitch: 0.25 }) }
          ] }
        ]
      },
      {
        title: 'Бързо и бавно',
        blocks: [
          { type: 'tones', items: [
            { pic: '🐇', label: 'бързо', notes: tune({ d: 0.12 }).concat(tune({ d: 0.12 })) },
            { pic: '🐢', label: 'бавно', notes: tune({ d: 0.7 }) }
          ] }
        ]
      }
    ],
  
    tasks: [
      {
        question: 'Чуй звука. Силно ли е, или тихо?',
        sound: tune({ v: 1 }),
        options: [
          { value: 'loud', pic: '🐘', label: 'силно' },
          { value: 'quiet', pic: '🐭', label: 'тихо' }
        ],
        answer: 'loud'
      },
      {
        question: 'Чуй звука. Високо ли е, или ниско?',
        sound: tune({ pitch: 0.25 }),
        options: [
          { value: 'high', pic: '🐦', label: 'високо' },
          { value: 'low', pic: '🐻', label: 'ниско' }
        ],
        answer: 'low'
      },
      {
        question: 'Чуй звука. Бързо ли е, или бавно?',
        sound: tune({ d: 0.12 }).concat(tune({ d: 0.12 })),
        options: [
          { value: 'slow', pic: '🐢', label: 'бавно' },
          { value: 'fast', pic: '🐇', label: 'бързо' }
        ],
        answer: 'fast'
      },
      {
        question: 'Чуй звука. Силно ли е, или тихо?',
        sound: tune({ v: 0.12 }),
        options: [
          { value: 'loud', pic: '🐘', label: 'силно' },
          { value: 'quiet', pic: '🐭', label: 'тихо' }
        ],
        answer: 'quiet'
      },
      {
        question: 'Кое животно пее високо?',
        options: [
          { value: 'bird', pic: '🐦', label: 'птичка' },
          { value: 'bear', pic: '🐻', label: 'мечок' }
        ],
        answer: 'bird'
      }
    ]
  };
})();
