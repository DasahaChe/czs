let clockTop = document.querySelector('.clock-top');
let clockBottom = document.querySelector('.clock-bottom');
let clockCenter = document.querySelector('.clock-center');
let start = 14;
let finish = 15;
let t = (((finish - start) * 35000) / 4);
// let t  = (((finish - start) * 3600000) / 4); 
let interval = setInterval(function () {
    let clockTopHeight = parseInt(window.getComputedStyle(clockTop).height);
    let clockBottomHeight = parseInt(window.getComputedStyle(clockBottom).height);

    if (clockTopHeight > 0) {
        clockTop.style.height = (clockTopHeight - 1) + 'px';
        clockBottom.style.height = (clockBottomHeight + 1) + 'px';
    } else {
        clearInterval(interval);
        clockCenter.style.display = 'none';
    }
}, t);

let lineLeft = document.querySelector('.line.left');
let lineRight = document.querySelector('.line.right');

lineLeft.style.left = '0';
lineRight.style.right = '0';
//иметация базы данных

let responsData = {
    count: [5.00, 25.72, 65.81, 101.76, 113.88],
    finish: [5, 75, 179, 1678, 3886],
    sucsess: [4, 70, 172, 1600, 3468],
    all: [694, 694, 695, 696, 696],
    kp: [360, 360, 365, 367, 367]
};

// заполнения данными полей главного блока

let mainResult = document.querySelector('.main__result');
let allSum = document.querySelector('.all-sum');
let successSum = document.querySelector('.success-sum');
let procentSum = document.querySelector('.procent-sum');
let users = document.querySelector('.user-count');
let kp = document.querySelector('.kp-count');

let i = 0;

let intervals2 = setInterval(function () {
    mainResult.innerHTML = responsData.count[i] + ' МЛРД ₽';
    allSum.innerHTML = responsData.finish[i];
    successSum.innerHTML = responsData.sucsess[i];
    users.innerHTML = responsData.all[i];
    kp.innerHTML = responsData.kp[i];
    let procentData = Math.round(responsData.sucsess[i] / responsData.finish[i] * 100)
    
    procentSum.innerHTML = '<div class="success-block no-round pieanimate"></div>';
    procentSum.innerHTML += ' ' + procentData + '%';
    let successBlock = document.querySelector('.success-block');
    successBlock.style.setProperty('--p', procentData);
    i++;
    if (i >= responsData.count.length) {
        i = 0;
    }
}, 7000);

// работа с блоком времени имитация

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours-text');

let startHours = 12;
let endHours = 19;
let hous = 0;
let minut = 0;
let msh = 35000 / (endHours - startHours);
let msm = 35000 / ((endHours - startHours) * 60);

let intervaltm = setInterval(function () {
    if (startHours < endHours) {
        if (minut == 59) {
            minut = 0;
        }
        minut++;
        minutes.innerHTML = minut;
    }
    else{
        
    }
}, msm);

let intervalth = setInterval(function() {
    if (startHours < endHours) {
        startHours++;
        hous++;
        hours.innerHTML = hous;
        let hoursValue = parseInt(hours.innerHTML);
        if (hoursValue === 1) {
            hoursText.innerHTML = 'ЧАС';
        } else if (hoursValue >= 2 && hoursValue <= 4) {
            hoursText.innerHTML = 'ЧАСА';
        } else if (hoursValue === 0 || (hoursValue >= 5 && hoursValue <= 9)) {
            hoursText.innerHTML = 'ЧАСОВ';
        }
        else{
           
        }
    }
}, msh);

// заполнение даты и времени реальной

let dateText = document.querySelector('.now-day');
let timeText = document.querySelector('.now-time');
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let monthName = monthNames[month];

let nowHours = date.getHours();
let nowMinutes = date.getMinutes();

dateText.innerHTML = day + ' ' + monthName;
timeText.innerHTML = nowHours + ' : ' + nowMinutes;

//иметация базы данных 

let dinamicData = {
    // 1: {title: 'Наши достижения', subtitle:'Деловое событие года 2025', text:"Победитель среди 150 участников. Рассматривались B2B и B2C мероприятия от 150 участников, участие в которых является платным.", photo: 'img.jpg'},
    1: {title: 'Топ 7 закупщиков', subtitle:'none', text:"none", photo: 'none', table :{ 1: {name: 'Юринат', count:'80'}, 2: {name: 'Ашан, СТМ', count:'64'}, 3: {name: 'Ирбис, ГК Транзит Сити', count:'56'},4: {name: 'Ассорти Экспресс', count:'51'},5: {name: 'Бегемаг', count:'49'},6: {name: 'Пятерочка', count:'49'},7: {name: 'Находка', count:'49'}}},
    2: {title: 'Фотографии мероприятия', subtitle:'none', text:"Дополнительный текст для подписи, если нужно", photo: 'image.webp', table : 'none'},
    3: {title: 'Топ 7 поставщиков', subtitle:'none', text:"none", photo: 'none', table :{ 1: {name: 'Энджой Фуд (Кабинет 2)', count:'67'}, 2: {name: 'Сытные Угодья (Кабинет 2)', count:'64'}, 3: {name: 'DOGUS CAY', count:'58'},4: {name: 'ОКЕЙЧ', count:'58'},5: {name: 'Альтернатива ЗПИ (Кабинет 1)', count:'50'},6: {name: 'Травы Башкирии (Кабинет 1)', count:'48'},7: {name: 'Бибиков ИП', count:'47'}}},
    4: {title: 'Выход DiCaprio', subtitle:'none', text:"Мои поздравления. Вы уже давно на моей стороне, а я только начинаю говорить вам благодарности", photo: 'di.jpg', table : 'none'},
};

// заполнения данными полей главного блока


let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');
let infoText = document.querySelector('.info__text');
let infoImg = document.querySelector('.info__img');
let infoTable = document.querySelector('.info__table');

let j = 1;

let intervalData = setInterval(function() {
    let data = dinamicData[i];
    if (data.title !== 'none') {
        infoTitle.innerHTML = data.title;
        infoTitle.style.display = 'block';
    } else {
        infoTitle.style.display = 'none';
    }
    if (data.subtitle !== 'none') {
        infoSubtitle.innerHTML = data.subtitle;
        infoSubtitle.style.display = 'block';
    } else {
        infoSubtitle.style.display = 'none';
    }
    if (data.text !== 'none') {
        infoText.innerHTML = data.text;
        infoText.style.display = 'block';
    } else {
        infoText.style.display = 'none';
    }
    if (data.photo !== 'none') {
        infoImg.src = 'img/' + data.photo;
        infoImg.style.display = 'block';
    } else {
        infoImg.style.display = 'none';
    }
    if (data.table !== 'none') {
        let table = '';
        for (let key in data.table) {
            let row = data.table[key];
            table += '<tr><td>' + row.name + '</td><td>' + row.count + '</td></tr>';
        }
        infoTable.innerHTML = table;
        infoTable.style.display = 'block';
    } else {
        infoTable.style.display = 'none';
    }
    j++;
    if (j > Object.keys(dinamicData).length) {
        clearInterval(interval);
    }
}, 7000);