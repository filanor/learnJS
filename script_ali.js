// Получение карточек товаров с JSON

window.addEventListener("DOMContentLoaded", () => {
    const loadContent = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(json => createElement(json))
            .catch(err => console.log(err));
        console.log(document.querySelectorAll('.goods_title'));
        // в таком виде в консоль выведется постой массив. Проблема в ассинхронности
        // так как в консоль будет выводится не дожидаясь завершения fetch
    }

 /*   
    // в ES7 ввели решение такой проблемы. работает только с запросами к серверу async await:
    сonst loadContent = async (url) => {
        await fetch(url)
            .then(response => response.json())
            .then(json => createElement(json))
            .catch(err => console.log(err));
        // Выполнение дождется окончания операции await (работает только в связке async-await)
        console.log(document.querySelectorAll('.goods_title'));
    }
*/
    function createElement(arr) {
        const goodsWrapper = document.querySelector('.goods_wrapper');

        arr.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('goods__item');
            card.innerHTML = `
                <img class="goods__img" src="${item.url}" alt="phone">
                <div class="goods__colors">Доступно цветов: 4</div>
                <div class="goods__title">
                    ${item.title}
                </div>
                <div class="goods__price">
                    <span>${ite,.price}</span> руб/шт
                </div>
                <button class="goods__btn">Добавить в корзину</button>
            `;
            goodsWrapper.appendChild(card);
        });
    }

    loadContent('адресс');

})