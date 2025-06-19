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

 document.addEventListener('DOMContentLoaded', function() {
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
