'use strict';

// ОБъявляем переменные (п.1)
let money,
    time;

function start() {
    //Функция запрашивает пользователя месячный бюджет и дату
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == "null") {
        money = +prompt("Ваш бюджет на месяц?");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD");
}
start();

// Создаем объект (п.3)
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    // Функция запрашивает данные о доп расходах
    for (let i = 0; i < 2; i++) {
        let necExp = prompt('Введите обязательную статью расходов в этом месяце'),
            cost = prompt('Во сколько обойдется?');

        //проверяем введенные данные
        if ((typeof (necExp)) === 'string' && (typeof (necExp)) != null &&
            (typeof (cost)) != null && cost != '' && necExp != '' &&
            necExp.length < 50) {
            console.log("done");
            //Записываем данные в объект
            appData.expenses[necExp] = cost;
        } else {
            //в случае ошибки просим ввести еще раз
            i--;
        }
    }
}
chooseExpenses();


function detectDayBudget() {
    //Функция рассчета дневного бюджета
    //toFixed() округляет чила и превращает в строку
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    //выводим на экран бюджет на 1 день
    alert("Ваш бюджет на день: " + appData.moneyPerDay + " р.");
}
detectDayBudget();


function detectLevel() {
    // Функция определяет уровень достатка
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() {
    //Функция запрашивает сбережения и процент по ним
    //Если они есть  
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозите: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    //функцию для определения необязательных расходов 
    for(let i = 0; i < 3; i++) {
        appData.optionalExpenses[i] = prompt("Статья расходов");  
    }
}
chooseOptExpenses();