let number = 1;
//анонимная самовызывающая функция, со своей областью видимости
//1
(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}())

console.log(number);

//использование объектного интерфейса
//2
let user =(function() {
    let private = function() {
        console.log('Im private')
    }
    return {
            sayHello : function() {
                console.log('Hello')
            }
    }
}())

console.log(user);
console.log(user.sayHello());

//3
let user =(function() {
    let private = function() {
        console.log('Im private')
    }

    let sayHello = function() {
        console.log('Hello')
    }
    return {
            sayHello : sayHello
            }
    
}())

console.log(user);
console.log(user.sayHello());


// let app ={
//     data: 45
// };
// console.log(app)


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
