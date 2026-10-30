window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-rasteniya'] = {
  stage: 'kg',
  subject: 'world',
  group: 3,
  title: 'Растенията около нас',
  emoji: '🌻',
  minutes: 10,
  intro: 'Растенията са живи — те растат, пият вода и обичат слънцето. Днес ще видим как от едно семенце става цвете.',
  parentTip: 'Посадете заедно боб или пшеница в чашка с памук или пръст. Поливайте и наблюдавайте всеки ден. Детето ще види как се появяват корените и стъблото.',

  sections: [
    {
      title: 'От семенце до цвете',
      blocks: [
        { type: 'story', panels: [
          { pic: '🫘', text: 'Посаждаме семенце в пръстта.' },
          { pic: '💧☀️', text: 'Поливаме го с вода. Слънцето го топли.' },
          { pic: '🌱', text: 'Появява се малко зелено кълнче.' },
          { pic: '🌿', text: 'То расте и пуска листа.' },
          { pic: '🌻', text: 'Накрая разцъфва цвете!' }
        ] }
      ]
    },
    {
      title: 'Части на растението',
      blocks: [
        { type: 'cards', items: [
          { pic: '🌸', label: 'цвят', sub: 'красив е и ухае', color: '#ff8fb1' },
          { pic: '🍃', label: 'листа', sub: 'дишат и хващат слънцето', color: '#7bdcb5' },
          { pic: '🌿', label: 'стъбло', sub: 'държи растението изправено', color: '#5fd068' },
          { pic: '🥕', label: 'корен', sub: 'пие вода от земята', color: '#ffb84d' }
        ] },
        { type: 'say', text: 'Морковът е корен, който ядем!' }
      ]
    },
    {
      title: 'Какво им трябва?',
      blocks: [
        { type: 'cards', items: [
          { pic: '💧', label: 'вода', color: '#5ec8f2' },
          { pic: '☀️', label: 'слънце', color: '#ffd23f' },
          { pic: '🟫', label: 'пръст', color: '#ffb84d' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Какво трябва на растенията, за да растат?',
      options: [
        { value: 'water', pic: '💧☀️', label: 'вода и слънце' },
        { value: 'candy', pic: '🍬🍭', label: 'бонбони' }
      ],
      answer: 'water'
    },
    {
      question: 'Какво се появява първо от семенцето?',
      options: [
        { value: 'sprout', pic: '🌱', label: 'кълнче' },
        { value: 'flower', pic: '🌻', label: 'цвете' }
      ],
      answer: 'sprout'
    },
    {
      question: 'С коя част растението пие вода от земята?',
      options: ['с корена', 'с цвета', 'с листата'],
      answer: 'с корена'
    },
    {
      question: 'Кое е растение?',
      options: [
        { value: 'tree', pic: '🌳', label: 'дърво' },
        { value: 'rock', pic: '🪨', label: 'камък' },
        { value: 'cat', pic: '🐈', label: 'котка' }
      ],
      answer: 'tree'
    },
    {
      question: 'Коя част от моркова ядем?',
      picture: { pic: '🥕' },
      options: ['корена', 'цвета'],
      answer: 'корена'
    }
  ]
};
