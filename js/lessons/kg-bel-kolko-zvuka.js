window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-kolko-zvuka'] = {
  stage: 'kg',
  subject: 'bel',
  group: 4,
  title: 'Колко звука има в думата?',
  emoji: '👂',
  minutes: 10,
  intro: 'Всяка дума е съставена от звукове, наредени един след друг. Днес ще ги броим!',
  parentTip: 'Казвайте думата бавно, като пляскате с ръце при всеки звук: „к — и — т“, три пляскания. Започнете с кратки думи от три звука. Избягвайте думи с „я“, „ю“ и „щ“ — в тях се крият по два звука.',

  sections: [
    {
      title: 'Да разделим думата',
      blocks: [
        { type: 'picture', picture: { pic: '🐳' }, caption: 'кит' },
        { type: 'picture', picture: { sequence: ['к', 'и', 'т'] } },
        { type: 'say', text: 'Кажи бавно: к — и — т. Думата кит има три звука.' },
        { type: 'picture', picture: { pic: '🦉' }, caption: 'сова' },
        { type: 'picture', picture: { sequence: ['с', 'о', 'в', 'а'] } },
        { type: 'say', text: 'с — о — в — а. Думата сова има четири звука.' }
      ]
    },
    {
      title: 'Пляскай и брой',
      blocks: [
        { type: 'say', text: 'Докосни по едно кръгче за всеки звук в думата лук: л — у — к.' },
        { type: 'countAlong', emoji: '👏', count: 3, done: 'Три звука: л — у — к!' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Колко звука има в думата лъв?',
      picture: { pic: '🦁' },
      options: [2, 3, 4],
      answer: 3,
      hint: 'л — ъ — в'
    },
    {
      question: 'Колко звука има в думата коза?',
      picture: { pic: '🐐' },
      options: [3, 4, 5],
      answer: 4,
      hint: 'к — о — з — а'
    },
    {
      question: 'Колко звука има в думата ухо?',
      picture: { pic: '👂' },
      options: [2, 3, 4],
      answer: 3
    },
    {
      question: 'Коя дума има четири звука?',
      options: [
        { value: 'fish', pic: '🐟', label: 'риба' },
        { value: 'whale', pic: '🐳', label: 'кит' },
        { value: 'onion', pic: '🧅', label: 'лук' }
      ],
      answer: 'fish',
      hint: 'р — и — б — а'
    },
    {
      question: 'Кой е вторият звук в думата сок?',
      picture: { pic: '🧃' },
      options: ['с', 'о', 'к'],
      answer: 'о'
    }
  ]
};
