let time = prompt("Ваш бюджет на месяц", 100);
let money = prompt("Введите дату в формате YYY-MM-DD", 50);


let appData = {
    budget : money,
    datTime : time,
    expences:  { },
    optionalExpences: {} ,
    income: [],
    savings : false,
}
let a1 =  prompt("Введите обязательную статью расходов в этом месяце", '');
let a2 = prompt("Во сколько обойдется?", '');

appData.expences.a1  = a2;

alert(appData.budget / 30);


