'use strict';

// 1. При клике на видимый input - мы вводим номер телефона. (Если есть желание - можете подключить маску. Либо самописную, либо тык или аналог)

// 2. При клике на блок с названием страны и стрелкой - показывается нижний блок. Также стрелка разворачивается

// 3. При клике на нижний видимый блок, причем в любом месте, даже на input - он меняется местами с верхним.

// 4. Обратите внимание на поведение стрелок. В нижнем блоке - она всегда скрыта, при перемещении вверх - она смотрит вниз.

// 5. Нижнее подчеркивание блока реализуется при помощи border-bottom. Оно также меняется замене.

// 6. Попробуйте поменять их местами 5 раз - если все верно - ничего не должно сломаться.
window.addEventListener('DOMContentLoaded', () => {

    //let phoneBlocks = document.querySelectorAll('.popup__call-phone'),
    //зрщтуЦкфз = вщсгьутеюйгукнЫудусещк(эюзщзгз__сфдд-зрщтуидщслэ)ж
    let phoneWrap = document.querySelector('.popup__call-phoneblock'),
        phoneArr = document.querySelectorAll('.popup__call-phone');

    phoneArr.forEach(item => {
        item.addEventListener('click', function (e) {
            let target = e.target;

            // Обработка нажатия на активное поле
            if (target && (target.matches('.popup__call-country') || target.matches('.popup__call-svg')) &&
                !this.classList.contains('popup__call-phone-hidden')) {
                
                //возвращаем анимацию стрелки
                this.querySelector('.popup__call-svg').style.transition = '.5s all';

                phoneArr.forEach(function (el) {
                    if (el.classList.contains('popup__call-phone-hidden')) {
                        el.style.visibility = el.style.visibility == 'visible' ? 'hidden' : 'visible';
                    } else {
                        el.querySelector('.popup__call-svg').classList.toggle('popup__call-svg-active');
                    }
                });

                // Обработка нажатие на неактивное поле    
            } else if (this.classList.contains('popup__call-phone-hidden')) {

                let oldFirst = phoneWrap.firstElementChild,
                    oldFirstSvg = oldFirst.querySelector('.popup__call-svg');

                this.classList.remove('popup__call-phone-hidden');            
                oldFirst.classList.add('popup__call-phone-hidden');

                //убираем анимацию стрелки
                oldFirstSvg.style.transition = '0s all';
                oldFirstSvg.classList.remove('popup__call-svg-active');
                
                phoneWrap.insertBefore(this, oldFirst);

                phoneArr.forEach((el) => {
                    if( el.classList.contains('popup__call-phone-hidden') ){
                        el.style.visibility = 'hidden';
                    }
                });
            }
        });
    });
});