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

const PersonsInfo = [
  { id: 1,
    topic: 'Подходы к разработке документов территориального планирования',
    lecturer: 'Колонтай А.Н.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/LnznJwep9Jc2o8J?file=/%D0%9A%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B0%D0%B9.png&fileId=4116067&x=1920&y=1200&a=true',
    job: 'Заместитель директора Института Генплана'
  },

  { id: 2,
    topic: 'Современные вызовы устойчивому развитию городов. Тенденции развития. Мировой и отечественный опыт',
    lecturer: 'Данилина Н.В.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/LnznJwep9Jc2o8J?file=/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%B8%D0%BD%D0%B0.png&fileId=4116068&x=1920&y=1200&a=true',
    job: 'д.т.н., член-корр. РААСН, Зав. Кафедры, «Градостроительство» НИУ МГСУ'
  },

  { id: 3,
    topic: 'Анализ и планирование исторических территорий',
    lecturer: 'Верховский Д.А.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/LnznJwep9Jc2o8J?file=/%D0%92%D0%B5%D1%80%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.png&fileId=4116069&x=1920&y=1200&a=true',
    job: 'Начальник мастерской "Планирования и анализа исторических территорий" (МПиАИТ)'
  },

  { id: 4,
    topic: 'Прикладные методы градостроительных исследований / Аналитические инструменты решения задач территориального управления',
    lecturer: 'Мустафин Г.М.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/NZm3frQsDZFanJH?x=1908&y=739&a=true&file=%25D0%259C%25D1%2583%25D1%2581%25D1%2582%25D0%25B0%25D1%2584%25D0%25B8%25D0%25BD.png&scalingup=0',
    job: 'Советник директора Института Генплана Москвы'
  },

  { id: 5,
    topic: 'Развитие транспортных систем города',
    lecturer: 'Крестмейн М.Г.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/c4PjHLLqpaFpwrD?x=1908&y=739&a=true&file=%25D0%259A%25D1%2580%25D0%25B5%25D1%2581%25D1%2582%25D0%25BC%25D0%25B5%25D0%25B9%25D0%25BD.png&scalingup=0',
    job: 'Главный инженер Института Генплана Москвы'
  },

  { id: 6,
    topic: 'Определение перспективной экономической специализации территорий города исходя из анализа кластеризации существующих экономических комплексов',
    lecturer: 'Гук Т.Н.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/LnznJwep9Jc2o8J?file=/%D0%93%D1%83%D0%BA.png&fileId=4116072&x=1920&y=1200&a=true',
    job: 'Директор Института Генплана Москвы'
  },

  { id: 7,
    topic: 'Управление проектами территориального развития и взаимодействие с жителями',
    lecturer: 'Пенкин А.С.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/LnznJwep9Jc2o8J?file=/%D0%9F%D0%B5%D0%BD%D0%BA%D0%B8%D0%BD.png&fileId=4116073&x=1920&y=1200&a=true',
    job: 'Начальник управления маркетинга Института Генплана Москвы'
  },

  { id: 8,
    topic: 'Новеллы и актуальное правоприменение градостроительного законодательства',
    lecturer: 'Валяев О.В.',
    lecturerPhoto: 'https://nc.genplanmos.ru/index.php/apps/files_sharing/publicpreview/wb3cGt24XmBSAJB?x=1908&y=739&a=true&file=%25D0%2592%25D0%25B0%25D0%25BB%25D1%258F%25D0%25B5%25D0%25B2.png&scalingup=0',
    job: 'Начальник управления правовой базы градостроительства'
  },
]

const lectionInfo = [
  { 
    id: '1',
    chapter: '«Элементы градостроительства и документы территориального планирования в управлении городским пространством»',
    chapterInfo: '(2 лекции) ',
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
    chapter: '«Элементы градостроительства и документы территориального планирования в управлении городским пространством»',
    chapterInfo: '(3 лекции)',
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
        lecturer: 'Валяев О.В.'
      }
    ]
  },
  {
    id: '3',
    chapter: '«Городское транспортное планирование»',
    chapterInfo: '(2 лекции)',
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
    chapter: ' «Экология и благоустройство городских территорий»',
    chapterInfo: '(4 лекции)',
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
      },
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
  }
]

const vebinarsInfo = [
  { 
    id: '1',
    chapter: '«Подходы к разработке документов территориального планирования»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Развитие города от древнего мира до наших дней: исторические аспекты',
          'Влияние развития рельсового транспорта на формирование структуры города',
          'Уплотнение застройки и строительство социального жилья как основные факторы урбанизации'
          ],
        lecturer: 'Колонтай А.Н.'
      }
    ]
  },
  {
     id: '2',
    chapter: '«Современные вызовы устойчивому развитию городов. Тенденции развития. Мировой и отечественный опыт»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Система градостроительной документации в соответствии с Град кодексом РФ',
          'Документы, смежные с град документацией и влияющие на град деятельность',
          'Практика использования град документации',
          'Новые виды град документации, не включенные в систему ГК РФ.'
          ],
        lecturer: 'Данилина Н.В.'
      }
    ]
  },
  {
    id: '3',
    chapter: '«Анализ и планирование исторических территорий»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Взаимодействие на стадии разработки документов территориального планирования',
          'Структура программы развития транспортного комплекса московского региона',
          'Этапы развития транспортной инфраструктуры'          
          ],
        lecturer: 'Верховский Д.А.'
      }
    ]
  },

  {
    id: '4',
    chapter: '«Прикладные методы градостроительных исследований / Аналитические инструменты решения задач территориального управления»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Комплексная  оценка территории по источникам воздействия',
          'Принципы и подходы экодиоганстического анализа территории',
          'Оценка экологической напряженности территории по планировочным районам на примере Москвы',
          'Урбоэкодиагностика территории для условий строительства',
          'Алгоритм матричного ранжирования территории'
          ],
        lecturer: 'Мустафин Г.М.'
      }
    ]
  },
  {
    id: '5',
    chapter: '«Развитие транспортных систем города»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Принципы формирования общественных пространств в европейских городах',
          'Типология общественных пространств',
          'Современная история пешеходного года',
          'Сопоставление европейского и российского опыта работы с общественными пространствами'
          ],
        lecturer: 'Крестмейн М.Г.'
      }
    ]
  },
  {
    id: '6',
    chapter: '«Определение перспективной экономической специализации территорий города исходя из анализа кластеризации существующих экономических комплексов»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Принципы формирования общественных пространств в европейских городах',
          'Типология общественных пространств',
          'Современная история пешеходного года',
          'Сопоставление европейского и российского опыта работы с общественными пространствами'
          ],
        lecturer: 'Гук Т.Н.'
      }
    ]
  },
  {
    id: '7',
    chapter: '«Управление проектами территориального развития и взаимодействие с жителями»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Принципы формирования общественных пространств в европейских городах',
          'Типология общественных пространств',
          'Современная история пешеходного года',
          'Сопоставление европейского и российского опыта работы с общественными пространствами'
          ],
        lecturer: 'Пенкин А.С.'
      }
    ]
  },  
  {
    id: '8',
    chapter: '«Новеллы и актуальное правоприменение градостроительного законодательства»',
    chapterInfo: '',
    lecture: [
      {
        thesis: [
          'Принципы формирования общественных пространств в европейских городах',
          'Типология общественных пространств',
          'Современная история пешеходного года',
          'Сопоставление европейского и российского опыта работы с общественными пространствами'
          ],
        lecturer: 'Валяев О.В.'
      }
    ]
  },

]

const faqInfo = [
  {
    id: '1',
    question: 'нужно ли готовиться к обучению?',
    answer: 'Никакой дополнительной подготовки для слушателя курса не требуется.'
  },
  {
    id: '2',
    question: 'к чему останется доступ после окончания учёбы?',
    answer: 'Доступ к записям лекций и вебинаров остается на 3 месяца. Доступ к презентациям навсегда.'
  },
  {
    id: '3',
    question: 'как можно оплатить курс?',
    answer: 'Уточняется по запросу'
  },
  {
    id: '4',
    question: 'сколько времени нужно будет выделить на обучение?',
    answer: 'На обучение отводится 72 академических часа.'
  }
]

export { AboutCardData, PersonsInfo, lectionInfo, vebinarsInfo, faqInfo };
