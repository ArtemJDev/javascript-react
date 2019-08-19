let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart');

//let heart = document.querySelectorAll('.wrapper .heart'); вложенность
//получение первого элемента на странице
let oneHeart = document.querySelector('.heart');
let wrapper = document.querySelector('.wrapper');


// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle);
// console.log(circle[0]);
// console.log(heart);
// console.log(oneHeart);

//замена цвета квадрата
box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//циклы работы с элементами
for(i = 0 ; i<heart.length; i++) {
heart[i].style.backgroundColor = "blue";
}
heart.forEach(function(item,i,mass) {
    item.style.backgroundColor='green';
});

//создание елемента
let div = document.createElement('div');
console.log(div);
//
let text = document.createTextNode('Тут был я');
console.log(text);

//добавление в созданный див
div.classList.add('black');

//добавление div в html , можно вставить в начало, вконец. после опредееленого элемента, заменить
//добавление в конец body
document.body.appendChild(div);

//вставка текста или html внутрь
//div.innerHTML = 'Hello world';
// div.innerHTML = '<h1>Hello</h1> ';
div.textContent = 'Hello World';


//добавление в wrapper в родителя в конец
wrapper.appendChild(div);
//добавление перед, первый параметр что вставляем, второй перед каким элементом
document.body.insertBefore(div,circle[1]);

//удаление элемента со страницы
document.body.removeChild(circle[0]);
//удаление у родителя wrapper
wrapper.removeChild(heart[1]);

//замена одного элемента другим
document.body.replaceChild(btn[1], circle[1]);
