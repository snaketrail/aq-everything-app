// Учебна програма по етапи, според българската образователна система.
// Всеки предмет има списък с теми; тема с `lessonId` води към готов урок.
window.CURRICULUM = {
  stages: [
    {
      id: 'kg',
      theme: 'kg',
      name: 'Детска градина',
      grades: '1.–4. група',
      ages: '3–7 години',
      minAge: 0,
      maxAge: 6,
      emoji: '🧸',
      description: 'Игри, картинки и първите стъпки в ученето.',
      // Темите следват Наредба № 5 от 2016 г. за предучилищното образование:
      // седем образователни направления, всяко с образователни ядра (`core`)
      // и очаквани резултати за всяка възрастова група (`group`).
      groups: {
        1: '1. група · 3–4 години',
        2: '2. група · 4–5 години',
        3: '3. група · 5–6 години',
        4: '4. група · 6–7 години'
      },
      subjects: [
        { id: 'bel', name: 'Български език и литература', emoji: '🔤', color: '#ff7a59', topics: [
          { group: 1, title: 'Приказка „Дядо и ряпа“', core: 'Възприемане на литературно произведение', lessonId: 'kg-bel-dyado-i-ryapa' },
          { group: 1, title: 'Моето име и моето семейство', core: 'Свързана реч', lessonId: 'kg-bel-moeto-ime' },
          { group: 1, title: 'Стихчета и римушки', core: 'Пресъздаване на литературно произведение', lessonId: 'kg-bel-stihcheta' },
          { group: 2, title: 'Вълшебните думички', core: 'Речник', lessonId: 'kg-bel-vulshebni-dumichki' },
          { group: 2, title: 'Опиши играчката си', core: 'Свързана реч', lessonId: 'kg-bel-opishi-igrachkata' },
          { group: 2, title: 'Едно и много: ябълка — ябълки', core: 'Граматически правилна реч', lessonId: 'kg-bel-edno-i-mnogo' },
          { group: 3, title: 'Гатанки', core: 'Възприемане на литературно произведение', lessonId: 'kg-bel-gatanki' },
          { group: 3, title: 'Говоря силно и тихо, бързо и бавно', core: 'Звукова култура', lessonId: 'kg-bel-silno-tiho' },
          { group: 3, title: 'Кой какво направи в приказката', core: 'Възприемане на литературно произведение', lessonId: 'kg-bel-zhitenata-pitka' },
          { group: 4, title: 'С какъв звук започва думата?', core: 'Звукова култура', lessonId: 'kg-bel-parvi-zvuk' },
          { group: 4, title: 'Колко звука има в думата?', core: 'Звукова култура', lessonId: 'kg-bel-kolko-zvuka' },
          { group: 4, title: 'Първите печатни букви', core: 'Звукова култура', lessonId: 'kg-bel-parvi-bukvi' },
          { group: 4, title: 'Подготвяме ръката за писане', core: 'Звукова култура', lessonId: 'kg-bel-raka-za-pisane' }
        ] },
        { id: 'math', name: 'Математика', emoji: '🔢', color: '#5ec8f2', topics: [
          { group: 1, title: 'Едно и много', core: 'Количествени отношения', lessonId: 'kg-math-edno-i-mnogo' },
          { group: 1, title: 'Горе, долу, отпред, отзад', core: 'Пространствени отношения', lessonId: 'kg-math-gore-dolu' },
          { group: 1, title: 'Голямо и малко, високо и ниско', core: 'Измерване', lessonId: 'kg-math-golyamo-malko' },
          { group: 1, title: 'Кръг, квадрат и триъгълник', core: 'Геометрични фигури', lessonId: 'kg-math-figuri' },
          { group: 1, title: 'Ден и нощ', core: 'Времеви отношения', lessonId: 'kg-math-den-i-nosht' },
          { group: 2, title: 'Да броим до 5', core: 'Количествени отношения', lessonId: 'kg-math-broim-do-5' },
          { group: 2, title: 'Сутрин, обед, вечер, нощ', core: 'Времеви отношения', lessonId: 'kg-math-chasti-na-denonoshtieto' },
          { group: 2, title: 'Поравно, повече и по-малко', core: 'Количествени отношения', lessonId: 'kg-math-poravno' },
          { group: 2, title: 'Дълго и късо', core: 'Измерване', lessonId: 'kg-math-dalgo-kaso' },
          { group: 2, title: 'Близо и далече', core: 'Пространствени отношения', lessonId: 'kg-math-blizo-daleche' },
          { group: 3, title: 'Да броим до 10', core: 'Количествени отношения', lessonId: 'kg-math-broim-do-10' },
          { group: 3, title: 'Кой е пръв? Място в редица', core: 'Количествени отношения', lessonId: 'kg-math-myasto-v-redica' },
          { group: 3, title: 'Вчера, днес, утре', core: 'Времеви отношения', lessonId: 'kg-math-vchera-dnes-utre' },
          { group: 3, title: 'Правоъгълник', core: 'Геометрични фигури', lessonId: 'kg-math-pravoagalnik' },
          { group: 3, title: 'Лек и тежък', core: 'Измерване', lessonId: 'kg-math-lek-tezhak' },
          { group: 4, title: 'Дните на седмицата', core: 'Времеви отношения', lessonId: 'kg-math-dni-na-sedmicata' },
          { group: 4, title: 'Събиране и изваждане с предмети', core: 'Количествени отношения', lessonId: 'kg-math-sabirane' },
          { group: 4, title: 'Наляво и надясно', core: 'Пространствени отношения', lessonId: 'kg-math-nalyavo-nadyasno' },
          { group: 4, title: 'Месеците и сезоните', core: 'Времеви отношения', lessonId: 'kg-math-mesetsi' },
          { group: 4, title: 'Лабиринти и квадратна мрежа', core: 'Пространствени отношения', lessonId: 'kg-math-labirinti' }
        ] },
        { id: 'world', name: 'Околен свят', emoji: '🌳', color: '#7bdcb5', topics: [
          { group: 1, title: 'Домашни животни и техните малки', core: 'Светът на природата и неговото опазване', lessonId: 'kg-world-domashni-zhivotni' },
          { group: 1, title: 'Мием си ръцете', core: 'Социална и здравословна среда', lessonId: 'kg-world-higiena' },
          { group: 1, title: 'Аз и моето семейство', core: 'Самоутвърждаване и общуване с околните', lessonId: 'kg-world-semeystvo' },
          { group: 2, title: 'Годишните сезони', core: 'Светът на природата и неговото опазване', lessonId: 'kg-world-sezoni' },
          { group: 2, title: 'Светофарът и пешеходната пътека', core: 'Социална и здравословна среда', lessonId: 'kg-world-svetofar' },
          { group: 2, title: 'Диви животни в гората', core: 'Светът на природата и неговото опазване', lessonId: 'kg-world-divi-zhivotni' },
          { group: 3, title: 'Моята родина — България', core: 'Културни и национални ценности', lessonId: 'kg-world-bulgaria' },
          { group: 3, title: 'Професиите', core: 'Социална и здравословна среда', lessonId: 'kg-world-profesii' },
          { group: 3, title: 'Растенията около нас', core: 'Светът на природата и неговото опазване', lessonId: 'kg-world-rasteniya' },
          { group: 4, title: 'Празниците 3 март и 24 май', core: 'Културни и национални ценности', lessonId: 'kg-world-praznitsi' },
          { group: 4, title: 'Скоро ще бъда ученичка', core: 'Социална и здравословна среда', lessonId: 'kg-world-shte-badam-uchenik' },
          { group: 4, title: 'Пазим природата чиста', core: 'Светът на природата и неговото опазване', lessonId: 'kg-world-priroda' }
        ] },
        { id: 'art', name: 'Изобразително изкуство', emoji: '🎨', color: '#c38bff', topics: [
          { group: 1, title: 'Цветовете', core: 'Изобразителни материали и техники', lessonId: 'kg-art-cvetove' },
          { group: 2, title: 'Прави и криви линии', core: 'Изобразителни материали и техники', lessonId: 'kg-art-linii' },
          { group: 3, title: 'Апликация от изрязани форми', core: 'Изобразително творчество', lessonId: 'kg-art-aplikatsiya' },
          { group: 4, title: 'Шевици и мартеници', core: 'Художествено възприемане', lessonId: 'kg-art-shevitsi' }
        ] },
        { id: 'music', name: 'Музика', emoji: '🎵', color: '#ffb84d', topics: [
          { group: 1, title: 'Силно и тихо, високо и ниско', core: 'Елементи на музикалната изразност', lessonId: 'kg-music-silno-tiho' },
          { group: 2, title: 'Музикалните инструменти', core: 'Възприемане', lessonId: 'kg-music-instrumenti' },
          { group: 3, title: 'Марш, валс, хоро и ръченица', core: 'Възприемане', lessonId: 'kg-music-tantsi' },
          { group: 4, title: 'Певец, музикант и слушател', core: 'Възпроизвеждане', lessonId: 'kg-music-pevets' }
        ] },
        { id: 'tech', name: 'Конструиране и технологии', emoji: '🧩', color: '#ff8fb1', topics: [
          { group: 1, title: 'Късаме и лепим хартия', core: 'Обработване на материали', lessonId: 'kg-tech-kasane' },
          { group: 2, title: 'Хартия, плат и природни материали', core: 'Обработване на материали', lessonId: 'kg-tech-materiali' },
          { group: 3, title: 'Сгъваме хартия', core: 'Конструиране и моделиране', lessonId: 'kg-tech-sgavane' },
          { group: 4, title: 'Обличам се сама', core: 'Грижи и инициативност', lessonId: 'kg-tech-oblichane' }
        ] },
        { id: 'pe', name: 'Физическа култура', emoji: '⚽', color: '#5fd068', topics: [
          { group: 1, title: 'Движи се като животните', core: 'Естествено-приложна двигателна дейност', lessonId: 'kg-pe-kato-zhivotnite' },
          { group: 2, title: 'Хвърляме и ловим топка', core: 'Естествено-приложна двигателна дейност', lessonId: 'kg-pe-topka' },
          { group: 3, title: 'Скачаме на въже', core: 'Естествено-приложна двигателна дейност', lessonId: 'kg-pe-vazhe' },
          { group: 4, title: 'Щафетни игри', core: 'Игрова двигателна дейност', lessonId: 'kg-pe-shtafeti' }
        ] }
      ]
    },
    {
      id: 'primary',
      theme: 'primary',
      name: 'Начален етап',
      grades: '1.–4. клас',
      ages: '7–10 години',
      minAge: 7,
      maxAge: 10,
      emoji: '🎒',
      description: 'Четене, писане, смятане и любопитство към света.',
      subjects: [
        { id: 'bel', name: 'Български език и литература', emoji: '📖', color: '#e8505b', grades: '1.–4. клас', topics: [] },
        { id: 'math', name: 'Математика', emoji: '➕', color: '#3a86ff', grades: '1.–4. клас', topics: [] },
        { id: 'english', name: 'Английски език', emoji: '🇬🇧', color: '#8338ec', grades: '2.–4. клас', topics: [] },
        { id: 'world', name: 'Околен свят', emoji: '🌍', color: '#06a77d', grades: '1.–2. клас', topics: [] },
        { id: 'society', name: 'Човекът и обществото', emoji: '🏛️', color: '#f4a259', grades: '3.–4. клас', topics: [] },
        { id: 'nature', name: 'Човекът и природата', emoji: '🌱', color: '#2a9d8f', grades: '3.–4. клас', topics: [] },
        { id: 'cs', name: 'Компютърно моделиране', emoji: '💻', color: '#4361ee', grades: '3.–4. клас', topics: [] },
        { id: 'music', name: 'Музика', emoji: '🎵', color: '#ff9f1c', grades: '1.–4. клас', topics: [] },
        { id: 'art', name: 'Изобразително изкуство', emoji: '🎨', color: '#b5179e', grades: '1.–4. клас', topics: [] },
        { id: 'tech', name: 'Технологии и предприемачество', emoji: '🛠️', color: '#6c757d', grades: '1.–4. клас', topics: [] },
        { id: 'pe', name: 'Физическо възпитание и спорт', emoji: '🏃', color: '#38b000', grades: '1.–4. клас', topics: [] }
      ]
    },
    {
      id: 'middle',
      theme: 'middle',
      name: 'Прогимназиален етап',
      grades: '5.–7. клас',
      ages: '11–13 години',
      minAge: 11,
      maxAge: 13,
      emoji: '🔭',
      description: 'Нови предмети, експерименти и повече самостоятелност.',
      subjects: [
        { id: 'bel', name: 'Български език и литература', emoji: '📖', color: '#e63946', grades: '5.–7. клас', topics: [] },
        { id: 'math', name: 'Математика', emoji: '📐', color: '#1d4ed8', grades: '5.–7. клас', topics: [] },
        { id: 'lang', name: 'Чужд език', emoji: '🗣️', color: '#7c3aed', grades: '5.–7. клас', topics: [] },
        { id: 'cs', name: 'Компютърно моделиране и ИТ', emoji: '💻', color: '#0891b2', grades: '5.–7. клас', topics: [] },
        { id: 'history', name: 'История и цивилизации', emoji: '🏺', color: '#b45309', grades: '5.–7. клас', topics: [] },
        { id: 'geo', name: 'География и икономика', emoji: '🗺️', color: '#15803d', grades: '5.–7. клас', topics: [] },
        { id: 'nature', name: 'Човекът и природата', emoji: '🌿', color: '#0f766e', grades: '5.–6. клас', topics: [] },
        { id: 'bio', name: 'Биология и здравно образование', emoji: '🧬', color: '#16a34a', grades: '7. клас', topics: [] },
        { id: 'chem', name: 'Химия и опазване на околната среда', emoji: '⚗️', color: '#c026d3', grades: '7. клас', topics: [] },
        { id: 'phys', name: 'Физика и астрономия', emoji: '🪐', color: '#4338ca', grades: '7. клас', topics: [] },
        { id: 'music', name: 'Музика', emoji: '🎼', color: '#ea580c', grades: '5.–7. клас', topics: [] },
        { id: 'art', name: 'Изобразително изкуство', emoji: '🖌️', color: '#db2777', grades: '5.–7. клас', topics: [] },
        { id: 'tech', name: 'Технологии и предприемачество', emoji: '🛠️', color: '#475569', grades: '5.–7. клас', topics: [] },
        { id: 'pe', name: 'Физическо възпитание и спорт', emoji: '🏐', color: '#65a30d', grades: '5.–7. клас', topics: [] }
      ]
    },
    {
      id: 'high',
      theme: 'high',
      name: 'Гимназиален етап',
      grades: '8.–12. клас',
      ages: '14–18 години',
      minAge: 14,
      maxAge: 19,
      emoji: '🎓',
      description: 'Задълбочено знание, подготовка за НВО и матури.',
      subjects: [
        { id: 'bel', name: 'Български език и литература', emoji: '📚', color: '#b91c1c', grades: '8.–12. клас', topics: [] },
        { id: 'math', name: 'Математика', emoji: '∑', color: '#1e40af', grades: '8.–12. клас', topics: [] },
        { id: 'lang', name: 'Чужди езици', emoji: '🌐', color: '#6d28d9', grades: '8.–12. клас', topics: [] },
        { id: 'inf', name: 'Информатика', emoji: '⌨️', color: '#0e7490', grades: '8.–10. клас', topics: [] },
        { id: 'it', name: 'Информационни технологии', emoji: '🖥️', color: '#0369a1', grades: '8.–10. клас', topics: [] },
        { id: 'history', name: 'История и цивилизации', emoji: '🏛️', color: '#92400e', grades: '8.–12. клас', topics: [] },
        { id: 'geo', name: 'География и икономика', emoji: '🌍', color: '#166534', grades: '8.–12. клас', topics: [] },
        { id: 'phil', name: 'Философия', emoji: '🤔', color: '#57534e', grades: '8.–10. клас', topics: [] },
        { id: 'bio', name: 'Биология и здравно образование', emoji: '🧬', color: '#15803d', grades: '8.–12. клас', topics: [] },
        { id: 'chem', name: 'Химия и опазване на околната среда', emoji: '🧪', color: '#a21caf', grades: '8.–12. клас', topics: [] },
        { id: 'phys', name: 'Физика и астрономия', emoji: '⚛️', color: '#3730a3', grades: '8.–12. клас', topics: [] },
        { id: 'civic', name: 'Гражданско образование', emoji: '🗳️', color: '#be123c', grades: '11.–12. клас', topics: [] },
        { id: 'music', name: 'Музика', emoji: '🎼', color: '#c2410c', grades: '8.–10. клас', topics: [] },
        { id: 'art', name: 'Изобразително изкуство', emoji: '🖼️', color: '#9d174d', grades: '8.–10. клас', topics: [] },
        { id: 'pe', name: 'Физическо възпитание и спорт', emoji: '🏅', color: '#4d7c0f', grades: '8.–12. клас', topics: [] }
      ]
    },

    // ---------- След училище (ще ги развием след училищните етапи) ----------
    {
      id: 'uni',
      theme: 'uni',
      group: 'after',
      name: 'Университет',
      grades: 'Бакалавър и магистър',
      ages: '18+ години',
      minAge: 20,
      maxAge: 24,
      emoji: '🏛️',
      description: 'Кандидатстване, избор на специалност и основите на висшето образование.',
      subjects: [
        { id: 'apply', name: 'Кандидатстване и избор на специалност', emoji: '🧭', color: '#7c2d12', topics: [] },
        { id: 'math', name: 'Висша математика', emoji: '∫', color: '#1e3a8a', topics: [] },
        { id: 'cs', name: 'Програмиране и компютърни науки', emoji: '👩‍💻', color: '#0f766e', topics: [] },
        { id: 'sciences', name: 'Природни науки', emoji: '🔬', color: '#166534', topics: [] },
        { id: 'humanities', name: 'Хуманитарни науки', emoji: '📜', color: '#6b21a8', topics: [] },
        { id: 'econ', name: 'Икономика', emoji: '📈', color: '#b45309', topics: [] },
        { id: 'law', name: 'Право', emoji: '⚖️', color: '#374151', topics: [] },
        { id: 'skills', name: 'Как да учим: изпити, курсови работи, проекти', emoji: '📝', color: '#be123c', topics: [] }
      ]
    },
    {
      id: 'life',
      theme: 'life',
      group: 'after',
      name: 'Живот',
      grades: 'Практични умения',
      ages: 'за всяка възраст',
      emoji: '🌿',
      description: 'Всичко, на което училището не учи: пари, здраве, дом, документи.',
      subjects: [
        { id: 'money', name: 'Лични финанси', emoji: '💰', color: '#15803d', topics: [] },
        { id: 'health', name: 'Здраве и първа помощ', emoji: '🩺', color: '#dc2626', topics: [] },
        { id: 'cooking', name: 'Готвене', emoji: '🍳', color: '#ea580c', topics: [] },
        { id: 'home', name: 'Дом и ремонти', emoji: '🏠', color: '#a16207', topics: [] },
        { id: 'docs', name: 'Документи и институции', emoji: '🪪', color: '#475569', topics: [] },
        { id: 'driving', name: 'Шофиране и пътна безопасност', emoji: '🚗', color: '#1d4ed8', topics: [] },
        { id: 'mind', name: 'Емоции и отношения', emoji: '💬', color: '#db2777', topics: [] },
        { id: 'digital', name: 'Безопасност в интернет', emoji: '🔐', color: '#0e7490', topics: [] }
      ]
    },
    {
      id: 'business',
      theme: 'business',
      group: 'after',
      name: 'Бизнес',
      grades: 'Предприемачество',
      ages: 'за всяка възраст',
      emoji: '💼',
      description: 'Как се създава, управлява и развива собствен бизнес.',
      subjects: [
        { id: 'idea', name: 'От идея до бизнес', emoji: '💡', color: '#ca8a04', topics: [] },
        { id: 'company', name: 'Регистрация на фирма в България', emoji: '🏢', color: '#334155', topics: [] },
        { id: 'accounting', name: 'Счетоводство и данъци', emoji: '🧾', color: '#0f766e', topics: [] },
        { id: 'marketing', name: 'Маркетинг и продажби', emoji: '📣', color: '#c026d3', topics: [] },
        { id: 'management', name: 'Управление на хора и проекти', emoji: '🤝', color: '#2563eb', topics: [] },
        { id: 'investing', name: 'Инвестиции', emoji: '📊', color: '#16a34a', topics: [] }
      ]
    }
  ]
};
