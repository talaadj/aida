
import { Language } from '../types';

interface FAQ {
  question: string;
  answer: string;
}

interface Branch {
  city: string;
  address: string;
  phone: string;
  mapEmbedUrl: string;
}

interface TranslationData {
  ui: {
    title: string;
    subtitle: string;
    navTests: string;
    navAbout: string;
    navLocations: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    btnSpeak: string;
    btnView: string;
    trustedBy: string;
    chatTitle: string;
    chatPower: string;
    inputPlaceholder: string;
    welcomeMessage: string;
    servicesTitle: string;
    servicesDesc: string;
    footerRights: string;
    support: string;
    faq: string;
    aboutTitle: string;
    aboutDesc: string;
    locationsTitle: string;
    locationsDesc: string;
    searchPlaceholder: string;
    noResults: string;
    viewOnMap: string;
    callBranch: string;
    onlineBadge: string;
    btnAsk: string;
    statExperience: string;
    statTests: string;
    btnDetails: string;
    feedbackTitle: string;
    feedbackSuccessTitle: string;
    feedbackSuccessDesc: string;
    feedbackFormDesc: string;
    feedbackPlaceholder: string;
    btnCancel: string;
    btnSend: string;
    // Referral Form
    btnGetReferral: string;
    btnGetResults: string;
    referralTitle: string;
    referralSubtitle: string;
    referralPatient: string;
    referralDoctor: string;
    referralBirthDate: string;
    referralDate: string;
    referralClinic: string;
    referralFasting: string;
    referralPrice: string;
    referralBloodSampling: string;
    referralResults: string;
    referralClinicPlaceholder: string;
    referralOther: string;
    referralLicense: string;
    btnPrint: string;
    aiThinking: string;
  };
  faqs: FAQ[];
  chips: { id: string; label: string; prompt: string }[];
  branches: Branch[];
  referralDrugs: string[];
}

const COMMON_PHONE = '+7 707 566 8899';
const DEMO_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7!2d76.9!3d43.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzM0LjUiTiA3NsKwNTUnMjguNiJF!5e0!3m2!1sen!2skz!4v1625637281934!5m2!1sen!2skz";

export const TRANSLATIONS: Record<Language, TranslationData> = {
  ru: {
    ui: {
      title: 'AllergoExpress',
      subtitle: 'Immunolab',
      navTests: 'Анализы',
      navAbout: 'О нас',
      navLocations: 'Адреса',
      heroTitle: 'Экспресс Анализ',
      heroSubtitle: 'на Аллергию',
      heroDesc: 'Определение специфического IgE (ИФА) к лекарственным препаратам (анестетики, антибиотики). Результаты в день обращения.',
      btnSpeak: 'Голосовой режим',
      btnView: 'Список препаратов',
      trustedBy: 'Точные результаты 88-95%',
      chatTitle: 'Мед-Ассистент',
      chatPower: 'Immunolab AI',
      inputPlaceholder: 'Какой препарат проверить?',
      welcomeMessage: 'Здравствуйте! Я помогу с подготовкой к анализу на анестетики и антибиотики. Что вас интересует?',
      servicesTitle: 'Наши Услуги',
      servicesDesc: 'Специализированная диагностика лекарственной аллергии методом ИФА.',
      footerRights: 'Все права защищены.',
      support: 'Поддержка',
      faq: 'Важная информация',
      aboutTitle: 'О Лаборатории',
      aboutDesc: 'Immunolab специализируется на экспресс-диагностике аллергии к местным анестетикам (Артикаин, Лидокаин и др.) и антибиотикам. Мы обеспечиваем высокую точность (88-95%) и выдаем результаты в день обращения (при сдаче до обеда).',
      locationsTitle: 'Наши Филиалы',
      locationsDesc: '13 отделений по городу Алматы и области.',
      searchPlaceholder: 'Поиск по улице...',
      noResults: 'Филиал не найден',
      viewOnMap: 'Показать на карте',
      callBranch: 'Позвонить',
      onlineBadge: 'ИИ Ассистент 24/7',
      btnAsk: 'Спросить Ассистента',
      statExperience: 'Лет Опыта',
      statTests: 'Проведенных Тестов',
      btnDetails: 'Подробнее',
      feedbackTitle: 'Поддержка',
      feedbackSuccessTitle: 'Отправлено!',
      feedbackSuccessDesc: 'Мы свяжемся с вами в ближайшее время.',
      feedbackFormDesc: 'Оставьте сообщение администратору клиники.',
      feedbackPlaceholder: 'Напишите ваш вопрос или проблему...',
      btnCancel: 'Отмена',
      btnSend: 'Отправить',
      // Referral
      btnGetReferral: 'Получить Направление',
      btnGetResults: 'Получить Результаты',
      referralTitle: 'НАПРАВЛЕНИЕ',
      referralSubtitle: 'на определение спец. IgE ИФА методом 88-95%',
      referralPatient: 'Ф.И.О. Пациента',
      referralDoctor: 'Врач',
      referralBirthDate: 'Дата рождения',
      referralDate: 'Дата',
      referralClinic: 'Клиника',
      referralFasting: 'Строго натощак, за 3 дня исключить прием антигистаминных препаратов',
      referralPrice: 'СТОИМОСТЬ ЗА ОДИН ПРЕПАРАТ - 5500 ТЕНГЕ',
      referralBloodSampling: 'ЗАБОР КРОВИ ОПЛАЧИВАЕТСЯ ОТДЕЛЬНО',
      referralResults: 'ВЫДАЧА РЕЗУЛЬТАТОВ В ДЕНЬ ОБРАЩЕНИЯ В 17:00',
      referralClinicPlaceholder: '________________________________________',
      referralOther: 'Другое',
      referralLicense: 'Лицензия № 19022683 от 25.11.2019г.',
      btnPrint: 'Скачать PDF',
      aiThinking: 'ИИ думает...',
    },
    faqs: [
      {
        question: 'Сколько стоит анализ?',
        answer: 'Стоимость за ОДИН препарат — 5500 тенге. Забор крови оплачивается отдельно.'
      },
      {
        question: 'Как подготовиться?',
        answer: 'Строго натощак. За 3 дня ИСКЛЮЧИТЬ прием антигистаминных препаратов (от аллергии).'
      },
      {
        question: 'Когда будут результаты?',
        answer: 'Выдача результатов в день обращения в 17:00.'
      },
      {
        question: 'Артикаин Гидрохлорид 4%',
        answer: 'Местный анестетик, часто используется в стоматологии. Стоимость: 5500 тг.'
      },
      {
        question: 'Цефалоспорин',
        answer: 'Группа антибиотиков (Цефтриаксон, Цефазолин и др.). Стоимость: 5500 тг.'
      },
      {
        question: 'Амоксициллин',
        answer: 'Антибиотик пенициллинового ряда широкого спектра. Стоимость: 5500 тг.'
      },
      {
        question: 'Азитромицин',
        answer: 'Антибиотик группы макролидов. Стоимость: 5500 тг.'
      },
      {
        question: 'Диклофенак',
        answer: 'Нестероидное противовоспалительное средство (НПВС). Стоимость: 5500 тг.'
      },
      {
        question: 'Ибупрофен',
        answer: 'Обезболивающее и жаропонижающее средство (НПВС). Стоимость: 5500 тг.'
      },
      {
        question: 'Кетопрофен',
        answer: 'Сильное обезболивающее средство (Кетонал). Стоимость: 5500 тг.'
      },
      {
        question: 'Парацетамол',
        answer: 'Распространенное жаропонижающее средство. Стоимость: 5500 тг.'
      }
    ],
    chips: [
      { id: 'price', label: '💰 Цена анализа', prompt: 'Сколько стоит анализ на один препарат?' },
      { id: 'prep', label: '📋 Подготовка', prompt: 'Как готовиться? Нужно ли отменять лекарства?' },
      { id: 'list', label: '💉 Список лекарств', prompt: 'На какие анестетики и антибиотики можно сдать анализ?' },
    ],
    branches: [
      { city: 'Алматы', address: 'Immunolab: пр. Достык, 106 Б (пересекает пр. Абая, за гост. Novotel)', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'МЦ Tau Sunkar: ул. Розыбакиева, 33 А', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'МЦ New Med: мкр. 10 А, 22 А', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'МЦ Home Med Clinic: ул. Маметова, 30', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'МЦ Доктор Калимолдаева: ул. Кенесары Хана, 54/11', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'МЦ Istanbul Diagnostic Center: ул. Гоголя, 52', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'МЦ АдкМед: ул. Туркебаева, 257 Е', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach clinic: пр-т Назарбаева, 257 Е', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach clinic: пр-т Назарбаева, 111', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach clinic: мкр. 6, д. 16', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach (Педиатрия): мкр. Самал-2, ул. Мендикулова, 49', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach (Педиатрия): ул. Кабанбай батыра, 122 А', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Каскелен', address: 'МЦ Жасмин: пер. Абая, 14', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
    ],
    referralDrugs: [
      'Артикаин Гидрохлорид 4%, Huons Co., Ltd., Корея',
      'Артикаин 4%+эпинефрин 1:100 000, Испания, ИНИБСА',
      'Мепивастезин 3%, 3M ESPE, Германия',
      'Ораблок 1:100 000 / красный, Pierrel S.P.A., Италия',
      'Ораблок 1:200 000 / синий, Pierrel S.P.A., Италия',
      'Септанест с адреналином 1:100 000, «синий», Septodont, Франция',
      'Септанест с адреналином 1:200 000, «зеленый», Septodont, Франция',
      'Убистезин 4% форте, 3M ESPE, Германия',
      'Убистезин 4%, 3M ESPE, Германия / красный',
      'с 68 Ультракаин / Артикаин',
      'с 88 Мепивакаин',
      'с 82 Лидокаин',
      'с 83 Новокаин',
      'с 196 Эпинефрин',
      'с 206 Цефалоспорин',
      'с 204 Амоксициллин',
      'с 281 Диклофенак',
      'с 286 Ибупрофен',
      'с 194 Азитромицин',
      'с 172 Кетопрофен',
      'с 20 Парацетамол'
    ]
  },
  kk: {
    ui: {
      title: 'AllergoExpress',
      subtitle: 'Immunolab',
      navTests: 'Талдаулар',
      navAbout: 'Біз туралы',
      navLocations: 'Мекенжайлар',
      heroTitle: 'Аллергияға',
      heroSubtitle: 'Экспресс Талдау',
      heroDesc: 'Дәрілік препараттарға (анестетиктер, антибиотиктер) спецификалық IgE анықтау. Нәтижесі бір күнде дайын болады.',
      btnSpeak: 'Дауыстық режим',
      btnView: 'Препараттар',
      trustedBy: 'Дәлдік 88-95%',
      chatTitle: 'Көмекші',
      chatPower: 'Immunolab AI',
      inputPlaceholder: 'Қандай препаратты тексеру керек?',
      welcomeMessage: 'Сәлеметсіз бе! Анестетиктер мен антибиотиктерге талдау тапсыруға көмектесемін. Сізді не қызықтырады?',
      servicesTitle: 'Біздің Қызметтер',
      servicesDesc: 'ИФА әдісімен дәрілік аллергияны арнайы диагностикалау.',
      footerRights: 'Барлық құқықтар қорғалған.',
      support: 'Қолдау',
      faq: 'Маңызды ақпарат',
      aboutTitle: 'Зертхана туралы',
      aboutDesc: 'Immunolab жергілікті анестетиктерге (Артикаин, Лидокаин) және антибиотиктерге аллергияны экспресс-диагностикалауға маманданған. Біз жоғары дәлдікті (88-95%) қамтамасыз етеміз және нәтижелерді сол күні береміз (түске дейін тапсырғанда).',
      locationsTitle: 'Біздің Филиалдар',
      locationsDesc: 'Алматы қаласы мен облысы бойынша 13 бөлімше.',
      searchPlaceholder: 'Көше бойынша іздеу...',
      noResults: 'Филиал табылмады',
      viewOnMap: 'Картадан көрсету',
      callBranch: 'Қоңырау шалу',
      onlineBadge: 'AI Ассистент 24/7',
      btnAsk: 'Ассистенттен сұрау',
      statExperience: 'Жылдық тәжірибе',
      statTests: 'Жүргізілген тесттер',
      btnDetails: 'Толығырақ',
      feedbackTitle: 'Қолдау',
      feedbackSuccessTitle: 'Жіберілді!',
      feedbackSuccessDesc: 'Біз сізбен жақын арада байланысамыз.',
      feedbackFormDesc: 'Клиника әкімшісіне хабарлама қалдырыңыз.',
      feedbackPlaceholder: 'Сұрағыңызды жазыңыз...',
      btnCancel: 'Болдырмау',
      btnSend: 'Жіберу',
      // Referral
      btnGetReferral: 'Жолдама Алу',
      btnGetResults: 'Нәтижені Алу',
      referralTitle: 'ЖОЛДАМА',
      referralSubtitle: '88-95% әдісімен арнайы IgE ИФА анықтауға',
      referralPatient: 'Науқастың Аты-жөні',
      referralDoctor: 'Дәрігер',
      referralBirthDate: 'Туған күні',
      referralDate: 'Күні',
      referralClinic: 'Клиника',
      referralFasting: 'Қатаң түрде аш қарынға, 3 күн бұрын антигистамин қабылдауды тоқтату',
      referralPrice: 'БІР ПРЕПАРАТТЫҢ ҚҰНЫ - 5500 ТЕҢГЕ',
      referralBloodSampling: 'ҚАН АЛУ БӨЛЕК ТӨЛЕНЕДІ',
      referralResults: 'НӘТИЖЕЛЕР САҒАТ 17:00-ДЕ БЕРІЛЕДІ',
      referralClinicPlaceholder: '________________________________________',
      referralOther: 'Басқа',
      referralLicense: 'Лицензия № 19022683, 25.11.2019 ж.',
      btnPrint: 'PDF Жүктеу',
      aiThinking: 'AI ойлануда...',
    },
    faqs: [
      {
        question: 'Анализ қанша тұрады?',
        answer: 'БІР препараттың құны — 5500 теңге. Қан алу бөлек төленеді.'
      },
      {
        question: 'Қалай дайындалу керек?',
        answer: 'Аш қарынға. 3 күн бұрын антигистаминдік препараттарды (аллергияға қарсы) тоқтату керек.'
      },
      {
        question: 'Нәтиже қашан дайын болады?',
        answer: 'Нәтижелер сол күні сағат 17:00-де дайын болады.'
      },
       {
        question: 'Артикаин Гидрохлорид 4%',
        answer: 'Стоматологияда жиі қолданылатын жергілікті анестетик. Бағасы: 5500 тг.'
      },
      {
        question: 'Цефалоспорин',
        answer: 'Антибиотиктер тобы (Цефтриаксон, Цефазолин және т.б.). Бағасы: 5500 тг.'
      },
      {
        question: 'Амоксициллин',
        answer: 'Кең спектрлі пенициллин қатарындағы антибиотик. Бағасы: 5500 тг.'
      },
      {
        question: 'Азитромицин',
        answer: 'Макролидтер тобының антибиотигі. Бағасы: 5500 тг.'
      },
      {
        question: 'Диклофенак',
        answer: 'Қабынуға қарсы стероидты емес дәрі (ҚҚСД). Бағасы: 5500 тг.'
      },
      {
        question: 'Ибупрофен',
        answer: 'Ауырсынуды басатын және ыстықты түсіретін дәрі (ҚҚСД). Бағасы: 5500 тг.'
      },
      {
        question: 'Кетопрофен',
        answer: 'Күшті ауырсынуды басатын дәрі (Кетонал). Бағасы: 5500 тг.'
      },
      {
        question: 'Парацетамол',
        answer: 'Кең таралған ыстықты түсіретін дәрі. Бағасы: 5500 тг.'
      }
    ],
    chips: [
      { id: 'price', label: '💰 Анализ бағасы', prompt: 'Бір препаратқа анализ қанша тұрады?' },
      { id: 'prep', label: '📋 Дайындық', prompt: 'Қалай дайындалу керек? Дәріні тоқтату керек пе?' },
      { id: 'list', label: '💉 Дәрілер тізімі', prompt: 'Қандай анестетиктер мен антибиотиктерге тапсыруға болады?' },
    ],
    branches: [
      { city: 'Алматы', address: 'Immunolab: Достық даңғылы, 106 Б (Абай даңғылымен қиылысы)', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Tau Sunkar МО: Розыбакиева к-сі, 33 А', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'New Med МО: 10 А шағын ауданы, 22 А', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Home Med Clinic: Маметова к-сі, 30', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Доктор Калимолдаева МО: Кенесары Хан к-сі, 54/11', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Istanbul Diagnostic Center: Гоголь к-сі, 52', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'АдкМед МО: Түркебаева к-сі, 257 Е', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach clinic: Назарбаев даңғылы, 257 Е', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach clinic: Назарбаев даңғылы, 111', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach clinic: 6 шағын ауданы, 16 үй', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach (Педиатрия): Самал-2 ықшам ауданы, Меңдіқұлова к-сі, 49', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Алматы', address: 'Interteach (Педиатрия): Қабанбай батыра к-сі, 122 А', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Қаскелең', address: 'Жасмин МО: Абай тұйық көшесі, 14', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
    ],
    referralDrugs: [
      'Артикаин Гидрохлорид 4%, Huons Co., Ltd., Корея',
      'Артикаин 4%+эпинефрин 1:100 000, Испания, ИНИБСА',
      'Мепивастезин 3%, 3M ESPE, Германия',
      'Ораблок 1:100 000 / красный, Pierrel S.P.A., Италия',
      'Ораблок 1:200 000 / синий, Pierrel S.P.A., Италия',
      'Септанест с адреналином 1:100 000, «синий», Septodont, Франция',
      'Септанест с адреналином 1:200 000, «зеленый», Septodont, Франция',
      'Убистезин 4% форте, 3M ESPE, Германия',
      'Убистезин 4%, 3M ESPE, Германия / красный',
      'с 68 Ультракаин / Артикаин',
      'с 88 Мепивакаин',
      'с 82 Лидокаин',
      'с 83 Новокаин',
      'с 196 Эпинефрин',
      'с 206 Цефалоспорин',
      'с 204 Амоксициллин',
      'с 281 Диклофенак',
      'с 286 Ибупрофен',
      'с 194 Азитромицин',
      'с 172 Кетопрофен',
      'с 20 Парацетамол'
    ]
  },
  en: {
    ui: {
      title: 'AllergoExpress',
      subtitle: 'Immunolab',
      navTests: 'Tests',
      navAbout: 'About',
      navLocations: 'Locations',
      heroTitle: 'Express Allergy',
      heroSubtitle: 'Analysis',
      heroDesc: 'Specific IgE (ELISA) test for drug allergies (anesthetics, antibiotics). Same-day results.',
      btnSpeak: 'Live Voice Mode',
      btnView: 'Drug List',
      trustedBy: 'Accuracy 88-95%',
      chatTitle: 'Med-Assistant',
      chatPower: 'Immunolab AI',
      inputPlaceholder: 'Check a medication...',
      welcomeMessage: 'Hello! I can help you with preparation for anesthetic and antibiotic allergy tests. What would you like to know?',
      servicesTitle: 'Our Services',
      servicesDesc: 'Specialized diagnosis of drug allergies using ELISA method.',
      footerRights: 'All rights reserved.',
      support: 'Support',
      faq: 'Important Info',
      aboutTitle: 'About Laboratory',
      aboutDesc: 'Immunolab specializes in express diagnosis of allergies to local anesthetics (Articaine, Lidocaine, etc.) and antibiotics. We ensure high accuracy (88-95%) and provide results on the same day (if sampled before noon).',
      locationsTitle: 'Our Locations',
      locationsDesc: '13 branches across Almaty city and region.',
      searchPlaceholder: 'Search by street...',
      noResults: 'Branch not found',
      viewOnMap: 'Show on Map',
      callBranch: 'Call Branch',
      onlineBadge: 'AI Assistant 24/7',
      btnAsk: 'Ask Assistant',
      statExperience: 'Years Experience',
      statTests: 'Tests Conducted',
      btnDetails: 'Details',
      feedbackTitle: 'Support',
      feedbackSuccessTitle: 'Sent!',
      feedbackSuccessDesc: 'We will contact you shortly.',
      feedbackFormDesc: 'Leave a message for the clinic administrator.',
      feedbackPlaceholder: 'Type your question or issue...',
      btnCancel: 'Cancel',
      btnSend: 'Send',
      // Referral
      btnGetReferral: 'Get Referral Form',
      btnGetResults: 'Get Results',
      referralTitle: 'REFERRAL',
      referralSubtitle: 'for specific IgE ELISA determination (88-95% method)',
      referralPatient: 'Patient Name',
      referralDoctor: 'Doctor',
      referralBirthDate: 'Date of Birth',
      referralDate: 'Date',
      referralClinic: 'Clinic',
      referralFasting: 'Strictly on empty stomach, stop antihistamines 3 days prior',
      referralPrice: 'COST PER ONE DRUG - 5500 KZT',
      referralBloodSampling: 'BLOOD SAMPLING IS PAID SEPARATELY',
      referralResults: 'RESULTS ISSUED ON SAME DAY AT 17:00',
      referralClinicPlaceholder: '________________________________________',
      referralOther: 'Other',
      referralLicense: 'License No. 19022683 from 25.11.2019',
      btnPrint: 'Download PDF',
      aiThinking: 'AI is thinking...',
    },
    faqs: [
      {
        question: 'How much does it cost?',
        answer: 'The cost for ONE drug is 5500 KZT. Blood sampling is paid separately.'
      },
      {
        question: 'How to prepare?',
        answer: 'Strictly on an empty stomach. Stop taking antihistamines (anti-allergy drugs) 3 days before.'
      },
      {
        question: 'When will results be ready?',
        answer: 'Results are issued on the same day at 17:00.'
      },
      {
        question: 'Articaine Hydrochloride 4%',
        answer: 'Local anesthetic often used in dentistry. Price: 5500 KZT.'
      },
      {
        question: 'Cephalosporin',
        answer: 'Group of antibiotics (Ceftriaxone, Cefazolin, etc.). Price: 5500 KZT.'
      },
      {
        question: 'Amoxicillin',
        answer: 'Broad-spectrum penicillin antibiotic. Price: 5500 KZT.'
      },
      {
        question: 'Azithromycin',
        answer: 'Macrolide antibiotic. Price: 5500 KZT.'
      },
      {
        question: 'Diclofenac',
        answer: 'Non-steroidal anti-inflammatory drug (NSAID). Price: 5500 KZT.'
      },
      {
        question: 'Ibuprofen',
        answer: 'Painkiller and anti-inflammatory (NSAID). Price: 5500 KZT.'
      },
      {
        question: 'Ketoprofen',
        answer: 'Strong painkiller (Ketonal). Price: 5500 KZT.'
      },
      {
        question: 'Paracetamol',
        answer: 'Common fever reducer. Price: 5500 KZT.'
      }
    ],
    chips: [
      { id: 'price', label: '💰 Price', prompt: 'How much is the test per drug?' },
      { id: 'prep', label: '📋 Preparation', prompt: 'How to prepare? Should I stop meds?' },
      { id: 'list', label: '💉 Drug List', prompt: 'Which anesthetics and antibiotics can I test for?' },
    ],
    branches: [
      { city: 'Almaty', address: 'Immunolab: Dostyk Ave 106B (crossing Abay Ave, behind Novotel)', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'MC Tau Sunkar: Rozybakiev St 33A', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'MC New Med: Microdistrict 10A, 22A', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Home Med Clinic: Mametova St 30', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Dr. Kalimoldaeva MC: Kenesary Khan St 54/11', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Istanbul Diagnostic Center: Gogol St 52', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'AdkMed MC: Turkebaev St 257E', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Interteach clinic: Nazarbayev Ave 257E', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Interteach clinic: Nazarbayev Ave 111', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Interteach clinic: Microdistrict 6, bld 16', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Interteach (Pediatrics): Samal-2, Mendikulov St 49', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Almaty', address: 'Interteach (Pediatrics): Kabanbay Batyr St 122A', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
      { city: 'Kaskelen', address: 'MC Jasmin: Abay Lane 14', phone: COMMON_PHONE, mapEmbedUrl: DEMO_MAP_URL },
    ],
    referralDrugs: [
      'Articaine Hydrochloride 4%, Huons Co., Ltd., Korea',
      'Articaine 4% + Epinephrine 1:100 000, Spain, INIBSA',
      'Mepivastesin 3%, 3M ESPE, Germany',
      'Orabloc 1:100 000 / Red, Pierrel S.P.A., Italy',
      'Orabloc 1:200 000 / Blue, Pierrel S.P.A., Italy',
      'Septanest with Adrenaline 1:100 000, Blue, Septodont, France',
      'Septanest with Adrenaline 1:200 000, Green, Septodont, France',
      'Ubistesin 4% Forte, 3M ESPE, Germany',
      'Ubistesin 4%, 3M ESPE, Germany / Red',
      'c 68 Ultracaine / Articaine',
      'c 88 Mepivacaine',
      'c 82 Lidocaine',
      'c 83 Novocaine',
      'c 196 Epinephrine',
      'c 206 Cephalosporin',
      'c 204 Amoxicillin',
      'c 281 Diclofenac',
      'c 286 Ibuprofen',
      'c 194 Azithromycin',
      'c 172 Ketoprofen',
      'c 20 Paracetamol'
    ]
  }
};
