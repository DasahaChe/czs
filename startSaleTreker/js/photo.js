// Photo Carousel
class PhotoCarousel {
    constructor() {
        this.track = document.getElementById('photoTrack');
        this.dotsContainer = document.getElementById('carouselDots');
        this.prevBtn = document.querySelector('.carousel-btn-prev');
        this.nextBtn = document.querySelector('.carousel-btn-next');

        this.photos = this.generatePhotoList(); // Список фото
        this.photosPerView = this.getPhotosPerView();
        this.currentIndex = 0;
        this.totalSlides = Math.ceil(this.photos.length / this.photosPerView);

        this.init();
    }

    // Генерация списка фото (измените под свои имена файлов)
    generatePhotoList() {
        const photoCount = 12; // Укажите общее количество фото
        const photos = [];

        // for (let i = 1; i <= photoCount; i++) {
        //     photos.push({
        //         src: `img/photo/photo${i}.jpg`,
        //         alt: `Мероприятие ${i}`
        //     });
        // }

        // Или можно задать вручную:

        return [
            { src: 'img/photo/DSC02669_resized.jpg', alt: 'Фото 1' },
            { src: 'img/photo/DSC02694_resized.jpg', alt: 'Фото 2' },
            { src: 'img/photo/JYDL8RHHRjES3aJ3-YYiepOJZ2BVAwkLOGl47LO2SvDjx03kCG42u4HrCmjqcVeJnGM0szsnfrFR1tSsHoLn5Mx8.jpg', alt: 'Фото 3' },
            { src: 'img/photo/2026-02-27_12-59-55.png', alt: 'Фото  4' },
            { src: 'img/photo/bqpEC9Qz_ssvf2WzeFCzigx0U8Aunl0Lym7-SjHfpzhJqonFg0qLfomnQ2aKwPoJuwZrblHX9OUprlQkottnmtC1.jpg', alt: 'Фото 5' },
            { src: 'img/photo/DSC02354_resized.jpg', alt: 'Фото 6' },
            { src: 'img/photo/DSC02408_resized.jpg', alt: 'Фото 7' },
            { src: 'img/photo/DSC02657_resized.jpg', alt: 'Фото 8' },
            { src: 'img/photo/DSC02673_resized.jpg', alt: 'Фото 9' },
            { src: 'img/photo/image (3).png', alt: 'Фото 10' },
            { src: 'img/photo/image (4).png', alt: 'Фото 11' },
            { src: 'img/photo/image (5).png', alt: 'Фото 12' },
            // ... добавьте остальные фото
        ];


        // return photos;
    }

    getPhotosPerView() {
        if (window.innerWidth <= 640) return 1;
        if (window.innerWidth <= 968) return 2;
        return 3;
    }

    init() {
        this.renderSlides();
        this.renderDots();
        this.updateCarousel();
        this.addEventListeners();

        // Обработка изменения размера окна
        window.addEventListener('resize', () => {
            const newPhotosPerView = this.getPhotosPerView();
            if (newPhotosPerView !== this.photosPerView) {
                this.photosPerView = newPhotosPerView;
                this.totalSlides = Math.ceil(this.photos.length / this.photosPerView);
                this.currentIndex = 0;
                this.renderDots();
                this.updateCarousel();
            }
        });
    }

    renderSlides() {
        this.track.innerHTML = '';

        this.photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            img.loading = index < 3 ? 'eager' : 'lazy'; // Первые 3 загружаем сразу

            // Обработка ошибки загрузки
            img.onerror = () => {
                console.warn(`Не удалось загрузить фото: ${photo.src}`);
                img.src = 'img/photo/photo1.jpg'; // Запасное фото
            };

            slide.appendChild(img);
            this.track.appendChild(slide);
        });
    }

    renderDots() {
        this.dotsContainer.innerHTML = '';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Перейти к слайду ${i + 1}`);
            dot.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateCarousel();
            });

            this.dotsContainer.appendChild(dot);
        }
    }

    updateCarousel() {
        const offset = -this.currentIndex * (100 / this.totalSlides) * (this.photos.length / this.photosPerView);
        const slideWidth = 100 / this.photosPerView;
        const gap = 20; // gap из CSS в px
        const containerWidth = this.track.parentElement.offsetWidth;
        const gapInPercent = (gap / containerWidth) * 100 * this.currentIndex;

        this.track.style.transform = `translateX(calc(-${this.currentIndex * 100}% - ${gapInPercent}%))`;

        // Обновление кнопок
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.totalSlides - 1;

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
            if (this.currentIndex < this.totalSlides - 1) {
                this.currentIndex++;
                this.updateCarousel();
            }
        });

        // Свайпы для мобильных
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        }, { passive: true });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && this.currentIndex < this.totalSlides - 1) {
                // Свайп влево - следующее
                this.currentIndex++;
            } else if (diff < 0 && this.currentIndex > 0) {
                // Свайп вправо - предыдущее
                this.currentIndex--;
            }
            this.updateCarousel();
        }
    }
    // ... в конце класса PhotoCarousel, перед закрывающей скобкой класса ...

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
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы

        // Предзагрузка соседних фото
        this.preloadAdjacentImages(index);
    }

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Возвращаем скролл

        // Очищаем src после анимации
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
        // Предзагрузка следующего и предыдущего изображения
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

        // Закрытие по клику на оверлей или кнопку
        document.getElementById('lightboxOverlay').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightboxClose').addEventListener('click', () => this.closeLightbox());

        // Навигация
        document.getElementById('lightboxPrev').addEventListener('click', (e) => {
            e.stopPropagation();
            this.prevLightboxImage();
        });
        document.getElementById('lightboxNext').addEventListener('click', (e) => {
            e.stopPropagation();
            this.nextLightboxImage();
        });

        // Клавиатура
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.prevLightboxImage();
            if (e.key === 'ArrowRight') this.nextLightboxImage();
        });

        // Свайпы в лайтбоксе
        let startX = 0;
        lightbox.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                diff > 0 ? this.nextLightboxImage() : this.prevLightboxImage();
            }
        }, { passive: true });
    }

    // Модифицируем renderSlides для добавления клика
    renderSlides() {
        this.track.innerHTML = '';
        this.track.style.display = 'flex';
        this.track.style.gap = '20px';

        this.photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.style.minWidth = `calc(${100 / this.photosPerView}% - ${20 * (this.photosPerView - 1) / this.photosPerView}px)`;
            slide.style.cursor = 'pointer';

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            img.loading = index < this.photosPerView ? 'eager' : 'lazy';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.borderRadius = '8px';
            img.style.transition = 'transform 0.3s ease';

            // Эффект при наведении
            slide.addEventListener('mouseenter', () => img.style.transform = 'scale(1.03)');
            slide.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

            // Клик открывает лайтбокс
            slide.addEventListener('click', () => {
                this.openLightbox(index);
            });

            img.onerror = () => {
                console.warn(`Не удалось загрузить: ${photo.src}`);
                img.src = 'img/photo/photo1.jpg';
            };

            slide.appendChild(img);
            this.track.appendChild(slide);
        });
    }
    // ... в конце класса PhotoCarousel, перед закрывающей скобкой класса ...

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
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы

        // Предзагрузка соседних фото
        this.preloadAdjacentImages(index);
    }

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Возвращаем скролл

        // Очищаем src после анимации
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
        // Предзагрузка следующего и предыдущего изображения
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

        // Закрытие по клику на оверлей или кнопку
        document.getElementById('lightboxOverlay').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightboxClose').addEventListener('click', () => this.closeLightbox());

        // Навигация
        document.getElementById('lightboxPrev').addEventListener('click', (e) => {
            e.stopPropagation();
            this.prevLightboxImage();
        });
        document.getElementById('lightboxNext').addEventListener('click', (e) => {
            e.stopPropagation();
            this.nextLightboxImage();
        });

        // Клавиатура
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.prevLightboxImage();
            if (e.key === 'ArrowRight') this.nextLightboxImage();
        });

        // Свайпы в лайтбоксе
        let startX = 0;
        lightbox.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                diff > 0 ? this.nextLightboxImage() : this.prevLightboxImage();
            }
        }, { passive: true });
    }

    // Модифицируем renderSlides для добавления клика
    renderSlides() {
        this.track.innerHTML = '';
        this.track.style.display = 'flex';
        this.track.style.gap = '20px';

        this.photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.style.minWidth = `calc(${100 / this.photosPerView}% - ${20 * (this.photosPerView - 1) / this.photosPerView}px)`;
            slide.style.cursor = 'pointer';

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            img.loading = index < this.photosPerView ? 'eager' : 'lazy';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.borderRadius = '8px';
            img.style.transition = 'transform 0.3s ease';

            // Эффект при наведении
            slide.addEventListener('mouseenter', () => img.style.transform = 'scale(1.03)');
            slide.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

            // Клик открывает лайтбокс
            slide.addEventListener('click', () => {
                this.openLightbox(index);
            });

            img.onerror = () => {
                console.warn(`Не удалось загрузить: ${photo.src}`);
                img.src = 'img/photo/photo1.jpg';
            };

            slide.appendChild(img);
            this.track.appendChild(slide);
        });
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new PhotoCarousel();
    carousel.initLightbox(); // Инициализируем лайтбокс после создания карусели
});