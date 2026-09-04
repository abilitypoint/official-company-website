const DESKTOP_QUERY = '(min-width: 900px)';
const ROTATION_INTERVAL = 6000;
const SWIPE_THRESHOLD = 50;

function registerHeroCarousel() {
    const carousel = document.querySelector('[data-hero-carousel]');

    if (!carousel) {
        return;
    }

    const slides = [...carousel.querySelectorAll('.hero-slide')];
    const previousButton = carousel.querySelector('.carousel-button-prev');
    const nextButton = carousel.querySelector('.carousel-button-next');
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeIndex = 0;
    let rotationTimer;
    let pointerStartX;
    let pointerStartY;

    const showSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('is-active', slideIndex === activeIndex);
        });
    };

    const stopRotation = () => {
        window.clearInterval(rotationTimer);
        rotationTimer = undefined;
    };

    const startRotation = () => {
        stopRotation();

        if (!reducedMotionQuery.matches && slides.length > 1) {
            rotationTimer = window.setInterval(() => showSlide(activeIndex + 1), ROTATION_INTERVAL);
        }
    };

    previousButton.addEventListener('click', () => {
        showSlide(activeIndex - 1);
        startRotation();
    });

    nextButton.addEventListener('click', () => {
        showSlide(activeIndex + 1);
        startRotation();
    });

    carousel.addEventListener('mouseenter', stopRotation);
    carousel.addEventListener('mouseleave', startRotation);
    carousel.addEventListener('focusin', stopRotation);
    carousel.addEventListener('focusout', (event) => {
        if (!carousel.contains(event.relatedTarget)) {
            startRotation();
        }
    });

    carousel.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }

        pointerStartX = event.clientX;
        pointerStartY = event.clientY;
    });

    carousel.addEventListener('pointerup', (event) => {
        if (pointerStartX === undefined || pointerStartY === undefined) {
            return;
        }

        const distanceX = event.clientX - pointerStartX;
        const distanceY = event.clientY - pointerStartY;
        pointerStartX = undefined;
        pointerStartY = undefined;

        if (Math.abs(distanceX) < SWIPE_THRESHOLD || Math.abs(distanceX) <= Math.abs(distanceY)) {
            return;
        }

        showSlide(activeIndex + (distanceX < 0 ? 1 : -1));
        startRotation();
    });

    carousel.addEventListener('pointercancel', () => {
        pointerStartX = undefined;
        pointerStartY = undefined;
    });
    desktopQuery.addEventListener('change', startRotation);
    reducedMotionQuery.addEventListener('change', startRotation);
    startRotation();
}

export { registerHeroCarousel };