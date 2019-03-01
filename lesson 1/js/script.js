'use strict';

// ОБъявляем переменные (п.1)
let money,
    time;

//Запрашиваем пользователя данные (п.2)
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");


// Создаем объект (п.3)
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// Создаем пару переменных для (п.4) 
let necessaryExpenses = "",
    cost = 0;

// Задаем пользователю вопросы (п.4) 
necessaryExpenses = prompt('Введите обязательную статью расходов в этом месяце');
cost = prompt('Во сколько обойдется?');

//Записываем данные в объект
appData.expenses[necessaryExpenses] = cost;

// Повторяем еще раз
necessaryExpenses = prompt('Введите обязательную статью расходов в этом месяце');
cost = prompt('Во сколько обойдется?');

appData.expenses[necessaryExpenses] = cost;


//выводим на экран бюджет на 1 день (п.5)
alert( "Ваш бюджет на день: " + appData.budget / 30 + " р.");

console.log( appData );