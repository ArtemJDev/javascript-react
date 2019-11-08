//объекты

//{} литерал объекта

let obj = {};

let a = 10;
let b = 20;

let obj1 = {
  one: "Hello",
  two: "World",
  "some string": a + b
};

let date = new Date(); //сощзадем объект DAte
let arr = new Array();

//второй способ создания объекта
let obj2 = new Object(); //аналогично let obj1 = {};

console.log(obj1.two); // . только идентификаторы свойства

let str = "some string"; //можно искать в [] , underfined in .
console.log(obj1["some string"]); // внутри можно указывать выражения

//для изменения
obj1.two = "new String";

//джинамическое формирование св-в
function addObj(o, i, v) {
  //объект , имся св-ва, значение создаваемого св-ва
  return (o[i] = v);
}
//создание св-ва
addObj(obj, "one", "Hello");

//прототипы
Object.prototype; //не имеет прототипа

let date = new Date(); //Date.prototype

let obj3 = Object.create(obj1); //наследует
let obj3 = Object.create(null); //без свойств
let obj3 = Object.create(Object.prototype);

//есл объект не иммет св-ва к которому образаемся, ищется в прототипе
obj3.one;
obj3.one = 1; //перезаписывает свойство базолвого класса

//удаление свойсвт delete
delete obj1.one; //только собственное сво-во

//обход объекта
for (let i in obj1) {
  // свойства
  console.log(i); // obj[i] - jобращаемся к значению св-ва
}

//рекурсивнй прохож
function iteration(o) {
  for (let i in o) {
    if (typeof o[i] == "object") {
      iteration(o[i]);
    } else {
      console.log(i);
    }
  }
}
