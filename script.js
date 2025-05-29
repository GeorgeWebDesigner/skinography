// Smooth scroll with easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                const offset = 80; // Height of fixed header
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections with staggered animations
        document.querySelectorAll('.service-card').forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });

        document.querySelectorAll('.advantage-item, .widget-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Progress bar
        const progressBar = document.querySelector('.progress-bar');

        function updateProgressBar() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }

        // Header scroll effect with smooth transitions
        let lastScroll = 0;
        const nav = document.querySelector('nav');
        let isScrolling = false;

        window.addEventListener('scroll', () => {
            updateProgressBar();

            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset;

                    if (currentScroll > 100) {
                        nav.style.padding = '0.5rem 0';
                        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
                        nav.style.background = 'rgba(255, 255, 255, 0.98)';
                    } else {
                        nav.style.padding = '1rem 0';
                        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
                        nav.style.background = 'rgba(255, 255, 255, 0.95)';
                    }

                    // Hide/show scroll indicator
                    const scrollIndicator = document.querySelector('.scroll-indicator');
                    if (scrollIndicator) {
                        if (currentScroll > 50) {
                            scrollIndicator.style.opacity = '0';
                            scrollIndicator.style.pointerEvents = 'none';
                        } else {
                            scrollIndicator.style.opacity = '1';
                            scrollIndicator.style.pointerEvents = 'auto';
                        }
                    }

                    lastScroll = currentScroll;
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });

        // Active navigation highlighting and section animations
        const sections = document.querySelectorAll('section');

        // Section fade-in animations
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        sections.forEach(section => {
            if (section.id !== 'home') {
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
                section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                sectionObserver.observe(section);
            }
        });

        // Active navigation
        const navLinksForActive = document.querySelectorAll('.nav-links a');

        function updateActiveNav() {
            const scrollPosition = window.pageYOffset + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinksForActive.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // Call on load

        // Scroll indicator с продвинутой анимацией
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        // Добавляем класс для анимации клика
        this.classList.add('clicked');

        // Находим секцию services
        const servicesSection = document.querySelector('#about');
        const offset = 20;
        const sectionHeight = servicesSection.offsetHeight;
        const targetPosition = servicesSection.offsetTop - offset + (sectionHeight / 4);

        // Запускаем плавную прокрутку
        smoothScrollTo(targetPosition, 1800); // 1.8 сек для более плавного эффекта

        // Убираем класс анимации после завершения
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600);
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    // Кастомная easing функция - быстрый старт, плавное замедление
    function easeOutQuint(t) {
        return 1 - Math.pow(1 - t, 5);
    }

    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Применяем easing
        const easeProgress = easeOutQuint(progress);

        // Прокручиваем страницу
        window.scrollTo(0, startPosition + (distance * easeProgress));

        // Продолжаем анимацию если не достигли конца
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Анимация стикера при появлении в viewport
const navigationSticker = document.querySelector('.navigation-sticker');
const stickerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInRight 0.6s ease-out';
        }
    });
}, {
    threshold: 0.5
});

if (navigationSticker) {
    stickerObserver.observe(navigationSticker);
}

// CSS анимация для появления
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Автоматический слайдер
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const slideInterval = 5000; // 5 секунд

// Создаем индикаторы для всех 6 слайдов
function initializeIndicators() {
    const indicatorsContainer = document.querySelector('.slide-indicators');
    indicatorsContainer.innerHTML = '';

    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        indicator.setAttribute('data-slide', index);
        if (index === 0) indicator.classList.add('active');
        indicatorsContainer.appendChild(indicator);
    });
}

function nextSlide() {
    // Убираем активный класс с текущего слайда
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.indicator')[currentSlide].classList.remove('active');

    // Переходим к следующему слайду
    currentSlide = (currentSlide + 1) % slides.length;

    // Добавляем активный класс новому слайду
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.indicator')[currentSlide].classList.add('active');
}

// Инициализация
initializeIndicators();

// Автоматическая смена слайдов
let slideTimer = setInterval(nextSlide, slideInterval);

// Клик по индикаторам
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('indicator')) {
        clearInterval(slideTimer);

        const newIndex = parseInt(e.target.getAttribute('data-slide'));

        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.indicator')[currentSlide].classList.remove('active');

        currentSlide = newIndex;

        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.indicator')[currentSlide].classList.add('active');

        // Перезапускаем автоматическую смену
        slideTimer = setInterval(nextSlide, slideInterval);
    }
});

// JavaScript для модальных окон записи
document.addEventListener('DOMContentLoaded', function() {
    // Функция для открытия модального окна
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            // Добавляем класс active для отображения модального окна
            modal.classList.add('active');

            // Блокируем прокрутку страницы
            document.body.classList.add('modal-open');

            // Устанавливаем фокус на содержимое модального окна для доступности
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.setAttribute('tabindex', '-1');
                modalContent.focus();
            }
        }
    }

    // Функция для закрытия модального окна
    function closeModal(modal) {
        // Удаляем класс active для скрытия модального окна
        modal.classList.remove('active');

        // Разблокируем прокрутку страницы
        document.body.classList.remove('modal-open');
    }

    // Обработчик для кнопок открытия модальных окон
    const modalOpeners = document.querySelectorAll('.open-modal');
    modalOpeners.forEach(opener => {
        opener.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Обработчик для закрытия по клику на overlay или кнопку закрытия
    const modals = document.querySelectorAll('.modal-container');
    modals.forEach(modal => {
        // Закрытие по кнопке
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                closeModal(modal);
            });
        }

        // Закрытие по клику на overlay
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', function() {
                closeModal(modal);
            });
        }

        // Предотвращение закрытия при клике на контент
        const content = modal.querySelector('.modal-content');
        if (content) {
            content.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-container.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
});

// Функция для скрытия лоадера после загрузки фрейма
function hideLoader(frame) {
    const loader = frame.parentElement.querySelector('.booking-loader');
    if (loader) {
        // Небольшая задержка для плавности
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 300);
    }
}

// Функция для обработки ошибок загрузки фрейма
function handleFrameError(frameId) {
    const frame = document.getElementById(frameId);
    if (frame) {
        const container = frame.parentElement;
        const loader = container.querySelector('.booking-loader');

        if (loader) {
            // Изменяем сообщение лоадера на ошибку
            const message = loader.querySelector('p');
            if (message) {
                message.textContent = 'Ошибка загрузки виджета. Попробуйте позже или перейдите на сайт сервиса.';
                message.style.color = '#e74c3c';
            }

            // Скрываем спиннер
            const spinner = loader.querySelector('.spinner');
            if (spinner) {
                spinner.style.display = 'none';
            }

            // Добавляем кнопку для перехода на сайт сервиса
            const directLinkButton = document.createElement('a');
            directLinkButton.href = frame.src;
            directLinkButton.target = '_blank';
            directLinkButton.className = 'btn btn-primary';
            directLinkButton.style.marginTop = '1rem';
            directLinkButton.textContent = 'Перейти на сайт записи';

            loader.appendChild(directLinkButton);
        }

        // Скрываем фрейм
        frame.style.display = 'none';
    }
}

// Обработка ошибок загрузки фреймов
document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.booking-frame');
    frames.forEach(frame => {
        frame.addEventListener('error', function() {
            handleFrameError(this.id);
        });

        // Установка таймаута на случай, если фрейм не загрузится
        setTimeout(() => {
            if (!frame.contentWindow || !frame.contentWindow.document.body) {
                handleFrameError(frame.id);
            }
        }, 15000); // 15 секунд на загрузку
    });
});

// JavaScript для блока "Пакетные услуги"
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления карточек при прокрутке
    const packagesObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const packagesObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, packagesObserverOptions);

    // Наблюдаем за карточками пакетов услуг
    document.querySelectorAll('.package-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        packagesObserver.observe(card);
    });

    // Обработчик клика по кнопке "Записаться"
    document.querySelectorAll('.btn-package').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            // Получаем ID пакета
            const packageId = this.closest('.package-card').id;
            const packageName = this.closest('.package-card').querySelector('.package-title').textContent;

            // Сохраняем выбранный пакет в sessionStorage для использования на странице записи
            sessionStorage.setItem('selectedPackage', packageId);
            sessionStorage.setItem('packageName', packageName);

            // Прокручиваем до секции записи
            const bookingSection = document.querySelector('#booking');
            if (bookingSection) {
                const headerOffset = 80;
                const bookingSectionPosition = bookingSection.getBoundingClientRect().top;
                const offsetPosition = bookingSectionPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Подсветка секции записи для привлечения внимания
                setTimeout(() => {
                    bookingSection.classList.add('highlight');

                    setTimeout(() => {
                        bookingSection.classList.remove('highlight');
                    }, 1500);
                }, 1000);
            }
        });
    });

    // Добавляем эффект подсветки для секции записи
    const style = document.createElement('style');
    style.textContent = `
        @keyframes highlightSection {
            0%, 100% { box-shadow: 0 0 0 rgba(75, 155, 30, 0); }
            50% { box-shadow: 0 0 30px rgba(75, 155, 30, 0.3); }
        }

        .booking.highlight {
            animation: highlightSection 1.5s ease;
        }
    `;
    document.head.appendChild(style);

    // Функция для обновления фоновых изображений (будет использоваться позже)
    window.updatePackageBackgrounds = function(backgroundUrls) {
        if (!backgroundUrls || typeof backgroundUrls !== 'object') return;

        Object.keys(backgroundUrls).forEach(packageId => {
            const card = document.getElementById(packageId);
            if (card) {
                const backdrop = card.querySelector('.package-backdrop');
                if (backdrop && backgroundUrls[packageId]) {
                    backdrop.style.backgroundImage = `url('${backgroundUrls[packageId]}')`;
                }
            }
        });
    };
});

// JavaScript для блока "Стоимость услуг"
document.addEventListener('DOMContentLoaded', function() {
    // Данные для слайдов - обновите пути к вашим изображениям
    const priceSlides = [
        {
            id: 1,
            image: '11.jpeg',
            title: 'Лазерная эпиляция для женщин'
        },
        {
            id: 2,
            image: '22.jpeg',
            title: 'Брови и ресницы'
        },
        {
            id: 3,
            image: '33.jpeg',
            title: 'Маникюр и педикюр'
        },
        {
            id: 4,
            image: '44.jpeg',
            title: 'Лазерная эпиляция для мужчин'
        },
        {
            id: 5,
            image: '55.jpeg',
            title: 'Косметология'
        }
    ];

    // Глобальная переменная для хранения текущего индекса слайда
    let currentIndex = 0;

    // Инициализируем слайдер только если он присутствует на странице
    const initPriceSlider = function() {
        const sliderContainer = document.querySelector('.price-slider');
        const indicatorsContainer = document.querySelector('.slider-indicators');

        // Проверяем, существуют ли контейнеры
        if (!sliderContainer || !indicatorsContainer) {
            console.log('Слайдер или контейнер индикаторов не найден');
            return;
        }

        console.log('Инициализация слайдера цен');

        // Очищаем контейнеры перед инициализацией
        sliderContainer.innerHTML = '';
        indicatorsContainer.innerHTML = '';

        // Создаем слайды
        priceSlides.forEach((slide, index) => {
            // Создаем элемент слайда
            const slideEl = document.createElement('div');
            slideEl.className = 'price-slide';
            slideEl.setAttribute('data-index', index);

            // Создаем изображение
            const img = document.createElement('img');
            img.src = slide.image;
            img.alt = slide.title;
            img.loading = 'lazy'; // Добавляем ленивую загрузку

            // Добавляем изображение в слайд
            slideEl.appendChild(img);

            // Добавляем слайд в контейнер
            sliderContainer.appendChild(slideEl);

            // Создаем индикатор с номером
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.setAttribute('data-index', index);
            indicator.setAttribute('role', 'button');
            indicator.setAttribute('aria-label', `Слайд ${index + 1}`);
            // Добавляем номер слайда
            indicator.textContent = index + 1;
            indicatorsContainer.appendChild(indicator);
        });

        // Устанавливаем первый слайд как активный
        setActiveSlide(0);

        // Добавляем обработчики событий для навигации
        setupNavigation();
    };

    // Функция для установки активного слайда
    function setActiveSlide(index) {
        const slideElements = document.querySelectorAll('.price-slide');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = slideElements.length;

        // Проверка наличия слайдов
        if (slideElements.length === 0) {
            console.log('Слайды не найдены');
            return;
        }

        console.log(`Устанавливаем активный слайд: ${index}`);

        // Обновляем классы для всех слайдов
        slideElements.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next', 'prev-2', 'next-2', 'prev-3', 'next-3');

            // Вычисляем относительную позицию от активного слайда
            const position = (i - index + totalSlides) % totalSlides;

            if (position === 0) {
                // Активный слайд
                slide.classList.add('active');
            } else if (position === 1) {
                // Следующий слайд
                slide.classList.add('next');
            } else if (position === 2) {
                // Второй следующий слайд
                slide.classList.add('next-2');
            } else if (position === 3) {
                // Третий следующий слайд
                slide.classList.add('next-3');
            } else if (position === totalSlides - 1) {
                // Предыдущий слайд
                slide.classList.add('prev');
            } else if (position === totalSlides - 2) {
                // Второй предыдущий слайд
                slide.classList.add('prev-2');
            } else if (position === totalSlides - 3) {
                // Третий предыдущий слайд
                slide.classList.add('prev-3');
            }
        });

        // Обновляем индикаторы
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);

            // Добавляем анимацию при активации
            if (i === index) {
                indicator.style.animation = 'pulse 0.5s';
            }
        });

        // Сохраняем текущий индекс
        currentIndex = index;

        // Объявляем текущий слайд для скринридеров
        const sliderTitle = document.querySelector('.prices .section-title');
        if (sliderTitle) {
            const currentTitle = priceSlides[index].title;
            sliderTitle.setAttribute('aria-live', 'polite');
            sliderTitle.setAttribute('aria-atomic', 'true');
        }
    }

    // Функция для настройки навигации
    function setupNavigation() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const slideElements = document.querySelectorAll('.price-slide');
        const totalSlides = slideElements.length;

        console.log(`Настройка навигации. Кнопка Пред: ${!!prevBtn}, Кнопка След: ${!!nextBtn}, Всего слайдов: ${totalSlides}`);

        // Проверяем наличие кнопок и слайдов
        if (!prevBtn || !nextBtn || totalSlides === 0) {
            console.log('Кнопки навигации или слайды не найдены');
            return;
        }

        // Очищаем возможные старые обработчики
        prevBtn.replaceWith(prevBtn.cloneNode(true));
        nextBtn.replaceWith(nextBtn.cloneNode(true));

        // Получаем новые ссылки на кнопки после клонирования
        const newPrevBtn = document.querySelector('.prev-btn');
        const newNextBtn = document.querySelector('.next-btn');

        // Добавляем обработчики с выводом в консоль
        newPrevBtn.addEventListener('click', function() {
            console.log('Кнопка "Предыдущий" нажата');
            const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            setActiveSlide(newIndex);
        });

        newNextBtn.addEventListener('click', function() {
            console.log('Кнопка "Следующий" нажата');
            const newIndex = (currentIndex + 1) % totalSlides;
            setActiveSlide(newIndex);
        });

        // Обработчики для индикаторов
        document.querySelectorAll('.indicator').forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.getAttribute('data-index'));
                console.log(`Индикатор ${index} нажат`);
                setActiveSlide(index);
            });

            // Добавление доступности с клавиатуры
            indicator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const index = parseInt(indicator.getAttribute('data-index'));
                    setActiveSlide(index);
                }
            });

            // Делаем индикаторы доступными с клавиатуры
            indicator.setAttribute('tabindex', '0');
        });

        // Обработчик клика по слайду
        document.querySelectorAll('.price-slide').forEach(slide => {
            slide.addEventListener('click', () => {
                const index = parseInt(slide.getAttribute('data-index'));
                if (index !== currentIndex) {
                    console.log(`Слайд ${index} нажат`);
                    setActiveSlide(index);
                }
            });
        });

        // Свайп для мобильных устройств
        setupTouchNavigation();
    }

    // Функция для настройки свайп-навигации
    function setupTouchNavigation() {
        let touchStartX = 0;
        let touchEndX = 0;

        const slider = document.querySelector('.price-slider-container');

        if (!slider) {
            console.log('Контейнер слайдера не найден для свайп-навигации');
            return;
        }

        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const slideElements = document.querySelectorAll('.price-slide');
            const totalSlides = slideElements.length;
            const swipeThreshold = 50; // Минимальное расстояние для свайпа

            if (touchEndX < touchStartX - swipeThreshold) {
                // Свайп влево - следующий слайд
                console.log('Свайп влево');
                const newIndex = (currentIndex + 1) % totalSlides;
                setActiveSlide(newIndex);
            }

            if (touchEndX > touchStartX + swipeThreshold) {
                // Свайп вправо - предыдущий слайд
                console.log('Свайп вправо');
                const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                setActiveSlide(newIndex);
            }
        }
    }

    // Инициализируем слайдер
    initPriceSlider();

    // Добавляем обработчик события resize для адаптивности
    window.addEventListener('resize', function() {
        // Адаптируем размер контейнера под размер активного слайда
        const activeSlide = document.querySelector('.price-slide.active img');
        const sliderContainer = document.querySelector('.price-slider-container');

        if (activeSlide && sliderContainer) {
            // Корректируем высоту контейнера слайдера в зависимости от соотношения сторон изображения
            setTimeout(() => {
                const aspectRatio = activeSlide.naturalHeight / activeSlide.naturalWidth;
                const containerWidth = sliderContainer.clientWidth * 0.65; // 65% от ширины контейнера
                const minHeight = window.innerWidth < 768 ? 450 : 600;
                const calculatedHeight = Math.max(containerWidth * aspectRatio, minHeight);

                // Плавно изменяем высоту контейнера
                sliderContainer.style.transition = 'height 0.3s ease';
                sliderContainer.style.height = `${calculatedHeight}px`;
            }, 100); // Небольшая задержка для загрузки изображения
        }
    });

    // Добавляем анимацию пульсации для индикаторов
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(styleSheet);
});
