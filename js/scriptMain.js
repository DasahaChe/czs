let headerMenu = document.querySelector('.header__menu');
function checkScreenSize() {
    if (window.innerWidth <= 750) {
        headerMenu.classList.add('visually-hidden');
    } else {
        headerMenu.classList.remove('visually-hidden');
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();

let burgerOpen = document.querySelector('.header__burger');
let burgerClose = document.querySelector('.header__burger-close');
burgerOpen.addEventListener('click', function() {
    headerMenu.classList.remove('visually-hidden');    
    burgerClose.classList.add('open');
    burgerOpen.classList.add('visually-hidden');

    document.body.style.overflow = 'hidden';   
});

  burgerClose.addEventListener('click', function() {
    headerMenu.classList.add('visually-hidden');
    burgerClose.classList.remove('open');
    burgerOpen.classList.remove('visually-hidden');

    document.body.style.overflow = 'auto';
  });

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
         2540: {
            slidesPerView: 3,
        },
         750: {
            slidesPerView: 2,
        },
        
         481: {
            slidesPerView: 1,
        },
         319: {
            slidesPerView: 1,
        },
    },
    
});
let swiperPagination = document.querySelector('.swiper-pagination');
let swiperButtonPrev = document.querySelector('.swiper-button-prev');
let swiperButtonNext = document.querySelector('.swiper-button-next');

swiperPagination.addEventListener('click', () => {
    let swiperSlideActive = document.querySelector('.swiper-slide-active');
    swiperSlideActive.style.transform = 'scale(1.2)';
});

swiperButtonPrev.addEventListener('click', () => {
    let swiperSlideActive = document.querySelector('.swiper-slide-active');
    swiperSlideActive.style.transform = 'scale(1.2)';
});

swiperButtonNext.addEventListener('click', () => {
    let swiperSlideActive = document.querySelector('.swiper-slide-active');
    swiperSlideActive.style.transform = 'scale(1.2)';
});