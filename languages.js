// Объект с переводами для всех текстов на сайте
const translations = {
    // Навигация
    "nav_services": {
        "ru": "Услуги",
        "sr": "Usluge",
        "en": "Services"
    },
    "nav_packages": {
        "ru": "Пакеты",
        "sr": "Paketi",
        "en": "Packages"
    },
    "nav_prices": {
        "ru": "Стоимость",
        "sr": "Cene",
        "en": "Prices"
    },
    "nav_advantages": {
        "ru": "Преимущества",
        "sr": "Prednosti",
        "en": "Advantages"
    },
    "nav_portfolio": {
        "ru": "Портфолио",
        "sr": "Portfolio",
        "en": "Portfolio"
    },
    "nav_booking": {
        "ru": "Запись",
        "sr": "Zakazivanje",
        "en": "Booking"
    },
    "nav_contact": {
        "ru": "Контакты",
        "sr": "Kontakti",
        "en": "Contact"
    },

    // Hero Section
    "hero_tagline": {
        "ru": "BEST TREATMENT",
        "sr": "BEST TREATMENT",
        "en": "BEST TREATMENT"
    },
    "hero_book_online": {
        "ru": "Записаться онлайн",
        "sr": "Zakazati online",
        "en": "Book online"
    },
    "hero_our_services": {
        "ru": "Наши услуги",
        "sr": "Naše usluge",
        "en": "Our services"
    },

    // О нас
    "about_title": {
        "ru": "НАША ФИЛОСОФИЯ",
        "sr": "NAŠA FILOZOFIJA",
        "en": "OUR PHILOSOPHY"
    },
    "about_subtitle": {
        "ru": "Наш путь к натуральной красоте: почему мы выбрали безинъекционные методы?",
        "sr": "Naš put ka prirodnoj lepoti: zašto smo odabrali metode bez injekcija?",
        "en": "Our path to natural beauty: why we chose non-injection methods?"
    },
    "about_p1": {
        "ru": "Красота — это не про стандарты, а про гармонию с собой. Мы в Skinography верим, что уход за собой должен быть бережным.",
        "sr": "Lepota nije o standardima, već o harmoniji sa sobom. Mi u Skinography verujemo da nega treba da bude nežna.",
        "en": "Beauty is not about standards, but about harmony with yourself. At Skinography, we believe that self-care should be gentle."
    },
    "about_highlight": {
        "ru": "Поэтому в нашей работе мы отказались от инъекций и выбрали методы, которые помогают коже естественно обновляться, без боли и рисков.",
        "sr": "Zato smo u našem radu odbacili injekcije i izabrali metode koje pomažu koži da se prirodno obnovi, bez bola i rizika.",
        "en": "That's why in our work we abandoned injections and chose methods that help the skin renew naturally, without pain and risks."
    },
    "about_p2": {
        "ru": "Мы не гонимся за быстрыми результатами, а создаем красоту, которая останется с вами надолго.",
        "sr": "Ne jurimo za brzim rezultatima, već stvaramo lepotu koja će ostati sa vama dugo vremena.",
        "en": "We don't chase quick results, but create beauty that will stay with you for a long time."
    },
    "about_point1": {
        "ru": "Восстанавливаем, а не ломаем.",
        "sr": "Obnavljamo, ne rušimo.",
        "en": "We restore, not break."
    },
    "about_point2": {
        "ru": "Подчеркиваем, а не меняем.",
        "sr": "Naglašavamo, ne menjamo.",
        "en": "We emphasize, not change."
    },
    "about_point3": {
        "ru": "Активизируем внутренние ресурсы кожи, а не заставляем ее подстраиваться под искусственные вмешательства.",
        "sr": "Aktiviramo unutrašnje resurse kože, ne teramo je da se prilagođava veštačkim intervencijama.",
        "en": "We activate the skin's internal resources rather than forcing it to adapt to artificial interventions."
    },
    "about_p3": {
        "ru": "Здоровье и естественность - наш приоритет.",
        "sr": "Zdravlje i prirodnost su naš prioritet.",
        "en": "Health and naturalness are our priority."
    },
    "about_p4": {
        "ru": "Мы заботимся не только о вашей внешности, но и о вашем комфорте, помогая сохранить молодость без агрессивных процедур.",
        "sr": "Brinemo ne samo o vašem izgledu, već i o vašoj udobnosti, pomažući vam da sačuvate mladost bez agresivnih procedura.",
        "en": "We care not only about your appearance, but also about your comfort, helping you maintain youth without aggressive procedures."
    },
    "about_conclusion": {
        "ru": "Ждем вас в нашем салоне.<br>Естественная красота - это просто.",
        "sr": "Čekamo vas u našem salonu.<br>Prirodna lepota je jednostavna.",
        "en": "We await you in our salon.<br>Natural beauty is simple."
    },

    // Услуги
    "services_title": {
        "ru": "НАШИ УСЛУГИ",
        "sr": "NAŠE USLUGE",
        "en": "OUR SERVICES"
    },
    "service_laser": {
        "ru": "Лазерная эпиляция",
        "sr": "Laserska epilacija",
        "en": "Laser hair removal"
    },
    "service_laser_desc": {
        "ru": "Современная технология удаления волос с долговременным эффектом. Безопасно, безболезненно и эффективно",
        "sr": "Savremena tehnologija uklanjanja dlaka sa dugotrajnim efektom. Bezbedno, bezbolno i efikasno",
        "en": "Modern hair removal technology with long-lasting effect. Safe, painless and effective"
    },
    "service_nails": {
        "ru": "Ногтевой сервис",
        "sr": "Manikir i pedikir",
        "en": "Nail services"
    },
    "service_nails_desc": {
        "ru": "Классический, аппаратный, европейский маникюр. Долговременные покрытия и дизайн любой сложности",
        "sr": "Klasični, aparatni, evropski manikir. Dugotrajna gel lakovi i dizajn bilo koje složenosti",
        "en": "Classic, hardware, European manicure. Long-lasting coatings and designs of any complexity"
    },
    "service_cosmetology": {
        "ru": "Косметология",
        "sr": "Kozmetologija",
        "en": "Cosmetology"
    },
    "service_cosmetology_desc": {
        "ru": "Профессиональный уход за кожей лица: чистки, пилинги, массажи, маски и аппаратные процедуры",
        "sr": "Profesionalna nega kože lica: čišćenje, pilinzi, masaže, maske i aparatne procedure",
        "en": "Professional facial skin care: cleansing, peels, massages, masks and hardware procedures"
    },
    "service_eyebrows": {
        "ru": "Брови и ресницы",
        "sr": "Obrve i trepavice",
        "en": "Eyebrows and eyelashes"
    },
    "service_eyebrows_desc": {
        "ru": "Окрашивание, ламинирование, наращивание ресниц. Коррекция и оформление бровей любой сложности",
        "sr": "Bojenje, laminiranje, nadogradnja trepavica. Korekcija i oblikovanje obrva bilo koje složenosti",
        "en": "Coloring, lamination, eyelash extensions. Correction and styling of eyebrows of any complexity"
    },

    // Пакетные услуги
    "packages_title": {
        "ru": "ПАКЕТНЫЕ УСЛУГИ",
        "sr": "PAKET USLUGE",
        "en": "PACKAGE SERVICES"
    },
    "packages_subtitle": {
        "ru": "Выгодные комплексы процедур для разных потребностей",
        "sr": "Povoljni kompleksi procedura za različite potrebe",
        "en": "Beneficial procedure packages for different needs"
    },
    "package_sun": {
        "ru": "Солнце",
        "sr": "Sunce",
        "en": "Sun"
    },
    "package_tennis": {
        "ru": "Теннисистка",
        "sr": "Teniserka",
        "en": "Tennis Player"
    },
    "package_business": {
        "ru": "Бизнес-вуман",
        "sr": "Poslovna žena",
        "en": "Business Woman"
    },
    "package_service1_sun": {
        "ru": "Маникюр гигиенический",
        "sr": "Manikir higijenski",
        "en": "Hygienic manicure"
    },
    "package_service2_sun": {
        "ru": "Окрашивание бровей",
        "sr": "Bojenje obrva",
        "en": "Eyebrow coloring"
    },
    "package_service3_sun": {
        "ru": "Педикюр гигиенический",
        "sr": "Pedikir higijenski",
        "en": "Hygienic pedicure"
    },
    "package_service1_tennis": {
        "ru": "Маникюр с покрытием гель-лак",
        "sr": "Manikir sa gel lakom",
        "en": "Manicure with gel polish"
    },
    "package_service2_tennis": {
        "ru": "Педикюр гигиенический",
        "sr": "Pedikir higijenski",
        "en": "Hygienic pedicure"
    },
    "package_service3_tennis": {
        "ru": "Ламинирование бровей",
        "sr": "Laminiranje obrva",
        "en": "Eyebrow lamination"
    },
    "package_service4_tennis": {
        "ru": "Лазерная эпиляция подмышек",
        "sr": "Laserska epilacija pazuha",
        "en": "Laser hair removal of armpits"
    },
    "package_service1_business": {
        "ru": "Маникюр с покрытием гель-лак",
        "sr": "Manikir sa gel lakom",
        "en": "Manicure with gel polish"
    },
    "package_service2_business": {
        "ru": "Педикюр с покрытием гель-лак",
        "sr": "Pedikir sa gel lakom",
        "en": "Pedicure with gel polish"
    },
    "package_service3_business": {
        "ru": "Лазерная эпиляция \"Комплекс S\"",
        "sr": "Laserska epilacija \"Komplet S\"",
        "en": "Laser hair removal \"Complex S\""
    },
    "package_service4_business": {
        "ru": "Ламинирование ресниц",
        "sr": "Laminiranje trepavica",
        "en": "Eyelash lamination"
    },
    "package_service5_business": {
        "ru": "Окрашивание бровей",
        "sr": "Bojenje obrva",
        "en": "Eyebrow coloring"
    },
    "price_original": {
        "ru": "RSD",
        "sr": "RSD",
        "en": "RSD"
    },
    "price_discount": {
        "ru": "RSD",
        "sr": "RSD",
        "en": "RSD"
    },
    "btn_book": {
        "ru": "Записаться",
        "sr": "Zakazati",
        "en": "Book Now"
    },

    // Стоимость услуг
    "prices_title": {
        "ru": "СТОИМОСТЬ УСЛУГ",
        "sr": "CENE USLUGA",
        "en": "SERVICE PRICES"
    },
    "prices_subtitle": {
        "ru": "Ознакомьтесь с полным прейскурантом наших услуг",
        "sr": "Pogledajte kompletan cenovnik naših usluga",
        "en": "Check out the full price list of our services"
    },

    // Преимущества
    "advantages_title": {
        "ru": "НАШИ ПРЕИМУЩЕСТВА",
        "sr": "NAŠE PREDNOSTI",
        "en": "OUR ADVANTAGES"
    },
    "advantage1_title": {
        "ru": "Искусство заботы",
        "sr": "Umetnost brige",
        "en": "Art of care"
    },
    "advantage1_desc": {
        "ru": "Мы превращаем каждый визит в особенное событие, предвосхищая ваши пожелания",
        "sr": "Pretvaramo svaku posetu u poseban događaj, predviđajući vaše želje",
        "en": "We turn every visit into a special event, anticipating your wishes"
    },
    "advantage2_title": {
        "ru": "Современное оборудование",
        "sr": "Savremena oprema",
        "en": "Modern equipment"
    },
    "advantage2_desc": {
        "ru": "Используем только новейшие технологии и аппараты последнего поколения",
        "sr": "Koristimo samo najnovije tehnologije i uređaje poslednje generacije",
        "en": "We use only the latest technologies and equipment of the latest generation"
    },
    "advantage3_title": {
        "ru": "Премиум косметика",
        "sr": "Premium kozmetika",
        "en": "Premium cosmetics"
    },
    "advantage3_desc": {
        "ru": "Работаем с лучшими мировыми брендами профессиональной косметики",
        "sr": "Radimo sa najboljim svetskim brendovima profesionalne kozmetike",
        "en": "We work with the best global brands of professional cosmetics"
    },
    "advantage4_title": {
        "ru": "Индивидуальный подход",
        "sr": "Individualni pristup",
        "en": "Individual approach"
    },
    "advantage4_desc": {
        "ru": "Персонализированные программы ухода для каждого клиента",
        "sr": "Personalizovani programi nege za svakog klijenta",
        "en": "Personalized care programs for each client"
    },

    // Портфолио
    "portfolio_title": {
        "ru": "ПОРТФОЛИО",
        "sr": "PORTFOLIO",
        "en": "PORTFOLIO"
    },
    "portfolio_subtitle": {
        "ru": "Результаты нашей работы говорят сами за себя",
        "sr": "Rezultati našeg rada govore sami za sebe",
        "en": "The results of our work speak for themselves"
    },
    "portfolio_manicure": {
        "ru": "Маникюр",
        "sr": "Manikir",
        "en": "Manicure"
    },
    "portfolio_manicure_desc": {
        "ru": "Французский маникюр",
        "sr": "Francuski manikir",
        "en": "French manicure"
    },
    "portfolio_pedicure": {
        "ru": "Педикюр",
        "sr": "Pedikir",
        "en": "Pedicure"
    },
    "portfolio_pedicure_desc": {
        "ru": "Классический педикюр",
        "sr": "Klasični pedikir",
        "en": "Classic pedicure"
    },
    "portfolio_eyebrows": {
        "ru": "Брови",
        "sr": "Obrve",
        "en": "Eyebrows"
    },
    "portfolio_eyebrows_desc": {
        "ru": "Ламинирование бровей",
        "sr": "Laminiranje obrva",
        "en": "Eyebrow lamination"
    },
    "portfolio_lashes": {
        "ru": "Ресницы",
        "sr": "Trepavice",
        "en": "Eyelashes"
    },
    "portfolio_lashes_desc": {
        "ru": "Наращивание ресниц",
        "sr": "Nadogradnja trepavica",
        "en": "Eyelash extensions"
    },
    "portfolio_cosmetology": {
        "ru": "Косметология",
        "sr": "Kozmetologija",
        "en": "Cosmetology"
    },
    "portfolio_cosmetology_desc": {
        "ru": "Чистка лица",
        "sr": "Čišćenje lica",
        "en": "Facial cleansing"
    },
    "portfolio_epilation": {
        "ru": "Эпиляция",
        "sr": "Epilacija",
        "en": "Hair removal"
    },
    "portfolio_epilation_desc": {
        "ru": "Лазерная эпиляция",
        "sr": "Laserska epilacija",
        "en": "Laser hair removal"
    },

    // Запись
    "booking_title": {
        "ru": "ЗАПИШИТЕСЬ ОНЛАЙН",
        "sr": "ZAKAŽITE ONLINE",
        "en": "BOOK ONLINE"
    },
    "booking_subtitle": {
        "ru": "Выберите удобную для вас платформу для записи",
        "sr": "Izaberite platformu koja vam odgovara za zakazivanje",
        "en": "Choose a booking platform that is convenient for you"
    },
    "booking_altegio_title": {
        "ru": "Altegio",
        "sr": "Altegio",
        "en": "Altegio"
    },
    "booking_altegio_desc": {
        "ru": "Международная система онлайн-записи с удобным интерфейсом",
        "sr": "Međunarodni sistem za online zakazivanje sa jednostavnim interfejsom",
        "en": "International online booking system with a user-friendly interface"
    },
    "booking_sredime_title": {
        "ru": "Sredi Me",
        "sr": "Sredi Me",
        "en": "Sredi Me"
    },
    "booking_sredime_desc": {
        "ru": "Популярная сербская платформа для записи в салоны красоты",
        "sr": "Popularna srpska platforma za zakazivanje u salonima lepote",
        "en": "Popular Serbian platform for booking beauty salons"
    },
    "booking_altegio_btn": {
        "ru": "Записаться через Altegio",
        "sr": "Zakazati preko Altegio",
        "en": "Book via Altegio"
    },
    "booking_sredime_btn": {
        "ru": "Записаться через Sredi Me",
        "sr": "Zakazati preko Sredi Me",
        "en": "Book via Sredi Me"
    },

    // Контакты
    "contact_title": {
        "ru": "КОНТАКТЫ",
        "sr": "KONTAKTI",
        "en": "CONTACTS"
    },
    "contact_subtitle": {
        "ru": "Свяжитесь с нами",
        "sr": "Kontaktirajte nas",
        "en": "Get in touch"
    },
    "contact_address1": {
        "ru": "Белград, Сербия",
        "sr": "Beograd, Srbija",
        "en": "Belgrade, Serbia"
    },
    "contact_address2": {
        "ru": "Dunavka 2j",
        "sr": "Dunavka 2j",
        "en": "Dunavka 2j"
    },
    "contact_hours": {
        "ru": "Пн-Вс: 11:00 - 19:00",
        "sr": "Pon-Ned: 11:00 - 19:00",
        "en": "Mon-Sun: 11:00 - 19:00"
    },
    "contact_map_title": {
        "ru": "Как нас найти",
        "sr": "Kako nas naći",
        "en": "How to find us"
    },
    "contact_map_address": {
        "ru": "Dunavska 2J, Beograd",
        "sr": "Dunavska 2J, Beograd",
        "en": "Dunavska 2J, Belgrade"
    },
    "contact_map_navigate": {
        "ru": "Проложить маршрут",
        "sr": "Pronađi put",
        "en": "Get directions"
    },

    // Модальные окна
    "modal_altegio_title": {
        "ru": "Запись через Altegio",
        "sr": "Zakazivanje preko Altegio",
        "en": "Booking via Altegio"
    },
    "modal_sredime_title": {
        "ru": "Запись через Sredi Me",
        "sr": "Zakazivanje preko Sredi Me",
        "en": "Booking via Sredi Me"
    },
    "modal_loading": {
        "ru": "Загрузка виджета записи...",
        "sr": "Učitavanje widgeta za zakazivanje...",
        "en": "Loading booking widget..."
    },

    // Футер
    "footer_copyright": {
        "ru": "© 2024 Skinography. Все права защищены.",
        "sr": "© 2024 Skinography. Sva prava zadržana.",
        "en": "© 2024 Skinography. All rights reserved."
    },
    "footer_tagline": {
        "ru": "Best Treatment in Belgrade",
        "sr": "Best Treatment in Belgrade",
        "en": "Best Treatment in Belgrade"
    },

    // Слайдер цен - заголовки карточек
    "price_card_brows": {
        "ru": "Брови и ресницы",
        "sr": "Obrve i trepavice",
        "en": "Eyebrows and eyelashes"
    },
    "price_card_epilation_women": {
        "ru": "Лазерная эпиляция для женщин",
        "sr": "Laserska epilacija za žene",
        "en": "Laser hair removal for women"
    },
    "price_card_manicure": {
        "ru": "Маникюр и педикюр",
        "sr": "Manikir i pedikir",
        "en": "Manicure and pedicure"
    },
    "price_card_epilation_men": {
        "ru": "Лазерная эпиляция для мужчин",
        "sr": "Laserska epilacija za muškarce",
        "en": "Laser hair removal for men"
    },
    "price_card_cosmetology": {
        "ru": "Косметология",
        "sr": "Kozmetologija",
        "en": "Cosmetology"
    }
};

// Текущий выбранный язык (по умолчанию - русский)
let currentLanguage = "ru";

// Функция для обновления текстов на странице при смене языка
function updateLanguage(lang) {
    // Сохраняем выбранный язык
    currentLanguage = lang;

    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Обновляем все переводимые элементы на странице
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                if (element.getAttribute("placeholder")) {
                    element.setAttribute("placeholder", translations[key][lang]);
                } else {
                    element.value = translations[key][lang];
                }
            } else {
                element.innerHTML = translations[key][lang];
            }
        }
    });

    // Обновляем активный класс для кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Функция для добавления атрибутов data-translate ко всем элементам
function initializeTranslations() {
    // Навигация
    const navItems = {
        "nav_services": document.querySelectorAll('.nav-links li:nth-child(1) a, .mobile-nav-links li:nth-child(1) a'),
        "nav_packages": document.querySelectorAll('.nav-links li:nth-child(2) a, .mobile-nav-links li:nth-child(2) a'),
        "nav_prices": document.querySelectorAll('.nav-links li:nth-child(3) a, .mobile-nav-links li:nth-child(3) a'),
        "nav_advantages": document.querySelectorAll('.nav-links li:nth-child(4) a, .mobile-nav-links li:nth-child(4) a'),
        "nav_portfolio": document.querySelectorAll('.nav-links li:nth-child(5) a, .mobile-nav-links li:nth-child(5) a'),
        "nav_booking": document.querySelectorAll('.nav-links li:nth-child(6) a, .mobile-nav-links li:nth-child(6) a'),
        "nav_contact": document.querySelectorAll('.nav-links li:nth-child(7) a, .mobile-nav-links li:nth-child(7) a')
    };

    // Устанавливаем атрибуты для навигации
    for (const [key, elements] of Object.entries(navItems)) {
        elements.forEach(element => {
            element.setAttribute('data-translate', key);
        });
    }

    // Hero секция
    document.querySelector('.tagline').setAttribute('data-translate', 'hero_tagline');
    document.querySelector('.btn-primary').setAttribute('data-translate', 'hero_book_online');
    document.querySelector('.btn-secondary').setAttribute('data-translate', 'hero_our_services');

    // О нас
    document.querySelector('#about .section-title').setAttribute('data-translate', 'about_title');
    document.querySelector('.about-subtitle').setAttribute('data-translate', 'about_subtitle');
    document.querySelector('.about-text p:nth-child(2)').setAttribute('data-translate', 'about_p1');
    document.querySelector('.about-text p:nth-child(2) .highlight').setAttribute('data-translate', 'about_highlight');
    document.querySelector('.about-text p:nth-child(3)').setAttribute('data-translate', 'about_p2');
    document.querySelector('.philosophy-points p:nth-child(1)').innerHTML = '<span class="accent-point">✧</span> <span data-translate="about_point1">Восстанавливаем, а не ломаем.</span>';
    document.querySelector('.philosophy-points p:nth-child(2)').innerHTML = '<span class="accent-point">✧</span> <span data-translate="about_point2">Подчеркиваем, а не меняем.</span>';
    document.querySelector('.philosophy-points p:nth-child(3)').innerHTML = '<span class="accent-point">✧</span> <span data-translate="about_point3">Активизируем внутренние ресурсы кожи, а не заставляем ее подстраиваться под искусственные вмешательства.</span>';
    document.querySelector('.about-text p:nth-of-type(4)').setAttribute('data-translate', 'about_p3');
    document.querySelector('.about-text p:nth-of-type(5)').setAttribute('data-translate', 'about_p4');
    document.querySelector('.about-conclusion').setAttribute('data-translate', 'about_conclusion');

    // Услуги
    document.querySelector('#services .section-title').setAttribute('data-translate', 'services_title');
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').setAttribute('data-translate', 'service_laser');
    serviceCards[0].querySelector('p').setAttribute('data-translate', 'service_laser_desc');
    serviceCards[1].querySelector('h3').setAttribute('data-translate', 'service_nails');
    serviceCards[1].querySelector('p').setAttribute('data-translate', 'service_nails_desc');
    serviceCards[2].querySelector('h3').setAttribute('data-translate', 'service_cosmetology');
    serviceCards[2].querySelector('p').setAttribute('data-translate', 'service_cosmetology_desc');
    serviceCards[3].querySelector('h3').setAttribute('data-translate', 'service_eyebrows');
    serviceCards[3].querySelector('p').setAttribute('data-translate', 'service_eyebrows_desc');

    // Пакетные услуги
    document.querySelector('#packages .section-title').setAttribute('data-translate', 'packages_title');
    document.querySelector('#packages .section-subtitle').setAttribute('data-translate', 'packages_subtitle');

    const packageCards = document.querySelectorAll('.package-card');
    packageCards[0].querySelector('.package-title').setAttribute('data-translate', 'package_sun');
    const sunServices = packageCards[0].querySelectorAll('.package-services li');
    sunServices[0].setAttribute('data-translate', 'package_service1_sun');
    sunServices[1].setAttribute('data-translate', 'package_service2_sun');
    sunServices[2].setAttribute('data-translate', 'package_service3_sun');
    packageCards[0].querySelector('.btn-package').setAttribute('data-translate', 'btn_book');

    packageCards[1].querySelector('.package-title').setAttribute('data-translate', 'package_tennis');
    const tennisServices = packageCards[1].querySelectorAll('.package-services li');
    tennisServices[0].setAttribute('data-translate', 'package_service1_tennis');
    tennisServices[1].setAttribute('data-translate', 'package_service2_tennis');
    tennisServices[2].setAttribute('data-translate', 'package_service3_tennis');
    tennisServices[3].setAttribute('data-translate', 'package_service4_tennis');
    packageCards[1].querySelector('.btn-package').setAttribute('data-translate', 'btn_book');

    packageCards[2].querySelector('.package-title').setAttribute('data-translate', 'package_business');
    const businessServices = packageCards[2].querySelectorAll('.package-services li');
    businessServices[0].setAttribute('data-translate', 'package_service1_business');
    businessServices[1].setAttribute('data-translate', 'package_service2_business');
    businessServices[2].setAttribute('data-translate', 'package_service3_business');
    businessServices[3].setAttribute('data-translate', 'package_service4_business');
    businessServices[4].setAttribute('data-translate', 'package_service5_business');
    packageCards[2].querySelector('.btn-package').setAttribute('data-translate', 'btn_book');

    // Стоимость услуг
    document.querySelector('#prices .section-title').setAttribute('data-translate', 'prices_title');
    document.querySelector('#prices .section-subtitle').setAttribute('data-translate', 'prices_subtitle');

    // Преимущества
    document.querySelector('#advantages .section-title').setAttribute('data-translate', 'advantages_title');
    const advantageItems = document.querySelectorAll('.advantage-item');
    advantageItems[0].querySelector('h3').setAttribute('data-translate', 'advantage1_title');
    advantageItems[0].querySelector('p').setAttribute('data-translate', 'advantage1_desc');
    advantageItems[1].querySelector('h3').setAttribute('data-translate', 'advantage2_title');
    advantageItems[1].querySelector('p').setAttribute('data-translate', 'advantage2_desc');
    advantageItems[2].querySelector('h3').setAttribute('data-translate', 'advantage3_title');
    advantageItems[2].querySelector('p').setAttribute('data-translate', 'advantage3_desc');
    advantageItems[3].querySelector('h3').setAttribute('data-translate', 'advantage4_title');
    advantageItems[3].querySelector('p').setAttribute('data-translate', 'advantage4_desc');

    // Портфолио
    document.querySelector('#portfolio .section-title').setAttribute('data-translate', 'portfolio_title');
    document.querySelector('#portfolio p').setAttribute('data-translate', 'portfolio_subtitle');

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems[0].querySelector('h4').setAttribute('data-translate', 'portfolio_manicure');
    portfolioItems[0].querySelector('p').setAttribute('data-translate', 'portfolio_manicure_desc');
    portfolioItems[1].querySelector('h4').setAttribute('data-translate', 'portfolio_pedicure');
    portfolioItems[1].querySelector('p').setAttribute('data-translate', 'portfolio_pedicure_desc');
    portfolioItems[2].querySelector('h4').setAttribute('data-translate', 'portfolio_eyebrows');
    portfolioItems[2].querySelector('p').setAttribute('data-translate', 'portfolio_eyebrows_desc');
    portfolioItems[3].querySelector('h4').setAttribute('data-translate', 'portfolio_lashes');
    portfolioItems[3].querySelector('p').setAttribute('data-translate', 'portfolio_lashes_desc');
    portfolioItems[4].querySelector('h4').setAttribute('data-translate', 'portfolio_cosmetology');
    portfolioItems[4].querySelector('p').setAttribute('data-translate', 'portfolio_cosmetology_desc');
    portfolioItems[5].querySelector('h4').setAttribute('data-translate', 'portfolio_epilation');
    portfolioItems[5].querySelector('p').setAttribute('data-translate', 'portfolio_epilation_desc');

    // Запись
    document.querySelector('#online').setAttribute('data-translate', 'booking_title');
    document.querySelector('#booking p').setAttribute('data-translate', 'booking_subtitle');

    const bookingWidgets = document.querySelectorAll('.widget-card');
    bookingWidgets[0].querySelector('h3').setAttribute('data-translate', 'booking_altegio_title');
    bookingWidgets[0].querySelector('p').setAttribute('data-translate', 'booking_altegio_desc');
    bookingWidgets[0].querySelector('a').setAttribute('data-translate', 'booking_altegio_btn');

    bookingWidgets[1].querySelector('h3').setAttribute('data-translate', 'booking_sredime_title');
    bookingWidgets[1].querySelector('p').setAttribute('data-translate', 'booking_sredime_desc');
    bookingWidgets[1].querySelector('a').setAttribute('data-translate', 'booking_sredime_btn');

    // Контакты
    document.querySelector('#contact .section-title').setAttribute('data-translate', 'contact_title');
    document.querySelector('.contact-info h3').setAttribute('data-translate', 'contact_subtitle');

    const addressInfo = document.querySelector('.address-info');
    addressInfo.querySelector('p:first-child').setAttribute('data-translate', 'contact_address1');
    addressInfo.querySelector('p:last-child').setAttribute('data-translate', 'contact_address2');

    document.querySelector('.hours-info p').setAttribute('data-translate', 'contact_hours');
    document.querySelector('.map-container h3').setAttribute('data-translate', 'contact_map_title');
    document.querySelector('.sticker-text p').setAttribute('data-translate', 'contact_map_address');
    document.querySelector('.navigate-btn span').setAttribute('data-translate', 'contact_map_navigate');

    // Модальные окна
    document.querySelector('#altegioModal .modal-header h3').setAttribute('data-translate', 'modal_altegio_title');
    document.querySelector('#srediMeModal .modal-header h3').setAttribute('data-translate', 'modal_sredime_title');
    document.querySelectorAll('.booking-loader p').forEach(loader => {
        loader.setAttribute('data-translate', 'modal_loading');
    });

    // Футер
    const footerTexts = document.querySelectorAll('footer p');
    footerTexts[0].setAttribute('data-translate', 'footer_copyright');
    footerTexts[1].setAttribute('data-translate', 'footer_tagline');
}

// Функция для переключения языка кнопками
function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
}

// Функция для инициализации слайдера цен с переводом
function initPriceSlider() {
    // Данные для слайдов
    const priceSlides = [
        {
            id: 1,
            image: '11.jpeg',
            title: 'price_card_brows'
        },
        {
            id: 2,
            image: '22.jpeg',
            title: 'price_card_epilation_women'
        },
        {
            id: 3,
            image: '33.jpeg',
            title: 'price_card_manicure'
        },
        {
            id: 4,
            image: '44.jpeg',
            title: 'price_card_epilation_men'
        },
        {
            id: 5,
            image: '55.jpeg',
            title: 'price_card_cosmetology'
        }
    ];

    // Добавляем скрытые заголовки для слайдов (для поддержки переводов)
    const sliderContainer = document.querySelector('.price-slider');
    if (sliderContainer) {
        priceSlides.forEach(slide => {
            const titleElement = document.createElement('span');
            titleElement.classList.add('hidden-slide-title');
            titleElement.setAttribute('data-slide-id', slide.id);
            titleElement.setAttribute('data-translate', slide.title);
            titleElement.style.display = 'none';
            document.body.appendChild(titleElement);
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем атрибуты для перевода
    initializeTranslations();

    // Инициализируем слайдер цен с поддержкой переводов
    initPriceSlider();

    // Настраиваем переключатели языка
    setupLanguageSwitcher();

    // Проверяем, есть ли сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    } else {
        // Используем язык по умолчанию
        updateLanguage(currentLanguage);
    }
});
