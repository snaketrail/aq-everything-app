// 1. клас: буквите на азбуката, по реда на буквара на изд. „Просвета“.
// Всяка група става отделен урок: нови букви, срички и думи за четене, задачи.
// Думите за четене съдържат само вече научени букви.
window.LESSONS = window.LESSONS || {};

(function () {
  const GROUPS = [
    {
      letters: [
        { L: 'А', word: 'ананас', pic: '🍍' },
        { L: 'Е', word: 'еж', pic: '🦔' },
        { L: 'М', word: 'мечка', pic: '🐻' },
        { L: 'Н', word: 'нос', pic: '👃' }
      ],
      syllables: ['МА', 'МЕ', 'НА', 'НЕ', 'АМ', 'ЕН'],
      words: [
        { w: 'МА-МА', say: 'мама', pic: '👩' },
        { w: 'А-НА', say: 'Ана', pic: '👧' }
      ]
    },
    {
      letters: [
        { L: 'О', word: 'облак', pic: '☁️' },
        { L: 'И', word: 'игла', pic: '🪡' },
        { L: 'Р', word: 'риба', pic: '🐟' },
        { L: 'Л', word: 'лъв', pic: '🦁' }
      ],
      syllables: ['МО', 'НО', 'РИ', 'ЛИ', 'РА', 'ЛО'],
      words: [
        { w: 'ЛА-ЛЕ', say: 'лале', pic: '🌷' },
        { w: 'МО-РЕ', say: 'море', pic: '🌊' },
        { w: 'ЛА-МА', say: 'лама', pic: '🦙' }
      ]
    },
    {
      letters: [
        { L: 'Ъ', word: 'ъгъл', pic: '📐' },
        { L: 'У', word: 'ухо', pic: '👂' },
        { L: 'Й', word: 'йога', pic: '🧘' },
        { L: 'Я', word: 'ябълка', pic: '🍎', note: 'Я е два звука: Й и А.' }
      ],
      syllables: ['МЪ', 'ЛЪ', 'МУ', 'РУ', 'АЙ', 'ЛЯ'],
      words: [
        { w: 'А-Я', say: 'Ая', pic: '👧', note: 'Това е твоето име!' },
        { w: 'МА-Я', say: 'Мая', pic: '👩‍🦰' },
        { w: 'У-РА!', say: 'Ура!', pic: '🎉' },
        { w: 'РОЙ', say: 'рой', pic: '🐝🐝🐝' }
      ]
    },
    {
      letters: [
        { L: 'Т', word: 'топка', pic: '⚽' },
        { L: 'Д', word: 'дом', pic: '🏠' },
        { L: 'С', word: 'слон', pic: '🐘' },
        { L: 'З', word: 'заек', pic: '🐰' }
      ],
      syllables: ['ТА', 'ТО', 'ДА', 'ДО', 'СА', 'ЗА'],
      words: [
        { w: 'ТА-ТЕ', say: 'тате', pic: '👨' },
        { w: 'ДОМ', say: 'дом', pic: '🏠' },
        { w: 'СЛОН', say: 'слон', pic: '🐘' },
        { w: 'РО-ЗА', say: 'роза', pic: '🌹' },
        { w: 'ЛИСТ', say: 'лист', pic: '🍃' }
      ],
      pairs: 'Т и Д си приличат: Т звучи тихо (беззвучен), Д звучи с глас (звучен). Същото е при С и З.'
    },
    {
      letters: [
        { L: 'К', word: 'котка', pic: '🐈' },
        { L: 'Г', word: 'гъба', pic: '🍄' },
        { L: 'П', word: 'пате', pic: '🦆' },
        { L: 'Б', word: 'баба', pic: '👵' }
      ],
      syllables: ['КА', 'КО', 'ГА', 'ГО', 'ПА', 'БА'],
      words: [
        { w: 'КОТ-КА', say: 'котка', pic: '🐈' },
        { w: 'ГО-РА', say: 'гора', pic: '🌲' },
        { w: 'БА-БА', say: 'баба', pic: '👵' },
        { w: 'БА-НАН', say: 'банан', pic: '🍌' },
        { w: 'КНИ-ГА', say: 'книга', pic: '📖' },
        { w: 'Я-БЪЛ-КА', say: 'ябълка', pic: '🍎' }
      ],
      pairs: 'К и Г са двойка: К е беззвучен, Г е звучен. П и Б също са двойка.'
    },
    {
      letters: [
        { L: 'Ф', word: 'фея', pic: '🧚' },
        { L: 'В', word: 'вода', pic: '💧' },
        { L: 'Ш', word: 'шапка', pic: '👒' },
        { L: 'Ж', word: 'жаба', pic: '🐸' }
      ],
      syllables: ['ФА', 'ВА', 'ВО', 'ША', 'ЖА', 'ЖИ'],
      words: [
        { w: 'ВО-ДА', say: 'вода', pic: '💧' },
        { w: 'ЖА-БА', say: 'жаба', pic: '🐸' },
        { w: 'МИШ-КА', say: 'мишка', pic: '🐭' },
        { w: 'ЖИ-РАФ', say: 'жираф', pic: '🦒' },
        { w: 'СО-ВА', say: 'сова', pic: '🦉' },
        { w: 'КРУ-ША', say: 'круша', pic: '🍐' }
      ],
      pairs: 'Ф и В са двойка, Ш и Ж — също.'
    },
    {
      letters: [
        { L: 'Ч', word: 'чадър', pic: '☂️' },
        { L: 'Х', word: 'хляб', pic: '🍞' },
        { L: 'Ц', word: 'цвете', pic: '🌸' }
      ],
      syllables: ['ЧА', 'ЧО', 'ХА', 'ХО', 'ЦА', 'ЦИ'],
      words: [
        { w: 'ЧА-ДЪР', say: 'чадър', pic: '☂️' },
        { w: 'ХЛЯБ', say: 'хляб', pic: '🍞' },
        { w: 'ЦВЕ-ТЕ', say: 'цвете', pic: '🌸' },
        { w: 'ПТИ-ЦА', say: 'птица', pic: '🐦' },
        { w: 'ЧО-РАП', say: 'чорап', pic: '🧦' },
        { w: 'ЦИРК', say: 'цирк', pic: '🎪' }
      ]
    },
    {
      letters: [
        { L: 'Щ', word: 'щит', pic: '🛡️', note: 'Щ е два звука: Ш и Т.' },
        { L: 'Ю', word: 'юмрук', pic: '✊', note: 'Ю е два звука: Й и У.' },
        { L: 'Ь', word: 'шофьор', pic: '🚗', note: 'Ь няма свой звук. Пишем го само пред О: ьо.' }
      ],
      syllables: ['ЩА', 'ЩИ', 'Ю', 'ЛЮ', 'НЬО', 'ЛЬО'],
      words: [
        { w: 'ЩИТ', say: 'щит', pic: '🛡️' },
        { w: 'ЮМ-РУК', say: 'юмрук', pic: '✊' },
        { w: 'ШО-ФЬОР', say: 'шофьор', pic: '🚗' },
        { w: 'ПЛАЩ', say: 'плащ', pic: '🧥' }
      ]
    },
    {
      title: 'Звуковете ДЖ и ДЗ',
      letters: [
        { L: 'ДЖ', word: 'джинси', pic: '👖', note: 'Две букви — един звук.' },
        { L: 'ДЗ', word: 'дзън', pic: '🔔', note: 'Две букви — един звук.' }
      ],
      syllables: ['ДЖА', 'ДЖО', 'ДЖУ', 'ДЗА', 'ДЗЕ', 'ДЗИ'],
      words: [
        { w: 'ДЖИН-СИ', say: 'джинси', pic: '👖' },
        { w: 'ДЖУ-ДО', say: 'джудо', pic: '🥋' },
        { w: 'ДЖУ-ДЖЕ', say: 'джудже', pic: '🧙' },
        { w: 'ДЗЪН-ДЗЪН', say: 'дзън-дзън', pic: '🔔' }
      ]
    }
  ];

  const ALL = GROUPS.flatMap((g) => g.letters.map((l) => l.L));
  const COLORS = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  // Детерминирано избира „грешни“ отговори: съседните елементи в списъка.
  const pickOthers = (list, item, n) => {
    const i = list.indexOf(item);
    return Array.from({ length: n }, (_, k) => list[(i + (k + 1) * 3) % list.length]).filter((x) => x !== item);
  };
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  GROUPS.forEach((g, gi) => {
    const n = gi + 1;
    const names = g.letters.map((l) => l.L).join(', ');
    const tasks = [];

    g.letters.forEach((l, li) => {
      tasks.push({
        question: `Коя е буквата ${l.L}?`,
        options: rotate([l.L, ...pickOthers(ALL, l.L, 2)], li),
        answer: l.L
      });
    });
    g.words.slice(0, 2).forEach((w, wi) => {
      const first = w.w.startsWith('ДЖ') || w.w.startsWith('ДЗ') ? w.w.slice(0, 2) : w.w[0];
      tasks.push({
        question: `С коя буква започва думата „${w.say}“?`,
        picture: { pic: w.pic },
        options: rotate([first, ...pickOthers(ALL, first, 2)], wi + 1),
        answer: first
      });
    });
    if (g.words.length >= 3) {
      const w = g.words[g.words.length - 1];
      const others = g.words.filter((x) => x !== w).slice(0, 2);
      tasks.push({
        question: `Прочети: ${w.w.replace(/-/g, '')}. Коя е картинката?`,
        options: rotate([w, ...others].map((x) => ({ value: x.say, pic: x.pic })), 1),
        answer: w.say
      });
    }
    const syl = g.syllables[1];
    tasks.push({
      question: `Коя е сричката ${syl}?`,
      options: rotate([syl, g.syllables[0], g.syllables[3]], 2),
      answer: syl
    });

    window.LESSONS[`p1-bel-bukvi-${n}`] = {
      stage: 'primary',
      subject: 'bel',
      group: 1,
      title: g.title || `Буквите ${names}`,
      emoji: g.letters[0].L,
      minutes: 15,
      intro: `Днес ще научиш ${g.letters.length === 2 ? 'два нови звука' : 'нови букви'}: ${names}. Натисни картичката, за да чуеш звука и думата.`,
      parentTip: 'Казвайте звука на буквата („ммм“), не името ѝ („ем“). Четете сричките заедно бавно, като плъзгате пръст под тях. Ако Ая се затруднява, върнете се към предишната група букви — повторението е ключът към четенето.',
      sections: [
        {
          title: 'Новите букви',
          blocks: [
            { type: 'cards', items: g.letters.map((l, i) => ({
              pic: l.pic,
              label: `${l.L} ${l.L.toLowerCase()}`,
              sub: l.word,
              say: `${l.L}. Като ${l.word}.${l.note ? ' ' + l.note : ''}`,
              color: COLORS[i % COLORS.length]
            })) },
            ...g.letters.filter((l) => l.note).map((l) => ({ type: 'say', text: l.note })),
            ...(g.pairs ? [{ type: 'say', text: g.pairs }] : [])
          ]
        },
        {
          title: 'Да четем срички',
          blocks: [
            { type: 'say', text: 'Натисни сричката и я прочети заедно с гласа.' },
            { type: 'cards', items: g.syllables.map((s, i) => ({ pic: s, label: s.toLowerCase(), say: s.toLowerCase(), color: COLORS[(i + 2) % COLORS.length] })) }
          ]
        },
        {
          title: 'Да четем думи',
          blocks: [
            { type: 'say', text: 'Прочети думата по срички, после я кажи цялата.' },
            { type: 'cards', items: g.words.map((w, i) => ({ pic: w.pic, label: w.w, sub: w.note || '', say: w.say, color: COLORS[(i + 4) % COLORS.length] })) }
          ]
        }
      ],
      tasks
    };
  });
})();
