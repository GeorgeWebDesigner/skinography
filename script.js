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
        const servicesSection = document.querySelector('#services');
        const offset = 80;
        const sectionHeight = servicesSection.offsetHeight;
        const targetPosition = servicesSection.offsetTop - offset + (sectionHeight / 2);

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

