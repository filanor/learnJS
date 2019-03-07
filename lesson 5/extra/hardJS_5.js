'use strict'

let str = "урок-3-был слишком легким";


//Задание 1. 
str = str.charAt(0).toUpperCase() + str.slice(1);

//Задание 2
let startPos = 0;
//ищем в цикле все - и заменяем на пробел
while (true) {
    let pos = str.indexOf('-', startPos);
    if (pos == -1) {
        //если не найдено совпадений - выходим из цикла
        break;
    } else {
        str = str.slice(startPos, pos) + " " + str.slice(pos + 1);
    }
}
console.log(`Задание 1 и 2:  + ${str}`);



//Задание 3
//Вырезаем нужный участок фразы
let str3 = str.slice(18);

//а редактируем его. 
str3 = str3.slice(0, 5) + 'оо';
alert(str3);



//Задание 4
let arr = [20, 33, 1, "Человек", 2, 3];
let summ = 0;

for (let i = 0; i < arr.length; i++) {
    // Исключаем не числа и находим сумму кубов
    if (!isNaN(arr[i])) {
        summ += arr[i] ** 3;
    }
}
// выводим в консоль квадратный корень
console.log("Задание 4: " + Math.sqrt(summ));



//Задание 5
function correctStr(str) {
    //проверяем тип полученного аргумента
    if (!(typeof (str) == "string")) {
        alert("Ошибка! Получено не строчное значение!");
        return;
    } else {
        // если все ок - убираем пробелы спереди и сзади
        str = str.trim();
    }

    if (str.length > 50) {
        //Если больше 50 символов, обрезаем стоку
        console.log(`Задание 5: ${str.slice(0, 51)}...`);
    } else {
        console.log(`Задание 5: ${str}`);
    }
}
let str5 = '   выамыва  вамав ffsadfnsadlkjcnsdlkjcnlasdjfnljkasdnflasjdnflasdjnflkasdjfnlasdjfnlsdjfn;kasdjnckajsdnc;kajdnc;kasdjnc;asdjc;sad;lc;ads  ';

correctStr(str5);
correctStr(90);