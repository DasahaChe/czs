// Photo Carousel
class PhotoCarousel {
    constructor() {
        this.track = document.getElementById('photoTrack');
        this.dotsContainer = document.getElementById('carouselDots');
        this.prevBtn = document.querySelector('.carousel-btn-prev');
        this.nextBtn = document.querySelector('.carousel-btn-next');

        this.photos = this.generatePhotoList();
        this.photosPerView = this.getPhotosPerView();
        this.currentIndex = 0;
        this.touchStartX = 0;

        this.init();
    }

    // Генерация списка фото
    generatePhotoList() {
        return [
            { src: 'img/photo/DSC02669_resized.jpg', alt: 'Фото 1' },
            { src: 'img/photo/DSC02694_resized.jpg', alt: 'Фото 2' },
            { src: 'img/photo/JYDL8RHHRjES3aJ3-YYiepOJZ2BVAwkLOGl47LO2SvDjx03kCG42u4HrCmjqcVeJnGM0szsnfrFR1tSsHoLn5Mx8.jpg', alt: 'Фото 3' },
            { src: 'img/photo/2026-02-27_12-59-55.png', alt: 'Фото 4' },
            { src: 'img/photo/bqpEC9Qz_ssvf2WzeFCzigx0U8Aunl0Lym7-SjHfpzhJqonFg0qLfomnQ2aKwPoJuwZrblHX9OUprlQkottnmtC1.jpg', alt: 'Фото 5' },
            { src: 'img/photo/DSC02354_resized.jpg', alt: 'Фото 6' },
            { src: 'img/photo/DSC02408_resized.jpg', alt: 'Фото 7' },
            { src: 'img/photo/DSC02657_resized.jpg', alt: 'Фото 8' },
            { src: 'img/photo/DSC02673_resized.jpg', alt: 'Фото 9' },
            { src: 'img/photo/image (3).png', alt: 'Фото 10' },
            { src: 'img/photo/image (4).png', alt: 'Фото 11' },
            { src: 'img/photo/image (5).png', alt: 'Фото 12' },
        ];
    }

    // Определяем количество видимых слайдов по ширине экрана
    getPhotosPerView() {
        if (window.innerWidth <= 768) return 1;   // мобильный - 1 слайд
        if (window.innerWidth <= 1024) return 2;  // планшет - 2 слайда
        return 3;                                  // десктоп - 3 слайда
    }

    // Максимальный индекс (до которого можно листать)
    getMaxIndex() {
        return Math.max(0, this.photos.length - this.photosPerView);
    }

    init() {
        this.renderSlides();
        this.renderDots();
        this.updateCarousel();
        this.addEventListeners();

        // Обработка изменения размера окна
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newPhotosPerView = this.getPhotosPerView();
                if (newPhotosPerView !== this.photosPerView) {
                    this.photosPerView = newPhotosPerView;
                    // Ограничиваем текущий индекс
                    if (this.currentIndex > this.getMaxIndex()) {
                        this.currentIndex = this.getMaxIndex();
                    }
                    this.renderDots();
                    this.updateCarousel();
                } else {
                    // Даже если количество не изменилось, нужно пересчитать смещение
                    this.updateCarousel();
                }
            }, 150);
        });
    }

    // ВАЖНО: НЕ устанавливаем inline min-width — он переопределяет CSS медиа-запросы!
    renderSlides() {
        this.track.innerHTML = '';

        this.photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.dataset.index = index;
            slide.style.cursor = 'pointer';

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            img.loading = index < this.photosPerView ? 'eager' : 'lazy';

            // Обработка ошибки загрузки
            img.onerror = () => {
                console.warn(`Не удалось загрузить: ${photo.src}`);
                img.src = 'img/photo/photo1.jpg';
            };

            // Клик открывает лайтбокс
            slide.addEventListener('click', () => {
                this.openLightbox(index);
            });

            slide.appendChild(img);
            this.track.appendChild(slide);
        });
    }

    renderDots() {
        this.dotsContainer.innerHTML = '';
        const maxIndex = this.getMaxIndex();
        const dotsCount = maxIndex + 1;

        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === this.currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Перейти к слайду ${i + 1}`);
            dot.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateCarousel();
            });
            this.dotsContainer.appendChild(dot);
        }
    }

    // Расчёт смещения через реальные пиксели
    updateCarousel() {
        const slides = this.track.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        // Получаем реальные размеры
        const slideWidth = slides[0].offsetWidth;
        const gap = parseInt(getComputedStyle(this.track).gap) || 20;
        const offset = this.currentIndex * (slideWidth + gap);

        this.track.style.transform = `translateX(-${offset}px)`;

        // Обновление кнопок
        const maxIndex = this.getMaxIndex();
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= maxIndex;

        // Обновление точек
        const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateCarousel();
            }
        });

        this.nextBtn.addEventListener('click', () => {
            if (this.currentIndex < this.getMaxIndex()) {
                this.currentIndex++;
                this.updateCarousel();
            }
        });

        // Свайпы для мобильных
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        }, { passive: true });

        this.track.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            this.handleSwipe(endX);
        }, { passive: true });
    }

    handleSwipe(endX) {
        const swipeThreshold = 50;
        const diff = this.touchStartX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && this.currentIndex < this.getMaxIndex()) {
                this.currentIndex++;
            } else if (diff < 0 && this.currentIndex > 0) {
                this.currentIndex--;
            }
            this.updateCarousel();
        }
    }

    // ========== LIGHTBOX METHODS ==========

    openLightbox(index) {
        this.lightboxIndex = index;
        const photo = this.photos[index];

        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImage');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxCounter = document.getElementById('lightboxCounter');

        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.alt;
        lightboxCaption.textContent = photo.alt;
        lightboxCounter.textContent = `${index + 1} / ${this.photos.length}`;

        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        this.preloadAdjacentImages(index);
    }

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        setTimeout(() => {
            document.getElementById('lightboxImage').src = '';
        }, 300);
    }

    nextLightboxImage() {
        if (this.lightboxIndex < this.photos.length - 1) {
            this.openLightbox(this.lightboxIndex + 1);
        }
    }

    prevLightboxImage() {
        if (this.lightboxIndex > 0) {
            this.openLightbox(this.lightboxIndex - 1);
        }
    }

    preloadAdjacentImages(index) {
        [index - 1, index + 1].forEach(i => {
            if (i >= 0 && i < this.photos.length) {
                const img = new Image();
                img.src = this.photos[i].src;
            }
        });
    }

    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        document.getElementById('lightboxOverlay').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightboxClose').addEventListener('click', () => this.closeLightbox());

        document.getElementById('lightboxPrev').addEventListener('click', (e) => {
            e.stopPropagation();
            this.prevLightboxImage();
        });
        document.getElementById('lightboxNext').addEventListener('click', (e) => {
            e.stopPropagation();
            this.nextLightboxImage();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.prevLightboxImage();
            if (e.key === 'ArrowRight') this.nextLightboxImage();
        });

        // Свайпы в лайтбоксе
        let lightboxStartX = 0;
        lightbox.addEventListener('touchstart', (e) => {
            lightboxStartX = e.touches[0].clientX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = lightboxStartX - endX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? this.nextLightboxImage() : this.prevLightboxImage();
            }
        }, { passive: true });
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new PhotoCarousel();
    carousel.initLightbox();
});