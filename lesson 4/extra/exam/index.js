function getFriendlyNumbers(start, end) {
    // Проверяем переданные аргументы. Задание 3
    let arr = [];
    if (start > end || typeof (start) == 'float' || typeof (end) == "float" ||
        isNaN(start) || isNaN(end) || start < 0 || end < 0 || typeof(end) == 'string' || typeof(start) == 'string') {
        // alert('Ошибка аргумента!');
        return false;
    }
    for (let i = start; i < end; i++){
        for (let j = i + 1; j <= end; j++){
            if( getDivisorSumm(i) == j && getDivisorSumm(j) == i ){
                console.log(i + ' ' + j);
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

function getDivisorSumm(number) {
    // Суммы считает сумму всех делителей переданного числа
    let divisorSumm = 0,
        i = 0,
        sqrtNum = Math.sqrt(number);
    
    // for (let i = 2; i <= sqrtNum; i++) {
    //     while (number % i == 0){
    //         divisorSumm += i;
    //         number /= i;
    //     }
    // }
    // if (number != 1){
    //     divisorSumm += number;
    // }
     while( i < number){
         if ( number % i == 0) {
             divisorSumm += i;
         }
         i++;  
     }
    //console.log(divisorSumm);
    return divisorSumm;
}

console.log(getFriendlyNumbers(284, 500));







module.exports = {
    firstName: 'filanor',
    secondName: 'Surname',
    task: getFriendlyNumbers
}