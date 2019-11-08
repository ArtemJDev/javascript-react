//объекты масивы ООП
//другой синтаксис = new object(*)
let option = {
    name: "test",
    width: 1024,
    height: 1024
}
//добавление новых данных
option.bool = true;
option.colors = {
    border: "black",
    background: 'red'
}

delete option.bool; //удаление свойства

//for для объхектов
for(let key in option) {
    console.log('Свойство :' + key + " имеет значение :"  + option[key]);
}
//узнаем длину объекта
console.log(Object.keys(option).length);

//массив
let arr = [1,2,3,4,5];
console.log(arr.pop()); //удаляет последний элемент
console.log(arr);
arr.push(6); //добавляет  элемент в конец
console.log(arr);
arr.shift(); //удаляет первый элемент из массива
arr.unshift(1); //добавляет элемент в начало нашего массива

for(let i = 0; i < arr.length;i++) {
    console.log(arr[i]);
}

arr[99] = 99;

console.log(arr.length);//последний индекс +1

//перебор массива forEach
arr.forEach(function(item, i , arr) {
    console.log(item + " " + i + " " + arr)
})

//split
let arr2 = [];
let question = prompt("","");
arr2 = question.split(",");

let joinAll = arr2.join(","); //объединение массива
let sornArr = arr2.sort(); //сортирует массив по алфавиту, для цифр нужно писать сортировку

console.log(arr2);

function sorNumber(a,b) { //для сортировки массива цифр
    return a-b;
}
let sornArr = arr2.sort(sorNumber); //передаем ее в нутрьо sort

//псевдо массив объект который без методов обычного массива

//OOP

let soldier = {
    health: 400,
    armor: 100
}

let john = {
    health: 100,
}

john.__proto__ = soldier; //наследование прототипное
console.log(john.armor);

