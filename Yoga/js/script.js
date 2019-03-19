window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //===================================================================  
    //=======================       tabs        =========================
    //===================================================================

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

    info.addEventListener('click', event => {
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



    //===================================================================  
    //=======================        timer        =======================
    //===================================================================

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





    //===================================================================  
    //=================        smooth slide        ======================
    //===================================================================

    let headerBox = document.querySelector('header nav ul');

    headerBox.addEventListener('click', (e) => {

        if (e.target && e.target.matches('li a')) {
            e.preventDefault();

            let scrolTo = e.target.getAttribute('href'),
                // получаем элемент до которого необходимо скролить
                scrolToBlock = document.querySelector(scrolTo),
                //получаем расстояние до этого элемента от верхней точки окна с учетом меню (80) 
                dirY = (scrolToBlock.getBoundingClientRect().top - 80) > 0 ? 1 : -1;

            if (scrolToBlock.getBoundingClientRect().top - 80 != 0) {
                // Если 0, то страницу крутить не нужно
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


        function step() {
            let position = block.getBoundingClientRect().top - 80,
                now = Date.now() - start,
                result = Math.round(position * now / duration);

            result = (result > dirY * position) ? position : (result == 0) ? dirY : result;

            if (dirY * position > 0 && (pageHeight - window.pageYOffset) > dirY * document.documentElement.clientHeight) {
                // прокручиваем страницу на величину result
                window.scrollBy(0, result);
                // рекурсивно запускаем функцию анимации прокрутки страницы
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }




    //===================================================================  
    //=======================       modal       =========================
    //===================================================================

    let more = document.querySelector('.more'),
        infoMore = document.getElementById('about'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function (e) {
        this.classList.add('more-splash');
        modalOpen();
    });

    close.addEventListener('click', function (e) {
        this.classList.add('more-splash');
        modalClose();
    });
    infoMore.addEventListener('click', (e) => {
        if (e.target && e.target.matches('div.description-btn')) {
            modalOpen();
        }
    })


    function modalOpen() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрет прокрутки страницы при открытии модального окна
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return; // если с мобилы
        } else if (/Edge|MSIE|Trident/i.test(navigator.userAgent)) {
            // код если пользователь зашел с Egde или IE
            overlay.classList.add('fade');
        } else {
            modalAnimation();
        }
    }

    function modalClose() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modalAnimation() {
        let endSize = 750,
            size = 740,
            opacity = 0,
            start = Date.now(),
            modal = document.querySelector('.popup');

        modal.style.opacity = opacity;
        modal.style.width = size + 'px';

        function animate(time) {
            if (size >= endSize && opacity == 1) {
                console.log(size);
                return;
            }
            let now = performance.now() - start;
            opacity = opacity >= 1 ? opacity : opacity + 0.05;
            size = size >= endSize ? size : size + 1;

            modal.style.opacity = opacity;
            modal.style.width = size + 'px';

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }




    //===================================================================  
    //========================       form       =========================
    //===================================================================  

    let modalForm = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        callbackForm = document.getElementById('form'),
        phoneInput = document.querySelectorAll('input[type = tel]');


    // Валидация ввода телефона
    let telValue = '';
    for (let i = 0; i < phoneInput.length; i++) {
        phoneInput[i].addEventListener('keypress', function(e) {
            if (!(e.key == 'Backspace' || e.key == 'Shift')) {
                e.preventDefault();
            }
            
            if(phoneInput[i].value.length == 0 && /\+/.test(e.key) ) {
                
                this.value = telValue + e.key;
            } else if (/[0-9]/.test(e.key)) {
                telValue = this.value;
                this.value = telValue + e.key;
            }
        });
    }


    // Обработка формы обратной связи
    callbackForm.addEventListener('submit', e => {
        e.preventDefault();
        sendRequest(callbackForm);
    });


    // Обрабатываем модальное окно
    modalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        sendRequest(modalForm);
    });


    function sendRequest(form) {
    // Функция отправляет данные полученой формы на сервер
        let message = {
            loading: '<img src = "../img/ajax-loader.gif">',
            success: '<img style = "max-width:66px; max-height: 66px;" src = "../img/success.png">',
            failure: 'Что-то пошло не так...'
        }

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        // Если обычный формат
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //JSON
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let json = formToJSON(callbackForm);
        request.send(json);
        //request.send(formData); - для обычного формата
        
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState == 4 && request.status == 200) {
                setTimeout(() => {
                    statusMessage.innerHTML = message.success;    
                }, 1000);
                
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }


    function formToJSON(form) {
    // Функция получает елемент формы и возвращае введенные данные в формате JSON
        let formData = new FormData(form);

        // Преврящаем объект FormData в обычный объект
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        return JSON.stringify(obj);
    }
});