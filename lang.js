const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
const allLangs = ["ru", "en"];
let currentlang =
  localStorage.getItem("language") || checkBrowserLang() || "ru";

let currentTexts = {};
const homeTexts = {
  "home-page-title": {
    ru: "UX/UI дизайнер Saikal Kaparbekova",
    en: "UX/UI designer Saikal Kaparbekova",
  },
  "menu-item-about": {
    ru: "обо мне",
    en: "about",
  },
  "menu-item-home": {
    ru: "главная",
    en: "home",
  },
  "menu-item-contacts": {
    ru: "контакты",
    en: "contacts",
  },
  "menu-item-work": {
    ru: "работа",
    en: "work",
  },
  // hero texts
  "hi-text": {
    ru: "Привет, я Сайкал",
    en: "Hello, I'm Saikal",
  },
  designer: {
    ru: "дизайнер",
    en: "designer",
  },
  "comment-text-2": {
    ru: "5 лет опыта разработки пользовательских интерфейсов, включая 4 года фронтенд-разработки и 2 года UI/UX дизайна. Я специализируюсь на создании ориентированных на пользователя интерфейсов для широкого спектра продуктов: от бизнес-сайтов и личных веб-страниц до банковских систем, финтех-решений, систем бронирования, розничной торговли и инструментов no-code",
    en: "5 years developing user interfaces, with a 4-year background in front-end development and 2 years in UI/UX design. I focus on creating user-centered experiences for a wide range of products, from business and personal websites to banking, fintech, booking systems, retail, and food no-code instruments.",
  },
  "message-button": {
    ru: "Написать сообщение",
    en: "Tap to message",
  },
  portfolio: {
    ru: "Портфолио",
    en: "Case studies",
  },
  "yoshop-case-title": {
    ru: "YoShop Restaurant",
    en: "YoShop Restaurant",
  },
  "yoshop-case-desc": {
    ru: "Автоматизация ресторанного бизнеса (POS terminal, monoblock, tablet)",
    en: "Automation of restaurant business (POS terminal, monoblock, tablet)",
  },
  "case-link": {
    ru: "Посмотреть",
    en: "Go to project",
  },
  "creatego-case-title": {
    ru: "CreateGO",
    en: "CreateGO",
  },
  "creatego-case-desc": {
    ru: "No-code конструктор для дизайнеров",
    en: "No-code builder for designers",
  },
  "yoshop-kiosk-case-desc": {
    ru: " Автоматизация ресторанного бизнеса(Kiosk)",
    en: "Automation of restaurant business (Kiosk)",
  },
  "yoshop-kiosk-case-title": {
    ru: "YoShop Kiosk",
    en: "YoShop Kiosk",
  },
  "vixco-case-title": {
    ru: "Vixco",
    en: "Vixco",
  },
  "vixco-case-desc": {
    ru: "Интернет магазин одежды и товаров для дома",
    en: "Online clothing and home goods store",
  },
  "ronto-case-title": {
    ru: "Ronto Tech",
    en: "Ronto Tech",
  },
  "ronto-case-desc": {
    ru: "ИТ Компания в области искусственного интеллекта, блокчейна и дополненной реальности",
    en: "IT company focused of artificial intelligence, blockchain, and virtual reality",
  },
  "bizexpoasia-case-title": {
    ru: "BizExpoAsia",
    en: "BizExpoAsia",
  },
  "bizexpoasia-case-desc": {
    ru: "Платформа агрегатор для бизнес мероприятий",
    en: "Platform for business events aggregator",
  },
  "footer-title": {
    ru: "Всегда открыта для интересных проектов, сотрудничества и дружеского общения",
    en: "Always open to interesting projects, collaboration, and friendly conversation.",
  },
  "footer-call-button": {
    ru: "назначить звонок",
    en: "Schedule a call",
  },
  "footer-social-title": {
    ru: "В других социальных сетях",
    en: "Other social media",
  },
};
const aboutTexts = {
  "personal-info-title": {
    ru: "Чем я занимаюсь",
    en: "What i was doing",
  },
  "personal-info-title-2" :{
    ru: "Дизайнер с опытом в разработке",
    en: "Designer with Developer background",
  },
  "personal-info-desc-1": {
    ru: "Уже два года я занимаюсь дизайном цифровых продуктов, опираясь на предыдущий четырёхлетний опыт в разработке fintech-продуктов и SaaS-решений. Эта комбинация позволяет мне создавать интерфейсы, которые не только эстетичны и удобны, но и учитывают технические возможности реализации.",
    en: "I have been designing digital products for two years now, building on my previous four years of experience in developing fintech products and SaaS solutions. This combination allows me to create interfaces that are not only aesthetically pleasing and user-friendly, but also take into account the technical possibilities of implementation.",
  },
  "personal-info-desc-2": {
    ru: "Мои ключевые сильные стороны — это умение взаимодействовать с командами, решать сложные задачи на основе данных и обратной связи, а также находить баланс между потребностями пользователей и бизнес-целями.",
    en: "My key strengths are the ability to collaborate with teams, solve complex problems based on data and feedback, and balance user needs with business goals.",
  },
  "personal-info-desc-3": {
    ru: "Я как дизайнер-разработчик. Создаю интерактивные и технически реализуемые дизайны, которые упрощают процесс разработки и улучшают пользовательский опыт.",
    en: "As a designer-developer, I create interactive and technically feasible designs that simplify the development process and improve user experience.",
  },  
  "personal-info-desc-4": {
    ru: "Понимая технические аспекты Я создаю продуманные системы, которые можно легко расширять и адаптировать под будущие изменения.",
    en: "Understanding the technical aspects I create thoughtful systems that can be easily expanded and adapted to future changes.",
  },
  "menu-item-about": {
    ru: "обо мне",
    en: "about",
  },
  "menu-item-work": {
    ru: "работа",
    en: "work",
  },
  "menu-item-home": {
    ru: "главная",
    en: "home",
  },
  "menu-item-contacts": {
    ru: "контакты",
    en: "contacts",
  },
  "footer-title": {
    ru: "Всегда открыта для интересных проектов, сотрудничества и дружеского общения",
    en: "Always open to interesting projects, collaboration, and friendly conversation.",
  },
  "footer-call-button": {
    ru: "назначить звонок",
    en: "Schedule a call",
  },
  "footer-social-title": {
    ru: "В других социальных сетях",
    en: "Other social media",
  },
  hobbies: {
    ru: "Мои увлечения",
    en: "My hobbies",
  },
  "hobby-title-photo": {
    ru: "Фотография",
    en: "Photography",
  },
  "instagram-profile": {
    ru: "Профиль в инстаграме",
    en: "Instagram profile",
  },
  "hobby-title-volley": {
    ru: "Волейбол",
    en: "Volleyball",
  },
  "hobby-title-mountain": {
    ru: "Горы",
    en: "Mountains",
  },
  "hobby-title-customization": {
    ru: "Рукоделие/Кастомизация",
    en: "DIY/Customization",
  }
};
const yoShopRestaurantTexts = {
  "case-title": {
    ru: "YoShop Restaurant",
    en: "YoShop Restaurant",
  },
  "case-description": {
    ru: "Автоматизация ресторанного бизнеса (POS terminal, monoblock, tablet)",
    en: "Automation of restaurant business (POS terminal, monoblock, tablet)",
  },
  "case-link": {
    ru: "Посмотреть",
    en: "Go to project",
  },
  "case-about-title": {
    ru: "О проекте",
    en: "About the project",
  },
  "case-about-description": {
    ru: " YoShop Restuarant - универсальное программное решение B2B, адаптированное для ресторанной индустрии, обслуживающее как обслуживание в ресторане, так и на вынос. Эта платформа оптимизирует различные аспекты управления рестораном.",
    en: "YoShop Restaurant - a universal B2B software solution adapted for the restaurant industry, serving both dine-in and takeout services. This platform optimizes various aspects of restaurant management.",
  },
  "breadcrumb-portfolio": {
    en: "Case studies",
    ru: "Портфолио",
  },
  "breadcrumb-yoshop-restaurant": {
    en: "Yoshop Restaurant",
    ru: "Yoshop Ресторан",
  },
  "dropdown-creatego": {
    en: "CreateGo",
    ru: "CreateGo",
  },
  "dropdown-yoshop-kiosk": {
    en: "Yoshop Kiosk",
    ru: "Киоск Yoshop",
  },
  "dropdown-vixco": {
    en: "Vixco",
    ru: "Vixco",
  },
  "dropdown-ronto-tech": {
    en: "Ronto Tech",
    ru: "Ronto Tech",
  },
    "dropdown-yoshoprestuarant": {
    en: "Yoshop Restaurant",
    ru: "Yoshop Ресторан",
  },
  "dropdown-mobile-apps" :{
    en: "Mobile Apps",
    ru: "Мобильные приложения",
  },
  "dropdown-landings" :{
    en: "Landings",
    ru: "Лендинги",
  },
  "case-info-role": {
    en: "Role",
    ru: "Роль",
  },
  "case-info-role-content": {
    en: "UX/UI Designer",
    ru: "UX/UI Дизайнер",
  },
  "case-info-industry": {
    en: "Industry",
    ru: "Индустрия",
  },
  "case-info-industry-content": {
    en: "Restaurants",
    ru: "Рестораны",
  },
  "case-info-project": {
    en: "Project",
    ru: "Проект",
  },
  "case-info-project-content": {
    en: "Restaurant Automation Desktop/Web App",
    ru: "Автоматизация ресторана Десктопное/Веб-приложение",
  },
  "case-info-business-challenge": {
    en: "Business challenge",
    ru: "Бизнес-задача",
  },
  "yoshop-restaurant-description": {
    en: "YoShop Restaurant is a universal B2B software solution adapted for the restaurant industry, serving both in-restaurant dining and takeout. This platform optimizes various aspects of restaurant management.",
    ru: "YoShop Restuarant - универсальное программное решение B2B, адаптированное для ресторанной индустрии, обслуживающее как обслуживание в ресторане, так и на вынос. Эта платформа оптимизирует различные аспекты управления рестораном.",
  },
  "case-info-business-challenge-content": {
    en: "The main goal is to implement all the necessary functions that existing analogues have, but make them more convenient and visually appealing.",
    ru: "Основная цель - реализовать все необходимые функции, которые есть у существующих аналогов, но сделать их более удобными и визуально привлекательными. ",
  },
  "case-info-business-challenge-content-3": {
    en: "The project aims to create the simplest and most effective product that will become an indispensable tool for the restaurant business.",
    ru: " Проект нацелен на создание максимально простого и эффективного продукта, который станет незаменимым инструментом для ресторанного бизнеса.",
  },
  "challenge-title": {
    ru: "Основные задачи",
    en: "Main challenges",
  },
  "challenge-item-point-1": {
    ru: "Универсальный и интуитивный пользовательский интерфейс",
    en: "Universal and intuitive user interface",
  },
  "challenge-item-point-2": {
    ru: "Визуальная эргономика и user experience",
    en: "Visual ergonomics and user experience",
  },
  "challenge-item-point-3": {
    ru: "Аналитическая визуализация",
    en: "Analytical visualization",
  },
  "challenge-item-point-4": {
    ru: "Мультиязычность и локализация",
    en: "Multilingual support and localization",
  },
  "challenge-item-point-li-4": {
    ru: "Продумать цветовые решения, которые снижают утомляемость персонала при длительной работе",
    en: "Design color solutions that reduce staff fatigue during prolonged use",
  },
  "challenge-item-point-li-5": {
    ru: "Создать иконки и графические элементы, максимально упрощающие восприятие информации",
    en: "Create icons and graphic elements that maximize information comprehension",
  },
  "challenge-item-point-li-6": {
    ru: "Обеспечить контрастность и читаемость интерфейса в различных условиях освещения",
    en: "Ensure interface contrast and readability in various lighting conditions",
  },
  "challenge-item-point-li-1": {
    ru: "Разработать дизайн, который одинаково удобен для администраторов ресторана, официантов, менеджеров и клиентов",
    en: "Design a design that is easy to use for restaurant administrators, waitstaff, managers, and customers",
  },
  "challenge-item-point-li-2": {
    ru: "Создать адаптивный интерфейс, который одинаково хорошо работает на планшетах, смартфонах и компьютерах",
    en: "Create a responsive interface that works equally well on tablets, smartphones, and computers",
  },
  "challenge-item-point-li-3": {
    ru: "Создать адаптивный интерфейс, который одинаково хорошо работает на планшетах, смартфонах и компьютерах",
    en: "Create a responsive interface that works equally well on tablets, smartphones, and computers",
  },
  "uielements-title": {
    ru: "UI Элементы",
    en: "UI Elements",
  },
  "uielements-description": {
    ru: "UI элементы минималистичные и контрастные. Цвета адаптированы под сенсорные экраны разных устройств",
    en: "UI elements are minimalist and contrasting. The colors are adapted for touch screens of different devices.",
  },
  "case-info-list-1": {
    ru: "Успешное внедрение в 20+ ресторанах за первый год",
    en: "Successful implementation in 20+ restaurants in the first year",
  },
  "case-info-list-2": {
    ru: "Адаптация под различные форматы общественного питания",
    en: "Adaptation to different public catering formats",
  },
  "case-info-list-3": {
    ru: "Адаптация под разные устройства",
    en: "Adaptation to different devices",
  },
  "case-info-list-4": {
    ru: "Back-office платформа для создания и отслеживания",
    en: "Back-office platform for creation and tracking",
  },
  "case-info-list-5": {
    ru: "Улучшали UX/UI на основе обращений в тех поддержку и юзабилити тестирований",
    en: "Improved UX/UI based on support requests and usability testing",
  },
  "menu-item-about": {
    ru: "обо мне",
    en: "about",
  },
  "menu-item-work": {
    ru: "работа",
    en: "work",
  },
  "menu-item-home": {
    ru: "главная",
    en: "home",
  },
  "menu-item-contacts": {
    ru: "контакты",
    en: "contacts",
  },
  "footer-title": {
    ru: "Всегда открыта для интересных проектов, сотрудничества и дружеского общения",
    en: "Always open to interesting projects, collaboration, and friendly conversation.",
  },
  "footer-call-button": {
    ru: "назначить звонок",
    en: "Schedule a call",
  },
  "footer-social-title": {
    ru: "В других социальных сетях",
    en: "Other social media",
  },
};
const rontoTexts = {
  "case-about-title": {
    ru: "О проекте",
    en: "About the project",
  },
  "ronto-business-challenge-content": {
    ru: "Основная цель разработки сайта Ronto Tech - создание сайта для презентации и продвижения продуктов компании в области искусственного интеллекта, анализа данных, блокчейна и дополненной реальности. ",
    en: "The main goal of developing the Ronto Tech website is to create a platform for presenting and promoting the company's products in the fields of artificial intelligence, data analysis, blockchain, and augmented reality.",
  },
  "ronto-business-challenge-content-2": {
    ru: "Также я сделала 3 сайта для продуктов этой компании:",
    en: "I also created 3 websites for the products of this company:",
  },
  "ronto-case-about-description": {
    ru: "Ronto Tech — IT-компания, которая запускает стартапы в области Blockchain, Data Analytics, AR и AI. На этом сайте представлены их основные кейсы и информация о компании.",
    en: "Ronto Tech - an IT company that launches startups in the fields of Blockchain, Data Analytics, AR, and AI. This website showcases their main cases and information about the company."
  },
  "ronto-logo-title":{
    en: "Logo concept",
    ru: " Концепт лого"
  },
  "ronto-logo-description" :{
    ru:"Смысл логотипа Ronto Tech  от заказчика был такой:  использование числа 10 в степени -27 (Ronto) подчеркивает масштаб и глубину технологических решений Ronto Tech. Было решено взять первые буквы и показать как возведение в степень как и смысл самого слова",
    en: "The meaning of the Ronto Tech logo from the client was as follows: the use of the number 10 raised to the power of -27 (Ronto) emphasizes the scale and depth of Ronto Tech's technological solutions. It was decided to take the first letters and illustrate both exponentiation and the essence of the word itself."
  },
  "ronto-case-ui-description": {
    ru: "Для создания лендинга Ronto Tech я придерживалась принципов минималистичного и чистого дизайна, чтобы наиболее эффективно донести информацию о ключевых решениях и услугах компании.",
    en: "To create the Ronto Tech landing page, I adhered to the principles of minimalist and clean design to effectively convey information about the company's key solutions and services.",
  },
  "ronto-case-mobile-description": {
    ru: "При разработке сайта Ronto Tech реализована и  мобильная адаптация. Интерфейс был  оптимизирован для комфортного просмотра и взаимодействия на всех типах мобильных устройств",
    en: "During the development of the Ronto Tech website, mobile adaptation was implemented. The interface was optimized for comfortable viewing and interaction on all types of mobile devices.",
  },
  "challenge-title": {
    ru: "Основные задачи",
    en: "Main challenges",
  },
  "case-about-mobile": {
    ru: "Мобильная адаптация",
    en: "Mobile",
  },
  "menu-item-about": {
    ru: "обо мне",
    en: "about",
  },
  "menu-item-work": {
    ru: "работа",
    en: "work",
  },
  "menu-item-home": {
    ru: "главная",
    en: "home",
  },
  "menu-item-contacts": {
    ru: "контакты",
    en: "contacts",
  },
  "breadcrumb-yoshop-ronto": {
    ru: "CreateGo",
    en: "CreateGo",
  },
  "dropdown-creatego": {
    en: "CreateGo",
    ru: "CreateGo",
  },
  "dropdown-yoshop-kiosk": {
    en: "Yoshop Kiosk",
    ru: "Киоск Yoshop",
  },
  "dropdown-vixco": {
    en: "Vixco",
    ru: "Vixco",
  },
  "dropdown-ronto-tech": {
    en: "Ronto Tech",
    ru: "Ronto Tech",
  },
  "dropdown-yoshoprestuarant": {
    en: "Yoshop Restaurant",
    ru: "Yoshop Ресторан",
  },
  "dropdown-mobile-apps" :{
    en: "Mobile Apps",
    ru: "Мобильные приложения",
  },
  "dropdown-landings" :{
    en: "Landings",
    ru: "Лендинги",
  },
  "footer-title": {
    ru: "Всегда открыта для интересных проектов, сотрудничества и дружеского общения",
    en: "Always open to interesting projects, collaboration, and friendly conversation.",
  },
  "footer-call-button": {
    ru: "назначить звонок",
    en: "Schedule a call",
  },
  "footer-social-title": {
    ru: "В других социальных сетях",
    en: "Other social media",
  },
};
const creategoTexts = {
  "case-about-title": {
    ru: "О проекте",
    en: "About the project",
  },
  "creatego-business-challenge-content": {
    ru: "Ключевая цель - стать ключевым инструментом для дизайнеров, предоставляя им широкие возможности для построения полноценных приложений через визуальный интерфейс и готовые компоненты.",
    en: "The main goal is to become a key tool for designers, providing them with a wide range of options for building fully functional applications through a visual interface and ready-to-use components.",
  },
  "creatego-case-about-description": {
    ru: "CreateGo — предлагает интуитивно понятный конструктор с возможностью импорта макетов из Figma, автоматизируя рутинные задачи и позволяя дизайнерам быстро собирать прототипы и MVP без необходимости знания программирования.",
    en: "CreateGo - offers an intuitive builder with the ability to import layouts from Figma, automating routine tasks and allowing designers to quickly assemble prototypes and MVPs without the need for programming knowledge.",
  },
  "creatego-ui-description": {
    ru: "Элементы пользовательского интерфейса на основе  дизайн системы Xela, контраст белого и синего",
    en: "UI elements based on design system Xela, contrast with white and blue",
  },
  "challenge-title": {
    ru: "Основные задачи",
    en: "Main challenges",
  },
  "breadcrumb-yoshop-creatego": {
    ru: "CreateGo",
    en: "CreateGo",
  },
  "dropdown-creatego": {
    en: "CreateGo",
    ru: "CreateGo",
  },
  "dropdown-yoshop-kiosk": {
    en: "Yoshop Kiosk",
    ru: "Киоск Yoshop",
  },
  "dropdown-vixco": {
    en: "Vixco",
    ru: "Vixco",
  },
  "dropdown-ronto-tech": {
    en: "Ronto Tech",
    ru: "Ronto Tech",
  },
  "dropdown-yoshoprestuarant": {
    en: "Yoshop Restaurant",
    ru: "Yoshop Ресторан",
  },
  "dropdown-mobile-apps" :{
    en: "Mobile Apps",
    ru: "Мобильные приложения",
  },
  "dropdown-landings" :{
    en: "Landings",
    ru: "Лендинги",
  },
  "menu-item-about": {
    ru: "обо мне",
    en: "about",
  },
  "menu-item-work": {
    ru: "работа",
    en: "work",
  },
  "menu-item-home": {
    ru: "главная",
    en: "home",
  },
  "menu-item-contacts": {
    ru: "контакты",
    en: "contacts",
  },
  "footer-title": {
    ru: "Всегда открыта для интересных проектов, сотрудничества и дружеского общения",
    en: "Always open to interesting projects, collaboration, and friendly conversation.",
  },
  "footer-call-button": {
    ru: "назначить звонок",
    en: "Schedule a call",
  },
  "footer-social-title": {
    ru: "В других социальных сетях",
    en: "Other social media",
  },
};

const kioskTexts = {
  "case-info-business-challenge-content" :{
    ru: "Ключевая цель проекта - сократить время ожидания, уменьшить очереди и сделать процесс заказа максимально удобным для посетителей. Интерфейс разработан с учетом потребностей разных возрастных групп и обеспечивает интуитивно понятную навигацию по меню с качественной визуализацией блюд.",
    en: "The key goal of the project is to increase user conversion rates, reduce waiting time and lower costs of product sales. The interface is designed to meet the needs of different age groups and provides intuitive navigation through the menu with high-quality visualization of products.",
  },
  "yoshop-kiosk-description":{
    ru: "YoShop Kiosk - решение для ресторанов, автоматизирующее процесс обслуживания через интуитивный терминал самообслуживания, который позволяет клиентам быстро выбирать блюда, сокращать время ожидания и улучшать общее качество взаимодействия с рестораном.",
    en: "YoShop Kiosk is a solution for restaurants that automates the service process through an intuitive self-service terminal, which allows customers to quickly select dishes, reduce waiting time and improve the overall quality of interaction with the restaurant.",
  },
  "challenge-item-point-li-1": { 
    ru: "Разработка логики заказа с минимальным количеством шагов",
    en: "Developing order logic with a minimum number of steps",
   },
  "challenge-item-point-li-2": { 
    ru: "Создание понятной системы категоризации блюд и поиска",
    en: "Creating a clear system for categorizing dishes and searching",
   },
  "challenge-item-point-li-3": { 
    ru: "Дизайн удобного процесса кастомизации заказа (добавление ингредиентов, изменение порций)",
    en: "Design of a convenient order customization process (adding ingredients, changing portions)",
   },
  "challenge-item-point-li-4": { 
    ru: "Разработка информативных карточек блюд с ценами, составом и фото",
    en: "Development of informative cards of dishes with prices, composition and photos",
   },
  "challenge-item-point-li-5": {
    ru: "Адаптация интерфейса под большое разрешение экрана",
    en: "Adaptation of the interface to large screen resolutions",
    },

  "challenge-title": {
    ru: "Основные задачи",
    en: "Main challenges",
  },
  "case-about-title": {
    ru: "О проекте",
    en: "About the project",
  },
  "breadcrumb-yoshop-kiosk": {
    ru: "Yoshop Киоск",
    en: "Yoshop Kiosk",
  },
  "dropdown-creatego": {
    en: "CreateGo",
    ru: "CreateGo",
  },
  "dropdown-yoshop-kiosk": {
    en: "Yoshop Kiosk",
    ru: "Киоск Yoshop",
  },
  "dropdown-vixco": {
    en: "Vixco",
    ru: "Vixco",
  },
  "dropdown-ronto-tech": {
    en: "Ronto Tech",
    ru: "Ronto Tech",
  },
  "dropdown-yoshoprestuarant": {
    en: "Yoshop Restaurant",
    ru: "Yoshop Ресторан",
  },
  "dropdown-mobile-apps" :{
    en: "Mobile Apps",
    ru: "Мобильные приложения",
  },
  "dropdown-landings" :{
    en: "Landings",
    ru: "Лендинги",
  },
  "menu-item-about": {
    ru: "обо мне",
    en: "about",
  },
  "menu-item-work": {
    ru: "работа",
    en: "work",
  },
  "menu-item-home": {
    ru: "главная",
    en: "home",
  },
  "menu-item-contacts": {
    ru: "контакты",
    en: "contacts",
  },
  "footer-title": {
    ru: "Всегда открыта для интересных проектов, сотрудничества и дружеского общения",
    en: "Always open to interesting projects, collaboration, and friendly conversation.",
  },
  "footer-call-button": {
    ru: "назначить звонок",
    en: "Schedule a call",
  },
  "footer-social-title": {
    ru: "В других социальных сетях",
    en: "Other social media",
  },
}
function checkPagePathName() {
  // console.log("currentPathName", currentPathName);
  if (currentPathName.includes("index.html") || currentPathName === "/") {
    currentTexts = homeTexts;
  } else if (currentPathName.includes("about.html")) {
    currentTexts = aboutTexts;
  } else if (currentPathName.includes("yoshop-restaurant-case")) {
    currentTexts = yoShopRestaurantTexts;
  } else if (currentPathName.includes("ronto-tech-case.html")) {
    currentTexts = rontoTexts;
  } else if (currentPathName.includes("creatego-case.html")) {
    currentTexts = creategoTexts;
  } else if (currentPathName.includes("yoshop-kiosk.html")) {
    currentTexts = kioskTexts;
  } else {
    currentTexts = homeTexts;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentTexts) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentlang];
    }
  }
  // console.log("changed language to " + currentlang + "!");
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    currentlang = event.target.dataset.btn;
    localStorage.setItem("language", event.target.dataset.btn);
    resetActiveClasses(langButtons, "active-lang-btn");
    btn.classList.add("active-lang-btn");
    changeLang();
  });
});

function resetActiveClasses(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentlang) {
    case "ru":
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("active-lang-btn");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("active-lang-btn");
      break;
    default:
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("active-lang-btn");
      break;
  }
}
checkActiveLangButton();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((lang) => {
    return lang === navLang;
  });

  if (result) {
    return navLang;
  }
}



document.addEventListener("DOMContentLoaded", function () {
  checkPagePathName();
  changeLang();
  checkActiveLangButton();
});
