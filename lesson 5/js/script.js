'use strict';

// ОБъявляем переменные (п.1)
let money,
    time;

function start() {
    //Функция запрашивает пользователя месячный бюджет и дату
    money = +prompt("Ваш бюджет на месяц?");

    // Проверяем формат введенных данных
    while (isNaN(money) || money == "" || money == "null") {
        money = +prompt("Ваш бюджет на месяц?");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD");
}
//start();


// Создаем объект
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudge: function () {
        //Функция рассчета дневного бюджета
        //toFixed() округляет чила и превращает в строку
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        //выводим на экран бюджет на 1 день
        alert("Ваш бюджет на день: " + appData.moneyPerDay + " р.");
    },
    detectLevel: function () {
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
    },
    checkSavings: function () {
        //Функция запрашивает сбережения и процент по ним
        //Если они есть  
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозите: " + appData.monthIncome);
        }
    },
    chooseOptExpenses() {
        //функцию для определения необязательных расходов 
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i] = prompt("Статья расходов");
        }
    },
    chooseIncom: function () {
        let items;
        // Вводим и проверяем введенные данные
        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', "");
        } while (items == null || items == "" || !(isNaN(+items)));
        appData.income = items.split(",");

        //Может что-то еще и вроверяем введенные данные
        let extraItem = prompt('Может что-то еще?')
        if (extraItem != '' && extraItem != null && extraItem != "нет" && (isNaN(+extraItem))) {
            appData.income.push(extraItem);
        }

        appData.income.sort();

        document.write("Способы доп. заработка: ");
        appData.income.forEach(function (item, i) {
            document.write(`<p> ${i + 1}: ${item}</p>`);
        });
    }
};

console.log('Наша программа включает в себя данные:');
for (const key in appData) {
    console.log(key);
}



//===========================================================================
//                 Получаем элементы со страницы
//===========================================================================
let startButton = document.getElementById('start'),
    expensesList = document.getElementsByClassName('expenses-item'),
    optionalExpensesList = document.querySelectorAll('.optionalexpenses-item'),
    dataButtons = document.getElementsByTagName('button'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    approveExpBtn = dataButtons[0],
    approveOptionalExpBtn = dataButtons[1],
    claculateBtn = dataButtons[2],
    chooseIncome = document.querySelector('.choose-income'),
    haveSavings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),
    timeyearValue = document.querySelector('.year-value'),
    timeMonthValue = document.querySelector('.month-value'),
    timeDayValue = document.querySelector('.day-value');