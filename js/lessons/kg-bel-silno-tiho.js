window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-bel-silno-tiho'] = {
  stage: 'kg',
  subject: 'bel',
  group: 3,
  title: 'Говоря силно и тихо, бързо и бавно',
  emoji: '🗣️',
  minutes: 8,
  intro: 'Можем да говорим силно или тихо, бързо или бавно. Важно е да избираме как да говорим според мястото.',
  parentTip: 'Казвайте едно и също изречение по различни начини и нека Ая ви подражава. Обсъдете: „Как говорим в библиотеката? А когато викаме някого в парка?“',

  sections: [
    {
      title: 'Чуй разликата',
      blocks: [
        { type: 'say', text: 'Натисни картичката и чуй как звучи изречението.' },
        { type: 'cards', items: [
          { pic: '🐘', label: 'силно', say: 'Здравей, приятелю!', voice: { volume: 1 }, color: '#5ec8f2' },
          { pic: '🐭', label: 'тихо', say: 'Здравей, приятелю!', voice: { volume: 0.25 }, color: '#ff8fb1' },
          { pic: '🐇', label: 'бързо', say: 'Здравей, приятелю!', voice: { rate: 1.7 }, color: '#7bdcb5' },
          { pic: '🐢', label: 'бавно', say: 'Здравей, приятелю!', voice: { rate: 0.5 }, color: '#ffb84d' }
        ] }
      ]
    },
    {
      title: 'Ясно и отчетливо',
      blocks: [
        { type: 'say', text: 'Когато казваме стихче пред другите, говорим ясно, не много бързо и достатъчно силно, за да ни чуят всички.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Бебето спи. Как говорим?',
      picture: { pic: '👶💤' },
      options: [
        { value: 'quiet', pic: '🐭', label: 'тихо' },
        { value: 'loud', pic: '🐘', label: 'силно' }
      ],
      answer: 'quiet'
    },
    {
      question: 'Приятелят ти е далеч в парка. Как ще го повикаш?',
      picture: { pic: '🌳🧒' },
      options: [
        { value: 'loud', pic: '🐘', label: 'силно' },
        { value: 'quiet', pic: '🐭', label: 'тихо' }
      ],
      answer: 'loud'
    },
    {
      question: 'Как говорим в библиотеката?',
      picture: { pic: '📚' },
      options: ['тихо', 'силно'],
      answer: 'тихо'
    },
    {
      question: 'Казваш стихче пред всички. Как говориш?',
      options: ['Ясно и не много бързо.', 'Много бързо и тихо.'],
      answer: 'Ясно и не много бързо.'
    }
  ]
};
