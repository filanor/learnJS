// Написать функцию которая принимает массив целых чисел, необходимо отсортировать массив по частоте элементов.
// Самые частые идут первыми.
// Если будет группа чисел одинакового размера то они сортируются в порядке соответствующих номеров во входном массиве
// func([2,3,2,4,5,12,2,3,3,3,12])
// результат -> [3,3,3,3,2,2,2,12,12,4,5]

'use strict';

function sortByCount(arr) {
    let arrCopy = arr,
        countMass = [],
        resArr = [];

    // Получаем объект, в с парами число:количество повторений
    while (arrCopy[0] != undefined) {
        let currentEl = arrCopy[0],
            count = 1;
        arrCopy.shift();
        for (let j = 0; j < arrCopy.length; j++) {
            if (currentEl == arrCopy[j]) {
                count++;
                arrCopy.splice(j, 1);
                j--;
            }
        }
        // countMass[currentEl] = count;
        countMass.push([currentEl, count]);
        console.log(countMass);
    }

    // Создаем отсортированный массив, состояший из массивов пар
   // var sortable = [];
    //for (var vehicle in countMass) {
      //  sortable.unshift([vehicle, countMass[vehicle]]);
    //}
    countMass.sort(function (a, b) {
        return  b[1] - a[1];
        
    });


    //записываем результат
    countMass.forEach(function(item){
        for(let i = 0; i < item[1]; i++){
            resArr[resArr.length] = +item[0];
        }
    });

    console.log(countMass);
    console.log(resArr);
}

//sortByCount([2, 3, 2, 4, 5, 12, 2, 3, 3, 3, 12]);
//sortByCount([9,9,5,4,8,2,8,5,4,2,3,7,9]);
sortByCount([7,6,3,8,4,4,7,6,3,3]);