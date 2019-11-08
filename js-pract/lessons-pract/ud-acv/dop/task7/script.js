'use strict'
//практика получения полей по классу, тэгам, селкторам
let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expences-item'), //коллекция элементов
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpences-item'),//коллекция элементов
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

	let money, time;

	//Начала расчета
	//Когда кликаем спрашиваем бюджет и время, присваиваем полям
	startBtn.addEventListener("click", function() {
		money = +prompt("Ваш бюджет на месяц","");
		time = prompt("Введите дату в формате YYYY-MM-DD","");

		while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц","");
		}
		appData.budget = money; //записываем в объект
		appData.timeData = time;
		budgetValue.textContent = money.toFixed(); //присваиваем полю на страницу
		yearValue.value = new Date(Date.parse(time)).getFullYear();
		monthValue.value = new Date(Date.parse(time)).getMonth() + 1; //чтобы исправить неточность с нуля
		dayValue.value = new Date(Date.parse(time)).getDate();
	});





	expensesBtn.addEventListener("click", function() {
		let sum = 0;

		for (let i = 0; i < expensesItem.length; i++) { //высчитываем количество инпутов
			let a = expensesItem[i].value, //получаем данные из инпута
				b = expensesItem[++i].value;
		
			if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
				appData.expenses[a] = b;
				sum += +b;
			} else {
				i--;
			}
		
		}
		expensesValue.textContent = sum;
	});

	optionalExpensesBtn.addEventListener("click",function() {
		for (let i = 0; i <= optionalExpensesItem.length; i++) {
			let questionOptExpenses = optionalExpensesItem[i];
				appData.optionalExpenses[i] = questionOptExpenses;
			optionalExpensesValue.textContent += questionOptExpenses.value +  " ";

			}
	});

	countBtn.addEventListener("click",function() {
			if(appData.budget != undefined) {
				appData.moneyPerDay = (appData.budget / 30).toFixed();
				dayBudgetValue.textContent = appData.moneyPerDay;
		
				if(appData.moneyPerDay < 100) {
					levelValue.textContent = "Минимальный уровынеь достатка";
				}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
					levelValue.textContent = "Средний уровынеь достатка";
				} else if(appData.moneyPerDay > 2000) {
					levelValue.textContent = "Высокий уровынеь достатка";
				} else {
					levelValue.textContent = "Произошла ошибка";
				}
			} else {
				dayBudgetValue.textContent = "Произошла ошибка";
			}
		});

		//input - возникает при вводе
		//change - когд убираем и кликаем в другое место

		incomeItem.addEventListener("change",function() {
			let items = incomeItem.value;
				appData.income = items.split(', ');
				incomeValue.textContent = appData.income;
		});

		checkSavings.addEventListener("click",function() {
				if(appData.savings == true) {
					appData.savings = false;
				} else {
					appData.savings = true;
				}
		});

		//расчет накоплений
		sumValue.addEventListener("input", function() {
			if(appData.savings == true) {
				let sum = +sumValue.value,
					percent = +percentValue.value;

				appData.monthIncome = sum / 100 / 12 * percent;
				appData.yearIncome = sum / 100 * percent;

				monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
				yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
			}
		})
		percentValue.addEventListener("input", function() {
			if(appData.savings == true) {
				let sum = +sumValue.value,
					percent = +percentValue.value;

				appData.monthIncome = sum / 100 / 12 * percent;
				appData.yearIncome = sum / 100 * percent;

				monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
				yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
			}
		})

	let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false,
			
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