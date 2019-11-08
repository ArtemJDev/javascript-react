//функция ожидания - (функция, задержка)
//setTimeout(func, delay);

//let timerId = setTimeout(sayHello, 3000); //установка ижентификатора для последующей остановки
//clearTimeout(timerId);

let timerId = setInterval(sayHello, 3000); // интервальное повторение
//clearTimeout(timerId); - точно также как SetTimeout

function sayHello() {
//console.log("Hello world");
};

//рекурсивный вызов функци - замена setInterval()
let timerId2 = setTimeout(function log() {
    //console.log("Hello 2");
    setTimeout(log, 2000);
})

let btn = document.querySelector('.buttonY');
let blueBox = document.querySelector('.boxBlue');

function myAnimation() {
    let pos = 0;
    let id =  setInterval (frame,100);
    
    function frame() {
        if(pos==200) {
            clearInterval(id);
        } else {
            pos++;
            blueBox.style.top = pos + 'px';
            blueBox.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click',myAnimation);

//назначение функции для потомков родителя, назначение всем эелментам внутри
//если подходит под условие - делегируем

let boxWrap = document.querySelector('.rectGrey');
let boxesInWrap = document.getElementsByTagName('button');

boxWrap.addEventListener('click', function(event) {
    console.log(event.target.tagName);// BUTTON ТЭГ
    console.log(event.target.classList);// boxYellowRect класс


    if(event.target && event.target.tagName=='BUTTON') {
        console.log('Hello');
    };
    if(event.target && event.target.classList.contains("boxFirst")) {
        console.log('FIRST');
    };
    //нахождение по совпадению элемента с классом
    if(event.target && event.target.matches('button.boxSecond')) {
        console.log('MATCHES');
    };
     
} );

