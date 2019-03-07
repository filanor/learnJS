'use strict';

function getSimpleNumber(end){
    // Функция ищет все простые числа от 1  до end
    let flag = false,
        simpleArr = [];
    for (let i = 2; i <=end; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag  = true;
              //  break;
            //    console.log(i);
            }
        }
        if (flag == false){
            simpleArr.push(i);
        }
        flag = false;
    }

    console.log(simpleArr);
}


getSimpleNumber(1000);