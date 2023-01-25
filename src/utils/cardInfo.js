const AboutCardData = [
  { id: 1,
    title: 'Для кого наш курс',
    info: [
      'Муниципальные служащие департаментов, связанных с городским устройством (департамент архитектуры и градостроительства, землепользования, экономической политики);',
      'Сотрудники региональных профильных комитетов/министерств'
    ]
  },
  { id: 2,
    title: 'Что вам даст наш курс?',
    info: [
      'Повышение уровня осведомленности о практиках планирования и управления.',
      'Понимание различного опыта и развилок в решении тех или иных проблем городского планирования.',
      'Обобщение и анализ опыта разработки и реализации градостроительных решений.',
      'Повышение эффективности территориального управления на муниципальном уровне.'
    ]
  },
  { id: 3,
    title: 'Кто преподает?',
    info: [
      'Преподаватели курса архитекторы и инженеры Института Генплана Москвы с большим практическим опытом проектирования, научные сотрудники МГСУ.'
    ]
  },
  { id: 4,
    title: 'Как проходит обучение?',
    info: [
      'Обучение полностью походит онлайн.',
      'Для самостоятельного изучения по каждому блоку вам будет предоставлен список литературы.',
      'В течение недели для просмотра открываются две записанные лекции',
      'Один раз в неделю проходит онлайн-семинар, в рамках которого преподавателю можно задавать вопросы.',
      'Аттестация проводится в формате финального теста, который состоит из 50 вопросов по программе.',
    ]
  },
  { id: 5,
    title: 'График и стоимость обучения',
    info: [
      'Обучение длится 2 месяца, 72 ак. ч.',
      'Занятия проходят 3 раза в неделю на платформе МГСУ. ',
      'Стоимость обучения: 30 тыс. рублей'
    ]
  }
];

const VebinarsData = [
  { id: 1,
    topic: 'Тема 1. Подходы к разработке документов территориального планирования',
    lecturer: 'Колонтай А.Н.',
    lecturerPhoto: 'https://genplanmos.ru/download/aleksandr-nikolaevich-kolontaj/',
    organizer: 'МГСУ'
  },

  { id: 2,
    topic: 'Тема 2. Современные вызовы устойчивому развитию городов. Тенденции развития. Мировой и отечественный опыт',
    lecturer: 'Данилина Н.В.',
    lecturerPhoto: 'https://genplanmos.ru/download/aleksandr-nikolaevich-kolontaj/',
    organizer: 'МГСУ'
  },

  { id: 3,
    topic: 'Тема 3. Анализ и планирование исторических территорий',
    lecturer: 'Верховский Д.А.',
    lecturerPhoto: 'https://genplanmos.ru/download/aleksandr-nikolaevich-kolontaj/',
    organizer: 'Институт Генплана Москвы'
  },

  { id: 4,
    topic: 'Тема 4. Прикладные методы градостроительных исследований / Аналитические инструменты решения задач территориального управления',
    lecturer: 'Мустафин Г.М.',
    lecturerPhoto: 'https://genplanmos.ru/static/thumbs/75/28/112x112_2_normal_0de40fe58257862f1859ef631d77.jpg',
    organizer: 'Институт Генплана Москвы'
  },

  { id: 5,
    topic: 'Тема 5. Развитие транспортных систем города',
    lecturer: 'Крестмейн М.Г.',
    lecturerPhoto: 'https://genplanmos.ru/static/thumbs/85/d0/190x190_2_normal_d76f61d5185466b67071c45f64ff.png',
    organizer: 'Институт Генплана Москвы'
  },

  { id: 6,
    topic: 'Тема 6. Определение перспективной экономической специализации территорий города исходя из анализа кластеризации существующих экономических комплексов',
    lecturer: 'Гук Т.Н.',
    lecturerPhoto: 'https://genplanmos.ru/static/thumbs/fe/14/190x190_2_normal_3b1a5d75d46da7ee4a1867816192.png',
    organizer: 'Институт Генплана Москвы'
  },

  { id: 7,
    topic: 'Тема 7. Управление проектами территориального развития и взаимодействие с жителями',
    lecturer: 'Пенкин А.С.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/9NixL6M8RTeBtHK?x=1908&y=739&a=true&file=%25D0%259F%25D0%25B5%25D0%25BD%25D0%25BA%25D0%25B8%25D0%25BD.png&scalingup=0',
    organizer: 'Институт Генплана Москвы'
  },

  { id: 8,
    topic: 'Тема 8. Новеллы и актуальное правоприменение градостроительного законодательства',
    lecturer: 'Валяев О.В.',
    lecturerPhoto: 'https://genplanmos.ru/download/aleksandr-nikolaevich-kolontaj/',
    organizer: 'Институт Генплана Москвы'
  },
]

const chaptersInfo = [
  { 
    id: '1',
    chapter: 'часть 1. (2 лекции) «Элементы градостроительства и документы территориального планирования в управлении городским пространством»',
    lecture: [
      {
        topic: 'Система расселения как производное от экономической модели',
        thesis: [
          'Развитие города от древнего мира до наших дней: исторические аспекты',
          'Влияние развития рельсового транспорта на формирование структуры города',
          'Уплотнение застройки и строительство социального жилья как основные факторы урбанизации'
          ],
        lecturer: 'Перов М.В.'
      },
      {
        topic: 'Генеральный план и ПЗЗ: практика применения для решения городских проблем',
        thesis: [
          'Правила землепользования и застройки как основной инструмент регулирования в системе управления территорией ',
          'Документ градостроительного зонирования: как использовать в управлении городскими территориями.',
          'Функциональное назначение территории'
          ],
        lecturer: 'Терехова Т. А.'
      }
    ]
  },
  {
     id: '2',
    chapter: 'часть 2. (3 лекции) «Элементы градостроительства и документы территориального планирования в управлении городским пространством»',
    lecture: [
      {
        topic: 'Теория системы градостроительной документации',
        thesis: [
          'Система градостроительной документации в соответствии с Град кодексом РФ',
          'Документы, смежные с град документацией и влияющие на град деятельность',
          'Практика использования град документации',
          'Новые виды град документации, не включенные в систему ГК РФ.'
          ],
        lecturer: 'Сычева В.С.'
      },
      {
        topic: 'Формирование технического задания на разработку эффективной системы градостроительной документации',
        thesis: [
          'Структура документов в ТЗ. Параллельная этапность',
          'Формирование рабочей группы для рассмотрения документов. Взаимодействие с рабочей группой. Проведение дополнительной экспертизы',
          'Включение социологического исследования',
          'Включение стратегии (мастер-плана) в состав разрабатываемых документов',
          'Порядок согласования',
          'Порядок оплаты'
          ],
        lecturer: 'Терехова Т. А.'
      },
      {
        topic: 'Правовые основы верхнеуровневой градостроительной документации.',
        thesis: [
          'Карта градостроительного зонирования',
          'Порядок применения и внесения изменений в ПЗЗ',
          'Специфика генплана города федерального значения',
          ],
        lecturer: 'Терехова Т. А.'
      }
    ]
  },
  {
    id: '3',
    chapter: 'часть 3. (2 лекции) «Городское транспортное планирование»',
    lecture: [
      {
        topic: 'Территориальное и транспортное планирование: базовые понятия',
        thesis: [
          'Взаимодействие на стадии разработки документов территориального планирования',
          'Структура программы развития транспортного комплекса московского региона',
          'Этапы развития транспортной инфраструктуры'          
          ],
        lecturer: 'Бахирев И.А.'
      },
      {
        topic: 'Транспортные проблемы современных городов',
        thesis: [
          'Основные причины возникновения транспортных проблем',
          'Подходы в решении транспортных проблем',
          'Общественных транспорт в российских городах',
          'Основы устойчивого развития современных систем городского транспорта'
          ],
        lecturer: 'Бахирев И.А.'
      }      
    ]
  },

  {
    id: '4',
    chapter: 'часть 4.1 (2 лекции) «Экология и благоустройство городских территорий»',
    lecture: [
      {
        topic: 'Экодиагностика урбанизированных территорий',
        thesis: [
          'Комплексная  оценка территории по источникам воздействия',
          'Принципы и подходы экодиоганстического анализа территории',
          'Оценка экологической напряженности территории по планировочным районам на примере Москвы',
          'Урбоэкодиагностика территории для условий строительства',
          'Алгоритм матричного ранжирования территории'
          ],
        lecturer: 'Ивашкина И.В.'
      },
      {
        topic: 'Экологические ограничения в градостроительном проектировании ',
        thesis: [
          'Экологическое информационное обеспечение',
          'Зоны с особыми условиями использования территории',
          'Ограничения, связанные с охраной водных объектов',
          'Сокращение негативного воздействия производственных объектов',
          'Матрица возможностей использования территории под различные функции'
          ],
        lecturer: 'Ивашкина И.В.'
      }      
    ]
  },
  {
    id: '5',
    chapter: 'часть 4.2 (2 лекции) «Экология и благоустройство городских территорий»',
    lecture: [
      {
        topic: 'Создание современных общественных пространств: мировой опыт',
        thesis: [
          'Принципы формирования общественных пространств в европейских городах',
          'Типология общественных пространств',
          'Современная история пешеходного года',
          'Сопоставление европейского и российского опыта работы с общественными пространствами'
          ],
        lecturer: 'Иванова А.А.'
      },
      {
        topic: 'Формирование и развитие общественных пространств в российских городах',
        thesis: [
          'Градостроительные походы к благоустройству',
          'Принципы работы с общественными пространствами',
          'Вовлечение жителей в проекты благоустройства городских пространств',
          'Конкурсные проекты концепций развития общественных пространств и основные требования к ним'
          ],
        lecturer: 'Иванова А.А.'
      }      
    ]
  },

]

const faqInfo = [
  {
    id: '1',
    question: 'нужно ли готовиться к обучению?',
    answer: 'Задача организации, в особенности же начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки дальнейших направлений развития. '
  },
  {
    id: '2',
    question: 'к чему останется доступ после окончания учёбы?',
    answer: 'Таким образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.'
  },
  {
    id: '3',
    question: 'что мне даст сертификат о прохождении курса?',
    answer: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции требуют определения и уточнения дальнейших направлений развития. '
  },
  {
    id: '4',
    question: 'как можно оплатить курс?',
    answer: 'Идейные соображения высшего порядка, а также консультация с широким активом способствует подготовки и реализации дальнейших направлений развития.'
  },
  {
    id: '5',
    question: 'сколько времени нужно будет выделить на обучение?',
    answer: 'Разнообразный и богатый опыт новая модель организационной деятельности позволяет выполнять важные задания по разработке модели развития. С другой стороны реализация намеченных плановых заданий требуют определения и уточнения модели развития.'
  }
]

export { AboutCardData, VebinarsData, chaptersInfo, faqInfo };

