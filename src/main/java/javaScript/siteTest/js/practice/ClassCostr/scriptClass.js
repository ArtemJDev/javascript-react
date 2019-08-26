//ES6 создание класса  - аналог консутруктора
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}


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
alex.exit();
