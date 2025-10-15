document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {

        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },

        breakpoints: {
            318: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
            },

            1024: {
                slidesPerView: 2,
                spaceBetween: 15,
                centeredSlides: true,
            }
        }
    });
});
