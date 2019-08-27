//Контекст вызова это то что окружает функцию, в каких условиях она вызывается
//1 первый  способ вызова функции (либо windiw либо underfined)
function showThis(a,b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
};

showThis(4,5);

//2 контекст объекта, метод объекта - this будет равнятся самому объекту
let obj = {
    a:20,
    b:15,
    sum: function() {
        console.log(this);
        function shout() {
        console.log(this); //функция внтури функции потеряет контекст и выведет windiw
        }
        shout();

    }
};
obj.sum();


//3 конструктор (new) - this - новый созданный  объект

//4  cвязывание с функцией
let user = {
    name: "John"
};
function syName(surname) {
    console.log(this);
    console.log(this.name +" " + surname);
}
console.log(syName.call(user,'Smith')); //call принимает аргументы в виде строки
console.log(syName.apply(user,['snow']));//apply принимает аргументы в виде массива


//присваивание конектсу bind
function count(number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(5));

//контекст вызова в DOM
let btn = document.querySelector("button");
btn.addEventListener('click', function() {
    console.log(this); // выводится тег button
    this.style.backgroundColor = 'red'; //меняем цвет
})