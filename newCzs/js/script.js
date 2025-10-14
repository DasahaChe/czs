document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // На мобильных - простой слайдер
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
            },
            // На планшетах - начинаем применять эффекты
            768: {
                slidesPerView: 1.0,
                spaceBetween: 0,
                centeredSlides: true,
            },
            // На десктопе - полный эффект с масштабированием
            1024: {
                slidesPerView: 1.2,
                spaceBetween: 0,
                centeredSlides: true,
            },
            1280: {
                slidesPerView: 1.8,
                spaceBetween: 0,
                centeredSlides: true,
            }
        },
        // Эффекты для десктопной версии
        on: {
            init: function() {
                this.update();
            }
        }
    });
});

// new Swiper('.swiper', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true
//     },
//     spaceBetween: 10,
//     breakpoints: {
//         730: {
//             slidesPerView: 2,

//         },
//         1200: {
//             slidesPerView: 2.4,

//         },

//     }
// });

