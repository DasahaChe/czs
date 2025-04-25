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