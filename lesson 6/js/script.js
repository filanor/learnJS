'use strict';

// ОБъявляем переменные (п.1)
let money,
    time,
    flag = false;

// Создаем объект
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};



//===========================================================================
//                 Получаем элементы со страницы
//===========================================================================

let startButton = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesList = document.getElementsByClassName('expenses-item'),
    approveExpBtn = document.getElementsByTagName('button')[0],
    approveOptionalExpBtn = document.getElementsByTagName('button')[1],
    claculateBtn = document.getElementsByTagName('button')[2],
    optionalExpensesList = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    haveSavings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    MonthValue = document.querySelector('.month-value'),
    DayValue = document.querySelector('.day-value');


// Кнопки должны быть неактивными, пока не нажата кнопка Начать расчет
approveExpBtn.disabled = true;
approveOptionalExpBtn.disabled = true;



function isEmpty(list) {
    // Функция проверяет, есть ли незаполненые input в массиве элементов
    let emptyItem = false;
    for (let i = 0, len = list.length; i < len; i++) {
        if (list[i].value == '') {
            emptyItem = true;
        }
    }
    if (emptyItem == false) {
        return false;
    } else {
        return true;
    }
}







//===========================================================================
//                 Обрабатываем события
//===========================================================================



// Обработка нажатия кнопки "Начать Расчет"
startButton.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    // Проверяем формат введенных данных
    while (isNaN(money) || money == "" || money == "null") {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    let date;
    if (time == "" || time == null) {
        date = new Date();
        let now = `${date.getFullYear()}--${date.getMonth() +1}--${date.getDate()}`;
        appData.timeData = now;
    } else {
        date = new Date(Date.parse(time));
        appData.timeData = time;
    }


    budgetValue.textContent = money.toFixed();
    //let date = new Date(Date.parse(time));
    yearValue.value = date.getFullYear();
    MonthValue.value = date.getMonth() + 1;
    DayValue.value = date.getDate();

    //включаем кнопки
    flag = true;
    if (!isEmpty(expensesList)) {
        approveExpBtn.disabled = false;
    }
    if (!isEmpty(optionalExpensesList)) {
        approveOptionalExpBtn.disabled = false;
    }
});


// Вешаем проверку на изменение  Input, для разблокировки кнопки утвердить
// Обязательные расходы

for (let i = 0; i < expensesList.length; i++) {
    expensesList[i].addEventListener('input', function () {
        if (!isEmpty(expensesList) == true) {
            approveExpBtn.disabled = false;
        }

        if (i % 2 != 0) {
            expensesList[i].value = expensesList[i].value.replace(/[^\d]/g, '');

        }

    });
}

// Вешаем проверку на изменение  Input, для разблокировки кнопки утвердить
// Доп расходы
for (let i = 0; i < optionalExpensesList.length; i++) {
    optionalExpensesList[i].addEventListener('input', function () {
        if (!isEmpty(optionalExpensesList) == true) {
            approveOptionalExpBtn.disabled = false;
        }
        optionalExpensesList[i].value = optionalExpensesList[i].value.replace(/[^а-яёЁА-Я]/, '');
        console.log(optionalExpensesList[i].value);
    });
}




// Удтверждение обязательных расходов
approveExpBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesList.length; i++) {
        let necExp = expensesList[i].value,
            cost = expensesList[++i].value;

        //проверяем введенные данные
        if ((typeof (necExp)) === 'string' && (typeof (necExp)) != null &&
            (typeof (cost)) != null && cost != '' && necExp != '' &&
            necExp.length < 50) {
            console.log("done");
            //Записываем данные в объект
            appData.expenses[necExp] = cost;
            sum += +cost;
        } else {
            //в случае ошибки просим ввести еще раз
            i--;
        }
    }
    expensesValue.textContent = sum;
});



// Удтверждение дополнительных расходов
approveOptionalExpBtn.addEventListener('click', function () {
    optionalExpensesValue.textContent = '';
    for (let i = 0; i < optionalExpensesList.length; i++) {
        let opt = optionalExpensesList[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
});


// Расчет дневного бюджета
claculateBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        if (expensesValue.textContent != '') {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        } else {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
        }

        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});


// Обработка возможного дохода
chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
});

haveSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

savingsSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +savingsSum.value,
            percent = + +savingsPercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed();
        yearSavingsValue.textContent = appData.yearIncome.toFixed();
    }
});

savingsPercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +savingsSum.value,
            percent = + +savingsPercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed();
        yearSavingsValue.textContent = appData.yearIncome.toFixed();

    }
});