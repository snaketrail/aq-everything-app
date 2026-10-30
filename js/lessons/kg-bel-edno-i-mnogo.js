window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-edno-i-mnogo'] = {
  stage: 'kg',
  subject: 'bel',
  group: 2,
  title: 'Едно и много: ябълка — ябълки',
  emoji: '🍎',
  minutes: 8,
  intro: 'Когато нещата са повече от едно, думата се променя. Една ябълка, но много ябълки!',
  parentTip: 'Играйте на „Едно — много“: вие казвате „една топка“, Ая отговаря „много топки“. Не поправяйте рязко грешките — просто повторете правилната дума: „Да, много деца!“',

  sections: [
    {
      title: 'Едно — много',
      blocks: [
        { type: 'cards', items: [
          { pic: '🍎 → 🍎🍎🍎', label: 'ябълка — ябълки', color: '#ff7a59' },
          { pic: '⚽ → ⚽⚽⚽', label: 'топка — топки', color: '#5ec8f2' },
          { pic: '🐈 → 🐈🐈🐈', label: 'котка — котки', color: '#ffb84d' },
          { pic: '🪑 → 🪑🪑🪑', label: 'стол — столове', color: '#c38bff' },
          { pic: '🌷 → 🌷🌷🌷', label: 'цвете — цветя', color: '#ff8fb1' },
          { pic: '🧒 → 🧒🧒🧒', label: 'дете — деца', color: '#7bdcb5' }
        ] }
      ]
    },
    {
      title: 'Особени думи',
      blocks: [
        { type: 'say', text: 'Някои думи се променят по особен начин: едно око — две очи; едно ухо — две уши.' },
        { type: 'cards', items: [
          { pic: '👁️ → 👀', label: 'око — очи', color: '#5ec8f2' },
          { pic: '👂 → 👂👂', label: 'ухо — уши', color: '#ffd23f' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Една топка, много…',
      picture: { emoji: '⚽', count: 4 },
      options: ['топки', 'топкове'],
      answer: 'топки'
    },
    {
      question: 'Едно цвете, много…',
      picture: { emoji: '🌷', count: 4 },
      options: ['цветета', 'цветя'],
      answer: 'цветя'
    },
    {
      question: 'Едно дете, много…',
      picture: { emoji: '🧒', count: 4 },
      options: ['деца', 'детета'],
      answer: 'деца'
    },
    {
      question: 'Един стол, много…',
      picture: { emoji: '🪑', count: 4 },
      options: ['столи', 'столове'],
      answer: 'столове'
    },
    {
      question: 'Едно око, две…',
      picture: { pic: '👀' },
      options: ['окота', 'очи'],
      answer: 'очи'
    }
  ]
};
