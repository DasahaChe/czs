let clockTop = document.querySelector('.clock-top');
let clockBottom = document.querySelector('.clock-bottom');
let clockCenter = document.querySelector('.clock-center');
let start = 13; 
let finish = 15;
let t  = (((finish - start) * 3600000) / 4); //1/4 от прйденного времени
let interval = setInterval(function() {
    let clockTopHeight = parseInt(window.getComputedStyle(clockTop).height);
    let clockBottomHeight = parseInt(window.getComputedStyle(clockBottom).height);
    let clockCenterHeight = parseInt(window.getComputedStyle(clockCenter).height);

    if (clockTopHeight > 0) {
        clockTop.style.height = (clockTopHeight - 1) + 'px';
        clockBottom.style.height = (clockBottomHeight + 1) + 'px';
    } else {
        clearInterval(interval);
        clockCenter.style.display = 'none';
    }
}, t);

let successBlock = document.querySelector('.success-block');
let dataArray = [100, 90, 98, 100, 79, 89, 90, 100, 89];
let index = 0;

let intervals = setInterval(function() {
    let data = dataArray[index];
    successBlock.style.setProperty('--p', data);
    index = (index + 1) % dataArray.length;
}, 1000);

