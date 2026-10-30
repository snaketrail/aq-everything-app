// 8.–12. клас: Английски език, Информатика, Информационни технологии.
window.LESSONS = window.LESSONS || {};

(function () {
  const L = (subject) => (group) => (id, data) => { window.LESSONS[id] = Object.assign({ stage: 'high', subject, group, minutes: 20 }, data); };
  const lang = L('lang'), inf = L('inf'), it = L('it');

  const EN = { lang: 'en-GB', rate: 0.9 };
  const COLORS = ['#a5b4fc', '#5eead4', '#fcd34d', '#f9a8d4', '#93c5fd', '#fdba74'];
  const words = (list) => ({ type: 'cards', items: list.map(([pic, en, bg], i) => ({ pic, label: en, sub: bg, say: en, voice: EN, color: COLORS[i % COLORS.length] })) });
  const enTip = 'Насърчавайте Ая да чете, гледа и слуша на английски неща, които наистина я интересуват — сериали, подкасти, игри. Това дава повече от всяко упражнение.';
  const pyTip = 'Инсталирайте Python (безплатен) или използвайте онлайн среда. Най-бързо се учи, като примерите се пишат на ръка и после се променят: „Какво ще стане, ако…?“';

  // ---------- Английски език ----------

  lang(8)('h8-en-second-conditional', {
    title: 'Second Conditional — if I had a million…',
    emoji: '💭',
    intro: 'С второто условно изречение говорим за въображаеми или малко вероятни ситуации в настоящето и бъдещето: If I had a million euros, I would travel the world.',
    parentTip: enTip,
    sections: [
      { title: 'Образуване', blocks: [
        { type: 'rule', text: 'If + Past Simple, would + глагол. If I were you, I would… — с „were“ за всички лица във формален английски.' },
        { type: 'table', head: ['Тип', 'Значение', 'Пример'], rows: [
          ['First', 'реална възможност', 'If it rains, I’ll stay home.'],
          ['Second', 'въображаема ситуация', 'If I won the lottery, I’d buy a house.'],
          ['Third', 'минало, което не може да се промени', 'If I had studied, I would have passed.']
        ] }
      ] },
      { title: 'Примери', blocks: [words([
        ['🦸', 'If I could fly, I would visit every country.', 'Ако можех да летя, щях да посетя всяка държава.'],
        ['🤔', 'If I were you, I would apologise.', 'На твое място бих се извинила.']
      ])] }
    ],
    tasks: [
      { question: 'If I ___ more time, I would learn Japanese.', options: ['had', 'have', 'will have'], answer: 'had' },
      { question: 'If she studied harder, she ___ better marks.', options: ['would get', 'will get', 'gets'], answer: 'would get' },
      { question: 'If I ___ you, I would take the job.', options: ['were', 'am', 'will be'], answer: 'were' },
      { question: 'Кое изречение е за въображаема ситуация?', options: ['If I lived on the Moon, I would…', 'If it rains, I will…'], answer: 'If I lived on the Moon, I would…' }
    ]
  });

  lang(8)('h8-en-reported', {
    title: 'Reported Speech — she said that…',
    emoji: '🗨️',
    intro: 'Когато предаваме чужди думи, обикновено „връщаме“ времето една стъпка назад: „I am tired.“ → She said (that) she was tired.',
    parentTip: enTip,
    sections: [
      { title: 'Смяна на времената', blocks: [
        { type: 'table', head: ['Пряка реч', 'Непряка реч'], rows: [
          ['Present Simple: “I like it.”', 'Past Simple: he said he liked it.'],
          ['Present Continuous: “I’m working.”', 'Past Continuous: she said she was working.'],
          ['Past Simple: “I saw him.”', 'Past Perfect: he said he had seen him.'],
          ['will: “I will call.”', 'would: she said she would call.'],
          ['can: “I can swim.”', 'could: he said he could swim.']
        ] },
        { type: 'rule', text: 'Сменят се и думите за време и място: today → that day, tomorrow → the next day, here → there.' }
      ] }
    ],
    tasks: [
      { question: '“I am hungry.” → He said he ___ hungry.', options: ['was', 'is', 'were'], answer: 'was' },
      { question: '“I will help you.” → She said she ___ help me.', options: ['would', 'will', 'can'], answer: 'would' },
      { question: '“I can’t come tomorrow.” → He said he couldn’t come ___.', options: ['the next day', 'tomorrow', 'yesterday'], answer: 'the next day' },
      { question: '“We saw a film.” → They said they ___ a film.', options: ['had seen', 'have seen', 'see'], answer: 'had seen' }
    ]
  });

  lang(9)('h9-en-deduction', {
    title: 'Modals of deduction — must, might, can’t',
    emoji: '🕵️',
    intro: 'С модалните глаголи правим заключения: She must be at home (сигурна съм). He might be late (възможно е). That can’t be true (невъзможно е).',
    parentTip: enTip,
    sections: [
      { title: 'Степени на сигурност', blocks: [
        { type: 'table', head: ['Глагол', 'Сигурност', 'Пример'], rows: [
          ['must', 'почти сигурно — да', 'The lights are on. They must be home.'],
          ['might / may / could', 'възможно', 'She might be at the library.'],
          ['can’t', 'почти сигурно — не', 'He can’t be hungry — he just ate.']
        ] },
        { type: 'rule', text: 'За минало: must have + 3-та форма. She must have forgotten. (Сигурно е забравила.)' }
      ] }
    ],
    tasks: [
      { question: 'He’s been running for an hour. He ___ be tired.', options: ['must', 'can’t', 'might not'], answer: 'must' },
      { question: 'That ___ be Anna — she’s in London today.', options: ['can’t', 'must', 'should'], answer: 'can’t' },
      { question: 'I’m not sure where Tom is. He ___ be in the garden.', options: ['might', 'must', 'can’t'], answer: 'might' },
      { question: 'The road is wet. It ___ have rained.', options: ['must', 'can’t', 'mustn’t'], answer: 'must' }
    ]
  });

  lang(9)('h9-en-used-to', {
    title: 'Used to and would — past habits',
    emoji: '🕰️',
    intro: 'Used to описва минали навици и състояния, които вече не са така: I used to live in Varna. When I was little, I used to have a dog.',
    parentTip: enTip,
    sections: [
      { title: 'Сравнение', blocks: [
        { type: 'table', head: ['', 'Пример'], rows: [
          ['used to (навици и състояния)', 'I used to be shy.'],
          ['would (само повтарящи се действия)', 'Every summer we would go to the sea.'],
          ['отрицание', 'I didn’t use to like vegetables.'],
          ['be used to (свикнал съм)', 'I’m used to getting up early.']
        ] },
        { type: 'rule', text: 'Внимание: used to + глагол (минал навик) ≠ be used to + -ing (свикнал съм с нещо).' }
      ] }
    ],
    tasks: [
      { question: 'I ___ play the piano, but I stopped.', options: ['used to', 'am used to', 'use to'], answer: 'used to' },
      { question: 'She ___ have long hair when she was a child.', options: ['used to', 'would', 'is used to'], answer: 'used to' },
      { question: 'I’ve lived here for years, so I’m used to ___ the noise.', options: ['hearing', 'hear', 'heard'], answer: 'hearing' },
      { question: 'Did you ___ live in Sofia?', options: ['use to', 'used to', 'using to'], answer: 'use to' }
    ]
  });

  lang(10)('h10-en-third-conditional', {
    title: 'Third Conditional — if I had known…',
    emoji: '⏮️',
    intro: 'С третото условно изречение говорим за минало, което не може да се промени — какво би станало, ако нещо беше станало иначе.',
    parentTip: enTip,
    sections: [
      { title: 'Образуване', blocks: [
        { type: 'rule', text: 'If + Past Perfect, would have + 3-та форма. If I had known, I would have helped. (Ако знаех, щях да помогна.)' }
      ] },
      { title: 'Примери', blocks: [words([
        ['🚌', 'If I had left earlier, I wouldn’t have missed the bus.', 'Ако бях тръгнала по-рано, нямаше да изпусна автобуса.'],
        ['📚', 'If she had studied, she would have passed the exam.', 'Ако беше учила, щеше да издържи изпита.']
      ])] }
    ],
    tasks: [
      { question: 'If we ___ the map, we wouldn’t have got lost.', options: ['had taken', 'took', 'have taken'], answer: 'had taken' },
      { question: 'If he had asked me, I ___ him.', options: ['would have helped', 'would help', 'will help'], answer: 'would have helped' },
      { question: 'Третото условно е за…', options: ['минало, което не може да се промени', 'реално бъдеще', 'общи истини'], answer: 'минало, което не може да се промени' },
      { question: 'If I ___ about the party, I would have come.', options: ['had known', 'knew', 'know'], answer: 'had known' }
    ]
  });

  lang(10)('h10-en-formal-email', {
    title: 'Writing a formal email',
    emoji: '📧',
    intro: 'Официалното писмо (до училище, фирма, институция) има ясни правила за поздрав, тон и завършек. На изпитите често се иска именно такъв текст.',
    parentTip: enTip,
    sections: [
      { title: 'Формално и неформално', blocks: [
        { type: 'table', head: ['', 'Formal', 'Informal'], rows: [
          ['поздрав', 'Dear Mr Smith, / Dear Sir or Madam,', 'Hi Tom!'],
          ['начало', 'I am writing to enquire about…', 'Thanks for your message!'],
          ['молба', 'I would be grateful if you could…', 'Can you…?'],
          ['край', 'I look forward to hearing from you.', 'Write soon!'],
          ['подпис', 'Yours sincerely, (знаем името) / Yours faithfully, (не знаем)', 'Love, / Best,']
        ] },
        { type: 'rule', text: 'Във формалното писмо не използваме съкращения (I am, не I’m) и жаргон.' }
      ] }
    ],
    tasks: [
      { question: 'Как завършваме писмо, започнато с „Dear Sir or Madam“?', options: ['Yours faithfully', 'Yours sincerely', 'Love'], answer: 'Yours faithfully' },
      { question: 'Коя фраза е формална?', options: ['I would be grateful if you could send me…', 'Send me…, OK?'], answer: 'I would be grateful if you could send me…' },
      { question: 'Използваме ли съкращения като „I’m“ във формално писмо?', options: ['не', 'да'], answer: 'не' },
      { question: 'Кое е подходящо начало?', options: ['I am writing to apply for…', 'Hey there!'], answer: 'I am writing to apply for…' }
    ]
  });

  lang(11)('h11-en-essay', {
    title: 'Opinion essay and linking words',
    emoji: '📝',
    intro: 'В есето с мнение защитаваме позиция с аргументи. Свързващите думи правят текста логичен и лесен за следване.',
    parentTip: enTip,
    sections: [
      { title: 'Структура', blocks: [
        { type: 'list', ordered: true, items: ['Introduction — тема и ясно мнение.', 'Body paragraph 1 — първи аргумент с пример.', 'Body paragraph 2 — втори аргумент с пример.', 'Opposing view — обратното мнение и защо не е убедително.', 'Conclusion — обобщение на позицията.'] }
      ] },
      { title: 'Свързващи думи', blocks: [
        { type: 'table', head: ['Функция', 'Думи'], rows: [
          ['добавяне', 'Furthermore, Moreover, In addition'],
          ['контраст', 'However, On the other hand, Although'],
          ['причина и следствие', 'Therefore, As a result, Because of this'],
          ['пример', 'For example, For instance, Such as'],
          ['заключение', 'In conclusion, To sum up, All in all']
        ] }
      ] }
    ],
    tasks: [
      { question: 'Коя дума въвежда контраст?', options: ['However', 'Moreover', 'Therefore'], answer: 'However' },
      { question: 'Коя дума въвежда заключение?', options: ['In conclusion', 'For example', 'Furthermore'], answer: 'In conclusion' },
      { question: 'Къде се изказва мнението за пръв път?', options: ['в увода', 'само в заключението', 'никъде'], answer: 'в увода' },
      { question: 'Коя дума добавя още един аргумент?', options: ['Furthermore', 'However', 'Although'], answer: 'Furthermore' }
    ]
  });

  lang(11)('h11-en-phrasal-verbs', {
    title: 'Phrasal verbs',
    emoji: '🧷',
    intro: 'Фразовите глаголи се състоят от глагол и частица (up, out, off…). Значението им често е съвсем различно от основния глагол: give up = отказвам се.',
    parentTip: enTip,
    sections: [
      { title: 'Най-честите', blocks: [
        { type: 'table', head: ['Глагол', 'Значение', 'Пример'], rows: [
          ['give up', 'отказвам се', 'Don’t give up!'],
          ['look after', 'грижа се за', 'She looks after her brother.'],
          ['find out', 'разбирам, научавам', 'I found out the truth.'],
          ['turn down', 'отказвам (предложение); намалявам', 'He turned down the offer.'],
          ['put off', 'отлагам', 'Don’t put off your homework.'],
          ['get on with', 'разбирам се с', 'I get on well with my sister.'],
          ['run out of', 'свършва ми', 'We ran out of milk.']
        ] }
      ] }
    ],
    tasks: [
      { question: 'We’ve ___ of sugar. Can you buy some?', options: ['run out', 'given up', 'looked after'], answer: 'run out' },
      { question: 'Какво значи „put off“?', options: ['отлагам', 'обличам', 'изключвам'], answer: 'отлагам' },
      { question: 'Could you ___ my cat while I’m away?', options: ['look after', 'find out', 'turn down'], answer: 'look after' },
      { question: 'Какво значи „find out“?', options: ['научавам, разбирам', 'губя', 'излизам'], answer: 'научавам, разбирам' }
    ]
  });

  lang(12)('h12-en-collocations', {
    title: 'Collocations: make or do?',
    emoji: '🧩',
    intro: 'Колокациите са думи, които „вървят заедно“. Носителите на езика казват make a mistake, а не do a mistake. На изпитите на ниво B2 такива задачи са много чести.',
    parentTip: enTip,
    sections: [
      { title: 'Make и do', blocks: [
        { type: 'table', head: ['make (създавам, правя нещо ново)', 'do (дейност, работа)'], rows: [
          ['make a mistake', 'do homework'],
          ['make a decision', 'do the shopping'],
          ['make friends', 'do your best'],
          ['make money', 'do business'],
          ['make a noise', 'do exercise']
        ] }
      ] },
      { title: 'Други колокации', blocks: [
        { type: 'list', items: ['take a photo, take a break, take part in', 'pay attention, pay a visit', 'heavy rain, strong coffee, high temperature', 'catch a cold, catch a bus'] }
      ] }
    ],
    tasks: [
      { question: 'I ___ a mistake in the test.', options: ['made', 'did'], answer: 'made' },
      { question: 'Please ___ your best!', options: ['do', 'make'], answer: 'do' },
      { question: 'Can we ___ a break?', options: ['take', 'make', 'do'], answer: 'take' },
      { question: 'There was ___ rain last night.', options: ['heavy', 'strong', 'big'], answer: 'heavy' }
    ]
  });

  lang(12)('h12-en-exam', {
    title: 'Exam strategies: reading and listening',
    emoji: '🎧',
    intro: 'Изпитите по английски (матура, сертификати B2/C1) проверяват четене, слушане, граматика и писане. Има стратегии, които правят задачите по-лесни.',
    parentTip: enTip,
    sections: [
      { title: 'Reading', blocks: [
        { type: 'list', items: ['Първо прочети въпросите, после текста.', 'Skimming — бързо четене за общата идея.', 'Scanning — търсене на конкретна информация (имена, числа).', 'Внимавай за синоними: в текста думите рядко са същите като във въпроса.'] }
      ] },
      { title: 'Listening', blocks: [
        { type: 'list', items: ['Прочети задачите преди записа и подчертай ключовите думи.', 'Не се паникьосвай, ако пропуснеш нещо — записът обикновено се пуска два пъти.', 'Внимавай за „капани“ — говорещият често се поправя.'] },
        { type: 'rule', text: 'Ако не знаеш отговора, не оставяй празно място — при задачите с избор опитай да отгатнеш.' }
      ] }
    ],
    tasks: [
      { question: 'Какво е scanning?', options: ['търсене на конкретна информация', 'бавно четене на всяка дума', 'превод'], answer: 'търсене на конкретна информация' },
      { question: 'Какво четем първо при задача за четене?', options: ['въпросите', 'последния абзац', 'нищо'], answer: 'въпросите' },
      { question: 'Обикновено колко пъти се пуска записът?', options: ['два пъти', 'веднъж', 'пет пъти'], answer: 'два пъти' },
      { question: 'Еднакви ли са обикновено думите в текста и във въпроса?', options: ['не, често са синоними', 'да, винаги'], answer: 'не, често са синоними' }
    ]
  });

  // ---------- Информатика (Python) ----------

  inf(8)('h8-inf-promenlivi', {
    title: 'Python: променливи, вход и изход',
    emoji: '🐍',
    intro: 'Python е един от най-популярните езици за програмиране — прост за четене и мощен. Започваме с променливи, четене на данни и извеждане на резултат.',
    parentTip: pyTip,
    sections: [
      { title: 'Първата програма', blocks: [
        { type: 'code', lang: 'python', code: 'name = input("Как се казваш? ")\nage = int(input("На колко години си? "))\nprint("Здравей,", name)\nprint("След 10 години ще си на", age + 10)' },
        { type: 'table', head: ['Тип', 'Пример'], rows: [['int — цяло число', '42'], ['float — дробно число', '3.14'], ['str — текст', '"Ая"'], ['bool — истина/лъжа', 'True, False']] },
        { type: 'rule', text: 'input() винаги връща текст. За да смятаме с него, го превръщаме в число с int() или float().' }
      ] },
      { title: 'Аритметика', blocks: [
        { type: 'table', head: ['Оператор', 'Значение', 'Пример', 'Резултат'], rows: [
          ['+ − *', 'събиране, изваждане, умножение', '3 * 4', '12'],
          ['/', 'деление', '7 / 2', '3.5'],
          ['//', 'целочислено деление', '7 // 2', '3'],
          ['%', 'остатък', '7 % 2', '1'],
          ['**', 'степен', '2 ** 10', '1024']
        ] }
      ] }
    ],
    tasks: [
      { question: 'Какво ще изведе print(7 // 2)?', options: ['3', '3.5', '1'], answer: '3' },
      { question: 'Какво ще изведе print(10 % 3)?', options: ['1', '3', '0'], answer: '1' },
      { question: 'Какъв тип връща input()?', options: ['текст (str)', 'цяло число', 'дробно число'], answer: 'текст (str)' },
      { question: 'Какво ще изведе print(2 ** 3)?', options: ['8', '6', '5'], answer: '8' }
    ]
  });

  inf(8)('h8-inf-usloviya', {
    title: 'Python: условия',
    emoji: '🔀',
    intro: 'С if, elif и else програмата избира какво да направи според условие. Важно: в Python блоковете се определят с отстъп (4 интервала).',
    parentTip: pyTip,
    sections: [
      { title: 'Пример', blocks: [
        { type: 'code', lang: 'python', code: 'grade = float(input("Оценка: "))\nif grade >= 5.50:\n    print("Отличен")\nelif grade >= 4.50:\n    print("Много добър")\nelif grade >= 3.50:\n    print("Добър")\nelse:\n    print("Трябва още работа")' },
        { type: 'table', head: ['Оператор', 'Значение'], rows: [['==', 'равно'], ['!=', 'различно'], ['< > <= >=', 'сравнения'], ['and, or, not', 'логически оператори']] },
        { type: 'rule', text: 'Едно = присвоява стойност, а две == сравняват. Това е най-честата грешка на начинаещите.' }
      ] }
    ],
    tasks: [
      { question: 'Какво ще изведе програмата за оценка 4.75?', options: ['Много добър', 'Отличен', 'Добър'], answer: 'Много добър' },
      { question: 'Кой оператор проверява за равенство?', options: ['==', '=', '!='], answer: '==' },
      { question: 'x = 5. Вярно ли е x > 3 and x < 10?', options: ['True', 'False'], answer: 'True' },
      { question: 'С какво се отбелязва блокът след if?', options: ['с отстъп', 'с къдрави скоби', 'с точка и запетая'], answer: 'с отстъп' }
    ]
  });

  inf(8)('h8-inf-tsikli', {
    title: 'Python: цикли',
    emoji: '🔁',
    intro: 'Цикълът повтаря действия. for обхожда поредица (например числата от range), а while се повтаря, докато условието е вярно.',
    parentTip: pyTip,
    sections: [
      { title: 'for и range', blocks: [
        { type: 'code', lang: 'python', code: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)   # 5050' },
        { type: 'table', head: ['range', 'Числа'], rows: [['range(5)', '0, 1, 2, 3, 4'], ['range(1, 6)', '1, 2, 3, 4, 5'], ['range(0, 10, 2)', '0, 2, 4, 6, 8']] },
        { type: 'rule', text: 'range(a, b) спира ПРЕДИ b — самото b не се включва.' }
      ] },
      { title: 'while', blocks: [
        { type: 'code', lang: 'python', code: 'n = 1\nwhile n < 100:\n    n *= 2\nprint(n)   # 128' }
      ] }
    ],
    tasks: [
      { question: 'Кои числа дава range(3)?', options: ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3'], answer: '0, 1, 2' },
      { question: 'Колко пъти ще се изпълни for i in range(2, 7)?', options: ['5', '7', '6'], answer: '5' },
      { question: 'Какво ще изведе while примерът?', options: ['128', '100', '64'], answer: '128' },
      { question: 'Кои числа дава range(10, 0, -3)?', options: ['10, 7, 4, 1', '10, 7, 4, 1, -2', '0, 3, 6, 9'], answer: '10, 7, 4, 1' }
    ]
  });

  inf(9)('h9-inf-spisaci', {
    title: 'Python: списъци',
    emoji: '📋',
    intro: 'Списъкът пази много стойности под едно име. Елементите са номерирани от 0. Списъците могат да се променят — да добавяме, махаме и сортираме.',
    parentTip: pyTip,
    sections: [
      { title: 'Основни операции', blocks: [
        { type: 'code', lang: 'python', code: 'grades = [6, 5, 4, 6, 5]\nprint(grades[0])        # 6  (първият)\nprint(grades[-1])       # 5  (последният)\ngrades.append(6)        # добавя в края\nprint(len(grades))      # 6\nprint(sum(grades) / len(grades))  # средна оценка\nprint(sorted(grades))   # [4, 5, 5, 6, 6, 6]' },
        { type: 'rule', text: 'Индексът на първия елемент е 0, а на последния — len(списък) − 1 (или −1).' }
      ] },
      { title: 'Обхождане', blocks: [
        { type: 'code', lang: 'python', code: 'for g in grades:\n    if g == 6:\n        print("Шестица!")' }
      ] }
    ],
    tasks: [
      { question: 'a = [10, 20, 30]. Какво е a[1]?', options: ['20', '10', '30'], answer: '20' },
      { question: 'a = [10, 20, 30]. Какво е len(a)?', options: ['3', '2', '30'], answer: '3' },
      { question: 'a = [10, 20, 30]. Какво е a[-1]?', options: ['30', '10', 'грешка'], answer: '30' },
      { question: 'Как се добавя елемент в края?', options: ['append()', 'add()', 'push()'], answer: 'append()' }
    ]
  });

  inf(9)('h9-inf-funktsii', {
    title: 'Python: функции',
    emoji: '🧰',
    intro: 'Функцията е именуван блок код, който може да се използва многократно. Тя приема параметри и може да върне резултат с return.',
    parentTip: pyTip,
    sections: [
      { title: 'Дефиниране', blocks: [
        { type: 'code', lang: 'python', code: 'def area(a, b):\n    return a * b\n\ndef is_even(n):\n    return n % 2 == 0\n\nprint(area(4, 5))     # 20\nprint(is_even(7))     # False' },
        { type: 'rule', text: 'Принципът DRY — Don’t Repeat Yourself. Ако пишеш един и същ код два пъти, направи го функция.' }
      ] },
      { title: 'Защо функции', blocks: [
        { type: 'list', items: ['Кодът е по-кратък и по-четим.', 'Грешка се поправя само на едно място.', 'Голямата задача се разделя на малки части.'] }
      ] }
    ],
    tasks: [
      { question: 'С коя ключова дума се създава функция?', options: ['def', 'function', 'func'], answer: 'def' },
      { question: 'Какво ще изведе print(area(3, 3))?', options: ['9', '6', '33'], answer: '9' },
      { question: 'Какво прави return?', options: ['връща резултат', 'отпечатва', 'спира компютъра'], answer: 'връща резултат' },
      { question: 'Какво връща is_even(10)?', options: ['True', 'False', '10'], answer: 'True' }
    ]
  });

  inf(10)('h10-inf-tarsene-sortirane', {
    title: 'Търсене и сортиране',
    emoji: '🔍',
    intro: 'Как бързо да намерим дума в речник? Не четем от първата страница — отваряме по средата. Това е двоично търсене. Алгоритмите се различават по това колко стъпки им трябват.',
    parentTip: pyTip,
    sections: [
      { title: 'Търсене', blocks: [
        { type: 'table', head: ['Алгоритъм', 'Как', 'Стъпки за 1 000 000 елемента'], rows: [
          ['линейно търсене', 'проверява елементите един по един', 'до 1 000 000'],
          ['двоично търсене', 'само в сортиран списък — дели наполовина', 'около 20']
        ] },
        { type: 'code', lang: 'python', code: 'def binary_search(a, x):\n    lo, hi = 0, len(a) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if a[mid] == x:\n            return mid\n        if a[mid] < x:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1' }
      ] },
      { title: 'Сортиране', blocks: [
        { type: 'list', items: ['Метод на мехурчето — сравнява съседни елементи и ги разменя; лесен, но бавен.', 'Сортиране чрез сливане и бързо сортиране — много по-бързи при големи данни.'] },
        { type: 'rule', text: 'Сложността на алгоритъма показва как расте броят стъпки, когато данните се увеличават.' }
      ] }
    ],
    tasks: [
      { question: 'Какво е условието за двоично търсене?', options: ['списъкът да е сортиран', 'списъкът да е кратък', 'числата да са четни'], answer: 'списъкът да е сортиран' },
      { question: 'Около колко стъпки са нужни на двоичното търсене за 1 000 000 елемента?', options: ['20', '1000', '500 000'], answer: '20' },
      { question: 'Кой метод разменя съседни елементи?', options: ['метод на мехурчето', 'двоично търсене', 'линейно търсене'], answer: 'метод на мехурчето' },
      { question: 'Какво връща binary_search, ако не намери елемента?', options: ['-1', '0', 'None'], answer: '-1' }
    ]
  });

  // ---------- Информационни технологии ----------

  it(8)('h8-it-kibersigurnost', {
    title: 'Киберсигурност',
    emoji: '🛡️',
    intro: 'Повечето кражби на акаунти не стават с хакерски филми, а с прости трикове — фалшиви съобщения и слаби пароли. Няколко навика пазят почти напълно.',
    parentTip: 'Включете заедно двуфакторна защита на основните акаунти на Ая (имейл, игри, социални мрежи). Обсъдете случаи на фишинг от вашия опит.',
    sections: [
      { title: 'Основни заплахи', blocks: [
        { type: 'table', head: ['Заплаха', 'Какво е', 'Защита'], rows: [
          ['фишинг', 'фалшив имейл или съобщение, което иска парола или данни', 'проверявам адреса; не натискам подозрителни връзки'],
          ['слаба парола', 'лесна за отгатване', 'дълга фраза, различна за всеки сайт, мениджър на пароли'],
          ['зловреден софтуер', 'вируси, рансъмуер', 'актуализации, програми само от официални източници'],
          ['социално инженерство', 'манипулация по телефон или чат', 'никога не давам кодове и пароли']
        ] },
        { type: 'rule', text: 'Двуфакторната защита (2FA) изисква освен паролата и код от телефона. Дори паролата да изтече, акаунтът остава защитен.' }
      ] }
    ],
    tasks: [
      { question: 'Получаваш имейл „Банката ви: потвърдете паролата си тук“. Какво правиш?', options: ['не отварям връзката и проверявам директно', 'въвеждам паролата', 'препращам на приятели'], answer: 'не отварям връзката и проверявам директно' },
      { question: 'Коя парола е най-сигурна?', options: ['Зелен-Чадър-Пее-През-Март-77', '123456', 'aya2026'], answer: 'Зелен-Чадър-Пее-През-Март-77' },
      { question: 'Какво е 2FA?', options: ['втори код освен паролата', 'две пароли за един сайт', 'вид вирус'], answer: 'втори код освен паролата' },
      { question: 'Защо са важни актуализациите?', options: ['поправят пробиви в сигурността', 'само сменят цветовете', 'не са важни'], answer: 'поправят пробиви в сигурността' }
    ]
  });

  it(9)('h9-it-bazi-danni', {
    title: 'Бази от данни',
    emoji: '🗄️',
    intro: 'Базата от данни съхранява подредена информация — ученици, книги, поръчки. Данните са в таблици, а с езика SQL задаваме въпроси към тях.',
    parentTip: 'Покажете, че всяко приложение — от онлайн магазин до дневника в училище — има база от данни зад себе си.',
    sections: [
      { title: 'Понятия', blocks: [
        { type: 'table', head: ['Понятие', 'Значение'], rows: [
          ['таблица', 'данни за един вид обекти (например ученици)'],
          ['запис (ред)', 'един обект — един ученик'],
          ['поле (колона)', 'едно свойство — име, клас, рожден ден'],
          ['първичен ключ', 'уникален идентификатор на записа (например номер)']
        ] }
      ] },
      { title: 'SQL', blocks: [
        { type: 'code', lang: 'sql', code: "SELECT name, grade\nFROM students\nWHERE class = '9А'\nORDER BY grade DESC;" },
        { type: 'text', text: 'Тази заявка връща имената и оценките на учениците от 9 А клас, подредени от най-високата оценка.' }
      ] }
    ],
    tasks: [
      { question: 'Как се нарича един ред в таблицата?', options: ['запис', 'поле', 'ключ'], answer: 'запис' },
      { question: 'Какво е първичният ключ?', options: ['уникален идентификатор', 'паролата за базата', 'първата колона винаги'], answer: 'уникален идентификатор' },
      { question: 'Коя SQL дума филтрира редовете?', options: ['WHERE', 'SELECT', 'ORDER BY'], answer: 'WHERE' },
      { question: 'Какво прави ORDER BY grade DESC?', options: ['подрежда по оценка намаляващо', 'изтрива оценките', 'брои оценките'], answer: 'подрежда по оценка намаляващо' }
    ]
  });

  it(10)('h10-it-html', {
    title: 'Уеб страница с HTML и CSS',
    emoji: '🌐',
    intro: 'Всяка уеб страница е изградена от HTML (съдържание и структура) и CSS (външен вид). Този сайт — „Уча с радост“ — е написан точно така!',
    parentTip: 'Отворете в браузъра „Преглед на кода“ (Ctrl+U) на любим сайт. После направете заедно проста страница за хоби на Ая в текстов файл index.html.',
    sections: [
      { title: 'HTML', blocks: [
        { type: 'code', lang: 'html', code: '<!doctype html>\n<html lang="bg">\n  <head>\n    <title>Моят сайт</title>\n  </head>\n  <body>\n    <h1>Здравейте!</h1>\n    <p>Казвам се Ая и обичам да рисувам.</p>\n    <a href="https://bg.wikipedia.org">Уикипедия</a>\n    <img src="cat.jpg" alt="Моето коте">\n  </body>\n</html>' },
        { type: 'table', head: ['Таг', 'Значение'], rows: [['<h1>…<h6>', 'заглавия'], ['<p>', 'абзац'], ['<a href>', 'връзка'], ['<img>', 'изображение'], ['<ul>, <li>', 'списък']] }
      ] },
      { title: 'CSS', blocks: [
        { type: 'code', lang: 'css', code: 'h1 {\n  color: purple;\n  font-size: 40px;\n}\np {\n  font-family: sans-serif;\n}' },
        { type: 'rule', text: 'HTML казва КАКВО има на страницата, CSS — КАК изглежда, а JavaScript — какво ПРАВИ.' }
      ] }
    ],
    tasks: [
      { question: 'Кой таг създава връзка?', options: ['<a>', '<p>', '<h1>'], answer: '<a>' },
      { question: 'Какво определя CSS?', options: ['външния вид', 'съдържанието', 'адреса на сайта'], answer: 'външния вид' },
      { question: 'Кой таг е за най-голямото заглавие?', options: ['<h1>', '<h6>', '<title>'], answer: '<h1>' },
      { question: 'Защо изображението има атрибут alt?', options: ['описва картинката, ако не се зареди или за незрящи', 'за цвета', 'не е нужен'], answer: 'описва картинката, ако не се зареди или за незрящи' }
    ]
  });
})();
