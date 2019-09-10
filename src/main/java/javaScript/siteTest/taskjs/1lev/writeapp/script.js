let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses : function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = appData.budget / 30;
        console.log("Бюджет на один день состовляет :" + appData.moneyPerDay)
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровынеь достатка");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровынеь достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровынеь достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '');
            let percent = +prompt('Под какой процент?', '');
            appData.monthIncome = save / 100 / 12*percent;
            alert('Доход в месяц с Вашегог депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
            
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
        if(typeof(items)==='string' && items != '' && typeof(items) != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        } else {
            alert('Вы ввели не корректные данные');
        }
        appData.income.forEach(function(item, i, arr) {
                console.log('Способы доп заработка : ' +(i+1) + ' ' + item);
        });
    }
};

for(let key in appData) {
    console.log('Наша программа включает в себя данные : ' + key + " " + appData[key]);
}


