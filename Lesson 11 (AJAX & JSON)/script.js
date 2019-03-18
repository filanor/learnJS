let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();

    //method - GET или POST
    //url - путь к файлу или серверу или БД
    //async - отвечает за асенхронность. по умолчанию true
    //request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');

    //устанавливает значения HTTP заголовков. Метод setRequestHeader()  следует вызывать только после  open()
    //, но до send(). Если метод вызывается несколько раз подряд, значения присоединяется к одному и тому 
    //же заголовку.
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // Запускает запрос 
    request.send();


    //Ответ от сервера
    //status - содержит код ответа сервера
    //statusText - текстовое описание от сервера
    //responseText - ответ с сервера / response
    //readyState - всего 5 состояний от 0 до 4, где 0 создание объекта, а 4 - операция полностью завершена 

    //событие readystatechange - изменение в статусе заказа
    //событие load - срабатывает когда объект загрузился без ошибок

    request.addEventListener('readystatechange', function () {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
        
    });
});