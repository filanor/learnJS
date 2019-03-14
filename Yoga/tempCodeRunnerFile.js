function clockAngle(hour, minute) {

    if (hour > 12) {
        hour = Math.floor(hour / 12);
        console.log(hour);
    }
    // находим угол минут относительно вертикали
    let minuteAngle = minute * 6;

    // находим угол часов относительно вертикали
    let hourAngle = hour * 30 + minute * 0.5;

    // находим сдвиг стрелки часов за счет минут
    let angle = Math.abs(hourAngle - minuteAngle);
    // находим угол между стрелками
    return angle > 180 ? 360 - angle : angle;
}

console.log(clockAngle(0, 15));