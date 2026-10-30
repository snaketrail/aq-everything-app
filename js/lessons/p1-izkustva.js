// 1. клас: Музика, Изобразително изкуство, Технологии и предприемачество, Физическо възпитание и спорт.
window.LESSONS = window.LESSONS || {};

(function () {
  const L = (subject) => (id, data) => { window.LESSONS[id] = Object.assign({ stage: 'primary', subject, group: 1 }, data); };
  const music = L('music');
  const art = L('art');
  const tech = L('tech');
  const pe = L('pe');

  // ---------- Звуци за уроците по музика ----------
  const MELODY = [392, 392, 440, 392, 523, 494];
  const tune = (o = {}) => MELODY.map((f, i) => ({ f: f * (o.pitch || 1), d: (o.long && i === 5) ? 1.2 : (o.d || 0.3), v: o.v }));
  // „Шум“: бързи случайни звуци без мелодия (фиксирани, за да звучат еднакво всеки път).
  const NOISE = [180, 620, 95, 410, 870, 150, 300, 760, 120, 540, 210, 680].map((f) => ({ f, d: 0.06, type: 'sawtooth', v: 0.5 }));
  const SHORT = Array.from({ length: 6 }, () => [{ f: 523, d: 0.12 }, { f: 0, d: 0.12 }]).flat();
  const LONG = [{ f: 523, d: 1.4 }];
  const beat = (strong, d) => [{ f: strong ? 196 : 294, d: 0.09, v: strong ? 1 : 0.45, type: 'square' }, { f: 0, d: d - 0.09 }];
  const repeat = (p, n) => Array.from({ length: n }, () => p).flat();
  const HORO = repeat([...beat(true, 0.25), ...beat(false, 0.25)], 8);
  const RACHENITSA = repeat([...beat(true, 0.15), ...beat(false, 0.15), ...beat(true, 0.15), ...beat(false, 0.15), ...beat(true, 0.15), ...beat(false, 0.15), ...beat(false, 0.15)], 4);
  const CHOIR = MELODY.map((f) => ({ f: [f, f * 1.26, f * 1.5], d: 0.35, v: 1 }));

  music('p1-music-zvutsi', {
    title: 'Звуците около нас',
    emoji: '👂',
    minutes: 10,
    intro: 'Около нас има много звуци. Някои са шумове, а други са музикални звуци — от тях се прави музика.',
    parentTip: 'Затворете очи за минута и слушайте: какво чувате? Кола, птица, часовник, вода. После изсвирете тон на инструмент или изпейте — това е музикален звук.',
    sections: [
      { title: 'Шум или музика?', blocks: [
        { type: 'tones', items: [
          { pic: '🔨', label: 'шум', notes: NOISE },
          { pic: '🎵', label: 'музикален звук', notes: tune() }
        ] },
        { type: 'cards', items: [
          { pic: '🚗', label: 'кола — шум', color: '#dfe6ee' },
          { pic: '🐦', label: 'птичка — пее', color: '#7bdcb5' },
          { pic: '🌧️', label: 'дъжд — шум', color: '#5ec8f2' },
          { pic: '🎹', label: 'пиано — музика', color: '#c38bff' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Чуй. Шум ли е, или музика?', sound: NOISE, options: [{ value: 'noise', pic: '🔨', label: 'шум' }, { value: 'music', pic: '🎵', label: 'музика' }], answer: 'noise' },
      { question: 'Чуй. Шум ли е, или музика?', sound: tune(), options: [{ value: 'noise', pic: '🔨', label: 'шум' }, { value: 'music', pic: '🎵', label: 'музика' }], answer: 'music' },
      { question: 'Кое издава музикален звук?', options: [{ value: 'violin', pic: '🎻', label: 'цигулка' }, { value: 'truck', pic: '🚚', label: 'камион' }], answer: 'violin' }
    ]
  });

  music('p1-music-tonove', {
    title: 'Високи и ниски, кратки и дълги тонове',
    emoji: '🎼',
    minutes: 10,
    intro: 'Музикалните тонове могат да са високи или ниски, кратки или дълги, силни или тихи.',
    parentTip: 'Играйте: при висок тон децата се протягат нагоре, при нисък — клякат. При кратки тонове пляскат, при дълъг — разперват ръце.',
    sections: [
      { title: 'Високо и ниско', blocks: [
        { type: 'tones', items: [
          { pic: '🐦', label: 'високи тонове', notes: tune({ pitch: 2 }) },
          { pic: '🐻', label: 'ниски тонове', notes: tune({ pitch: 0.4 }) }
        ] }
      ] },
      { title: 'Кратко и дълго', blocks: [
        { type: 'tones', items: [
          { pic: '👏', label: 'кратки тонове', notes: SHORT },
          { pic: '🙆', label: 'дълъг тон', notes: LONG }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Чуй. Високи ли са тоновете, или ниски?', sound: tune({ pitch: 2 }), options: [{ value: 'high', pic: '🐦', label: 'високи' }, { value: 'low', pic: '🐻', label: 'ниски' }], answer: 'high' },
      { question: 'Чуй. Кратки ли са тоновете, или дълги?', sound: SHORT, options: [{ value: 'short', pic: '👏', label: 'кратки' }, { value: 'long', pic: '🙆', label: 'дълъг' }], answer: 'short' },
      { question: 'Чуй. Кратък ли е тонът, или дълъг?', sound: LONG, options: [{ value: 'short', pic: '👏', label: 'кратък' }, { value: 'long', pic: '🙆', label: 'дълъг' }], answer: 'long' },
      { question: 'Чуй. Високи ли са тоновете, или ниски?', sound: tune({ pitch: 0.4 }), options: [{ value: 'high', pic: '🐦', label: 'високи' }, { value: 'low', pic: '🐻', label: 'ниски' }], answer: 'low' }
    ]
  });

  music('p1-music-instrumenti', {
    title: 'Музикалните инструменти',
    emoji: '🎻',
    minutes: 10,
    intro: 'Инструментите са различни групи: ударни, струнни, духови и клавишни.',
    parentTip: 'Пуснете записи на тъпан, цигулка, контрабас, тромпет, гайда и пиано. Покажете, че контрабасът е като огромна цигулка с много нисък глас.',
    sections: [
      { title: 'Групи инструменти', blocks: [
        { type: 'cards', items: [
          { pic: '🥁', label: 'ударни', sub: 'тъпан, барабан, дайре', color: '#ff8fb1' },
          { pic: '🎻', label: 'струнни', sub: 'цигулка, контрабас, китара', color: '#ffb84d' },
          { pic: '🎺', label: 'духови', sub: 'тромпет, гайда, кавал, флейта', color: '#ffd23f' },
          { pic: '🎹', label: 'клавишни', sub: 'пиано, акордеон', color: '#c38bff' }
        ] },
        { type: 'say', text: 'Гайдата и кавалът са български народни духови инструменти.' }
      ] }
    ],
    tasks: [
      { question: 'Към коя група е тъпанът?', picture: { pic: '🥁' }, options: ['ударни', 'духови', 'струнни'], answer: 'ударни' },
      { question: 'Към коя група е цигулката?', picture: { pic: '🎻' }, options: ['ударни', 'струнни'], answer: 'струнни' },
      { question: 'Кой инструмент е духов?', options: [{ value: 'trumpet', pic: '🎺' }, { value: 'piano', pic: '🎹' }, { value: 'drum', pic: '🥁' }], answer: 'trumpet' },
      { question: 'Кой е български народен духов инструмент?', options: ['гайда', 'пиано', 'контрабас'], answer: 'гайда' }
    ]
  });

  music('p1-music-glasove', {
    title: 'Детски, женски и мъжки гласове',
    emoji: '🎤',
    minutes: 8,
    intro: 'Хората пеят с различни гласове. Детските са най-високи, мъжките — най-ниски.',
    parentTip: 'Устройствата четат на глас с различна височина — натиснете картичките. После пейте една песничка заедно: Ая, мама и тате, и сравнете гласовете.',
    sections: [
      { title: 'Чуй гласовете', blocks: [
        { type: 'cards', items: [
          { pic: '🧒', label: 'детски глас', say: 'Ла-ла-ла, аз пея!', voice: { pitch: 1.9 }, color: '#ffd23f' },
          { pic: '👩', label: 'женски глас', say: 'Ла-ла-ла, аз пея!', voice: { pitch: 1.3 }, color: '#ff8fb1' },
          { pic: '👨', label: 'мъжки глас', say: 'Ла-ла-ла, аз пея!', voice: { pitch: 0.4 }, color: '#5ec8f2' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Кой глас е най-нисък?', options: [{ value: 'man', pic: '👨', label: 'мъжкият' }, { value: 'child', pic: '🧒', label: 'детският' }], answer: 'man' },
      { question: 'Кой глас е най-висок?', options: [{ value: 'child', pic: '🧒', label: 'детският' }, { value: 'man', pic: '👨', label: 'мъжкият' }], answer: 'child' },
      { question: 'Какъв е гласът на Ая?', options: ['детски', 'мъжки'], answer: 'детски' }
    ]
  });

  music('p1-music-hor', {
    title: 'Хор, солист, диригент, оркестър',
    emoji: '🎶',
    minutes: 10,
    intro: 'Когато много хора пеят заедно, това е хор. Когато свирят много музиканти — оркестър. Диригентът ги води.',
    parentTip: 'Гледайте заедно видео на детски хор или оркестър. Нека Ая „дирижира“ с молив, докато звучи музика.',
    sections: [
      { title: 'Кой какво прави?', blocks: [
        { type: 'cards', items: [
          { pic: '🧑‍🎤', label: 'солист', sub: 'пее сам', color: '#ff8fb1' },
          { pic: '👧🧒👦', label: 'хор', sub: 'много певци пеят заедно', color: '#ffd23f' },
          { pic: '🎻🎺🥁', label: 'оркестър', sub: 'много музиканти свирят заедно', color: '#5ec8f2' },
          { pic: '🪄', label: 'диригент', sub: 'води хора или оркестъра с палка', color: '#c38bff' }
        ] },
        { type: 'tones', items: [
          { pic: '🧑‍🎤', label: 'един глас', notes: tune() },
          { pic: '👧🧒👦', label: 'много гласове', notes: CHOIR }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Как се казва певецът, който пее сам?', options: ['солист', 'хор'], answer: 'солист' },
      { question: 'Кой води оркестъра?', options: [{ value: 'conductor', pic: '🪄', label: 'диригентът' }, { value: 'listener', pic: '👂', label: 'слушателят' }], answer: 'conductor' },
      { question: 'Чуй. Един глас ли е, или много?', sound: CHOIR, options: [{ value: 'one', pic: '🧑‍🎤', label: 'един' }, { value: 'many', pic: '👧🧒👦', label: 'много' }], answer: 'many' }
    ]
  });

  music('p1-music-hora', {
    title: 'Право хоро и ръченица',
    emoji: '🤝',
    minutes: 10,
    intro: 'Хорото и ръченицата са български народни танци. Правото хоро е равно и бодро, а ръченицата — бърза и подскачаща.',
    parentTip: 'Хванете се за ръце и играйте право хоро вкъщи: три крачки надясно, една наляво. На празник пуснете истинска хороводна музика.',
    sections: [
      { title: 'Чуй ритъма', blocks: [
        { type: 'tones', items: [
          { pic: '🤝', label: 'право хоро', notes: HORO },
          { pic: '🧣', label: 'ръченица', notes: RACHENITSA }
        ] },
        { type: 'say', text: 'Ръченицата има особен ритъм: раз-два, раз-два, раз-два-три. Танцуваме я с кърпичка в ръка.' }
      ] },
      { title: 'Народни обичаи с музика', blocks: [
        { type: 'cards', items: [
          { pic: '👹🔔', label: 'кукери', sub: 'гонят злото със звънци и маски', color: '#ffb84d' },
          { pic: '🌸👧', label: 'лазарки', sub: 'момичета пеят песни за здраве преди Великден', color: '#ff8fb1' },
          { pic: '🎄🎶', label: 'коледари', sub: 'пеят на Бъдни вечер', color: '#7bdcb5' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Чуй ритъма. Хоро ли е, или ръченица?', sound: RACHENITSA, options: [{ value: 'horo', pic: '🤝', label: 'право хоро' }, { value: 'rach', pic: '🧣', label: 'ръченица' }], answer: 'rach', hint: 'Ръченицата е раз-два, раз-два, раз-два-три.' },
      { question: 'Как се играе хоро?', options: ['хванати за ръце', 'всеки сам'], answer: 'хванати за ръце' },
      { question: 'Кои гонят злото със звънци и маски?', options: [{ value: 'kukeri', pic: '👹', label: 'кукерите' }, { value: 'koledari', pic: '🎄', label: 'коледарите' }], answer: 'kukeri' }
    ]
  });

  // ---------- Изобразително изкуство ----------

  art('p1-art-cvetove', {
    title: 'Основни и производни цветове',
    emoji: '🎨',
    minutes: 12,
    intro: 'Основните цветове са три: червено, жълто и синьо. От тях смесваме всички останали — производните цветове.',
    parentTip: 'Дайте на Ая само три бои — червена, жълта и синя — и я предизвикайте да направи зелено, оранжево и лилаво сама.',
    sections: [
      { title: 'Основни цветове', blocks: [
        { type: 'cards', items: [
          { pic: '🔴', label: 'червено', color: '#ff7a59' },
          { pic: '🟡', label: 'жълто', color: '#ffd23f' },
          { pic: '🔵', label: 'синьо', color: '#5ec8f2' }
        ] }
      ] },
      { title: 'Производни цветове', blocks: [
        { type: 'cards', items: [
          { pic: '🔴➕🟡', label: 'оранжево 🟠', color: '#ffb84d' },
          { pic: '🔵➕🟡', label: 'зелено 🟢', color: '#5fd068' },
          { pic: '🔴➕🔵', label: 'лилаво 🟣', color: '#c38bff' }
        ] },
        { type: 'draw', height: 50 }
      ] }
    ],
    tasks: [
      { question: 'Кой цвят е основен?', options: [{ value: 'red', pic: '🔴', label: 'червено' }, { value: 'green', pic: '🟢', label: 'зелено' }], answer: 'red' },
      { question: 'Синьо и жълто дават…', options: [{ value: 'green', pic: '🟢', label: 'зелено' }, { value: 'orange', pic: '🟠', label: 'оранжево' }], answer: 'green' },
      { question: 'Колко са основните цветове?', options: [2, 3, 6], answer: 3 },
      { question: 'От кои цветове става лилаво?', options: ['червено и синьо', 'жълто и синьо'], answer: 'червено и синьо' }
    ]
  });

  art('p1-art-topli-studeni', {
    title: 'Топли и студени цветове',
    emoji: '🔥',
    minutes: 10,
    intro: 'Някои цветове ни напомнят за слънце и огън — те са топли. Други ни напомнят за вода и лед — те са студени.',
    parentTip: 'Нарисувайте две картини: лятно слънце с топли цветове и зимна нощ със студени. Попитайте как се чувства Ая, като гледа всяка.',
    sections: [
      { title: 'Топли и студени', blocks: [
        { type: 'cards', items: [
          { pic: '🔴🟠🟡', label: 'топли цветове', sub: 'като слънце и огън', color: '#ffb84d' },
          { pic: '🔵🟢🟣', label: 'студени цветове', sub: 'като вода, лед и гора', color: '#5ec8f2' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Кой цвят е топъл?', options: [{ value: 'orange', pic: '🟠', label: 'оранжево' }, { value: 'blue', pic: '🔵', label: 'синьо' }], answer: 'orange' },
      { question: 'Кой цвят е студен?', options: [{ value: 'yellow', pic: '🟡', label: 'жълто' }, { value: 'blue', pic: '🔵', label: 'синьо' }], answer: 'blue' },
      { question: 'С какви цветове ще нарисуваш огън?', picture: { pic: '🔥' }, options: ['с топли', 'със студени'], answer: 'с топли' },
      { question: 'С какви цветове ще нарисуваш лед?', picture: { pic: '🧊' }, options: ['с топли', 'със студени'], answer: 'със студени' }
    ]
  });

  art('p1-art-vidove', {
    title: 'Портрет, пейзаж, натюрморт',
    emoji: '🖼️',
    minutes: 10,
    intro: 'Картините се различават според това, какво е нарисувано. Портретът показва човек, пейзажът — природа, натюрмортът — предмети.',
    parentTip: 'Разгледайте картини в книга, музей или онлайн галерия (например Националната галерия). Играйте: „Портрет, пейзаж или натюрморт е?“',
    sections: [
      { title: 'Видове картини', blocks: [
        { type: 'cards', items: [
          { pic: '🧑‍🎨👩', label: 'портрет', sub: 'човек', color: '#ff8fb1' },
          { pic: '🏞️', label: 'пейзаж', sub: 'природа', color: '#7bdcb5' },
          { pic: '🍎🍐🏺', label: 'натюрморт', sub: 'предмети — плодове, цветя, съдове', color: '#ffd23f' }
        ] }
      ] },
      { title: 'Нарисувай портрет на някого от семейството', blocks: [
        { type: 'draw', height: 70 }
      ] }
    ],
    tasks: [
      { question: 'Как се казва картина с планини и река?', picture: { pic: '🏞️' }, options: ['пейзаж', 'портрет', 'натюрморт'], answer: 'пейзаж' },
      { question: 'Как се казва картина с лицето на баба?', picture: { pic: '👵' }, options: ['портрет', 'пейзаж'], answer: 'портрет' },
      { question: 'Как се казва картина с ваза и плодове?', picture: { pic: '🏺🍎🍇' }, options: ['натюрморт', 'пейзаж'], answer: 'натюрморт' }
    ]
  });

  art('p1-art-plastilin', {
    title: 'Моделиране с пластилин',
    emoji: '🐌',
    minutes: 12,
    intro: 'От пластилин можем да изваем всичко! Основните движения са три: топче, наденичка и питка.',
    parentTip: 'Затоплете пластилина в ръце, преди да започнете. Работете върху дъска. Охлювът е идеален за начало — съчетава и трите движения.',
    sections: [
      { title: 'Трите основни движения', blocks: [
        { type: 'cards', items: [
          { pic: '⚪', label: 'топче', sub: 'въртим между дланите', color: '#ff8fb1' },
          { pic: '〰️', label: 'наденичка', sub: 'търкаляме напред-назад', color: '#ffd23f' },
          { pic: '🟤', label: 'питка', sub: 'сплескваме топчето', color: '#ffb84d' }
        ] }
      ] },
      { title: 'Охлюв', blocks: [
        { type: 'story', panels: [
          { pic: '〰️', text: 'Направи дълга наденичка.' },
          { pic: '🌀', text: 'Навий я на спирала — това е черупката.' },
          { pic: '〰️', text: 'Направи по-дебела наденичка за тялото и сложи черупката отгоре.' },
          { pic: '🐌', text: 'Добави две малки рогца. Готово!' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Как правим топче?', options: ['Въртим пластилина между дланите.', 'Режем го с ножица.'], answer: 'Въртим пластилина между дланите.' },
      { question: 'От какво е черупката на охлюва?', options: ['от навита наденичка', 'от питка'], answer: 'от навита наденичка' },
      { question: 'Какво правим преди да моделираме?', options: ['Затопляме пластилина в ръце.', 'Слагаме го в хладилника.'], answer: 'Затопляме пластилина в ръце.' }
    ]
  });

  art('p1-art-narodni', {
    title: 'Кукери и великденски яйца',
    emoji: '🥚',
    minutes: 12,
    intro: 'Народните празници са пълни с изкуство: страшни и красиви кукерски маски, шарени великденски яйца, червено-бели мартеници.',
    parentTip: 'Боядисайте и украсете яйца с восък или стикери. Направете кукерска маска от хартиена чиния, пера и прежда.',
    sections: [
      { title: 'Народно изкуство', blocks: [
        { type: 'cards', items: [
          { pic: '👹', label: 'кукерски маски', sub: 'с рога, пера и пъстри конци', color: '#ffb84d' },
          { pic: '🥚🎨', label: 'великденски яйца', sub: 'червеното яйце е първо', color: '#ff7a59' },
          { pic: '[martenitsa]', label: 'мартеници', sub: 'червено и бяло', color: '#ff8fb1' },
          { pic: '[shevitsa]', label: 'шевици', sub: 'извезани шарки по дрехи', color: '#ffd23f' }
        ] }
      ] },
      { title: 'Украси великденско яйце', blocks: [
        { type: 'draw', height: 70, guides: ['M50 8 C70 8 82 35 82 48 C82 62 68 66 50 66 C32 66 18 62 18 48 C18 35 30 8 50 8 Z'] }
      ] }
    ],
    tasks: [
      { question: 'Кой цвят е първото великденско яйце по традиция?', options: [{ value: 'red', pic: '🔴', label: 'червено' }, { value: 'blue', pic: '🔵', label: 'синьо' }], answer: 'red' },
      { question: 'Какво носят кукерите?', options: [{ value: 'masks', pic: '👹', label: 'маски и звънци' }, { value: 'crowns', pic: '👑', label: 'корони' }], answer: 'masks' },
      { question: 'Какви са цветовете на мартеницата?', options: ['червено и бяло', 'синьо и жълто'], answer: 'червено и бяло' }
    ]
  });

  // ---------- Технологии и предприемачество ----------

  tech('p1-tech-materiali', {
    title: 'Хартия, текстил, дървесина',
    emoji: '🪵',
    minutes: 10,
    intro: 'Нещата около нас са направени от различни материали. Всеки материал има свои свойства.',
    parentTip: 'Разгледайте вкъщи от какво е направено всяко нещо: стол — дърво, тениска — текстил, тетрадка — хартия. Обяснете, че хартията се прави от дърво, затова я пестим.',
    sections: [
      { title: 'Материали', blocks: [
        { type: 'cards', items: [
          { pic: '📄', label: 'хартия', sub: 'къса се, сгъва се, гори', color: '#dfe6ee' },
          { pic: '👕', label: 'текстил', sub: 'мек е, от него шием дрехи', color: '#ff8fb1' },
          { pic: '🪵', label: 'дървесина', sub: 'твърда е, от нея правим мебели', color: '#ffb84d' }
        ] }
      ] },
      { title: 'Да пестим хартията', blocks: [
        { type: 'cards', items: [
          { pic: '📝', label: 'Пиша и от двете страни на листа.', color: '#5ec8f2' },
          { pic: '🟦', label: 'Хвърлям хартията в синия контейнер.', color: '#7bdcb5' },
          { pic: '🌳', label: 'Хартията се прави от дървета.', color: '#5fd068' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'От какво е направена тениската?', picture: { pic: '👕' }, options: ['текстил', 'дървесина', 'хартия'], answer: 'текстил' },
      { question: 'От какво се прави хартията?', options: [{ value: 'tree', pic: '🌳', label: 'от дървета' }, { value: 'stone', pic: '🪨', label: 'от камъни' }], answer: 'tree' },
      { question: 'Кой материал е най-твърд?', options: ['дървесина', 'хартия', 'текстил'], answer: 'дървесина' },
      { question: 'Как пестим хартия?', options: ['Пишем и от двете страни.', 'Скъсваме листа след един ред.'], answer: 'Пишем и от двете страни.' }
    ]
  });

  tech('p1-tech-instrumenti', {
    title: 'Инструментите и безопасността',
    emoji: '✂️',
    minutes: 10,
    intro: 'При работа използваме инструменти: ножица, линия, молив, лепило. Работим внимателно и подреждаме след себе си.',
    parentTip: 'Отделете на Ая „работна кутия“ с детска ножица, лепило, моливи и линийка. Правилото е: след работа всичко се връща в кутията.',
    sections: [
      { title: 'Инструментите', blocks: [
        { type: 'cards', items: [
          { pic: '✂️', label: 'ножица', sub: 'за рязане', color: '#ff8fb1' },
          { pic: '📏', label: 'линийка', sub: 'за мерене и прави линии', color: '#5ec8f2' },
          { pic: '✏️', label: 'молив', sub: 'за очертаване', color: '#ffd23f' },
          { pic: '[lepilo]', label: 'лепило', sub: 'за залепване', color: '#7bdcb5' }
        ] }
      ] },
      { title: 'Правила', blocks: [
        { type: 'cards', items: [
          { pic: '✂️⬇️', label: 'Подавам ножицата с дръжките напред.', color: '#ffb84d' },
          { pic: '🧹', label: 'След работа почиствам масата.', color: '#c38bff' },
          { pic: '🧴', label: 'Затварям лепилото.', color: '#5ec8f2' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Как подаваме ножицата?', options: ['С дръжките напред.', 'С върха напред.'], answer: 'С дръжките напред.' },
      { question: 'С какво чертаем права линия?', options: [{ value: 'ruler', pic: '📏', label: 'с линийка' }, { value: 'glue', pic: '[lepilo]', label: 'с лепило' }], answer: 'ruler' },
      { question: 'Какво правим след работа?', options: ['Подреждаме масата.', 'Оставяме всичко разхвърляно.'], answer: 'Подреждаме масата.' }
    ]
  });

  tech('p1-tech-koleta', {
    title: 'Колелата в помощ',
    emoji: '🚲',
    minutes: 10,
    intro: 'Колелото е едно от най-важните изобретения. С колела се движат колите, влаковете, велосипедите и количките.',
    parentTip: 'Сравнете колко трудно е да бутате кашон по пода и колко лесно е, ако го сложите на количка. Така Ая ще разбере защо колелото помага.',
    sections: [
      { title: 'Превозни средства', blocks: [
        { type: 'cards', items: [
          { pic: '🚲', label: 'велосипед', sub: '2 колела', color: '#5fd068' },
          { pic: '🚗', label: 'кола', sub: '4 колела', color: '#ff8fb1' },
          { pic: '🚌', label: 'автобус', sub: 'вози много хора', color: '#ffd23f' },
          { pic: '🚂', label: 'влак', sub: 'движи се по релси', color: '#5ec8f2' },
          { pic: '✈️', label: 'самолет', sub: 'лети, но има колела за кацане', color: '#c38bff' },
          { pic: '⛵', label: 'лодка', sub: 'плува — няма колела', color: '#7bdcb5' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Колко колела има велосипедът?', picture: { pic: '🚲' }, options: [2, 3, 4], answer: 2 },
      { question: 'Кое превозно средство се движи по релси?', options: [{ value: 'train', pic: '🚂', label: 'влак' }, { value: 'bus', pic: '🚌', label: 'автобус' }], answer: 'train' },
      { question: 'Кое няма колела?', options: [{ value: 'boat', pic: '⛵', label: 'лодка' }, { value: 'car', pic: '🚗', label: 'кола' }], answer: 'boat' },
      { question: 'Колко колела имат общо 2 коли?', picture: { pic: '🚗🚗' }, options: [4, 6, 8], answer: 8 }
    ]
  });

  tech('p1-tech-pari', {
    title: 'Стоките в магазина и спестяването',
    emoji: '🐷',
    minutes: 10,
    intro: 'В магазина купуваме стоки с пари. Парите се изкарват с труд, затова ги харчим разумно и спестяваме.',
    parentTip: 'Дайте на Ая касичка и малко джобни пари. Когато иска играчка, пребройте заедно колко още трябва да спести. Така тя учи търпение и стойността на парите.',
    sections: [
      { title: 'В магазина', blocks: [
        { type: 'cards', items: [
          { pic: '🍎🥕', label: 'плодове и зеленчуци', color: '#5fd068' },
          { pic: '🥛🧀', label: 'млечни продукти', color: '#dfe6ee' },
          { pic: '🍞', label: 'хляб', color: '#ffd23f' },
          { pic: '🧴🧼', label: 'стоки за хигиена', color: '#5ec8f2' }
        ] }
      ] },
      { title: 'Спестяване', blocks: [
        { type: 'story', panels: [
          { pic: '🧸', text: 'Ая иска мече, което струва 10 €.' },
          { pic: '🐷🪙', text: 'Тя слага в касичката по 2 € всяка седмица.' },
          { pic: '📅', text: 'След 5 седмици има 10 €.' },
          { pic: '🧸😊', text: 'Ая купува мечето сама!' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Къде пазим спестените пари?', options: [{ value: 'piggy', pic: '🐷', label: 'в касичка' }, { value: 'floor', pic: '🧹', label: 'на пода' }], answer: 'piggy' },
      { question: 'Ая слага по 2 € седмично. Колко има след 3 седмици?', options: ['5 €', '6 €', '8 €'], answer: '6 €' },
      { question: 'Къде са млечните продукти?', options: [{ value: 'milk', pic: '🥛🧀' }, { value: 'bread', pic: '🍞' }], answer: 'milk' },
      { question: 'Защо спестяваме?', options: ['За да купим нещо важно по-късно.', 'За да изхвърлим парите.'], answer: 'За да купим нещо важно по-късно.' }
    ]
  });

  tech('p1-tech-profesii', {
    title: 'Познати професии',
    emoji: '👩‍🔧',
    minutes: 10,
    intro: 'Всяка професия прави нещо полезно за хората и използва свои инструменти.',
    parentTip: 'Разкажете на Ая каква е вашата професия и какво правите в работния ден. Ако е възможно, заведете я за малко на работното си място.',
    sections: [
      { title: 'Професии и инструменти', blocks: [
        { type: 'cards', items: [
          { pic: '👩‍🔧🔧', label: 'механик', sub: 'поправя коли', color: '#5ec8f2' },
          { pic: '🧑‍🌾🚜', label: 'фермер', sub: 'отглежда храна', color: '#5fd068' },
          { pic: '👩‍⚕️🩺', label: 'лекар', sub: 'лекува', color: '#ff8fb1' },
          { pic: '🧑‍🍳🍳', label: 'готвач', sub: 'готви', color: '#ffb84d' },
          { pic: '👨‍💻💻', label: 'програмист', sub: 'пише програми за компютри', color: '#c38bff' },
          { pic: '👷🧱', label: 'строител', sub: 'строи сгради', color: '#ffd23f' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Кой поправя коли?', options: [{ value: 'mech', pic: '👩‍🔧', label: 'механик' }, { value: 'chef', pic: '🧑‍🍳', label: 'готвач' }], answer: 'mech' },
      { question: 'Какво използва програмистът?', options: [{ value: 'pc', pic: '💻', label: 'компютър' }, { value: 'tractor', pic: '🚜', label: 'трактор' }], answer: 'pc' },
      { question: 'Кой отглежда храната ни?', options: ['фермерът', 'шофьорът'], answer: 'фермерът' }
    ]
  });

  tech('p1-tech-lyubimets', {
    title: 'Грижи за домашен любимец',
    emoji: '🐶',
    minutes: 8,
    intro: 'Домашният любимец е член на семейството. Той има нужда от храна, вода, разходка, чистота и обич.',
    parentTip: 'Ако обмисляте домашен любимец, обсъдете с Ая всички грижи предварително. Ако нямате, посетете приятели с куче или коте.',
    sections: [
      { title: 'Какво му трябва?', blocks: [
        { type: 'cards', items: [
          { pic: '🍖💧', label: 'храна и прясна вода', color: '#ffb84d' },
          { pic: '🦮', label: 'разходка (за кучето)', color: '#5fd068' },
          { pic: '🛁', label: 'чистота', color: '#5ec8f2' },
          { pic: '🩺', label: 'преглед при ветеринар', color: '#ff8fb1' },
          { pic: '❤️', label: 'обич и игра', color: '#c38bff' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Кой лекува животните?', options: ['ветеринарят', 'учителят'], answer: 'ветеринарят' },
      { question: 'Какво трябва всеки ден на кучето?', options: [{ value: 'walk', pic: '🦮', label: 'разходка' }, { value: 'tv', pic: '📺', label: 'телевизор' }], answer: 'walk' },
      { question: 'Как се отнасяме с домашния любимец?', options: ['Грижим се за него с обич.', 'Дърпаме го за опашката.'], answer: 'Грижим се за него с обич.' }
    ]
  });

  // ---------- Физическо възпитание и спорт ----------

  pe('p1-pe-stroy', {
    title: 'Строй, ходене и бягане',
    emoji: '🏃',
    minutes: 8,
    intro: 'В часа по физическо първо се строяваме, после загряваме с ходене и бягане.',
    parentTip: 'Осигурете удобни спортни обувки и дрехи за часа. Вкъщи играйте на „строяване“ — в редица по височина, в колона един зад друг.',
    sections: [
      { title: 'Строй', blocks: [
        { type: 'cards', items: [
          { pic: '🧍🧍🧍', label: 'редица', sub: 'един до друг', color: '#5ec8f2' },
          { pic: '🚶🚶🚶', label: 'колона', sub: 'един зад друг', color: '#ffd23f' },
          { pic: '⭕', label: 'кръг', sub: 'хванати за ръце', color: '#7bdcb5' }
        ] }
      ] },
      { title: 'Загрявка', blocks: [
        { type: 'story', panels: [
          { pic: '🚶', text: 'Ходене на пръсти и на пети.' },
          { pic: '🏃', text: 'Леко бягане в кръг.' },
          { pic: '🙆', text: 'Кръгове с ръцете напред и назад.' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Как стоим в колона?', options: ['един зад друг', 'един до друг'], answer: 'един зад друг' },
      { question: 'Как стоим в редица?', options: ['един до друг', 'един зад друг'], answer: 'един до друг' },
      { question: 'Защо загряваме?', options: ['За да не се нараним.', 'За да се уморим.'], answer: 'За да не се нараним.' }
    ]
  });

  pe('p1-pe-skokove', {
    title: 'Скокове',
    emoji: '🦘',
    minutes: 8,
    intro: 'Скачаме на дължина, на височина и подскачаме на място. Приземяваме се меко, на свити колене.',
    parentTip: 'Начертайте с тебешир линии и измерете с крачки колко далече скача Ая. Важно е да се приземява меко на двата крака.',
    sections: [
      { title: 'Видове скокове', blocks: [
        { type: 'cards', items: [
          { pic: '➡️🦘', label: 'скок на дължина', sub: 'от място, с два крака', color: '#5ec8f2' },
          { pic: '⬆️🦘', label: 'скок на височина', sub: 'над ниско препятствие', color: '#ffd23f' },
          { pic: '🐸', label: 'подскоци', sub: 'на място и с придвижване', color: '#5fd068' }
        ] },
        { type: 'say', text: 'Приземяваме се меко — на пръсти, със свити колене.' }
      ] }
    ],
    tasks: [
      { question: 'Как се приземяваме?', options: ['меко, със свити колене', 'с прави крака'], answer: 'меко, със свити колене' },
      { question: 'Ая скочи 80 см, после 90 см. Кой скок е по-дълъг?', options: ['80 см', '90 см'], answer: '90 см' },
      { question: 'Как скачаме на дължина от място?', options: ['с двата крака', 'с един крак'], answer: 'с двата крака' }
    ]
  });

  pe('p1-pe-hvarlyane', {
    title: 'Хвърляне и ловене',
    emoji: '🏐',
    minutes: 8,
    intro: 'Хвърляме топка с една и с две ръце, към цел и на приятел. Ловим с протегнати ръце.',
    parentTip: 'Сложете кошче или кофа на 2–3 метра и броете попаденията. Играйте „горещ картоф“ с подаване на топката в кръг.',
    sections: [
      { title: 'Упражнения', blocks: [
        { type: 'cards', items: [
          { pic: '🏐🎯', label: 'хвърляне в цел', color: '#ff8fb1' },
          { pic: '🧒🏐👧', label: 'подаване на приятел', color: '#5ec8f2' },
          { pic: '🏀', label: 'водене на топка', sub: 'удряме я в земята с една ръка', color: '#ffb84d' }
        ] },
        { type: 'countAlong', emoji: '🎯', count: 6, done: 'Шест попадения!' }
      ] }
    ],
    tasks: [
      { question: 'Как ловим топката?', options: ['с протегнати ръце', 'със затворени очи'], answer: 'с протегнати ръце' },
      { question: 'Ая хвърли 10 пъти и уцели 7. Колко пъти не уцели?', options: [2, 3, 4], answer: 3 },
      { question: 'Как водим топка?', options: ['Удряме я в земята с една ръка.', 'Носим я под мишница.'], answer: 'Удряме я в земята с една ръка.' }
    ]
  });

  pe('p1-pe-igri', {
    title: 'Подвижни игри и правила',
    emoji: '🎲',
    minutes: 8,
    intro: 'В подвижните игри тичаме, гоним се и се смеем. Всяка игра има правила, които спазваме честно.',
    parentTip: 'Научете Ая на стари игри: гоненица, „Народна топка“, „Ластик“, „Дама“, „Сляпа баба“. Те развиват бързина и умение за общуване.',
    sections: [
      { title: 'Игри', blocks: [
        { type: 'cards', items: [
          { pic: '🏃‍♀️🏃', label: 'гоненица', color: '#ff8fb1' },
          { pic: '🙈', label: 'криеница', color: '#c38bff' },
          { pic: '🏐', label: 'народна топка', color: '#ffd23f' },
          { pic: '🟦🟦🟦', label: 'дама', sub: 'скачаме по квадрати', color: '#5ec8f2' }
        ] }
      ] },
      { title: 'След часа', blocks: [
        { type: 'cards', items: [
          { pic: '💧', label: 'Пия вода.', color: '#5ec8f2' },
          { pic: '🧼', label: 'Мия ръцете и лицето си.', color: '#7bdcb5' },
          { pic: '👕', label: 'Сменям потната тениска.', color: '#ffd23f' }
        ] }
      ] }
    ],
    tasks: [
      { question: 'Какво правим, ако загубим в игра?', options: ['Поздравяваме победителя.', 'Сърдим се.'], answer: 'Поздравяваме победителя.' },
      { question: 'Какво правим след часа по физическо?', options: [{ value: 'wash', pic: '🧼', label: 'мием се' }, { value: 'nothing', pic: '🛋️', label: 'нищо' }], answer: 'wash' },
      { question: 'В коя игра се крием?', options: ['криеница', 'дама'], answer: 'криеница' }
    ]
  });
})();
