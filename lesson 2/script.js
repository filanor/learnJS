'use strict';

// ОБъявляем переменные (п.1)
let money,
    time;


//Запрашиваем пользователя данные (п.2)
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD"); 


//Запрашиваем пользователя данные (п.2)


// Создаем объект (п.3)
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};




// Задаем пользователю вопросы 
for (let i = 0; i < 2; i++) {
    let necExp = prompt('Введите обязательную статью расходов в этом месяце'),
        cost = prompt('Во сколько обойдется?');
    //проверяем введенные данные
    if ((typeof (necExp)) === 'string' && (typeof (necExp)) != null &&
        (typeof (cost)) != null && cost != '' && necExp != '' 
        && necExp.length < 50) {
        console.log("done");
        //Записываем данные в объект
        appData.expenses[necExp] = cost;
    } else {
        //в случае ошибки просим ввести еще раз
        i--;
    }
}

/*  Задача через while 
let i = 0;
while (i < 2) {
    let necExp = prompt('Введите обязательную статью расходов в этом месяце'),
        cost = prompt('Во сколько обойдется?');
    //проверяем введенные данные
    if ((typeof (necExp)) === 'string' && (typeof (necExp)) != null &&
        (typeof (cost)) != null && cost != '' && necExp != '' 
        && necExp.length < 50) {
        console.log("done");
        //Записываем данные в объект
        appData.expenses[necExp] = cost;
        i++;
    }
}
*/

/* Задача через do while
let i = 0;
do {
    let necExp = prompt('Введите обязательную статью расходов в этом месяце'),
        cost = prompt('Во сколько обойдется?');
    //проверяем введенные данные
    if ((typeof (necExp)) === 'string' && (typeof (necExp)) != null &&
        (typeof (cost)) != null && cost != '' && necExp != '' &&
        necExp.length < 50) {
        console.log("done");
        //Записываем данные в объект
        appData.expenses[necExp] = cost;
        i++;
    }
}
while (i < 2);
*/

appData.moneyPerDay = appData.budget / 30;

//выводим на экран бюджет на 1 день
alert("Ваш бюджет на день: " + appData.moneyPerDay + " р.");

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}