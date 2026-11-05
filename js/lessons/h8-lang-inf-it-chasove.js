// 8. клас: Английски език (B1), Информатика (Python), Информационни технологии.
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'third-conditional', title: 'Third Conditional — if I had known…', emoji: '⏪', core: 'Граматика и лексика',
      intro: 'If I had studied, I would have passed. С третото условно изречение говорим за минало, което не може да се промени — съжаления и въображаеми алтернативи.',
      tip: 'Разкажете семейна история с „If we hadn’t missed the bus, we wouldn’t have met…“ — Ая ще запомни конструкцията.',
      w: [['📚', 'If I had studied, I would have passed.', 'Ако бях учила, щях да изкарам.'], ['🚌', 'If we had left earlier, we wouldn’t have missed the bus.', 'Ако бяхме тръгнали по-рано, нямаше да изпуснем автобуса.'], ['☔', 'If I had known, I would have brought an umbrella.', 'Ако бях знаела, щях да взема чадър.'], ['🎁', 'She would have come if you had invited her.', 'Щеше да дойде, ако я беше поканил.']],
      rule: 'If + Past Perfect (had + 3 форма), would have + 3 форма. Говорим за нереално минало.',
      extra: [['„If I ___ known, I would have helped.“', ['had', 'have', 'would'], 'had'], ['„If you had asked, I ___ have told you.“', ['would', 'will'], 'would']] },
    { id: 'passive-tenses', title: 'The Passive in all tenses', emoji: '🏗️', core: 'Граматика и лексика',
      intro: 'English is spoken worldwide. The bridge was built in 1954. The results will be announced tomorrow. Страдателният залог се използва, когато действието е по-важно от вършителя.',
      tip: 'Търсете страдателен залог в новините на английски — заглавията са пълни с него.',
      w: [['🌍', 'English is spoken worldwide.', 'Английски се говори навсякъде.'], ['🌉', 'The bridge was built in 1954.', 'Мостът е построен през 1954 г.'], ['📢', 'The results will be announced.', 'Резултатите ще бъдат обявени.'], ['🔑', 'My bike has been stolen.', 'Колелото ми е откраднато.'], ['🏠', 'The house is being painted.', 'Къщата се боядисва (в момента).']],
      rule: 'be (в съответното време) + 3 форма: is made, was made, will be made, has been made, is being made. Вършителят — с by.',
      extra: [['„The letter ___ written yesterday.“', ['was', 'is', 'has'], 'was'], ['„The room ___ cleaned every day.“', ['is', 'was being', 'has'], 'is']] },
    { id: 'deduction', title: 'Must be / can’t be — логически изводи', emoji: '🕵️', core: 'Граматика и лексика',
      intro: 'She must be at home — the lights are on. It can’t be John — he’s in London. С must и can’t правим логически изводи като детективи.',
      tip: 'Играйте на детективи: покажете снимка и Ая прави изводи с must be / might be / can’t be.',
      w: [['💡', 'She must be at home.', 'Сигурно е вкъщи.'], ['🚫', 'It can’t be true.', 'Не може да е вярно.'], ['🤔', 'He might be late.', 'Може да закъснее.'], ['🥵', 'You must be tired.', 'Сигурно си уморена.']],
      rule: 'must be — почти сигурно да. can’t be — почти сигурно не. might / could be — възможно.',
      extra: [['Сигурни сме, че НЕ е вярно: „It ___ be true.“', ['can’t', 'must', 'might'], 'can’t']] },
    { id: 'wish', title: 'I wish… — желания и съжаления', emoji: '🌠', core: 'Граматика и лексика',
      intro: 'I wish I had a dog. I wish I hadn’t said that. С wish изразяваме желание нещо да е различно — в настоящето или в миналото.',
      tip: 'Напишете „wish list“ на английски — какво бихте искали да е различно днес.',
      w: [['🐶', 'I wish I had a dog.', 'Иска ми се да имах куче.'], ['☀️', 'I wish it were summer.', 'Иска ми се да беше лято.'], ['😔', 'I wish I hadn’t said that.', 'Съжалявам, че го казах.'], ['🎹', 'I wish I could play the piano.', 'Иска ми се да можех да свиря на пиано.']],
      rule: 'Настояще: wish + Past Simple (I wish I knew). Минало: wish + Past Perfect (I wish I had known). Умение: wish + could.',
      extra: [['„I wish I ___ the answer.“ (сега)', ['knew', 'know', 'had known'], 'knew']] },
    { id: 'have-done', title: 'Have something done — някой го прави за мен', emoji: '✂️', core: 'Граматика и лексика',
      intro: 'I had my hair cut. We’re having our house painted. Казваме, че някой друг е свършил нещо за нас.',
      tip: 'Говорете за услуги: „We have the car washed, we have pizza delivered…“',
      w: [['💇', 'I had my hair cut.', 'Подстригах се (в салон).'], ['🎨', 'We had the house painted.', 'Боядисаха ни къщата.'], ['🚗', 'He has his car washed every week.', 'Мият му колата всяка седмица.'], ['👁️', 'I need to have my eyes tested.', 'Трябва да си проверя очите.']],
      rule: 'have + предмет + 3 форма: have my hair cut, have the car repaired.',
      extra: [['„I ___ my bike repaired yesterday.“', ['had', 'have', 'was'], 'had']] },
    { id: 'linking', title: 'However, although, despite — свързващи думи', emoji: '🔗', core: 'Граматика и лексика',
      intro: 'Свързващите думи правят текста логичен: although (въпреки че), however (обаче), despite (въпреки), therefore (затова), moreover (освен това).',
      tip: 'При писане на есе на английски изберете поне три свързващи думи и ги използвайте.',
      w: [['🌧️', 'Although it rained, we went out.', 'Въпреки че валеше, излязохме.'], ['🔄', 'However, it was fun.', 'Обаче беше забавно.'], ['☔', 'Despite the rain, we went out.', 'Въпреки дъжда излязохме.'], ['➡️', 'Therefore, we stayed home.', 'Затова останахме вкъщи.'], ['➕', 'Moreover, it is cheap.', 'Освен това е евтино.']],
      rule: 'although + изречение; despite + съществително или -ing; however — в началото на ново изречение, със запетая.',
      extra: [['„___ the rain, we played.“', ['Despite', 'Although'], 'Despite'], ['„___ it was late, she called.“', ['Although', 'Despite'], 'Although']] },
    { id: 'make-do', title: 'Make or do? — колокации', emoji: '🛠️', core: 'Граматика и лексика',
      intro: 'make a mistake, do homework… На български и двете са „правя“, но в английски се различават.',
      tip: 'Две колони на хладилника: make и do. Всяка седмица по три нови израза.',
      w: [['❌', 'make a mistake', 'правя грешка'], ['📒', 'do homework', 'пиша домашно'], ['🛏️', 'make the bed', 'оправям леглото'], ['🧽', 'do the dishes', 'мия чиниите'], ['🤝', 'make friends', 'създавам приятелства'], ['🏋️', 'do sport', 'спортувам']],
      rule: 'make — създаваме нещо (make a cake, make noise). do — дейности и задължения (do the shopping, do your best).',
      extra: [['„___ a decision“', ['make', 'do'], 'make'], ['„___ your best“', ['do', 'make'], 'do']] },
    { id: 'environment-b1', title: 'Climate and environment', emoji: '🌍', core: 'Граматика и лексика',
      intro: 'climate change, renewable energy, carbon footprint… Думи, които ще срещнеш в новините и на изпитите.',
      tip: 'Гледайте кратък документален филм за климата на английски със субтитри.',
      w: [['🌡️', 'global warming', 'глобално затопляне'], ['☀️', 'renewable energy', 'възобновяема енергия'], ['👣', 'carbon footprint', 'въглероден отпечатък'], ['🌊', 'sea level rise', 'покачване на морското равнище'], ['🌳', 'deforestation', 'изсичане на горите'], ['♻️', 'sustainable', 'устойчив']],
      p: [['🌍', 'We need to reduce our carbon footprint.', 'Трябва да намалим въглеродния си отпечатък.']],
      rule: 'Полезни изрази за мнение: In my opinion…, I strongly believe…, On the other hand…' },
    { id: 'jobs-b1', title: 'Work and careers', emoji: '💼', core: 'Граматика и лексика',
      intro: 'CV, job interview, skills, salary… Думи за света на работата и за първата стажантска позиция.',
      tip: 'Направете заедно CV на английски — за упражнение, с хобитата и уменията на Ая.',
      w: [['📄', 'CV / résumé', 'автобиография'], ['🤝', 'job interview', 'интервю за работа'], ['🧠', 'skills', 'умения'], ['💰', 'salary', 'заплата'], ['🎓', 'internship', 'стаж'], ['👔', 'employer', 'работодател']],
      p: [['❓', 'What are your strengths?', 'Кои са силните ти страни?'], ['🙋', 'I’m good at working in a team.', 'Добра съм в работата в екип.']],
      rule: 'apply for a job — кандидатствам за работа; be responsible for — отговарям за.' },
    { id: 'media', title: 'Media and news', emoji: '📰', core: 'Граматика и лексика',
      intro: 'headline, source, fake news, influencer… Как да говорим за медиите и да проверяваме информацията.',
      tip: 'Сравнете заглавия за едно и също събитие в две различни медии на английски.',
      w: [['📰', 'headline', 'заглавие'], ['🔎', 'source', 'източник'], ['🤥', 'fake news', 'фалшиви новини'], ['📱', 'influencer', 'инфлуенсър'], ['📢', 'advertisement', 'реклама'], ['✅', 'fact-check', 'проверка на факти']],
      p: [['🔎', 'Always check the source.', 'Винаги проверявай източника.']],
      rule: 'Полезни глаголи: report (съобщавам), claim (твърдя), confirm (потвърждавам).' },
    { id: 'formal-email', title: 'Writing a formal email', emoji: '📧', core: 'Граматика и лексика',
      intro: 'Dear Sir or Madam… I look forward to hearing from you. Официалното писмо на английски има свои устойчиви фрази.',
      tip: 'Напишете заедно истинско писмо на английски — например запитване до летен лагер или музей.',
      w: [['👋', 'Dear Sir or Madam,', 'Уважаеми господине/госпожо,'], ['✍️', 'I am writing to ask about…', 'Пиша, за да попитам за…'], ['🙏', 'I would be grateful if…', 'Ще съм благодарна, ако…'], ['📬', 'I look forward to hearing from you.', 'Очаквам отговора Ви.'], ['🖊️', 'Yours faithfully,', 'С уважение, (когато не знаем името)']],
      rule: 'Yours faithfully — когато не знаем името; Yours sincerely — когато знаем името (Dear Mr Smith). Без съкращения: I am, а не I’m.',
      extra: [['Знаем името (Dear Ms Brown). Завършваме с…', ['Yours sincerely,', 'Yours faithfully,', 'Love,'], 'Yours sincerely,']] }
  ];

  TOPICS.forEach((t, ti) => {
    const ws = t.w;
    const tasks = [];
    [0, 2, 4].filter((i) => i < ws.length).forEach((i, k) => {
      const [pic, en] = ws[i];
      const say = en.includes(' — ') ? en.split(' — ')[1] : en;
      const others = ws.filter((x) => x !== ws[i]);
      tasks.push({
        question: 'Чуй думата. Коя е картинката?',
        listen: { text: say },
        options: rotate([[pic, en], others[(k + 1) % others.length], others[(k + 3) % others.length]], k + ti).map(([p, e]) => ({ value: e, pic: p })),
        answer: en
      });
    });
    [1, 3].filter((i) => i < ws.length).forEach((i, k) => {
      const [, en, bg] = ws[i];
      const others = ws.filter((x) => x !== ws[i]).map((x) => x[1]);
      tasks.push({ question: `Как е на английски „${bg}“?`, options: rotate([en, others[k % others.length], others[(k + 2) % others.length]], k + ti + 1), answer: en });
    });
    if (t.p && t.p.length) {
      const [, en, bg] = t.p[0];
      tasks.push({ question: `Какво значи „${en}“?`, options: rotate([bg, ...(TOPICS[(ti + 1) % TOPICS.length].p || [[0, 0, 'Довиждане!']]).slice(0, 1).map((x) => x[2]), 'Благодаря!'], ti), answer: bg });
    }
    (t.extra || []).forEach(([q, o, a]) => tasks.push({ question: q, options: o, answer: a }));

    window.LESSONS[`h8-en-${t.id}`] = {
      stage: 'high', subject: 'lang', group: 8, core: 'Граматика и лексика', minutes: 15,
      title: t.title, emoji: t.emoji, intro: t.intro, parentTip: t.tip,
      sections: [
        { title: 'Words — думи', blocks: [{ type: 'say', text: 'Натисни картичката, за да чуеш думата на английски. Повтори я на глас.' }, words(ws)] },
        { title: t.p ? 'Phrases — изрази' : 'Remember — запомни', blocks: [...(t.p ? [words(t.p)] : []), { type: 'rule', text: t.rule }] }
      ],
      tasks
    };
  });
})();

// ---------- Информатика и ИТ ----------
window.LESSONS = window.LESSONS || {};

(function () {
  const EMO = /^(\p{Extended_Pictographic}[\u{FE0F}\u{200D}\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}]*)\s+(.+)$/u;
  const opt = (o) => { if (typeof o !== 'string') return o; const m = o.match(EMO); return m ? { value: m[2], pic: m[1] } : o; };
  const T = (question, options, answer, extra) => Object.assign({ question, options: options.map(opt), answer }, extra || {});
  const text = (t) => ({ type: 'text', text: t });
  const rule = (t, title) => ({ type: 'rule', text: t, title });
  const table = (head, rows, caption) => ({ type: 'table', head, rows, caption });
  const list = (items, ordered) => ({ type: 'list', items, ordered });
  const timeline = (items) => ({ type: 'timeline', items: items.map(([year, t, pic]) => ({ year, text: t, pic })) });
  const code = (lang, c) => ({ type: 'code', lang, code: c });
  const C = ['#e63946', '#1d4ed8', '#0f766e', '#b45309', '#7c3aed', '#be185d'];
  const cards = (items) => ({ type: 'cards', items: items.map(([pic, label, sub], i) => ({ pic, label, sub, color: C[i % C.length] })) });
  // d.s: [[заглавие, [блокове]], …]
  const make = (stage, group, minutes) => (subject) => (id, d) => {
    window.LESSONS[id] = {
      stage, subject, group, core: d.core, after: d.after, before: d.before, title: d.title, emoji: d.emoji, minutes: d.minutes || minutes,
      intro: d.intro, parentTip: d.tip, sections: d.s.map(([title, blocks]) => ({ title, blocks })), tasks: d.tasks
    };
  };
  const H = make('high', 8, 25);
  const inf = H('inf');
  const it = H('it');
  const PY = 'Програмиране на Python';
  const DT = 'Дигитални технологии';

  inf('h8-inf-nizove', {
    after: 'h8-inf-tsikli', core: PY, title: 'Python: низове (текст)', emoji: '🔤',
    intro: 'Низът е текст в кавички. Можем да намерим дължината му, да вземем отделна буква, да го обърнем или да го превърнем в главни букви.',
    tip: 'Предизвикателство: програма, която проверява дали дума е палиндром (чете се еднакво в двете посоки) — „капак“.',
    s: [['Операции', [code('python', 'ime = "Ая"\nprint(len(ime))        # 2\nprint(ime[0])          # А\nprint(ime.upper())     # АЯ\nprint("ха" * 3)        # хахаха\nprint("капак"[::-1])   # капак'),
      table(['Операция', 'Значение'], [['len(s)', 'дължина'], ['s[0]', 'първият символ (броим от 0)'], ['s[-1]', 'последният символ'], ['s.upper()', 'главни букви'], ['s[::-1]', 'обърнат низ']])]]],
    tasks: [T('len("Python") = ?', ['6', '5', '7'], '6'), T('"код"[0] = ?', ['к', 'о', 'д'], 'к'), T('"ха" * 3 = ?', ['хахаха', 'ха3', 'грешка'], 'хахаха'), T('"abc"[-1] = ?', ['c', 'a', 'b'], 'c'), T('От кой номер броим символите?', ['0', '1'], '0')]
  });

  inf('h8-inf-listi', {
    after: 'h8-inf-nizove', core: PY, title: 'Python: списъци', emoji: '📋',
    intro: 'Списъкът пази много стойности в една променлива: otsenki = [6, 5, 6, 4]. Можем да добавяме, махаме, сортираме и да обхождаме с цикъл.',
    tip: 'Направете списък с оценките на Ая и програма, която смята средния успех.',
    s: [['Пример', [code('python', 'otsenki = [6, 5, 6, 4]\notsenki.append(5)            # добавя 5 накрая\nprint(len(otsenki))          # 5\nprint(sum(otsenki) / len(otsenki))  # 5.2\nprint(max(otsenki))          # 6\nfor o in otsenki:\n    print(o)'),
      table(['Функция', 'Значение'], [['append(x)', 'добавя в края'], ['len(l)', 'брой елементи'], ['sum(l)', 'сбор'], ['max(l), min(l)', 'най-голям, най-малък'], ['sorted(l)', 'нов подреден списък']])]]],
    tasks: [T('l = [3, 1, 2]. len(l) = ?', ['3', '2', '6'], '3'), T('l = [3, 1, 2]. sum(l) = ?', ['6', '3', '312'], '6'), T('l = [3, 1, 2]. sorted(l) = ?', ['[1, 2, 3]', '[3, 2, 1]', '[3, 1, 2]'], '[1, 2, 3]'), T('Какво прави append?', ['добавя в края', 'изтрива'], 'добавя в края'), T('l = [6, 5, 6, 4]. max(l) = ?', ['6', '4', '21'], '6')]
  });

  inf('h8-inf-funktsii', {
    after: 'h8-inf-listi', core: PY, title: 'Python: функции', emoji: '🧰',
    intro: 'Функцията е именувано парче код, което можем да използваме много пъти. Тя получава стойности (параметри) и може да върне резултат с return.',
    tip: 'Добро правило: ако копирате един и същ код два пъти — направете функция.',
    s: [['Пример', [code('python', 'def litse(a, b):\n    return a * b\n\nprint(litse(3, 4))   # 12\nprint(litse(5, 5))   # 25'),
      rule('def — дефинира функция. Параметрите са в скобите. return връща резултата. Без return функцията връща None.')]]],
    tasks: [T('С коя дума създаваме функция?', ['def', 'func', 'return'], 'def'), T('litse(3, 4) връща…', ['12', '7', '34'], '12'), T('Какво прави return?', ['връща резултат', 'отпечатва'], 'връща резултат'), T('def dvoyno(x): return 2 * x. dvoyno(5) = ?', ['10', '7', '25'], '10'), T('Защо използваме функции?', ['за да не повтаряме код', 'за да е по-бавно'], 'за да не повтаряме код')]
  });

  inf('h8-inf-while', {
    after: 'h8-inf-funktsii', core: PY, title: 'Python: цикъл while', emoji: '🔁',
    intro: 'while повтаря, докато условието е вярно. Удобен е, когато не знаем предварително колко пъти ще повторим — например докато потребителят познае число.',
    tip: 'Напишете заедно играта „Познай числото“ — компютърът мисли число, Ая гадае, програмата казва „по-голямо“ или „по-малко“.',
    s: [['Пример', [code('python', 'n = 1\nwhile n < 100:\n    n = n * 2\nprint(n)   # 128'),
      rule('Внимание: ако условието никога не стане невярно, цикълът е безкраен. Винаги нещо в цикъла трябва да променя условието.')]]],
    tasks: [T('Колко отпечатва примерът (n се удвоява, докато е под 100)?', ['128', '100', '64'], '128'), T('Кога спира while?', ['когато условието стане невярно', 'след 10 повторения'], 'когато условието стане невярно'), T('Какво е безкраен цикъл?', ['цикъл, който никога не спира', 'много бърз цикъл'], 'цикъл, който никога не спира'), T('i = 0; while i < 3: i += 1. Колко е i накрая?', ['3', '2', '4'], '3'), T('Кога е удобен while?', ['когато не знаем броя повторения', 'никога'], 'когато не знаем броя повторения')]
  });

  inf('h8-inf-algoritmi', {
    after: 'h8-inf-while', core: PY, title: 'Алгоритми: търсене и сортиране', emoji: '🔍',
    intro: 'Алгоритъмът е точна последователност от стъпки. Два класически примера: търсене на най-голямото число и двоично търсене в подреден списък — като търсене на дума в речник.',
    tip: 'Играйте „Позная числото от 1 до 100“ с двоично търсене: винаги питате за средата. Ще стигнете до 7 въпроса!',
    s: [['Най-голямо число', [code('python', 'chisla = [4, 9, 2, 7]\nnay = chisla[0]\nfor c in chisla:\n    if c > nay:\n        nay = c\nprint(nay)   # 9')]],
    ['Двоично търсене', [list(['Списъкът е подреден.', 'Гледаме средния елемент.', 'Ако търсеното е по-малко — търсим в лявата половина, иначе — в дясната.', 'Повтаряме, докато го намерим.'], true), rule('За 1000 подредени числа двоичното търсене стига до отговор с не повече от 10 сравнения.')]]],
    tasks: [T('Какво е алгоритъм?', ['точна последователност от стъпки', 'вид компютър'], 'точна последователност от стъпки'), T('Двоичното търсене изисква списъкът да е…', ['подреден', 'празен'], 'подреден'), T('Колко въпроса стигат за число от 1 до 100 с двоично търсене?', ['7', '50', '100'], '7'), T('Най-голямото от [4, 9, 2, 7] е…', ['9', '7', '4'], '9'), T('Двоичното търсене гледа първо…', ['средата', 'началото'], 'средата')]
  });

  it('h8-it-mrezhi', {
    after: 'h8-it-kibersigurnost', core: DT, title: 'Как работи интернет', emoji: '🌐',
    intro: 'Интернет е мрежа от мрежи. Всяко устройство има IP адрес. Когато напишем адрес на сайт, DNS сървър го превежда до IP адрес, а данните пътуват на малки пакети.',
    tip: 'Покажете на Ая рутера у дома и обяснете: той е „пощальонът“ между домашната мрежа и интернет.',
    s: [['Понятия', [table(['Понятие', 'Значение'], [['IP адрес', '„адресът“ на устройството в мрежата'], ['DNS', '„телефонният указател“: превежда имена на сайтове в IP адреси'], ['рутер', 'насочва пакетите между мрежите'], ['пакет', 'малко парче от данните'], ['HTTPS', 'криптирана връзка (катинарчето в браузъра)']])]]],
    tasks: [T('Какво прави DNS?', ['превежда име на сайт в IP адрес', 'пази пароли'], 'превежда име на сайт в IP адрес'), T('Какво означава катинарчето (HTTPS)?', ['криптирана връзка', 'платен сайт'], 'криптирана връзка'), T('Как пътуват данните?', ['на пакети', 'наведнъж като един файл'], 'на пакети'), T('Какво е рутерът?', ['устройство, което насочва пакетите', 'принтер'], 'устройство, което насочва пакетите'), T('Интернет е…', ['мрежа от мрежи', 'един голям компютър'], 'мрежа от мрежи')]
  });

  it('h8-it-bazi-danni', {
    after: 'h8-it-mrezhi', core: DT, title: 'Бази данни', emoji: '🗄️',
    intro: 'Базата данни пази подредена информация в таблици. Всеки ред е запис (например един ученик), а всяка колона — поле (име, клас, оценка). Сайтове, банки и училища работят с бази данни.',
    tip: 'Направете таблица „Моите книги“ с полета: заглавие, автор, година, оценка. Това е малка база данни.',
    s: [['Понятия', [table(['Понятие', 'Пример'], [['таблица', 'Ученици'], ['запис (ред)', 'Ая, 8 „а“, 6'], ['поле (колона)', 'Име'], ['ключ', 'уникален номер на ученика'], ['заявка', '„покажи всички с оценка 6“']]),
      code('sql', 'SELECT ime FROM uchenitsi WHERE otsenka = 6;')]]],
    tasks: [T('Един ред в таблица е…', ['запис', 'поле'], 'запис'), T('Една колона е…', ['поле', 'запис'], 'поле'), T('Какво е ключ?', ['уникален идентификатор', 'парола'], 'уникален идентификатор'), T('Въпрос към базата данни е…', ['заявка', 'таблица'], 'заявка'), T('SELECT в SQL…', ['извлича данни', 'изтрива базата'], 'извлича данни')]
  });

  it('h8-it-izobrazheniya', {
    after: 'h8-it-bazi-danni', core: DT, title: 'Обработка на изображения: слоеве', emoji: '🖼️',
    intro: 'Програмите за обработка на снимки (GIMP, Photopea, Photoshop) работят със слоеве — като прозрачни листа един върху друг. Така можем да променяме част от картината, без да развалим останалото.',
    tip: 'Photopea е безплатна и работи в браузъра. Нека Ая направи колаж със слоеве.',
    s: [['Основни инструменти', [table(['Инструмент', 'За какво'], [['слой', 'отделна част от изображението'], ['изрязване (crop)', 'махаме излишното около снимката'], ['яркост и контраст', 'светлина и сила на цветовете'], ['маска', 'скрива част от слоя, без да я изтрива'], ['експорт', 'запазване като JPG или PNG']]),
      rule('Обработка с цел подвеждане (фалшиви снимки) е нечестна. Добре е да се отбелязва, когато снимка е силно променена.')]]],
    tasks: [T('Слоевете са като…', ['прозрачни листа един върху друг', 'папки'], 'прозрачни листа един върху друг'), T('Crop означава…', ['изрязване', 'оцветяване'], 'изрязване'), T('Маската…', ['скрива част, без да изтрива', 'изтрива завинаги'], 'скрива част, без да изтрива'), T('Коя програма е безплатна и в браузъра?', ['Photopea', 'Word'], 'Photopea'), T('Честно ли е да публикуваме подвеждаща обработена снимка?', ['не', 'да'], 'не')]
  });

  it('h8-it-ii', {
    after: 'h8-it-izobrazheniya', core: DT, title: 'Изкуствен интелект — отговорно', emoji: '🤖',
    intro: 'Изкуственият интелект (ИИ) се учи от огромно количество данни. Чатботовете могат да помагат с обяснения и идеи, но понякога грешат уверено. Затова винаги проверяваме важното.',
    tip: 'Добро правило: ИИ — за обяснения и упражнения, не за да пише домашното вместо Ая. Питайте: „Можеш ли да го обясниш със свои думи?“',
    s: [['Добри и лоши употреби', [table(['Добре', 'Не е добре'], [['обяснение на трудна тема', 'да предадеш текста на ИИ като свой'], ['упражнителни въпроси', 'да вярваш без проверка'], ['идеи за проект', 'да споделяш лични данни'], ['превод и проверка на правопис', 'дълбоки фалшификати (deepfake) на хора']]),
      rule('ИИ може да „халюцинира“ — да измисли факт, който звучи убедително. Проверявайте в надежден източник.')]]],
    tasks: [T('Може ли ИИ да сгреши уверено?', ['да', 'не'], 'да'), T('Как наричаме измислен от ИИ факт?', ['халюцинация', 'вирус'], 'халюцинация'), T('Добра употреба на ИИ е…', ['обяснение на трудна тема', 'да пише домашното вместо мен'], 'обяснение на трудна тема'), T('Споделяме ли лични данни с чатбот?', ['не', 'да'], 'не'), T('Deepfake е…', ['фалшиво видео или снимка на човек', 'вид парола'], 'фалшиво видео или снимка на човек')]
  });
})();
