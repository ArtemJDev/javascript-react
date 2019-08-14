//все наследуется от объекта
let array = [1,2,3,4,5];

//создадим два объекта
let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health:100
};
//наследуем
john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

