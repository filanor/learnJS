function timer(timerBlockName) {
    
    window.addEventListener('DOMContentLoaded', function () {
        // simple timer
        let timerBlock = document.querySelector(timerBlockName);

        setInterval(function(){
            let date = new Date();
            timerBlock.innerHTML = transformDate(date);
        }, 1000);


        function transformDate(date) {
            // function transform current time to hh.mm.ss type
            console.log(1);
            let hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();
    
            hours = (hours < 10) ? ("0" + hours) : hours;
            minutes = (minutes < 10) ? ("0" + minutes) : minutes;
            seconds = (seconds < 10) ? ("0" + seconds) : seconds;
    
            return `${hours}:${minutes}:${seconds}`;
        }

    });
}