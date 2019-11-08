//import { clearInterval } from "timers";

//выполнение функции func через 2 секунды + параметры для  функции кроме EEx
//функцию обязательно в переменную чтобы остановить действие если надо
//let timerId = setTimeout(func, 2000);

//остановка  таймера с функцией
//clearTimeout(timerId);

//function func(x,y);

//выполнение через определенные промежутки времени
//let timerId = setInterval(func, 2000);

//остановка  таймера с функцией
//clearTimeout(timerId);

//рекурсивынй сет таймаут
let timerId2 = setTimeout(log,2000);
function log() {
    console.log('Рекурсивный вызов');
    timerId2 = setTimeout(log, 2000);
}

//линейная анимация
let btn = document.querySelector('.btn');

function myAnimaton() {

    let out = document.querySelector('.inBox');
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if(pos > 270) {
            clearInterval(id);
        } else {
            pos++;
            out.style.top = pos + 'px';
            out.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimaton);


//делегирование собыстий от родителя
let btns = document.getElementsByTagName('button');
let btn_block = document.querySelector('.btn-block');

btn_block.addEventListener('click', function(e) {
    if(e.target  && e.target.tagName == 'BUTTON' && e.target.classList != 'first') {
        console.log('Делегирование');
        //делегирование по классу
    } else if(e.target  && e.target.classList == 'first') {
        console.log('First  + Делегирование');

    } 
    //делегирование по классу
    if(e.target  && e.target.matches('button.second')) {
        console.log('Second  + Делегирование');
    }
});
