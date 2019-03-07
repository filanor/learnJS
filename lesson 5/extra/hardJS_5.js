'use strict'


let weekArr = ['Воскресение', 'Понедельник', 'Вторник',
        'Среда', 'Четверг', 'Пятница', 'Суббота'
    ],
    date = new Date(),
    time = date.toLocaleTimeString('ru-RU'),
    calculateBtn = document.querySelector('.date-compare__calculateBtn'),
    dateOneInput = document.querySelector('.date-compare__date1'),
    dateTwoInput = document.querySelector('.date-compare__date2'),
    dateResult = document.querySelector('.date-compare__result');


//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function transformDate(date) {
    // Функция преобразует дату к виду 01.01.2019
    let day = date.getDate(),
        month = date.getMonth() + 1;

    day = (day < 10) ? ("0" + day) : day;
    month = (month < 10) ? ("0" + month) : month;

    return `${day}.${month}.${date.getFullYear()}`;
}

//Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
document.querySelector('.Date').textContent = `${time} ${transformDate(date)}`;

//Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)
document.querySelector('.weekDay').textContent = weekArr[date.getDay()];




// Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

calculateBtn.addEventListener('click', function () {
    let reg = /^(?:[1-9]|0[1-9]|[1-2]\d|3[01])[\.\/](?:[1-9]|0[1-9]|1[0-2])[\.\/](?:[1-2]\d{3})$/;

    if (reg.exec(dateOneInput.value) && reg.exec(dateTwoInput.value)) {
        dateResult.textContent = getDifference(dateOneInput.value, dateTwoInput.value);
    } else {
        alert("Введены неверные данный!")
        dateOneInput.value = '';
        dateTwoInput.value = '';
    }

});


function getDifference(date1, date2) {
    //Функция возвращает разницу между двумя датами. В днях
    let arr1 = date1.split('.'),
        arr2 = date2.split('.'),
        rez = 0;

    //создадим два объекта Date с задаными числами
    let dateOne = new Date(arr1[2], arr1[1] - 1, arr1[0]),
        dateTwo = new Date(arr2[2], arr2[1] - 1, arr2[0]);

    // Считаем разницу между датами и переводим ее в дни
    rez = ((+dateTwo) - (+dateOne)) / 86400 / 1000;
    return parseInt(rez);