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
// let headerMenu = document.querySelector('.header__menu-burger');



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
  })

  
