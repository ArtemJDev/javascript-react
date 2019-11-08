let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');
let fifths = document.createElement('li');
fifths.innerHTML = 'Пятый пункты';
fifths.classList.add("menu-item");
menu.appendChild(fifths);

menu.insertBefore(menuItems[2],menuItems[1]);

let text = document.querySelector('#title');
text.innerHTML = 'Мы продаем только подлинную технику apple';

let adv = document.querySelector('.adv');
adv.style.display ='none';

let ask = prompt("Как вы относитесь к технике Apple",'');
let answer = document.querySelector('.prompt');
answer.textContent = ask;

document.body.style.background ='url(img/apple_true.jpg) center no-repeat';