//CallBack function
//функкция которая должна буть выполнена после того, как другая функция завершила свое выполнение..вывод сейчас 2,1
function first() {
  setTimeout( function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

//CallBack function
function learnJS(lang, callback) {
  console.log("I learn " + lang);
  callback();
}

function done() {
  console.log("From Done func");
}

learnJS("JS",function() {
  console.log("I passed the third lesson");
} )

//с подстановкой готоовой функции
learnJS("JS",done);//передаем название