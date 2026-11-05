// 9. клас: Английски език (B1–B2), Информатика (Python), Информационни технологии.
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'future-forms', title: 'Future Continuous & Future Perfect', emoji: '🔮', core: 'Граматика и лексика',
      intro: 'This time tomorrow I will be flying to London. By 2030 I will have finished university. С тези времена говорим за действие в процес в бъдещ момент и за действие, завършено до бъдещ момент.',
      tip: 'Представете си заедно бъдещето: „In ten years, I will be living… I will have learned…“',
      w: [['✈️', 'This time tomorrow I’ll be flying.', 'Утре по това време ще летя.'], ['🎓', 'By 2030 I’ll have graduated.', 'До 2030 ще съм завършила.'], ['📚', 'She’ll be studying all evening.', 'Тя ще учи цялата вечер.'], ['✅', 'We’ll have finished by six.', 'Ще сме свършили до шест.']],
      rule: 'Future Continuous: will be + -ing. Future Perfect: will have + 3 форма. „By“ (до) често върви с Future Perfect.',
      extra: [['„By next June, I ___ my exams.“', ['will have finished', 'will be finishing', 'finish'], 'will have finished']] },
    { id: 'non-defining', title: 'Non-defining relative clauses — which, whose', emoji: '🔗', core: 'Граматика и лексика',
      intro: 'My sister, who lives in Varna, is a doctor. Пояснителните подчинени изречения добавят допълнителна информация и се отделят със запетаи. В тях не се използва „that“.',
      tip: 'Опишете членовете на семейството с „…, who…, …“ — по едно изречение за всеки.',
      w: [['👩‍⚕️', 'My sister, who lives in Varna, is a doctor.', 'Сестра ми, която живее във Варна, е лекарка.'], ['🏛️', 'Plovdiv, which is very old, is beautiful.', 'Пловдив, който е много стар, е красив.'], ['🧑', 'The boy whose bike was stolen is sad.', 'Момчето, чието колело беше откраднато, е тъжно.'], ['📍', 'Sofia, where I was born, is the capital.', 'София, където съм родена, е столицата.']],
      rule: 'who — за хора; which — за неща; whose — чий; where — къде. В пояснителните изречения: запетаи и без that.',
      extra: [['„The girl ___ phone rang left the room.“', ['whose', 'who', 'which'], 'whose']] },
    { id: 'verb-patterns', title: 'Stop doing or stop to do? — смяна на смисъла', emoji: '🔀', core: 'Граматика и лексика',
      intro: 'I stopped smoking. (Отказах цигарите.) I stopped to smoke. (Спрях, за да запаля.) Някои глаголи променят смисъла си според това дали след тях идва -ing или to.',
      tip: 'Помнете с примери от живота: „Remember to lock the door!“ (не забравяй) и „I remember locking it“ (спомням си, че заключих).',
      w: [['🚭', 'I stopped smoking.', 'Отказах пушенето.'], ['🚶', 'I stopped to buy water.', 'Спрях, за да купя вода.'], ['🔑', 'Remember to lock the door.', 'Не забравяй да заключиш.'], ['💭', 'I remember meeting her.', 'Спомням си, че я срещнах.'], ['🧪', 'Try adding salt.', 'Опитай да добавиш сол (като експеримент).']],
      rule: 'stop / remember / forget / try + -ing ≠ + to. -ing — действието само; to — целта или задължението.',
      extra: [['„Don’t forget ___ the lights off.“', ['to turn', 'turning'], 'to turn']] },
    { id: 'unless', title: 'Unless, as long as, provided that', emoji: '🤝', core: 'Граматика и лексика',
      intro: 'You won’t pass unless you study. You can go out as long as you are back by ten. Тези съюзи изразяват условие по различен начин.',
      tip: 'Договорете „правила на къщата“ на английски: „You can play games as long as…“',
      w: [['📚', 'You won’t pass unless you study.', 'Няма да изкараш, ако не учиш.'], ['🕙', 'You can go as long as you’re back by ten.', 'Можеш да отидеш, стига да се върнеш до десет.'], ['✅', 'I’ll help, provided that you ask nicely.', 'Ще помогна, при условие че помолиш учтиво.'], ['☔', 'Take an umbrella in case it rains.', 'Вземи чадър, в случай че завали.']],
      rule: 'unless = if … not. as long as / provided (that) = при условие че. in case = за всеки случай.',
      extra: [['„I won’t go ___ you come with me.“', ['unless', 'as long as'], 'unless']] },
    { id: 'reported-questions', title: 'Reported questions — she asked if…', emoji: '❓', core: 'Граматика и лексика',
      intro: '„Where do you live?“ → She asked me where I lived. В непрекия въпрос редът на думите е като в твърдение и няма въпросителен знак.',
      tip: 'След разговор с учител или лекар на английски (в игра) Ая разказва: „He asked me if…“',
      w: [['🏠', 'She asked where I lived.', 'Тя попита къде живея.'], ['❔', 'He asked if I was hungry.', 'Той попита дали съм гладна.'], ['🕐', 'They asked what time it was.', 'Попитаха колко е часът.'], ['📞', 'I asked whether she could help.', 'Попитах дали може да помогне.']],
      rule: 'Въпроси с въпросителна дума: asked + where/what + твърдение. Въпроси с да/не: asked + if/whether. Без do/does/did и без „?“.',
      extra: [['„Do you like tea?“ → She asked ___ I liked tea.', ['if', 'what', 'do'], 'if'], ['Правилно е:', ['He asked where I lived.', 'He asked where did I live.'], 'He asked where I lived.']] },
    { id: 'articles', title: 'A, an, the or nothing? — членовете', emoji: '🅰️', core: 'Граматика и лексика',
      intro: 'I saw a dog. The dog was black. Dogs are friendly. Членовете в английски са трудни за българите, защото правилата са различни от нашите.',
      tip: 'Четете кратък текст на английски и подчертавайте всеки член с различен цвят — бързо се вижда системата.',
      w: [['🐕', 'I saw a dog.', 'Видях (едно) куче.'], ['⚫', 'The dog was black.', 'Кучето беше черно.'], ['🐾', 'Dogs are friendly.', 'Кучетата са дружелюбни (по принцип).'], ['🌞', 'the sun, the Danube', 'слънцето, Дунав'], ['🇧🇬', 'Bulgaria, Mount Musala', 'България, връх Мусала (без член)']],
      rule: 'a/an — нещо ново, едно от много. the — познато или единствено (the sun). Без член — общо значение в мн. ч., повечето държави и градове.',
      extra: [['„___ Moon goes round the Earth.“', ['The', 'A', '—'], 'The'], ['„I live in ___ Bulgaria.“', ['—', 'the', 'a'], '—']] },
    { id: 'the-more', title: 'The more…, the better — сравнения', emoji: '📈', core: 'Граматика и лексика',
      intro: 'The more you read, the more you learn. It’s far better than before. Напредналите сравнения правят речта по-богата.',
      tip: 'Измислете заедно поговорки „The more…, the…“ за семейството.',
      w: [['📖', 'The more you read, the more you learn.', 'Колкото повече четеш, толкова повече научаваш.'], ['🎉', 'The sooner, the better.', 'Колкото по-скоро, толкова по-добре.'], ['🚀', 'far better', 'много по-добър'], ['🤏', 'a bit cheaper', 'малко по-евтин'], ['🔁', 'not as big as', 'не толкова голям като']],
      rule: 'the + сравнителна степен …, the + сравнителна степен. Усилване: much / far / a lot + сравнителна степен.',
      extra: [['„The harder you work, ___ you get.“', ['the better', 'better', 'the best'], 'the better']] },
    { id: 'health-b1', title: 'Health and lifestyle', emoji: '🥦', core: 'Граматика и лексика',
      intro: 'balanced diet, mental health, screen time… Думи за здравето и начина на живот.',
      tip: 'Направете на английски „седмичен дневник на здравето“: сън, движение, екранно време.',
      w: [['🥗', 'balanced diet', 'балансирано хранене'], ['🧠', 'mental health', 'психично здраве'], ['📱', 'screen time', 'време пред екрана'], ['😴', 'get enough sleep', 'наспивам се'], ['🏃', 'stay active', 'поддържам активност'], ['😰', 'stress', 'стрес']],
      p: [['💬', 'It’s OK to ask for help.', 'Нормално е да поискаш помощ.']],
      rule: 'Полезни изрази: cut down on (намалявам), give up (отказвам), take up (започвам ново занимание).' },
    { id: 'education', title: 'Education and university', emoji: '🎓', core: 'Граматика и лексика',
      intro: 'degree, scholarship, apply, deadline… Думи, които ще потрябват при кандидатстване в университет — в България или в чужбина.',
      tip: 'Разгледайте заедно сайта на чуждестранен университет на английски и намерете условията за прием.',
      w: [['🎓', 'degree', 'степен (бакалавър и др.)'], ['💶', 'scholarship', 'стипендия'], ['📝', 'apply', 'кандидатствам'], ['⏰', 'deadline', 'краен срок'], ['🏫', 'tuition fee', 'такса за обучение'], ['📜', 'certificate', 'сертификат']],
      p: [['📝', 'I’d like to apply for a scholarship.', 'Бих искала да кандидатствам за стипендия.']],
      rule: 'major in — специализирам (US); a gap year — година почивка между училище и университет.' },
    { id: 'science-tech', title: 'Science and technology', emoji: '🔬', core: 'Граматика и лексика',
      intro: 'research, experiment, discovery, artificial intelligence… Думи за наука и технологии.',
      tip: 'Гледайте кратка научна лекция на английски (има много за ученици) и запишете 5 нови думи.',
      w: [['🔬', 'research', 'изследване'], ['🧪', 'experiment', 'опит, експеримент'], ['💡', 'discovery', 'откритие'], ['🤖', 'artificial intelligence', 'изкуствен интелект'], ['📊', 'data', 'данни'], ['🧬', 'gene', 'ген']],
      p: [['💡', 'This discovery changed the world.', 'Това откритие промени света.']],
      rule: 'carry out research / an experiment — провеждам изследване / опит; make a discovery — правя откритие.' },
    { id: 'opinion-essay', title: 'Writing an opinion essay', emoji: '✍️', core: 'Граматика и лексика',
      intro: 'Есето с мнение на английски има ясна структура: увод с теза, аргументи в отделни абзаци, контрааргумент и заключение.',
      tip: 'Нека Ая напише есе от 150 думи на тема „Should mobile phones be banned at school?“ и използва поне 5 от изразите.',
      w: [['💬', 'In my opinion,', 'Според мен'], ['1️⃣', 'Firstly,', 'Първо'], ['➕', 'Furthermore,', 'Освен това'], ['🔄', 'On the other hand,', 'От друга страна'], ['🏁', 'To sum up,', 'В заключение']],
      rule: 'Структура: увод (теза) → 2 абзаца с аргументи → контрааргумент → заключение. Формален стил, без съкращения.',
      extra: [['Кой израз въвежда контрааргумент?', ['On the other hand,', 'Firstly,', 'To sum up,'], 'On the other hand,']] }
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

    window.LESSONS[`h9-en-${t.id}`] = {
      stage: 'high', subject: 'lang', group: 9, core: 'Граматика и лексика', minutes: 15,
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
  const H = make('high', 9, 25);
  const inf = H('inf');
  const it = H('it');
  const PY = 'Програмиране на Python';
  const DT = 'Дигитални технологии';

  inf('h9-inf-rechnitsi', {
    after: 'h9-inf-funktsii', core: PY, title: 'Python: речници', emoji: '📖',
    intro: 'Речникът (dict) пази двойки ключ → стойност, като истински речник: дума → значение. С него лесно намираме стойност по ключ.',
    tip: 'Направете речник „предмет → оценка“ за срока на Ая и програма, която показва средния успех.',
    s: [['Пример', [code('python', 'otsenki = {"математика": 6, "история": 5}\notsenki["химия"] = 6          # добавяне\nprint(otsenki["история"])       # 5\nfor predmet, o in otsenki.items():\n    print(predmet, o)\nprint(len(otsenki))             # 3'),
      rule('Ключовете в речника са уникални. Достъп по несъществуващ ключ дава грешка — проверявайте с „if ключ in речник“.')]]],
    tasks: [T('otsenki["история"] = ?', ['5', '6', 'история'], '5'), T('Какво пази речникът?', ['двойки ключ → стойност', 'само числа'], 'двойки ключ → стойност'), T('Могат ли ключовете да се повтарят?', ['не', 'да'], 'не'), T('След добавяне на „химия“ len(otsenki) = ?', ['3', '2', '6'], '3'), T('Как проверяваме дали ключ съществува?', ['if ключ in речник', 'if речник == ключ'], 'if ключ in речник')]
  });

  inf('h9-inf-faylove', {
    after: 'h9-inf-rechnitsi', core: PY, title: 'Python: работа с файлове', emoji: '📁',
    intro: 'Програмите могат да четат и записват файлове. Така данните се пазят и след като програмата приключи.',
    tip: 'Направете „дневник“: програма, която добавя ред с днешната дата и настроение във файл.',
    s: [['Пример', [code('python', 'with open("dnevnik.txt", "a", encoding="utf-8") as f:\n    f.write("Днес беше хубав ден\\n")\n\nwith open("dnevnik.txt", encoding="utf-8") as f:\n    for red in f:\n        print(red.strip())'),
      table(['Режим', 'Значение'], [['"r"', 'четене (по подразбиране)'], ['"w"', 'запис — изтрива старото съдържание!'], ['"a"', 'добавяне в края']]),
      rule('with затваря файла автоматично. encoding="utf-8" е важен за кирилицата.')]]],
    tasks: [T('Кой режим добавя в края на файла?', ['"a"', '"w"', '"r"'], '"a"'), T('Кой режим изтрива старото съдържание?', ['"w"', '"a"'], '"w"'), T('Какво прави with?', ['затваря файла автоматично', 'изтрива файла'], 'затваря файла автоматично'), T('Защо пишем encoding="utf-8"?', ['за кирилицата', 'за скорост'], 'за кирилицата'), T('Режимът по подразбиране е…', ['четене', 'запис'], 'четене')]
  });

  inf('h9-inf-greshki', {
    after: 'h9-inf-faylove', core: PY, title: 'Python: грешки и try/except', emoji: '🐞',
    intro: 'Когато потребителят въведе дума вместо число или делим на нула, програмата „гърми“. С try/except можем да хванем грешката и да реагираме спокойно.',
    tip: 'Четенето на съобщенията за грешки е умение. Нека Ая чете последния ред на грешката — там е най-важното.',
    s: [['Пример', [code('python', 'try:\n    n = int(input("Число: "))\n    print(100 / n)\nexcept ValueError:\n    print("Това не е число!")\nexcept ZeroDivisionError:\n    print("На нула не се дели!")'),
      table(['Грешка', 'Кога'], [['ValueError', 'int("абв")'], ['ZeroDivisionError', 'деление на 0'], ['IndexError', 'несъществуващ индекс в списък'], ['KeyError', 'несъществуващ ключ в речник'], ['SyntaxError', 'грешно написан код']])]]],
    tasks: [T('Каква грешка дава int("абв")?', ['ValueError', 'KeyError'], 'ValueError'), T('Каква грешка дава 5 / 0?', ['ZeroDivisionError', 'IndexError'], 'ZeroDivisionError'), T('Какво прави try/except?', ['хваща грешки', 'ускорява програмата'], 'хваща грешки'), T('Къде е най-важната информация в съобщението за грешка?', ['на последния ред', 'на първия ред'], 'на последния ред'), T('[1, 2][5] дава…', ['IndexError', 'ValueError'], 'IndexError')]
  });

  inf('h9-inf-sortirane', {
    after: 'h9-inf-greshki', core: PY, title: 'Алгоритми за сортиране', emoji: '📊',
    intro: 'Сортирането подрежда данни. Методът на мехурчето сравнява съседни елементи и ги разменя, ако са в грешен ред. Той е прост, но бавен. Python има вградени, много бързи sort() и sorted().',
    tip: 'Подредете 6 карти за игра по метода на мехурчето на масата — алгоритъмът става видим.',
    s: [['Метод на мехурчето', [code('python', 'a = [5, 2, 4, 1]\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)   # [1, 2, 4, 5]'),
      rule('За n елемента методът на мехурчето прави около n² сравнения. За милион елемента това е твърде бавно — затова използваме по-умни алгоритми (бързо сортиране, сливане).')]]],
    tasks: [T('Какво сравнява методът на мехурчето?', ['съседни елементи', 'първия и последния'], 'съседни елементи'), T('sorted([3, 1, 2]) = ?', ['[1, 2, 3]', '[3, 2, 1]'], '[1, 2, 3]'), T('Бърз ли е методът на мехурчето за много данни?', ['не', 'да'], 'не'), T('Колко приблизително сравнения прави за n елемента?', ['около n²', 'около n'], 'около n²'), T('Как се разменят две стойности в Python?', ['a, b = b, a', 'a = b'], 'a, b = b, a')]
  });

  it('h9-it-css', {
    after: 'h9-it-bazi-danni', core: DT, title: 'Уеб дизайн: HTML и CSS', emoji: '🎨',
    intro: 'HTML дава структурата на страницата, а CSS — външния вид: цветове, шрифтове, разположение. Добрият сайт изглежда добре и на телефон (адаптивен дизайн).',
    tip: 'Нека Ая направи личен сайт-портфолио с HTML и CSS и го публикува безплатно (например в GitHub Pages — като този сайт!).',
    s: [['Пример', [code('css', 'body {\n  font-family: sans-serif;\n  background: #fdf6e3;\n}\nh1 {\n  color: #1d4ed8;\n  text-align: center;\n}\n@media (max-width: 600px) {\n  h1 { font-size: 1.5rem; }\n}'),
      table(['Свойство', 'Значение'], [['color', 'цвят на текста'], ['background', 'фон'], ['font-size', 'размер на шрифта'], ['margin / padding', 'отстояния отвън / отвътре'], ['@media', 'правила за различни размери на екрана']])]]],
    tasks: [T('Какво прави CSS?', ['външния вид', 'структурата'], 'външния вид'), T('Какво прави HTML?', ['структурата', 'базата данни'], 'структурата'), T('Кое свойство задава цвета на текста?', ['color', 'background'], 'color'), T('С какво правим сайта удобен за телефон?', ['@media', 'print'], '@media'), T('Отстоянието отвътре се задава с…', ['padding', 'margin'], 'padding')]
  });

  it('h9-it-analiz', {
    after: 'h9-it-css', core: DT, title: 'Анализ на данни в таблици', emoji: '📈',
    intro: 'Електронните таблици могат да анализират хиляди редове. Условното форматиране оцветява важното, функциите COUNTIF и SUMIF броят и сумират по условие, а обобщаващата таблица (pivot) групира данните.',
    tip: 'Запишете семейните разходи за месец и направете обобщаваща таблица по категории.',
    s: [['Инструменти', [table(['Инструмент', 'Пример'], [['COUNTIF', '=COUNTIF(C2:C30;6) — брой шестици'], ['SUMIF', '=SUMIF(A2:A50;"храна";B2:B50) — разходи за храна'], ['условно форматиране', 'оцветява оценки под 4 в червено'], ['обобщаваща таблица', 'суми по категория и месец'], ['филтър', 'показва само избраните редове']])]]],
    tasks: [T('Коя функция брои по условие?', ['COUNTIF', 'SUM'], 'COUNTIF'), T('Коя функция сумира по условие?', ['SUMIF', 'MAX'], 'SUMIF'), T('Какво прави условното форматиране?', ['оцветява по условие', 'изтрива данни'], 'оцветява по условие'), T('Обобщаващата таблица…', ['групира данните', 'рисува картина'], 'групира данните'), T('=COUNTIF(C2:C30;6) брои…', ['шестиците', 'сбора'], 'шестиците')]
  });

  it('h9-it-video', {
    after: 'h9-it-analiz', core: DT, title: 'Видео монтаж', emoji: '🎬',
    intro: 'Видео монтажът подрежда кадри в история. Основните действия са рязане, подреждане, преходи, звук и надписи. Безплатни програми като Shotcut, DaVinci Resolve или CapCut са достатъчни за начало.',
    tip: 'Заснемете семейно 1-минутно видео „Ден от живота ни“ и го монтирайте заедно.',
    s: [['Основни понятия', [table(['Понятие', 'Значение'], [['клип', 'отделен заснет кадър'], ['времева линия', 'мястото, където се подреждат клиповете'], ['преход', 'плавно преминаване между клипове'], ['кадрова честота (fps)', 'колко кадъра в секунда (обикновено 24–60)'], ['експорт', 'запазване на готовото видео (най-често MP4)']]),
      rule('Музиката и чуждите кадри са защитени от авторско право — ползвайте свободни или лицензирани.')]]],
    tasks: [T('Къде се подреждат клиповете?', ['на времевата линия', 'в папка'], 'на времевата линия'), T('Какво е fps?', ['кадри в секунда', 'размер на файла'], 'кадри в секунда'), T('Най-често видеото се експортира като…', ['MP4', 'TXT'], 'MP4'), T('Можем ли да ползваме всяка песен без разрешение?', ['не', 'да'], 'не'), T('Плавното преминаване между клипове е…', ['преход', 'експорт'], 'преход')]
  });

  it('h9-it-litsenzi', {
    after: 'h9-it-video', core: DT, title: 'Авторско право и Creative Commons', emoji: '©️',
    intro: 'Всяко творение — текст, снимка, музика, код — е защитено от авторско право. Лицензите Creative Commons позволяват на авторите да разрешат употреба при определени условия.',
    tip: 'При търсене на снимки за реферат използвайте филтъра „лиценз“ или сайтове със свободни снимки и винаги посочвайте автора.',
    s: [['Лицензи CC', [table(['Символ', 'Значение'], [['BY', 'посочи автора'], ['SA', 'споделяй при същия лиценз'], ['NC', 'без търговска цел'], ['ND', 'без промени'], ['CC0', 'обществено достояние — свободно за всичко']]),
      rule('В България авторското право обикновено изтича 70 години след смъртта на автора. След това творбата е обществено достояние.')]]],
    tasks: [T('Какво значи BY?', ['посочи автора', 'купи'], 'посочи автора'), T('Какво значи NC?', ['без търговска цел', 'без цвят'], 'без търговска цел'), T('CC0 означава…', ['свободно за всичко', 'забранено'], 'свободно за всичко'), T('След колко години от смъртта на автора обикновено изтича авторското право?', ['70', '10', '200'], '70'), T('Защитена ли е снимка от интернет по подразбиране?', ['да', 'не'], 'да')]
  });
})();
