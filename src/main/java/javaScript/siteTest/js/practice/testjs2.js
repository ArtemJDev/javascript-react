//'use strict' - пример испольщзования при создании переменной
//a =5;
//console.log(a);

console.log("arr" + " - object"); //строка
console.log(4 + " - object");//строка

// let answer = +prompt("Есть ли вам 18 лет?"); // с + будет преобразование string в number

let ink = 10,
 dec = 10; //при перечисление можно ставить запятую, 
//префиксная форма возвращает результат сразу, постфиксная форма после 
ink++;
dec--;

console.log(ink);
console.log(dec);
console.log(5%2); //остаток от деления
// = присваивание == проверка на равенство === строгое соответствие по типу
console.log("2"==2); // сравнение по значению
console.log("2"===2);// сравнение по типу
//& = и || или  
//** - степень 3 ** 2
//условия

if (2 * 2 == 8) {  //1 - true
    console.log("Yees")   
} else {
    console.log("No")   
}
//двойное условие
let num = 50;
if(num < 49) {
    console.log("Неверно")
} else if( num == 50) {
console.log("Верно")
} //else также как в java

//тернарный оператор 
num > 50 ? console.log("Yes") : console.log("NOO");

let sw = 50;
switch(sw) { //замена if, проверяем num
    case sw<49:
            console.log("NOO SWITCH");
            break;
    case 50:
            console.log("SWITCH YEES");
            break;
    default:
            console.log("SWITCH default");
            break;
}

