let name = "Ivan";
let age = 30;
let mail = "ex@mail.ru";

document.write("Пользователю " + name + " " + age + " лет. Его почтовый адрес " + mail );

//интерполяция
document.write(`Пользователю   ${name}   ${age}   лет. Его почтовый адрес   ${mail}`)

//let const видны лишть в блоке кода, с не сущестуют сначала кода
// при использовании let или const созждается своя переменная в цикле
//var создается одна на весь цикл, нет контрольных точек
function makearr() {
    var items = [];

    for(let i = 0; i < 10 ;i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}
var arr = makearr();
arr[1]();
arr[3]();
arr[7]();

//стрелочные функции без function, функция анонимна, нельзя задать имя. Своего конектса не имеет
let fun = () => {
    console.log(this)
};
fun();

let obj = {
    number: 5,
    sayNumber: function() { //контекст сам объект,является методом для этого объекта
        let say = () => {
            console.log(this);//получаем контекст родителя, получаем объект
        };
        say();
    }
};
obj.sayNumber();

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    }
    show(); // получаем button
});


//пример стрелочной фуункции присваеваемой переменной
const greet = (name,age) => `Hello ${name} , your age is ${age}`;

//синтаксис по умолчанию
(a,b) => {
    let sum = a+b;
    return sum;
};

//Один аргумент можно без скобок
(a) => {
    let sum = a+1;
    return sum;
};

//Без аргумент
() => {
    let sum = a+b;
    return sum;
};

a => a*2;

//параметры по умолчанию ранее
function calcOrDouble(number, basis) {
    basis = basis || 2;
        console.log(number*basis);
}
calcOrDouble(2,3);
calcOrDouble(6);

//параметры по умолчанию es6
function calcOrDouble2(number, basis=2) {
        console.log(number*basis);
}
calcOrDouble2(2,3);
calcOrDouble2(6);

