window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-moeto-ime'] = {
  stage: 'kg',
  subject: 'bel',
  group: 1,
  title: 'Моето име и моето семейство',
  emoji: '👨‍👩‍👧',
  minutes: 8,
  intro: 'Всеки човек си има име. Днес ще кажем как се казваме ние и как се казват хората от нашето семейство.',
  parentTip: 'Упражнявайте отговора „Казвам се … и съм на … години“. Разглеждайте снимки на семейството и нека детето назовава всеки по име и кой е — мама, тате, баба, дядо.',

  sections: [
    {
      title: 'Аз съм',
      blocks: [
        { type: 'say', text: 'Когато някой те попита „Как се казваш?“, казваш: „Казвам се…“ и името си. А на въпроса „На колко години си?“ — „На три години съм.“' },
        { type: 'story', panels: [
          { pic: '👩', text: '— Здравей! Как се казваш?' },
          { pic: '👧', text: '— Здравей! Казвам се Мария.' },
          { pic: '👩', text: '— На колко години си, Мария?' },
          { pic: '👧✋', text: '— На три години съм!' }
        ] }
      ]
    },
    {
      title: 'Моето семейство',
      blocks: [
        { type: 'cards', items: [
          { pic: '👩', label: 'мама', color: '#ff8fb1' },
          { pic: '👨', label: 'тате', color: '#5ec8f2' },
          { pic: '👵', label: 'баба', color: '#c38bff' },
          { pic: '👴', label: 'дядо', color: '#ffb84d' },
          { pic: '👦', label: 'брат', color: '#7bdcb5' },
          { pic: '👧', label: 'сестра', color: '#ffd23f' },
          { pic: '🧔', label: 'чичо', sub: 'братът на тате', color: '#5ec8f2' },
          { pic: '👩‍🦰', label: 'леля', color: '#ff8fb1' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Някой те пита как се казваш. Какво казваш?',
      options: ['Казвам се…', 'Довиждане!'],
      answer: 'Казвам се…'
    },
    {
      question: 'Коя е баба?',
      options: [
        { value: 'grandma', pic: '👵' },
        { value: 'girl', pic: '👧' },
        { value: 'mom', pic: '👩' }
      ],
      answer: 'grandma'
    },
    {
      question: 'Кой е дядо?',
      options: [
        { value: 'boy', pic: '👦' },
        { value: 'grandpa', pic: '👴' },
        { value: 'dad', pic: '👨' }
      ],
      answer: 'grandpa'
    },
    {
      question: 'Как се казва майката на мама?',
      options: ['баба', 'сестра', 'леля'],
      answer: 'баба',
      hint: 'Мамата на мама е твоята баба.'
    },
    {
      question: 'Братът на тате е…',
      options: ['чичо', 'дядо', 'брат'],
      answer: 'чичо'
    }
  ]
};
