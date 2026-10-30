window.LESSONS = window.LESSONS || {};

window.LESSONS['kg-math-lek-tezhak'] = {
  stage: 'kg',
  subject: 'math',
  group: 3,
  title: 'Лек и тежък',
  emoji: '🪶',
  minutes: 8,
  intro: 'Някои неща лесно вдигаме — те са леки. Други трудно вдигаме — те са тежки.',
  parentTip: 'Дайте на Ая в двете ръце различни предмети (ябълка и възглавница, книга и лист хартия) и питайте кое тежи повече. Ако имате кантар, претеглете играчки.',

  sections: [
    {
      title: 'Леко и тежко',
      blocks: [
        { type: 'cards', items: [
          { pic: '🪶', label: 'перото е леко', color: '#dfe6ee' },
          { pic: '🪨', label: 'камъкът е тежък', color: '#ffb84d' },
          { pic: '🎈', label: 'балонът е лек', color: '#ff8fb1' },
          { pic: '🍉', label: 'динята е тежка', color: '#7bdcb5' }
        ] },
        { type: 'say', text: 'Голямото не винаги е тежко! Балонът е голям, но е лек.' }
      ]
    },
    {
      title: 'Везна',
      blocks: [
        { type: 'picture', picture: { pic: '⚖️' } },
        { type: 'say', text: 'С везната сравняваме тежестта. Страната с по-тежкото нещо слиза надолу.' }
      ]
    }
  ],

  tasks: [
    {
      question: 'Кое е по-тежко?',
      options: [
        { value: 'feather', pic: '🪶', label: 'перо' },
        { value: 'rock', pic: '🪨', label: 'камък' }
      ],
      answer: 'rock'
    },
    {
      question: 'Кое е по-леко?',
      options: [
        { value: 'balloon', pic: '🎈', label: 'балон' },
        { value: 'melon', pic: '🍉', label: 'диня' }
      ],
      answer: 'balloon'
    },
    {
      question: 'Кое животно е най-тежко?',
      options: [
        { value: 'mouse', pic: '🐭', label: 'мишка' },
        { value: 'elephant', pic: '🐘', label: 'слон' },
        { value: 'cat', pic: '🐈', label: 'котка' }
      ],
      answer: 'elephant'
    },
    {
      question: 'Балонът е голям. Тежък ли е?',
      picture: { pic: '🎈' },
      options: ['Не, лек е.', 'Да, много е тежък.'],
      answer: 'Не, лек е.'
    }
  ]
};
