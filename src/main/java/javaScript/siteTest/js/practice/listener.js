let btn = document.querySelectorAll('button');
let wrap = document.querySelector(".wrapper");
let link = document.querySelector("a");
// btn[0].onclick = function() {
//     alert('Вы нажали на кнопку');
// };

//первым агнументом то событие которое должнО произойти
btn[0].addEventListener('click', function() {
    alert('Вы нажали на кнопку');
    alert('Вы нажали 2 на кнопку');

});

//наведение на кнопку
// btn[0].addEventListener('mouseenter', function() {
//  alert("Наведение");
// });
//при наведении на элемент
btn[0].addEventListener('mouseenter', function(e) {
    console.log(e);
    let target = e.target;
   // target.style.display='none';
      console.log('Произошло событие : ' +   e.type + ' на элементе' + e.target );
     });

wrap.addEventListener('click', function(e) {
    console.log('Произошло событие : ' +   e.type + ' на элементе' + e.target );
});

//отмена события 
link.addEventListener('click', function(e) {
   e.preventDefault(); DOMContentLoaded
    console.log('Произошло событие : ' +   e.type + ' на элементе' + e.target );
});


//события на каждую кнопку при ухода с него
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Покинула');
    })
});

//изменение текста по условию
// Функция изменяет содержимое t2
function modifyText() {
    var t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "три") {
      t2.firstChild.nodeValue = "два";
    } else {
      t2.firstChild.nodeValue = "три";
    }
  }
  // Добавляет слушателя событий для таблицы
  var el = document.getElementById("outside");
  //el.addEventListener("click", modifyText, false);

  //Слушатель события с анонимной функцией
  // Функция, изменяющая содержание t2
function modifyText(new_text) {
    var t2 = document.getElementById("t2");
    t2.firstChild.nodeValue = new_text;    
  }
   
  // Функция, добавляющая слушатель к таблице
  el = document.getElementById("outside");
 // el.addEventListener("click", function(){modifyText("четыре")});


   //-----------------------------------------------//
//mob listener

//touchstart - касание - аналог клика
//touch move - нажали и начинаем водить
//touchend - отодвигается от сенсора
//click - ok
//touchenter - палец заходит на элемент
//touchleave - палец покинулд элемент
//touchcancel - палец не регистрируется внутри браузера

window.addEventListener('DOMContentLoaded', function() {
  let box = document.querySelector('.box');

  //нажатие
  box.addEventListener('touchstart', function(e) {
      e.preventDefault;
      console.log("Red Box: touchstart");
      //получаем наш таргет div на который нажали
      console.log(e.target);
      console.log(e.touches[0].target);

      //регистрация (список)пальцев на элементе
      console.log(e.touches);
      console.log(e.changedTouches);
      //взаимодействуют с опредедлелнным предметом
      console.log(e.targetTouches);

  });
  //перемещениме
  box.addEventListener('touchmove', function(e) {
    e.preventDefault;
    console.log("Red Box: touchmove" + e.touches[0].pageX);
});

//перестаем касаться
box.addEventListener('touchend', function(e) {
    e.preventDefault;
    console.log("Red Box: touchend");
});
});

  //--------------------  REGEX---------------------------//

  //new RegExp('pattern', 'flags');
  //pattern/

  //let ans = prompt("Введите ваше имя");
//let reg = /n/g;// (1 - true, -1 = false) 
//console.log(reg.test(ans)); // - сапостовление выводит true or false
//search - ищет первое вхождение match -совпадение
//console.log(ans.search(reg)); 
//console.log(ans.match(reg)); 

//для работы со строками let reg = /n/i
//i - флаг регистра
//g - флагн вхождения, флаг глобальности
//m -  многострочность

// let pass = prompt("Введите пароль");
// console.log(pass.replace(/./g, "*")); // замена символов по рег выражению
// alert("12-34-56".replace(/-/g, ":"));

//  \d \D не
//  \w \W не
//  \s \S не

//let ans = prompt("Введите число");
//let reg = /\d/g;
//console.log(ans.match(reg));  //получаем массив вхождения


let str = 'My name is/ RD2R';
console.log(str.match(/\w\w\d\w/i)); //поиск по шаблону
console.log(str.match(/\//i)); //экранирование слэша $ * и тд / /
//TestGitPush FROM IDEA


