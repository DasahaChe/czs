let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu-burger');

headerBurger.addEventListener('click', function() {
    headerMenu.classList.toggle('visually-hidden');
    
    if (!headerMenu.classList.contains('visually-hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

  
