console.log(leftBorderWidth);
//var существует до выполнения скрипта, видна везде

var leftBorderWidth = 1; //присваивание значение
{
//let видна только в блоке кода или после инициализации
    let pi = 3.14;
}
//`` -
console.log(4/0); //infinity
console.log('5' * 5); // Nan
// console.log(wtt); // null


var number = 5;//число
var string = "Hello"; //строка
var sym = Symbol();//символ
var boolean = true; //логический
null; //чего-то в коде не существует
// underfined; // переменная создана, но не имеет значения (пример вызов let до объявления)
var obj = {}; //коллекция данных , структура для хранения. 

let person = {
    name: "john",
    age: 25,
    isMarried: false
} 
//добраться до значения через . или через квадратные скобки
console.log(person.name + " " + person.age);
console.log(person["isMarried"]);
//массив
let arr = ['plun', 'apple', 'orange'];
console.log(arr[1]);

//общение с пользолвателем
alert("Hello World");
confirm("Yes or not?") //вывод с выбором

//получение значение boolean от confirm
let answer = confirm("Male?"); //true or false
console.log(answer);

//получение  значение от пользователя (всегда string)
prompt("Есть ли вам 18?","Да");
let answ = prompt("Скоро уже?","Еще немного");
console.log(answ);

//проверка на тип данных
console.log(typeof(answ));
