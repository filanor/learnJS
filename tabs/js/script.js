window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');



    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });


    // Timer
    let deadline = '2018-03-14';

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
            timeInteval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInteval);
            }
        }
    }

    setClock('timer', deadline);


    // smooth slide
    let headerBox = document.querySelector('header nav ul');

    headerBox.addEventListener('click', function (e) {

        if (e.target && e.target.matches('li a')) {
            e.preventDefault();

            let scrolTo = e.target.getAttribute('href'),
                // получаем элемент до которого необходимо скролить
                scrolToBlock = document.querySelector(scrolTo),
                //получаем расстояние до этого элемента от верхней точки окна с учетом меню (80) 
                dirY = (scrolToBlock.getBoundingClientRect().top - 80) > 0 ? 1 : -1;

            if (scrolToBlock.getBoundingClientRect().top - 80 != 0) {
                // Если 0, то страницу крутить не нужно
                console.log('Начинаем');
                scroll(scrolToBlock, dirY);
            }
        }
    });

    function scroll(block, dirY) {
        let duration = 1000,
            start = Date.now(),
            pageHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            

        function step () {
            let position = block.getBoundingClientRect().top - 80,
                ste = 50,
                now = Date.now() - start,
                result = Math.round(position * now / duration);

                result = (result > dirY * position) ? position : (result == 0) ? dirY : result;

                if (dirY * position > 0 && (pageHeight - window.pageYOffset) > dirY * document.documentElement.clientHeight) {
                    // прокручиваем страницу на величину result
                    window.scrollBy(0,result);
                    // рекурсивно запускаем функцию анимации прокрутки страницы
                    requestAnimationFrame(step);
                }
        }

    requestAnimationFrame(step);
    }
});