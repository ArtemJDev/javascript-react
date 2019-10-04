//document  - html
//window - окно браузер
//screen - экран


let box = document.querySelector('.box');
let width = box.clientWidth;
let height = box.clientHeight;
console.log(width);
console.log(height);

// + полоса прокрутки // без видимая чсасть
let widthOffset = box.offsetWidth;
let heightOffset = box.offsetHeight;
console.log(widthOffset);
console.log(heightOffset);

// + видимая чсасть
let widthscroll = box.scrollWidth;
let heightscroll = box.scrollHeight;
console.log(widthscroll);
console.log(heightscroll);


//раскрытие блока с помощью высоты
let btn = document.getElementsByTagName('button')[0];
// btn.onclick = function() {
//     box.style.height = box.scrollHeight + 'px';
// }


//scrollTop скрытый текст 
// btn.onclick = function() {
//     console.log(box.scrollTop);
// }


//координаты
console.log(box.getBoundingClientRect()) //конкретный параметр через точку


//пользовательские параметры конфигурации
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

//сколько пользователь открутил докуумента
console.log(document.documentElement.scrollTop);


//положение документа клиента
document.documentElement.scrollTop = 0;

//скролит страницу относительно текущего местоположения x,y
window.scrollBy(0,0);

//скролит страницу к координатам x,y
window.scrollTo(0,0);





