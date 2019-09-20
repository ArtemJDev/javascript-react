//пример инкапсуляции
function User(name, age) {
    this.name = name;
    // this.age = age;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя = ${this.name}, возраст = ${userAge}`)
    }
    //использование гетеров и сетеров
    this.getAge = function() {
        return userAge;
    }
    this.setAge = function(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        }else {
            console.log('Недопустимые значения')
        }
    }
}

let ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.setAge(30);
console.log(ivan.getAge());

ivan.say();



// ivan.userAge = 55;
// ivan.name = 'DEN'

// console.log(ivan.name);
// console.log(ivan.age);
