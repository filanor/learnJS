// Написать функцию, которая рассчитает угол между часовой и минутной стрелками часов!
// Функция принимает два аргумента (часы, минуты)

// например 
// func(6, 0)  =>>>  180
// func(3, 0)  =>>>  90
// func(3, 30)  =>>>  75


// 1 деление - 6 градусов
// 1 час - 5 делений

function clockAngle(hour, minute) {

    if (hour > 24 || hour < 0) {
        console.log('Неверный формат даты');
        return;
    }

    hour =  (hour >= 12) ? Math.floor(hour / 12) : hour;

    // находим угол минут относительно вертикали
    let minuteAngle = minute * 6;

    // находим угол часов относительно вертикали
    let hourAngle = hour * 30 + minute * 0.5;

    // находим угол между стрелками
    let angle = Math.abs(hourAngle - minuteAngle);
    

    return angle > 180 ? 360 - angle : angle;
}

console.log(clockAngle(0, 15));
console.log(clockAngle(9, 0));
console.log(clockAngle(6, 30));
console.log(clockAngle(5, 0));
console.log(clockAngle(0, 30));
console.log(clockAngle(3, 30));