let headerMenu = document.querySelector('.header__menu');
function checkScreenSize() {
    if (window.innerWidth <= 610) {
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

document.addEventListener("DOMContentLoaded", function () {
    const activeItem = document.querySelector('.menu__item.menu__item-active');
    const otherItems = document.querySelectorAll('.menu__item:not(.menu__item-active)');

    if (window.innerWidth < 768) {
        otherItems.forEach(item => item.style.display = 'none');
        activeItem.addEventListener('mouseenter', () => {
            otherItems.forEach(item => item.style.display = 'flex');
        });

        // Закрытие при выходе из области
        activeItem.addEventListener('mouseleave', () => {
            otherItems.forEach(item => item.style.display = 'none');
        });
    }
});
