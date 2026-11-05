// 10. клас: Английски език (B2), Информатика (Python), Информационни технологии.
// Всеки урок: думи с картинки (четат се на английски), изрази, задачи със слушане и превод.
window.LESSONS = window.LESSONS || {};

(function () {
  const EN = { lang: 'en-GB', rate: 0.8 };
  const C = ['#ff8fb1', '#5ec8f2', '#ffd23f', '#7bdcb5', '#c38bff', '#ffb84d'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: C[i % C.length] })) });
  const rotate = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

  const TOPICS = [
    { id: 'modal-perfect', title: 'Should have, might have — минали предположения', emoji: '🤔', core: 'Граматика и лексика',
      intro: 'I should have studied more. She might have missed the bus. С модален глагол + have + 3 форма говорим за минали съжаления и предположения.',
      tip: 'След мач или изпит анализирайте на английски: „We should have…, we could have…“',
      w: [['📚', 'I should have studied more.', 'Трябваше да уча повече.'], ['🚌', 'She might have missed the bus.', 'Може да е изпуснала автобуса.'], ['🔑', 'He must have lost his keys.', 'Сигурно е загубил ключовете си.'], ['🚫', 'You can’t have seen him — he’s abroad.', 'Не може да си го видял — той е в чужбина.'], ['🙌', 'You could have told me!', 'Можеше да ми кажеш!']],
      rule: 'should have — съжаление/упрек; must have — почти сигурно; might/could have — възможно; can’t have — невъзможно.',
      extra: [['Почти сигурни сме: „He ___ forgotten.“', ['must have', 'should have', 'can’t have'], 'must have']] },
    { id: 'mixed-conditionals', title: 'Mixed conditionals', emoji: '🔀', core: 'Граматика и лексика',
      intro: 'If I had studied medicine, I would be a doctor now. Смесените условни изречения свързват минало условие с настоящ резултат (или обратното).',
      tip: 'Помислете за решение от миналото и говорете на английски как би бил днешният ден иначе.',
      w: [['🩺', 'If I had studied medicine, I would be a doctor now.', 'Ако бях учила медицина, сега щях да съм лекарка.'], ['🌍', 'If she spoke English, she would have got the job.', 'Ако говореше английски, щеше да получи работата.'], ['⏰', 'If I hadn’t missed the train, I would be home now.', 'Ако не бях изпуснала влака, сега щях да съм вкъщи.'], ['🧳', 'If I were braver, I would have gone abroad.', 'Ако бях по-смела, щях да замина в чужбина.']],
      rule: 'Минало условие → настоящ резултат: If + Past Perfect, would + глагол. Постоянна черта → минал резултат: If + Past Simple, would have + 3 форма.',
      extra: [['„If I ___ harder last year, I would be at university now.“', ['had worked', 'worked', 'would work'], 'had worked']] },
    { id: 'passive-reporting', title: 'He is said to… — безлични изрази', emoji: '🗞️', core: 'Граматика и лексика',
      intro: 'He is said to be very rich. It is believed that the castle is haunted. В новините често казваме какво „се твърди“, без да посочим кой.',
      tip: 'Търсете в английски новини изрази „is said to“, „is believed to“, „is thought to“.',
      w: [['💰', 'He is said to be very rich.', 'Говори се, че е много богат.'], ['🏰', 'It is believed that the castle is haunted.', 'Смята се, че в замъка има духове.'], ['🧪', 'The drug is thought to be safe.', 'Смята се, че лекарството е безопасно.'], ['🎨', 'The painting is known to be a fake.', 'Известно е, че картината е фалшификат.']],
      rule: 'Subject + is said / believed / thought / known + to + глагол. Или: It is said / believed that…',
      extra: [['„She is believed ___ in Paris.“', ['to live', 'living', 'lives'], 'to live']] },
    { id: 'cleft', title: 'It was… that — подчертаване', emoji: '🔦', core: 'Граматика и лексика',
      intro: 'It was Aya who won the prize. What I need is a holiday. С тези конструкции подчертаваме важното в изречението.',
      tip: 'Поправяйте се с подчертаване: „It wasn’t me who broke it — it was the cat!“',
      w: [['🏆', 'It was Aya who won the prize.', 'Ая беше тази, която спечели наградата.'], ['🏖️', 'What I need is a holiday.', 'От каквото имам нужда, е почивка.'], ['📅', 'It was in 2007 that Bulgaria joined the EU.', 'През 2007 г. България влезе в ЕС.'], ['🐈', 'It was the cat that broke the vase.', 'Котката счупи вазата (не аз).']],
      rule: 'It is/was + подчертаната част + who/that + останалото. What + подлог + глагол + is/was + подчертаното.',
      extra: [['„___ I love most is music.“', ['What', 'That', 'Which'], 'What']] },
    { id: 'inversion', title: 'Never have I… — инверсия', emoji: '🔄', core: 'Граматика и лексика',
      intro: 'Never have I seen such a beautiful place! Not only is she smart, but she is also kind. В официалния и емоционалния език отрицателните думи в началото обръщат реда.',
      tip: 'Използвайте инверсия в есе на английски — впечатлява изпитващите на сертификатните изпити.',
      w: [['🏞️', 'Never have I seen such beauty.', 'Никога не съм виждала такава красота.'], ['🌟', 'Not only is she smart, but also kind.', 'Тя е не само умна, но и мила.'], ['⏳', 'Hardly had I arrived when it started raining.', 'Едва бях пристигнала, когато заваля.'], ['🚫', 'Under no circumstances should you open it.', 'При никакви обстоятелства не го отваряй.']],
      rule: 'Never / Rarely / Not only / Hardly / Under no circumstances + спомагателен глагол + подлог + глагол.',
      extra: [['„Never ___ such a mess!“', ['have I seen', 'I have seen'], 'have I seen']] },
    { id: 'participle', title: 'Participle clauses — съкращаване на изречения', emoji: '✂️', core: 'Граматика и лексика',
      intro: 'Walking home, I saw a fox. Having finished my homework, I went out. С причастия можем да съкратим две изречения в едно.',
      tip: 'Пренапишете два прости реда от дневник на английски в едно изречение с причастие.',
      w: [['🦊', 'Walking home, I saw a fox.', 'Докато вървях към вкъщи, видях лисица.'], ['✅', 'Having finished, I went out.', 'След като свърших, излязох.'], ['📖', 'Written in 1890, the novel is still popular.', 'Написан през 1890 г., романът е още популярен.'], ['😴', 'Feeling tired, she went to bed.', 'Понеже беше уморена, си легна.']],
      rule: '-ing — едновременно действие или причина. Having + 3 форма — предходно действие. 3 форма — страдателно значение.',
      extra: [['„___ the email, I closed my laptop.“', ['Having sent', 'Sent', 'Sending had'], 'Having sent']] },
    { id: 'money', title: 'Money and the economy', emoji: '💶', core: 'Граматика и лексика',
      intro: 'budget, loan, interest rate, inflation… Думи за пари, банки и икономика — полезни и за новините, и за собствения бюджет.',
      tip: 'Направете бюджет за ваканция на английски — с income, expenses и savings.',
      w: [['📊', 'budget', 'бюджет'], ['🏦', 'loan', 'заем, кредит'], ['📈', 'interest rate', 'лихвен процент'], ['🎈', 'inflation', 'инфлация'], ['💰', 'savings', 'спестявания'], ['🧾', 'tax', 'данък']],
      p: [['💳', 'I can’t afford it.', 'Не мога да си го позволя.']],
      rule: 'afford — мога да си позволя; borrow — вземам назаем; lend — давам назаем.' },
    { id: 'law', title: 'Crime and the law', emoji: '⚖️', core: 'Граматика и лексика',
      intro: 'court, judge, witness, evidence… Думи за закона и правосъдието.',
      tip: 'Гледайте детективски сериал на английски и записвайте термините.',
      w: [['🏛️', 'court', 'съд'], ['👨‍⚖️', 'judge', 'съдия'], ['👁️', 'witness', 'свидетел'], ['🔍', 'evidence', 'доказателство'], ['🚓', 'arrest', 'арестувам'], ['🔐', 'sentence', 'присъда']],
      p: [['⚖️', 'Everyone is innocent until proven guilty.', 'Всеки е невинен до доказване на противното.']],
      rule: 'commit a crime — извършвам престъпление; be found guilty — обявен за виновен.' },
    { id: 'idioms', title: 'Common idioms — идиоми', emoji: '🗯️', core: 'Граматика и лексика',
      intro: 'It’s a piece of cake! Break a leg! Идиомите имат значение, различно от думите в тях. Те правят езика жив.',
      tip: 'Учете по един идиом седмично и го използвайте поне три пъти.',
      w: [['🍰', 'a piece of cake', 'много лесно'], ['🦵', 'break a leg', 'успех (преди представление)'], ['🌧️', 'under the weather', 'неразположен'], ['🐱', 'let the cat out of the bag', 'издавам тайна'], ['❄️', 'break the ice', 'разчупвам леда'], ['💸', 'cost an arm and a leg', 'струва цяло състояние']],
      rule: 'Идиомите не се превеждат дума по дума. „Under the weather“ няма нищо общо с времето.',
      extra: [['„The test was a piece of cake.“ означава…', ['тестът беше лесен', 'имаше торта'], 'тестът беше лесен']] },
    { id: 'review-writing', title: 'Writing a review', emoji: '⭐', core: 'Граматика и лексика',
      intro: 'Ревюто представя мнение за книга, филм, ресторант или продукт. То описва, оценява и препоръчва.',
      tip: 'След всеки гледан филм нека Ая напише кратко ревю на английски (100 думи) за „семейния сайт за филми“.',
      w: [['🎬', 'The film is set in…', 'Действието се развива в…'], ['🎭', 'The acting is superb.', 'Актьорската игра е отлична.'], ['👎', 'The plot is predictable.', 'Сюжетът е предвидим.'], ['👍', 'I would highly recommend it.', 'Горещо го препоръчвам.'], ['⭐', 'It’s a must-see.', 'Задължително за гледане.']],
      rule: 'Структура: заглавие → увод (какво и къде) → описание → оценка (плюсове и минуси) → препоръка.',
      extra: [['Кой израз е препоръка?', ['I would highly recommend it.', 'The plot is predictable.'], 'I would highly recommend it.']] }
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

    window.LESSONS[`h10-en-${t.id}`] = {
      stage: 'high', subject: 'lang', group: 10, core: 'Граматика и лексика', minutes: 15,
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
  const H = make('high', 10, 25);
  const inf = H('inf');
  const it = H('it');
  const PY = 'Програмиране на Python';
  const DT = 'Дигитални технологии';

  inf('h10-inf-rekursiya', {
    after: 'h10-inf-tarsene-sortirane', core: PY, title: 'Рекурсия', emoji: '🪆',
    intro: 'Рекурсивната функция извиква самата себе си с по-малка задача, докато стигне до най-простия случай (дъно). Като матрьошка: всяка съдържа по-малка, докато стигнем до най-малката.',
    tip: 'Покажете матрьошка и обяснете: „Отвори, докато вътре няма нищо“ — това е рекурсия с дъно.',
    s: [['Пример: факториел', [code('python', 'def fact(n):\n    if n <= 1:        # дъно\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(5))   # 120'),
      rule('Всяка рекурсия трябва да има дъно — иначе функцията се вика безкрайно и програмата спира с грешка.')]]],
    tasks: [T('fact(4) = ?', ['24', '10', '16'], '24'), T('Какво е „дъно“ на рекурсията?', ['най-простият случай, който спира извикванията', 'последният ред'], 'най-простият случай, който спира извикванията'), T('Какво става без дъно?', ['безкрайни извиквания и грешка', 'нищо'], 'безкрайни извиквания и грешка'), T('Рекурсивната функция…', ['извиква самата себе си', 'не връща нищо'], 'извиква самата себе си'), T('fact(1) = ?', ['1', '0', '2'], '1')]
  });

  inf('h10-inf-klasove', {
    after: 'h10-inf-rekursiya', core: PY, title: 'Обектно-ориентирано програмиране: класове', emoji: '🏗️',
    intro: 'Класът е „чертеж“, а обектът — конкретна сграда по него. Класът описва данните (атрибути) и действията (методи). Например клас Ученик с име и оценки и метод, който смята средния успех.',
    tip: 'Нека Ая моделира любима игра с класове: Герой, Враг, Предмет.',
    s: [['Пример', [code('python', 'class Uchenik:\n    def __init__(self, ime):\n        self.ime = ime\n        self.otsenki = []\n\n    def dobavi(self, o):\n        self.otsenki.append(o)\n\n    def sreden(self):\n        return sum(self.otsenki) / len(self.otsenki)\n\naya = Uchenik("Ая")\naya.dobavi(6)\naya.dobavi(5)\nprint(aya.sreden())   # 5.5'),
      table(['Понятие', 'Значение'], [['клас', 'чертеж'], ['обект', 'конкретен екземпляр'], ['атрибут', 'данни на обекта (име)'], ['метод', 'действие (добави, среден)'], ['__init__', 'конструктор — създава обекта']])]]],
    tasks: [T('Класът е като…', ['чертеж', 'сграда'], 'чертеж'), T('Какво е метод?', ['действие на обекта', 'вид променлива'], 'действие на обекта'), T('Как се казва конструкторът в Python?', ['__init__', 'start'], '__init__'), T('aya.sreden() след оценки 6 и 5 = ?', ['5.5', '11', '6'], '5.5'), T('Какво е self?', ['самият обект', 'името на класа'], 'самият обект')]
  });

  inf('h10-inf-slozhnost', {
    after: 'h10-inf-klasove', core: PY, title: 'Сложност на алгоритмите', emoji: '⏱️',
    intro: 'Колко бързо работи алгоритъмът, когато данните растат? Линейното търсене е O(n) — проверява всичко. Двоичното е O(log n) — много по-бързо. Сортирането с мехурче е O(n²) — бавно за много данни.',
    tip: 'Сравнете: за милион елемента O(n) са милион стъпки, O(log n) — около 20, а O(n²) — трилион!',
    s: [['Класове на сложност', [table(['Сложност', 'Пример', '1 000 000 елемента'], [['O(1)', 'достъп по индекс', '1 стъпка'], ['O(log n)', 'двоично търсене', '≈ 20 стъпки'], ['O(n)', 'линейно търсене', '1 000 000 стъпки'], ['O(n log n)', 'бързо сортиране', '≈ 20 000 000'], ['O(n²)', 'метод на мехурчето', '1 000 000 000 000']])]]],
    tasks: [T('Каква е сложността на двоичното търсене?', ['O(log n)', 'O(n²)'], 'O(log n)'), T('Каква е сложността на метода на мехурчето?', ['O(n²)', 'O(1)'], 'O(n²)'), T('Кое е най-бързо за големи данни?', ['O(log n)', 'O(n)'], 'O(log n)'), T('Линейното търсене е…', ['O(n)', 'O(1)'], 'O(n)'), T('Колко стъпки за O(log n) при милион елемента?', ['около 20', 'милион'], 'около 20')]
  });

  inf('h10-inf-stek-opashka', {
    after: 'h10-inf-slozhnost', core: PY, title: 'Структури от данни: стек и опашка', emoji: '📚',
    intro: 'Стекът работи като купчина чинии — последната сложена се взима първа (LIFO). Опашката работи като опашка в магазина — първият влязъл излиза пръв (FIFO).',
    tip: 'Бутонът „Назад“ в браузъра е стек. Опашката за печат на принтера е опашка. Търсете още примери.',
    s: [['Сравнение', [table(['', 'Стек', 'Опашка'], [['принцип', 'LIFO — последен влязъл, пръв излязъл', 'FIFO — пръв влязъл, пръв излязъл'], ['пример', 'бутон „Назад“, отмяна (Ctrl+Z)', 'опашка за печат, чакащи клиенти'], ['в Python', 'list: append() и pop()', 'collections.deque: append() и popleft()']])]],
    ['Пример', [code('python', 'stek = []\nstek.append(1); stek.append(2); stek.append(3)\nprint(stek.pop())   # 3 (последният)')]]],
    tasks: [T('Стекът работи по принципа…', ['LIFO', 'FIFO'], 'LIFO'), T('Опашката работи по принципа…', ['FIFO', 'LIFO'], 'FIFO'), T('Бутонът „Назад“ в браузъра е…', ['стек', 'опашка'], 'стек'), T('Сложихме 1, 2, 3 в стек. pop() връща…', ['3', '1'], '3'), T('Опашката за печат е…', ['опашка', 'стек'], 'опашка')]
  });

  it('h10-it-javascript', {
    after: 'h10-it-html', core: DT, title: 'JavaScript: интерактивна страница', emoji: '⚡',
    intro: 'HTML дава структурата, CSS — вида, а JavaScript — поведението. С JavaScript бутоните реагират, данните се зареждат и страницата се променя без презареждане. И този сайт е написан с JavaScript!',
    tip: 'Отворете конзолата в браузъра (F12) и напишете alert("Здравей, Ая!") — първата JavaScript команда.',
    s: [['Пример', [code('html', '<button id="btn">Натисни ме</button>\n<p id="text"></p>\n<script>\n  let broy = 0;\n  document.getElementById("btn").onclick = () => {\n    broy++;\n    document.getElementById("text").textContent = "Натисна " + broy + " пъти";\n  };\n</script>'),
      table(['Понятие', 'Значение'], [['let', 'създава променлива'], ['функция () => {}', 'парче код за изпълнение'], ['onclick', 'събитие „натискане“'], ['document.getElementById', 'намира елемент по id'], ['конзола (F12)', 'място за тестове и грешки']])]]],
    tasks: [T('Какво добавя JavaScript към страницата?', ['поведение', 'само цветове'], 'поведение'), T('С коя дума създаваме променлива?', ['let', 'def'], 'let'), T('Кое събитие реагира на натискане?', ['onclick', 'onload'], 'onclick'), T('Как се отваря конзолата в браузъра?', ['F12', 'Ctrl+P'], 'F12'), T('Написан ли е този сайт с JavaScript?', ['да', 'не'], 'да')]
  });

  it('h10-it-ux', {
    after: 'h10-it-javascript', core: DT, title: 'UX дизайн: удобство за потребителя', emoji: '🧭',
    intro: 'UX (user experience) е колко лесно и приятно се използва продуктът. Добрият дизайн е ясен, бърз, достъпен и за хора с увреждания (достъпност).',
    tip: 'Дайте на баба или дядо да използват приложение и наблюдавайте къде се затрудняват — така работят UX дизайнерите.',
    s: [['Принципи', [table(['Принцип', 'Пример'], [['яснота', 'бутонът казва какво прави: „Запази“, а не „ОК“'], ['последователност', 'еднакви бутони навсякъде'], ['обратна връзка', 'съобщение „Запазено!“ след действие'], ['достъпност', 'контраст, големи бутони, текст за екранни четци'], ['мобилност', 'работи добре на телефон']]),
      rule('Тествайте с истински потребители — дизайнерът често не вижда проблемите на собствения си продукт.')]]],
    tasks: [T('Какво означава UX?', ['потребителско преживяване', 'бърз интернет'], 'потребителско преживяване'), T('Кое е по-ясно за бутон?', ['„Запази“', '„ОК“'], '„Запази“'), T('Какво е достъпност?', ['удобство и за хора с увреждания', 'бърз сървър'], 'удобство и за хора с увреждания'), T('Как проверяваме дизайна?', ['с истински потребители', 'само дизайнерът'], 'с истински потребители'), T('Какво е обратна връзка?', ['съобщение след действие', 'реклама'], 'съобщение след действие')]
  });

  it('h10-it-git', {
    after: 'h10-it-ux', core: DT, title: 'Версии и съвместна работа: Git', emoji: '🌿',
    intro: 'Git пази историята на всички промени в проекта. Ако нещо се развали, можем да се върнем назад. GitHub позволява на много хора да работят по един проект. Този сайт също е в GitHub!',
    tip: 'Разгледайте заедно историята на промените на този сайт в GitHub — всеки урок е отделна промяна (commit).',
    s: [['Основни понятия', [table(['Понятие', 'Значение'], [['хранилище (repository)', 'папката на проекта с цялата история'], ['commit', 'запазена стъпка с описание'], ['branch (клон)', 'отделна линия на разработка'], ['push', 'качване на промените в GitHub'], ['pull request', 'предложение промените да се слеят']])]]],
    tasks: [T('Какво е commit?', ['запазена стъпка с описание', 'изтриване'], 'запазена стъпка с описание'), T('Какво прави push?', ['качва промените', 'изтегля програма'], 'качва промените'), T('Какво е branch?', ['отделна линия на разработка', 'папка със снимки'], 'отделна линия на разработка'), T('Може ли да се върнем към стара версия с Git?', ['да', 'не'], 'да'), T('Какво е pull request?', ['предложение за сливане на промени', 'вид вирус'], 'предложение за сливане на промени')]
  });

  it('h10-it-eupravlenie', {
    after: 'h10-it-git', core: DT, title: 'Електронно управление и цифрова самоличност', emoji: '🪪',
    intro: 'Много услуги вече се ползват онлайн: справки, документи, плащания на данъци. Електронният подпис и цифровата самоличност потвърждават кой сме. Те трябва да се пазят като лична карта.',
    tip: 'Когато Ая порасне, покажете ѝ как се ползват електронните услуги — и как да проверява дали сайтът е официален (.bg, https, правилен адрес).',
    s: [['Понятия', [table(['Понятие', 'Значение'], [['електронен подпис', 'равностоен на собственоръчния подпис'], ['двуфакторна защита', 'парола + код на телефона'], ['официален портал', 'сайт на държавна институция'], ['фишинг сайт', 'фалшив сайт, който имитира официален']]),
      rule('Никога не въвеждайте лични данни в сайт, отворен от връзка в съобщение — пишете адреса сами.')]]],
    tasks: [T('Електронният подпис е…', ['равностоен на собственоръчния', 'без правна сила'], 'равностоен на собственоръчния'), T('Двуфакторната защита е…', ['парола + код', 'само парола'], 'парола + код'), T('Как отваряме официален сайт най-сигурно?', ['пишем адреса сами', 'от връзка в съобщение'], 'пишем адреса сами'), T('Фишинг сайтът…', ['имитира официален', 'е държавен'], 'имитира официален'), T('Пазим ли цифровата си самоличност като лична карта?', ['да', 'не'], 'да')]
  });
})();
