window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-music-tantsi'] = (function () {
  // Ритми, изсвирени от браузъра: силен удар = по-нисък тон, слаб удар = по-висок и по-тих.
  const hit = (strong, d) => [{ f: strong ? 196 : 294, d: 0.09, v: strong ? 1 : 0.45, type: 'square' }, { f: 0, d: d - 0.09 }];
  const repeat = (pattern, times) => Array.from({ length: times }, () => pattern).flat();
  const MARCH = repeat([...hit(true, 0.4), ...hit(false, 0.4)], 4);           // 2/4: РАЗ-два
  const WALTZ = repeat([...hit(true, 0.33), ...hit(false, 0.33), ...hit(false, 0.33)], 4); // 3/4: РАЗ-два-три
  const RACHENITSA = repeat([...hit(true, 0.16), ...hit(false, 0.16), ...hit(true, 0.16), ...hit(false, 0.16), ...hit(true, 0.16), ...hit(false, 0.16), ...hit(false, 0.16)], 4); // 7/8: 2+2+3
  const HORO = repeat([...hit(true, 0.22), ...hit(false, 0.22)], 8);           // бързо, равно

  return {
    stage: 'kg',
    subject: 'music',
    group: 3,
    title: 'Марш, валс, хоро и ръченица',
    emoji: '💃',
    minutes: 12,
    intro: 'Различната музика ни кара да се движим различно. Слушай ритъма и познай какъв е танцът!',
    parentTip: 'Пуснете истински записи — военен марш, валс на Щраус, право хоро и ръченица. Танцувайте заедно: маршируване, въртене, хоро на верига, ръченица с кърпичка.',

    sections: [
      {
        title: 'Чуй ритъма',
        blocks: [
          { type: 'say', text: 'Натисни картичката и слушай. Силният удар е като стъпка с крак.' },
          { type: 'tones', items: [
            { pic: '🥁🚶', label: 'марш — раз, два', notes: MARCH },
            { pic: '💃🕺', label: 'валс — раз, два, три', notes: WALTZ },
            { pic: '🤝', label: 'хоро', notes: HORO },
            { pic: '🧣', label: 'ръченица', notes: RACHENITSA }
          ] }
        ]
      },
      {
        title: 'Как танцуваме?',
        blocks: [
          { type: 'cards', items: [
            { pic: '🚶', label: 'марш', sub: 'маршируваме: ляв, десен', color: '#5ec8f2' },
            { pic: '💃', label: 'валс', sub: 'въртим се плавно по двойки', color: '#c38bff' },
            { pic: '🤝', label: 'хоро', sub: 'хващаме се за ръце и вървим в кръг', color: '#7bdcb5' },
            { pic: '🧣', label: 'ръченица', sub: 'танцуваме бързо, с кърпичка в ръка', color: '#ff7a59' }
          ] }
        ]
      }
    ],

    tasks: [
      {
        question: 'Чуй ритъма. Марш ли е, или валс?',
        sound: MARCH,
        options: [
          { value: 'march', pic: '🚶', label: 'марш' },
          { value: 'waltz', pic: '💃', label: 'валс' }
        ],
        answer: 'march',
        hint: 'Маршът е раз-два, раз-два.'
      },
      {
        question: 'Чуй ритъма. Марш ли е, или валс?',
        sound: WALTZ,
        options: [
          { value: 'march', pic: '🚶', label: 'марш' },
          { value: 'waltz', pic: '💃', label: 'валс' }
        ],
        answer: 'waltz',
        hint: 'Валсът е раз-два-три, раз-два-три.'
      },
      {
        question: 'Как се играе хоро?',
        options: [
          { value: 'hands', pic: '🤝', label: 'хванати за ръце' },
          { value: 'alone', pic: '🧍', label: 'всеки сам, без да мърда' }
        ],
        answer: 'hands'
      },
      {
        question: 'С какво в ръка танцуваме ръченица?',
        options: [
          { value: 'scarf', pic: '🧣', label: 'с кърпичка' },
          { value: 'ball', pic: '⚽', label: 'с топка' }
        ],
        answer: 'scarf'
      }
    ]
  };
})();
