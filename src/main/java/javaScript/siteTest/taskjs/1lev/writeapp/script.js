let time = prompt("Ваш бюджет на месяц", 100);
let money = +prompt("Введите дату в формате YYY-MM-DD", 50);


let appData = {
    budget : money,
    datTime : time,
    expences:  { },
    optionalExpences: {} ,
    income: [],
    savings : false,
}

for(let i = 0; i < 2; i++) {
    let a =  prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = +prompt("Во сколько обойдется?", '');

    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a!= '' && b != ''
    && a.length < 50 ) {
        console.log("done");
        appData.expences[a] = b //запись в объект через квадратные скобки
    } else {
        console.log("Ничего не введли или не правилный формат");
        i--;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровынеь достатка");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровынеь достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровынеь достатка");
} else {
    console.log("Произошла ошибка");
}
console.log(appData);


