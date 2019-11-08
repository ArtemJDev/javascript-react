let box = document.getElementById('box');
//получаем массив по тэгу
let button1 = document.getElementsByTagName('button');
console.log(button1[0]);
//массив по калссу
let circle = document.getElementsByClassName('circle');
console.log(circle[3]);
//массив
let hearts = document.querySelectorAll('.heart');
console.log(heart[3]);
//первый элемент на странице
let oneHeart = document.querySelector('.heart');


//изменения стилей + style
box.style.backgroundColor ='blue';
button1[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'green';
circle[2].style.backgroundColor = 'brown';


//метода для работы элементами со странице
//создание элемента
let div = document.createElement('div');
//создание текстового узла
let text = document.createTextNode('Тут был я');
//используем classList (remove contains)
div.classList.add('black');



//добавление элемента на страницу
document.body.appendChild(div); //добавление в конец страницы
//вставляем в body  перед элементом(что хотим, куда)
document.body.insertBefore(div,circle[0]);
//удаление элемента со страницы
document.body.removeChild(circle[1]);
//замента элемента (тот который хортим поместить, заместо которого хотим)
document.body.replaceChild(hearts[0],hearts[3]);

 
//добавление текста с кодом на страницу
div.innerHTML = "Hello World";
//добавление только текста
div.textContent= "Hello World";






