// Language translations
const translations = {
    ru: {
        nav: {
            about: 'О нас',
            services: 'Услуги',
            advantages: 'Преимущества',
            portfolio: 'Портфолио',
            booking: 'Запись',
            contacts: 'Контакты'
        },
        hero: {
            tagline: 'BEST TREATMENT',
            bookOnline: 'Записаться онлайн',
            ourServices: 'Наши услуги'
        },
        about: {
            title: 'О НАС',
            text1: 'Добро пожаловать в Skinography - ваш премиальный салон красоты в самом сердце Белграда. Мы специализируемся на инновационных процедурах для кожи, используя только самые современные технологии и продукты высочайшего качества.',
            text2: 'Наша миссия - помочь каждому клиенту раскрыть естественную красоту и достичь идеального состояния кожи. Мы верим, что красота начинается с здоровой кожи, и именно поэтому мы подходим к каждому клиенту индивидуально, создавая персонализированные программы ухода.'
        },
        services: {
            title: 'НАШИ УСЛУГИ',
            laser: {
                title: 'Лазерная эпиляция',
                desc: 'Современная технология удаления волос с долговременным эффектом. Безопасно, безболезненно и эффективно'
            },
            manicure: {
                title: 'Маникюр',
                desc: 'Классический, аппаратный, европейский маникюр. Долговременные покрытия и дизайн любой сложности'
            },
            pedicure: {
                title: 'Педикюр',
                desc: 'Классический, аппаратный, медицинский педикюр. Уход за стопами и решение проблем с вросшими ногтями'
            },
            cosmetology: {
                title: 'Косметология',
                desc: 'Профессиональный уход за кожей лица: чистки, пилинги, массажи, маски и аппаратные процедуры'
            },
            browsLashes: {
                title: 'Брови и ресницы',
                desc: 'Окрашивание, ламинирование, наращивание ресниц. Коррекция и оформление бровей любой сложности'
            }
        },
        advantages: {
            title: 'НАШИ ПРЕИМУЩЕСТВА',
            experts: {
                title: 'Опытные специалисты',
                desc: 'Команда сертифицированных профессионалов с многолетним опытом'
            },
            equipment: {
                title: 'Современное оборудование',
                desc: 'Используем только новейшие технологии и аппараты последнего поколения'
            },
            cosmetics: {
                title: 'Премиум косметика',
                desc: 'Работаем с лучшими мировыми брендами профессиональной косметики'
            },
            approach: {
                title: 'Индивидуальный подход',
                desc: 'Персонализированные программы ухода для каждого клиента'
            }
        },
        portfolio: {
            title: 'ПОРТФОЛИО',
            subtitle: 'Результаты нашей работы говорят сами за себя',
            items: {
                manicure: 'Маникюр',
                pedicure: 'Педикюр',
                brows: 'Брови',
                lashes: 'Ресницы',
                cosmetology: 'Косметология',
                epilation: 'Эпиляция'
            }
        },
        booking: {
            title: 'ЗАПИШИТЕСЬ ОНЛАЙН',
            subtitle: 'Выберите удобную для вас платформу для записи',
            altegio: {
                title: 'Altegio',
                desc: 'Международная система онлайн-записи с удобным интерфейсом',
                button: 'Записаться через Altegio'
            },
            sredime: {
                title: 'Sredi Me',
                desc: 'Популярная сербская платформа для записи в салоны красоты',
                button: 'Записаться через Sredi Me'
            }
        },
        contact: {
            title: 'КОНТАКТЫ',
            getInTouch: 'Свяжитесь с нами',
            findUs: 'Как нас найти',
            address: ['Белград, Сербия', 'Dunavska 2j'],
            hours: 'Пн-Вс: 11:00 - 19:00',
            navigate: 'Проложить маршрут'
        },
        footer: {
            rights: 'Все права защищены.',
            tagline: 'Best Treatment in Belgrade'
        }
    },
    sr: {
        nav: {
            about: 'O nama',
            services: 'Usluge',
            advantages: 'Prednosti',
            portfolio: 'Portfolio',
            booking: 'Zakazivanje',
            contacts: 'Kontakt'
        },
        hero: {
            tagline: 'BEST TREATMENT',
            bookOnline: 'Zakažite online',
            ourServices: 'Naše usluge'
        },
        about: {
            title: 'O NAMA',
            text1: 'Dobrodošli u Skinography - vaš premium salon lepote u samom srcu Beograda. Specijalizovani smo za inovativne tretmane kože, koristeći samo najsavremenije tehnologije i proizvode najvišeg kvaliteta.',
            text2: 'Naša misija je da pomognemo svakom klijentu da otkrije prirodnu lepotu i postigne idealno stanje kože. Verujemo da lepota počinje sa zdravom kožom, i zato pristupamo svakom klijentu individualno, kreirajući personalizovane programe nege.'
        },
        services: {
            title: 'NAŠE USLUGE',
            laser: {
                title: 'Laserska epilacija',
                desc: 'Savremena tehnologija uklanjanja dlaka sa dugotrajnim efektom. Bezbedno, bezbolno i efikasno'
            },
            manicure: {
                title: 'Manikir',
                desc: 'Klasični, aparatni, evropski manikir. Trajni lakovi i dizajn bilo koje složenosti'
            },
            pedicure: {
                title: 'Pedikir',
                desc: 'Klasični, aparatni, medicinski pedikir. Nega stopala i rešavanje problema sa urasim noktima'
            },
            cosmetology: {
                title: 'Kozmetologija',
                desc: 'Profesionalna nega kože lica: čišćenja, pilinzi, masaže, maske i aparatni tretmani'
            },
            browsLashes: {
                title: 'Obrve i trepavice',
                desc: 'Farbanje, laminiranje, nadogradnja trepavica. Korekcija i oblikovanje obrva bilo koje složenosti'
            }
        },
        advantages: {
            title: 'NAŠE PREDNOSTI',
            experts: {
                title: 'Iskusni stručnjaci',
                desc: 'Tim sertifikovanih profesionalaca sa dugogodišnjim iskustvom'
            },
            equipment: {
                title: 'Savremena oprema',
                desc: 'Koristimo samo najnovije tehnologije i aparate poslednje generacije'
            },
            cosmetics: {
                title: 'Premium kozmetika',
                desc: 'Radimo sa najboljim svetskim brendovima profesionalne kozmetike'
            },
            approach: {
                title: 'Individualni pristup',
                desc: 'Personalizovani programi nege za svakog klijenta'
            }
        },
        portfolio: {
            title: 'PORTFOLIO',
            subtitle: 'Rezultati našeg rada govore sami za sebe',
            items: {
                manicure: 'Manikir',
                pedicure: 'Pedikir',
                brows: 'Obrve',
                lashes: 'Trepavice',
                cosmetology: 'Kozmetologija',
                epilation: 'Epilacija'
            }
        },
        booking: {
            title: 'ZAKAŽITE ONLINE',
            subtitle: 'Izaberite platformu koja vam odgovara za zakazivanje',
            altegio: {
                title: 'Altegio',
                desc: 'Međunarodni sistem online zakazivanja sa praktičnim interfejsom',
                button: 'Zakažite preko Altegio'
            },
            sredime: {
                title: 'Sredi Me',
                desc: 'Popularna srpska platforma za zakazivanje u salonima lepote',
                button: 'Zakažite preko Sredi Me'
            }
        },
        contact: {
            title: 'KONTAKT',
            getInTouch: 'Kontaktirajte nas',
            findUs: 'Kako do nas',
            address: ['Beograd, Srbija', 'Dunavska 2j'],
            hours: 'Pon-Ned: 11:00 - 19:00',
            navigate: 'Pokrenite navigaciju'
        },
        footer: {
            rights: 'Sva prava zadržana.',
            tagline: 'Best Treatment in Belgrade'
        }
    },
    en: {
        nav: {
            about: 'About',
            services: 'Services',
            advantages: 'Advantages',
            portfolio: 'Portfolio',
            booking: 'Booking',
            contacts: 'Contact'
        },
        hero: {
            tagline: 'BEST TREATMENT',
            bookOnline: 'Book Online',
            ourServices: 'Our Services'
        },
        about: {
            title: 'ABOUT US',
            text1: 'Welcome to Skinography - your premium beauty salon in the heart of Belgrade. We specialize in innovative skin procedures, using only the most advanced technologies and highest quality products.',
            text2: 'Our mission is to help every client reveal their natural beauty and achieve perfect skin condition. We believe that beauty begins with healthy skin, which is why we approach each client individually, creating personalized care programs.'
        },
        services: {
            title: 'OUR SERVICES',
            laser: {
                title: 'Laser Hair Removal',
                desc: 'Modern technology for hair removal with long-lasting effects. Safe, painless and effective'
            },
            manicure: {
                title: 'Manicure',
                desc: 'Classic, hardware, European manicure. Long-lasting coatings and designs of any complexity'
            },
            pedicure: {
                title: 'Pedicure',
                desc: 'Classic, hardware, medical pedicure. Foot care and ingrown nail treatment'
            },
            cosmetology: {
                title: 'Cosmetology',
                desc: 'Professional facial skin care: cleansing, peeling, massages, masks and hardware procedures'
            },
            browsLashes: {
                title: 'Brows & Lashes',
                desc: 'Tinting, lamination, lash extensions. Eyebrow correction and shaping of any complexity'
            }
        },
        advantages: {
            title: 'OUR ADVANTAGES',
            experts: {
                title: 'Experienced Specialists',
                desc: 'Team of certified professionals with years of experience'
            },
            equipment: {
                title: 'Modern Equipment',
                desc: 'We use only the latest technologies and state-of-the-art devices'
            },
            cosmetics: {
                title: 'Premium Cosmetics',
                desc: 'We work with the best global brands of professional cosmetics'
            },
            approach: {
                title: 'Individual Approach',
                desc: 'Personalized care programs for each client'
            }
        },
        portfolio: {
            title: 'PORTFOLIO',
            subtitle: 'Our work results speak for themselves',
            items: {
                manicure: 'Manicure',
                pedicure: 'Pedicure',
                brows: 'Brows',
                lashes: 'Lashes',
                cosmetology: 'Cosmetology',
                epilation: 'Hair Removal'
            }
        },
        booking: {
            title: 'BOOK ONLINE',
            subtitle: 'Choose a convenient booking platform',
            altegio: {
                title: 'Altegio',
                desc: 'International online booking system with user-friendly interface',
                button: 'Book via Altegio'
            },
            sredime: {
                title: 'Sredi Me',
                desc: 'Popular Serbian platform for beauty salon bookings',
                button: 'Book via Sredi Me'
            }
        },
        contact: {
            title: 'CONTACT',
            getInTouch: 'Get in Touch',
            findUs: 'Find Us',
            address: ['Belgrade, Serbia', 'Dunavska 2j'],
            hours: 'Mon-Sun: 11:00 AM - 7:00 PM',
            navigate: 'Get Directions'
        },
        footer: {
            rights: 'All rights reserved.',
            tagline: 'Best Treatment in Belgrade'
        }
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('preferred-language') || 'ru';

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update document language and title
    document.documentElement.lang = lang;
    const titles = {
        ru: 'Skinography - Best Treatment | Салон красоты в Белграде',
        sr: 'Skinography - Best Treatment | Salon lepote u Beogradu',
        en: 'Skinography - Best Treatment | Beauty Salon in Belgrade'
    };
    document.title = titles[lang];

    // Update navigation
    const navItems = document.querySelectorAll('.nav-links a');
    const navKeys = ['about', 'services', 'advantages', 'portfolio', 'booking', 'contacts'];
    navItems.forEach((link, index) => {
        if (navKeys[index] && t.nav[navKeys[index]]) {
            link.textContent = t.nav[navKeys[index]];
        }
    });

    // Update hero section
    const tagline = document.querySelector('.tagline');
    if (tagline) tagline.textContent = t.hero.tagline;

    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    if (ctaButtons[0]) ctaButtons[0].textContent = t.hero.bookOnline;
    if (ctaButtons[1]) ctaButtons[1].textContent = t.hero.ourServices;

    // Update all section titles
    const sectionTitles = {
        '#about .section-title': t.about.title,
        '#services .section-title': t.services.title,
        '#advantages .section-title': t.advantages.title,
        '#portfolio .section-title': t.portfolio.title,
        '#booking .section-title': t.booking.title,
        '#contact .section-title': t.contact.title
    };

    Object.entries(sectionTitles).forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    });

    // Update about section
    const aboutTexts = document.querySelectorAll('.about-text p');
    if (aboutTexts[0]) aboutTexts[0].textContent = t.about.text1;
    if (aboutTexts[1]) aboutTexts[1].textContent = t.about.text2;

    // Update services
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceKeys = ['laser', 'manicure', 'pedicure', 'cosmetology', 'browsLashes'];
    serviceCards.forEach((card, index) => {
        if (serviceKeys[index] && t.services[serviceKeys[index]]) {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            if (title) title.textContent = t.services[serviceKeys[index]].title;
            if (desc) desc.textContent = t.services[serviceKeys[index]].desc;
        }
    });

    // Update advantages
    const advantageItems = document.querySelectorAll('.advantage-item');
    const advantageKeys = ['experts', 'equipment', 'cosmetics', 'approach'];
    advantageItems.forEach((item, index) => {
        if (advantageKeys[index] && t.advantages[advantageKeys[index]]) {
            const title = item.querySelector('h3');
            const desc = item.querySelector('p');
            if (title) title.textContent = t.advantages[advantageKeys[index]].title;
            if (desc) desc.textContent = t.advantages[advantageKeys[index]].desc;
        }
    });

    // Update portfolio
    const portfolioSubtitle = document.querySelector('#portfolio p');
    if (portfolioSubtitle) portfolioSubtitle.textContent = t.portfolio.subtitle;

    // Update booking
    const bookingSubtitle = document.querySelector('#booking > .container > p');
    if (bookingSubtitle) bookingSubtitle.textContent = t.booking.subtitle;

    const widgetCards = document.querySelectorAll('.widget-card');
    if (widgetCards[0]) {
        const title = widgetCards[0].querySelector('h3');
        const desc = widgetCards[0].querySelector('p');
        const btn = widgetCards[0].querySelector('.btn');
        if (title) title.textContent = t.booking.altegio.title;
        if (desc) desc.textContent = t.booking.altegio.desc;
        if (btn) btn.textContent = t.booking.altegio.button;
    }
    if (widgetCards[1]) {
        const title = widgetCards[1].querySelector('h3');
        const desc = widgetCards[1].querySelector('p');
        const btn = widgetCards[1].querySelector('.btn');
        if (title) title.textContent = t.booking.sredime.title;
        if (desc) desc.textContent = t.booking.sredime.desc;
        if (btn) btn.textContent = t.booking.sredime.button;
    }

    // Update contact
    const contactTitle1 = document.querySelector('.contact-info h3');
    const contactTitle2 = document.querySelector('.map-container h3');
    if (contactTitle1) contactTitle1.textContent = t.contact.getInTouch;
    if (contactTitle2) contactTitle2.textContent = t.contact.findUs;

    const addressInfo = document.querySelectorAll('.address-info p');
    if (addressInfo[0]) addressInfo[0].textContent = t.contact.address[0];
    if (addressInfo[1]) addressInfo[1].textContent = t.contact.address[1];

    const hoursInfo = document.querySelector('.hours-info p');
    if (hoursInfo) hoursInfo.textContent = t.contact.hours;

    const navigateBtn = document.querySelector('.navigate-btn span');
    if (navigateBtn) navigateBtn.textContent = t.contact.navigate;

    // Update footer
    const footerTexts = document.querySelectorAll('footer p');
    if (footerTexts[0]) footerTexts[0].textContent = `© 2024 Skinography. ${t.footer.rights}`;
    if (footerTexts[1]) footerTexts[1].textContent = t.footer.tagline;

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language buttons
document.addEventListener('DOMContentLoaded', () => {
    // Language button click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });

    // Initialize with saved language
    updateLanguage(currentLang);
});