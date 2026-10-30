window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-tech-materiali'] = {
  stage: 'kg',
  subject: 'tech',
  group: 2,
  title: 'Хартия, плат и природни материали',
  emoji: '🍂',
  minutes: 12,
  intro: 'От различни материали можем да направим чудесни неща. Днес ще ги разгледаме и ще направим таралеж!',
  parentTip: 'Съберете на разходка листа, кестени и клечки. Използвайте детска ножица със заоблени върхове и бъдете до Ая, докато реже.',

  sections: [
    {
      title: 'Материалите',
      blocks: [
        { type: 'cards', items: [
          { pic: '📄', label: 'хартия', sub: 'къса се, сгъва се и се реже', color: '#5ec8f2' },
          { pic: '📦', label: 'картон', sub: 'по-дебел и по-твърд от хартията', color: '#ffb84d' },
          { pic: '🧶🧦', label: 'плат и прежда', sub: 'меки са, от тях правим дрехи', color: '#ff8fb1' },
          { pic: '🍂🌰🪵', label: 'природни материали', sub: 'листа, кестени, клечки, камъчета', color: '#7bdcb5' }
        ] }
      ]
    },
    {
      title: 'Да направим таралеж',
      blocks: [
        { type: 'story', panels: [
          { pic: '📦✏️', text: 'Нарисувай таралеж върху картон. Нека възрастен ти помогне.' },
          { pic: '✂️', text: 'Изрежи таралежа с ножица — бавно и внимателно.' },
          { pic: '🍂', text: 'Залепи сухи листа на гърба му. Това са бодлите!' },
          { pic: '🌰', text: 'Залепи кестенче за носле.' },
          { pic: '🦔', text: 'Готово! Направи таралеж от природни материали.' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кое е природен материал?',
      options: [
        { value: 'chestnut', pic: '🌰', label: 'кестен' },
        { value: 'paper', pic: '📄', label: 'хартия' },
        { value: 'yarn', pic: '🧶', label: 'прежда' }
      ],
      answer: 'chestnut',
      hint: 'Природните материали намираме в природата — в парка или в гората.'
    },
    {
      question: 'С какво режем хартията?',
      options: [
        { value: 'spoon', pic: '🥄', label: 'лъжица' },
        { value: 'scissors', pic: '✂️', label: 'ножица' }
      ],
      answer: 'scissors'
    },
    {
      question: 'От какво правим дрехи?',
      options: [
        { value: 'stone', pic: '🪨', label: 'камък' },
        { value: 'fabric', pic: '🧶', label: 'прежда и плат' }
      ],
      answer: 'fabric'
    },
    {
      question: 'Как носим ножицата, когато вървим?',
      picture: { pic: '✂️' },
      options: ['Затворена, с върха надолу.', 'Размахваме я.'],
      answer: 'Затворена, с върха надолу.'
    },
    {
      question: 'Кое е по-твърдо?',
      options: [
        { value: 'cardboard', pic: '📦', label: 'картон' },
        { value: 'yarn', pic: '🧶', label: 'прежда' }
      ],
      answer: 'cardboard'
    }
  ]
};
