
'use strict';
//вопрос
let answer = prompt("Как вы относитесь к технике Apple",'');

let question = document.querySelector('.prompt');
question.textContent = answer;

//меняем текст
let h = document.querySelector(".title").textContent="Мы продаем только подлинную технику Apple";

//меняем фон
document.body.style.backgroundImage ="url('img/apple_true.jpg')";


//удаление рекламы
let adv = document.querySelector(".adv").remove();



//добавляем едемент
let menuAdd = document.getElementsByClassName("menu")[0];
let newLi = document.createElement("li");
newLi.className="menu-item";
newLi.textContent = "Пятый пункт";
menuAdd.appendChild(newLi);
// let menu = document.querySelector('.menu').insertAdjacentHTML("beforeend","<li class=\"menu-item\">Пятый пункт</li>");

//меняем местами
let menuIt  = document.getElementsByClassName("menu-item");