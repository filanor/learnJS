function getFriendlyNumbers(start, end) {
    // Функция находит дружественные числа в заданном диаппазоне

    let arr = [];

    // Проверяем переданные аргументы. Задание 3
    if (start > end || typeof (start) == 'float' || typeof (end) == "float" ||
        isNaN(start) || isNaN(end) || start < 0 || end < 0 || typeof(end) == 'string' || typeof(start) == 'string') {
        // alert('Ошибка аргумента!');
        return false;
    }

    for (let i = start; i < end; i++){
        for (let j = i + 1; j <= end; j++){
            // Если сумма делителей одного числа = второму и сумма делителей 
            // второго = первому то это дружественные числа
            if( getDivisorSumm(i) == j && getDivisorSumm(j) == i ){
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

function getDivisorSumm(number) {
    // Суммы считает и возвращает сумму всех делителей переданного числа
    let divisorSumm = 0,
        i = 0;
    
     while( i < number){
         // перебираем все числа, пока они меньше number
         // Если number делится на текущее число без остатка, то делитель
         if ( number % i == 0) {
             divisorSumm += i;
         }
         i++;  
     }
    return divisorSumm;
}







module.exports = {
    firstName: 'filanor',
    secondName: 'Surname',
    task: getFriendlyNumbers
}