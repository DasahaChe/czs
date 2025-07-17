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
burgerOpen.addEventListener('click', function () {
    headerMenu.classList.remove('visually-hidden');
    burgerClose.classList.add('open');
    burgerOpen.classList.add('visually-hidden');

    document.body.style.overflow = 'hidden';
});

burgerClose.addEventListener('click', function () {
    headerMenu.classList.add('visually-hidden');
    burgerClose.classList.remove('open');
    burgerOpen.classList.remove('visually-hidden');

    document.body.style.overflow = 'auto';
});

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
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.menu__list-icon .menu__img');
    const menuItems = document.querySelectorAll('.menu__item-mobil');

    let timeoutId;

    icons.forEach((icon, index) => {
        const targetIndex = index + 1;
        const targetItem = document.querySelector(`.menu__item-mobil[data-index="${targetIndex}"]`);

        // Показываем пункт меню при наведении
        icon.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            menuItems.forEach(item => item.classList.remove('show'));
            if (targetItem) {
                targetItem.classList.add('show');
                icon.style.fill = '#5BC5F2';
            }
        });

        // Скрываем пункт меню с задержкой
        icon.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                if (!targetItem.classList.contains('hover')) {
                    targetItem.classList.remove('show');
                    icon.style.fill = 'currentcolor';
                }
            }, 300);
        });

        // Если пользователь навёл на сам пункт меню — отменяем скрытие
        if (targetItem) {
            targetItem.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
                targetItem.classList.add('hover');
            });

            targetItem.addEventListener('mouseleave', () => {
                targetItem.classList.remove('hover');
                timeoutId = setTimeout(() => {
                    targetItem.classList.remove('show');
                    icon.style.fill = 'currentcolor';
                }, 300);
            });
        }
    });
});



//         document.addEventListener("DOMContentLoaded", function () {
//     const icons = document.querySelectorAll('.menu__list-icon .menu__img');
//     const menuItems = document.querySelectorAll('.menu__list-mobil .menu__item-mobil');

//     icons.forEach((icon, index) => {
//         const targetIndex = index + 1; // иконки начинаются с 1, так как data-index=1
//         const targetItem = document.querySelector(`.menu__list-mobil .menu__item-mobil[data-index="${targetIndex}"]`);

//         icon.addEventListener('mouseenter', () => {
//             menuItems.forEach(item => item.classList.remove('show'));
//             if (targetItem) {
//                 targetItem.classList.add('show');
//             }
//         });

//         // Скрываем при уходе мыши
//         icon.addEventListener('mouseleave', () => {
//             menuItems.forEach(item => item.classList.remove('show'));
//         });
//     });
// });