// Учебна програма по етапи, според българската образователна система.
// Всеки предмет има списък с теми; тема с `lessonId` води към готов урок.
window.CURRICULUM = {
  stages: [
    {
      id: 'kg',
      theme: 'kg',
      name: 'Детска градина',
      grades: '1.–4. група',
      ages: '3–6 години',
      minAge: 0,
      maxAge: 6,
      emoji: '🧸',
      description: 'Игри, картинки и първите стъпки в ученето.',
      subjects: [
        { id: 'bel', name: 'Български език', emoji: '🔤', color: '#ff7a59', topics: [
          { title: 'Звуци около нас' },
          { title: 'Буквите в моето име' },
          { title: 'Приказки и стихчета' }
        ] },
        { id: 'math', name: 'Математика', emoji: '🔢', color: '#5ec8f2', topics: [
          { title: 'Да броим до 5', lessonId: 'kg-math-broim-do-5' },
          { title: 'Да броим до 10' },
          { title: 'Кръг, квадрат и триъгълник' },
          { title: 'Голямо и малко' },
          { title: 'Повече и по-малко' }
        ] },
        { id: 'world', name: 'Околен свят', emoji: '🌳', color: '#7bdcb5', topics: [
          { title: 'Сезоните' },
          { title: 'Домашни и диви животни' },
          { title: 'Моето семейство' }
        ] },
        { id: 'art', name: 'Изобразително изкуство', emoji: '🎨', color: '#c38bff', topics: [] },
        { id: 'music', name: 'Музика', emoji: '🎵', color: '#ffb84d', topics: [] },
        { id: 'tech', name: 'Конструиране и технологии', emoji: '🧩', color: '#ff8fb1', topics: [] },
        { id: 'pe', name: 'Физическа култура', emoji: '⚽', color: '#5fd068', topics: [] }
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
    }
  ]
};
