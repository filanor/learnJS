// дожидаемся, пока загрузится дерево DOM
window.addEventListener('DOMContentLoaded', () => {


    // Объявляем необходимые для работы переменные
    const cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');

    function openCart() {
        //Функция отрывает окно корзины
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        //Функция закрывает окно корзины
        cart.style.display = "none";
        document.body.style.overflow = '';
    }

    // при клике вызываем соответствующую функцию
    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    goodsBtn.forEach(function (btn, i) {
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty = cartWrapper.querySelector('.empty');

            trigger.remove();

            showConfirm();

            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';
            item.appendChild(removeBtn);

            // добавляем товар в карзину
            cartWrapper.appendChild(item);
            if (empty) {
                //убираем надпись "в корзине пусто"
                empty.remove();
            }
        });
    });

    function sliceTitle() {
        //Уменьшаем размер названий товаров
        titles.forEach(function (item) {
            if (item.textContent.length < 70) {
                return
            } else {
                // Старый формат ES5
                //const str = item.textContent.slice(0, 70) + "...";
                // Новый вормат доступный в ES6  
                const str = `${item.textContent.slice(0, 70)}...`;
                item.textContent = str;
            }
        });
    }
    sliceTitle();

    function showConfirm() {
        // показываем карзину, если добавлен товар
        confirm.style.display = 'block';
    }

});