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
let showMoreButton = document.querySelector('.show-more');

let itemsToShow = window.innerWidth > 1640 ? 6 : 4;

for (let i = itemsToShow; i < newItems.length; i++) {
    newItems[i].style.display = 'none';
}

showMoreButton.addEventListener('click', function() {
    for (let i = 0; i < itemsToShow ; i++) {
        if (newItems[i]) {
            newItems[i].style.display = 'none';
        }
    }
    for (let i = itemsToShow; i < itemsToShow + 6; i++) {
        if (newItems[i]) {
            newItems[i].style.display = 'block';
        }
    }
    itemsToShow += 6;
});