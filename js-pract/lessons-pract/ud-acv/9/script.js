//функция конструктор
//контекст this является сам объект
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello my name ' + this.name + " " + this.id);
    };
}

//добавление функции в консутрктор через прото d родителя
User.prototype.exit = function(name) {
console.log("Пользователь " + this.name)
}

let ivan = new User('Ivan', 32);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(ivan.hello());
console.log(ivan.exit());

//"use strict" - строгий язык написания JS, который изменяет семантику кода 
//перемененые  - window контекст у ф-ий -


//контекст вызова
function showThis(a,b) {
    console.log(this); //window
    function sum() {
        console.log(this); //window 
        return a + b; //return this.a + this.b; не находит
    }
    console.log(sum());
}
showThis(4,5);

let obj = {
    a: 10,
    b: 20,
    sum: function() {
        console.log(this); // функция методом объекта - контекст объект
        function shout() {
            console.log(this); //контекст window
        }
        shout();
    }
}
obj.sum();

//просто вызов функции контекст window/underfined
//как метод - this будет объектом
// конструктор new  = this = созданный объект


//связываеие функций и объекта
let user = {
    name: "John"
};
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);

}//присваиваем контекст фукнции объекту
console.log(sayName.call(user, ' Smith')); // через запятую
console.log(sayName.apply(user, [' Smith apply'])); //все пармаметтры в виде массива

//bind - создает функцию с определенным контекстом
function count(number) {
    return this * number;
}
let double = count.bind(2); //вместо this будет 2
console.log(double(3));


//DOOM
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
})
