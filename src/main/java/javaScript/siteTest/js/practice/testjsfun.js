//функция declaration  вызывать можно до объявления

let num = 10;
function showFirstMessage(text) { //по аналогии java, кроме параметра
    let num = 30; //теперь переменная будет только для внутренней
    num = 20; //назначение значения глобальной переменной
    //сначала пере енная изется внутри функции , потом снаружи
    console.log(text);
}
showFirstMessage("Hello from function");
showFirstMessage(num);

//переменная внутри функции видна только внутри нее, она будет локальной

//функция возвращающая значение
function calc(a,b) {
    return a + b;
}
console.log(calc(1,2));

//функция возвращающая значение + присваивание значение пермеменной из функции
function retVar() {
        let num = 50;
        return num;
}
let anotherVar = retVar();
console.log(anotherVar);

//function expression - функциональное выражение- с озщдается только тогда, когда код до нее дохожит
let anpthercalc = function(a,b) {
    return a + b;
}

//es6 задание ф-ии через стрелку + можно добавить фигурные скобки
//не имеет контекста вызова, не везде можно использовать
let esFunc = (a,b) => a+b;

//методы и св-ва у функций
let str = "test";
console.log(str.length); //длина строки
//методы позволяют изменить результат
console.log(str.toUpperCase());//в верхний регистр

let numtest = 12.2;
console.log(Math.round(numtest)); //метогд округления
console.log(parseInt(numtest));
console.log(parseFloat(numtest));
