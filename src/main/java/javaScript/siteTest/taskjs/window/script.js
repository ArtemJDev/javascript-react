let box = document.querySelector('.box');
let btn = document.querySelector("button");

//получение ширины и высоты элемента без бордера и прокрутки
let width = box.clientWidth;
let height = box.clientHeight;
console.log(width);
console.log(height);


//получение ширины и высоты с бордером и прокруткой
let widthO = box.offsetWidth;
let heightO = box.offsetHeight;
console.log(widthO);
console.log(heightO);

//получение полной высоты без оверфлоу
let heightS = box.scrollHeight;
console.log(heightS);

//функция расширения box.style.height = heightS + "px";
// btn.addEventListener('click', function(e) {
//     box.style.height = 220 + "px";
//     //вывод отмотки
//     console.log(box.scrollTop);
// })

//функция перемещения вверх
btn.addEventListener('click', function(e) {
    box.scrollTop = 0;
    console.log(box.scrollTop);
})

//box-sizin: border-box - входят падинги в clientHeight/width

//параметры координат
//left - от границы браузера до элемента
//right - от левой границы до правого границы элемента
//top button also
//все начинается слева сверху

//возвращение координат через объект lest - right - top..
console.log(box.getBoundingClientRect().left);

//работа с документом окна браузера
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

//также scrollTop - перемотка по страницы
//scrollBy(0, 200) отмотка на 200px вниз - перемещение по координатом относительно еткущего местоположения
//scrollTo(0,20) - переносит относитеьльно TOP окна, а не относительно нашего положения


