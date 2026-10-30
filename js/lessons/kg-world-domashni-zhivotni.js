window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-world-domashni-zhivotni'] = {
  stage: 'kg',
  subject: 'world',
  group: 1,
  title: 'Домашни животни и техните малки',
  emoji: '🐄',
  minutes: 10,
  intro: 'Домашните животни живеят при хората — в двора, във фермата или у дома. Хората се грижат за тях.',
  parentTip: 'Имитирайте звуците на животните заедно. Ако имате възможност, посетете село или ферма — нищо не замества живата среща с животните.',

  sections: [
    {
      title: 'Майки и малки',
      blocks: [
        { type: 'say', text: 'Натисни картичката, за да чуеш как се казва малкото и какво казва животното.' },
        { type: 'cards', items: [
          { pic: '🐄', label: 'крава — теле', sub: 'Муу!', say: 'Кравата има теленце. Тя казва: Муу!', color: '#7bdcb5' },
          { pic: '🐑', label: 'овца — агне', sub: 'Бее!', say: 'Овцата има агънце. Тя казва: Бее!', color: '#ffd23f' },
          { pic: '🐐', label: 'коза — яре', sub: 'Мее!', say: 'Козата има яренце. Тя казва: Мее!', color: '#c38bff' },
          { pic: '🐔🐥', label: 'кокошка — пиле', sub: 'Кот-кот-кудкудяк!', say: 'Кокошката има пиленце. Тя казва: Кот-кот-кудкудяк!', color: '#ffb84d' },
          { pic: '🐖', label: 'свиня — прасенце', sub: 'Грух-грух!', say: 'Свинята има прасенце. Тя казва: Грух-грух!', color: '#ff8fb1' },
          { pic: '🐕', label: 'куче — кученце', sub: 'Бау-бау!', say: 'Кучето има кученце. То казва: Бау-бау!', color: '#5ec8f2' },
          { pic: '🐈', label: 'котка — коте', sub: 'Мяу!', say: 'Котката има коте. Тя казва: Мяу!', color: '#ff7a59' },
          { pic: '🐎', label: 'кон — жребче', say: 'Конят има жребче. Конят цвили.', color: '#7bdcb5' }
        ] }
      ]
    },
    {
      title: 'Какво ни дават?',
      blocks: [
        { type: 'cards', items: [
          { pic: '🐄🥛', label: 'Кравата дава мляко.', color: '#5ec8f2' },
          { pic: '🐔🥚', label: 'Кокошката снася яйца.', color: '#ffd23f' },
          { pic: '🐑🧶', label: 'От вълната на овцата плетем пуловери.', color: '#c38bff' }
        ] }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кой казва „Муу“?',
      options: [
        { value: 'cow', pic: '🐄', label: 'крава' },
        { value: 'dog', pic: '🐕', label: 'куче' },
        { value: 'cat', pic: '🐈', label: 'котка' }
      ],
      answer: 'cow'
    },
    {
      question: 'Как се казва малкото на кравата?',
      picture: { pic: '🐄' },
      options: ['теле', 'коте', 'пиле'],
      answer: 'теле'
    },
    {
      question: 'Чие малко е агнето?',
      options: [
        { value: 'sheep', pic: '🐑', label: 'на овцата' },
        { value: 'pig', pic: '🐖', label: 'на свинята' },
        { value: 'hen', pic: '🐔', label: 'на кокошката' }
      ],
      answer: 'sheep'
    },
    {
      question: 'Коя птица снася яйца?',
      options: [
        { value: 'hen', pic: '🐔', label: 'кокошка' },
        { value: 'cow', pic: '🐄', label: 'крава' },
        { value: 'dog', pic: '🐕', label: 'куче' }
      ],
      answer: 'hen'
    },
    {
      question: 'Кой живее в гората, а не в двора?',
      options: [
        { value: 'cow', pic: '🐄', label: 'крава' },
        { value: 'fox', pic: '🦊', label: 'лисица' },
        { value: 'sheep', pic: '🐑', label: 'овца' }
      ],
      answer: 'fox',
      hint: 'Лисицата е диво животно.'
    },
    {
      question: 'Кой казва „Мяу“?',
      options: [
        { value: 'goat', pic: '🐐', label: 'коза' },
        { value: 'cat', pic: '🐈', label: 'котка' }
      ],
      answer: 'cat'
    }
  ]
};
