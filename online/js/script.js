const customSelect = document.querySelector('.custom-select');
const selectedOption = customSelect.querySelector('.selected-option');
const optionsList = customSelect.querySelector('.options-list');

const label = document.querySelector('label');
const button = document.querySelector('button');
const title = document.querySelector('.logo-title');
const logInput = document.querySelector('input[name="login"]');
const pasInput = document.querySelector('input[name="password"]');
selectedOption.addEventListener('click', () => {
    optionsList.classList.toggle('show');
});

optionsList.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        selectedOption.innerHTML = option.innerHTML;
        optionsList.classList.remove('show');
        setCookie('lang', option.getAttribute('for'));
        console.log(document.cookie);
    });
});

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

let lang = '';

let langData = {
    ru: {
        select: 'Выберите язык',
        title: 'Авторизуйтесь',
        login: 'Логин',
        password: 'Пароль',
        button: 'Войти'
    },
    en: {
        select: 'Select language',
        title: 'Authorize',
        login: 'Login',
        password: 'Password',
        button: 'Enter'
    },
    zh: {
        select: '选择语言',
        title: '登入',
        login: '登入',
        password: '密码',
        button: '登录'
    },
    tr: {
        select: 'Dil seçin',
        title: 'Giriş yapmak',
        login: 'Giriş yapmak',
        password: 'Şifre',
        button: 'Giriş yapmak'
    },
    fa: {
        select: 'زبان را انتخاب کنید',
        title: 'وارد شوید',
        login: 'وارد شوید',
        password: 'رمز عبور',
        button: 'وارد شوید'
    },
    hu: {
        select: 'Válasszon nyelvet',
        title: 'Jelentkezzen be',
        login: 'Bejelentkezés',
        password: 'Jelszó',
        button: 'Bejelentkezés'
    },
    uz: {
        select: 'Tilni tanlang',
        title: 'Tizimga kirish',
        login: 'Tizimga kirish',
        password: 'Parol',
        button: 'Tizimga kirish'
    }
};


optionsList.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        let cokkkieName = option.innerHTML
        lang = cokkkieName.slice(0, 2).toLowerCase();

        label.innerHTML = langData[lang].select;
        title.innerHTML = langData[lang].title;
        logInput.placeholder = langData[lang].login;
        pasInput.placeholder = langData[lang].password;
        button.innerHTML = langData[lang].button;
    })
});


