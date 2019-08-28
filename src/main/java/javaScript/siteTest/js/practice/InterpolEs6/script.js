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
