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

//разворот списка в каталоге

let catalogBlocks = document.querySelectorAll('.catalog__block-zacupki');
let readMoreButtons = document.querySelectorAll('.read-more');
let readLesButtons = document.querySelectorAll('.read-les');

for (let i = 0; i < catalogBlocks.length; i++) {
    let catalogBlock = catalogBlocks[i];
    let readMoreButton = readMoreButtons[i];
    let readLesButton = readLesButtons[i];

    if (catalogBlock.offsetHeight > catalogBlock.scrollHeight) {
        readMoreButton.style.display = 'block';
    }

    readMoreButton.addEventListener('click', function() {
        catalogBlock.style.maxHeight = 'none';
        readMoreButton.style.display = 'none';
        readLesButton.style.display = 'block';
        catalogBlock.querySelector('.catalog__list-zacupki').style.display = 'block';      
    });

    readLesButton.addEventListener('click', function() {
        readMoreButton.style.display = 'block';
        readLesButton.style.display = 'none';
        catalogBlock.querySelector('.catalog__list-zacupki').style.display = '-webkit-box';      
    });
}

//новости + кнопка
let newItems = document.querySelectorAll('.new__list .new__item');
let itemsToShow = window.innerWidth > 1640 ? 6 : 4;

for (let i = itemsToShow; i < newItems.length; i++) {
    newItems[i].style.display = 'none';
}

function createNextButton(count) {
    let showMoreButton = document.createElement('button');
    showMoreButton.className = 'show-more';
    showMoreButton.textContent = `${count}`;
    if (count === 1) {
        showMoreButton.classList.add('show-now');
    }
    document.querySelector('.new__block-button').appendChild(showMoreButton);
    showMoreButton.addEventListener('click', function() {
        let showNowButton = document.querySelector('.show-now');
        if (showNowButton) {
            showNowButton.classList.remove('show-now');
        }
        showMoreButton.classList.add('show-now');
        for (let i = 0; i < newItems.length; i++) {
            if (i >= (count * itemsToShow - itemsToShow) && i < (count * itemsToShow)) {
                newItems[i].style.display = 'flex';
            } else {
                newItems[i].style.display = 'none';
            }
        }
    });
}

let count = Math.ceil(newItems.length / itemsToShow);

for (let i = 1; i <= count; i++) {
    createNextButton(i);
}
//видео
document.addEventListener('DOMContentLoaded', function () {
    const videoBlocks = document.querySelectorAll('.review__video-block');

    videoBlocks.forEach(block => {
        const video = block.querySelector('.review__video-treck');
        let isPlaying = false;

        block.addEventListener('click', function () {
            if (!isPlaying) {
                // Запуск видео
                video.play().then(() => {
                    isPlaying = true;
                    block.classList.add('playing');
                }).catch(error => {
                    console.error("Ошибка воспроизведения:", error);
                });
            } else {
                // Остановка видео
                video.pause();
                video.currentTime = 0;
                isPlaying = false;
                block.classList.remove('playing');
            }
        });
    });
});