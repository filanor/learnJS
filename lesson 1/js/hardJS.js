/*==================================== 
     Урок 1. Дополнительное задание
====================================*/

'use strict';

const x = 33721;
var summ = 0;

// запускаем цикл. на каждой итерации делим  i на 10 и преобразуем в целое число
for (var i = x; i > 0; i = parseInt(i / 10)) {
    summ += i % 10;
}

console.log(summ);

//выводим переменную summ в степени 3
alert(summ ** 3);