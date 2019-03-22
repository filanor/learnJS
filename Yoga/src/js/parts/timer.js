//===================================================================  
//=======================        timer        =======================
//===================================================================

function timer() {
    const deadline = '2019-03-23';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        //hours = Math.floor((t/1000/60/60) %24)
        //days = Math.floor( (t / (1000*60*60*24))) )
        return {
            'total': t,
            'hours': (hours < 0) ? '00' : (hours < 10) ? '0' + hours : hours,
            'minutes': (minutes < 0) ? '00' : (minutes < 10) ? '0' + minutes : minutes,
            'seconds': (seconds < 0) ? '00' : (seconds < 10) ? '0' + seconds : seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInteval = setInterval(() => {
                let t = getTimeRemaining(endTime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if (t.total <= 0) {
                    clearInterval(timeInteval);
                }
            }, 1000);
    }

    setClock('timer', deadline);
}
module.exports = timer;