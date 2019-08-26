//в функцию можно записать и методы и свойства, по классификации это объект
//функция конструктор (через оператор new) для создания объекта
//ES5 консутркторы нужны для создание экземпляров
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(name + " " + id);
    }
};

//добавление методов
User.prototype.exit = function(name) {
    console.log("Пользователь " + this.name + " ушел");
};

let ivan = new User('Ivan', 25);
let alex = new User("Alex", 20);


console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();
ivan.exit();
