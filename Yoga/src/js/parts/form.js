//===================================================================  
//========================       form       =========================
//===================================================================  

function sendForm() {
    const modalForm = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        callbackForm = document.getElementById('form'),
        phoneInput = document.querySelectorAll('input[type = tel]');


    // Валидация ввода телефона
    for (let i = 0; i < phoneInput.length; i++) {
        phoneInput[i].addEventListener('keypress', function (e) {
            if (!(e.key == 'Backspace' || e.key == 'Shift')) {
                e.preventDefault();
            }

            if (phoneInput[i].value.length == 0 && /\+/.test(e.key)) {
                this.value += e.key;
            } else if (/[0-9]/.test(e.key)) {
                this.value += e.key;
            }
        });
    }

    // Обработка формы обратной связи
    callbackForm.addEventListener('submit', e => {
        e.preventDefault();
        sendRequest(callbackForm);
    });

    // Обрабатываем модальное окно
    modalForm.addEventListener('submit', e => {
        e.preventDefault();
        sendRequest(modalForm);
    });


    function sendRequest(form) {
        // Функция отправляет данные полученой формы на сервер
        let message = {
            loading: '<img src = "./img/ajax-loader.gif">',
            success: '<img style = "max-width:66px; max-height: 66px;" src = "./img/success.png">',
            failure: 'Что-то пошло не так...'
        }

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);

        let json = formToJSON(form);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let promise = new Promise((resolve, reject) => {
            request.send(json);
            statusMessage.innerHTML = message.loading;

            request.addEventListener('load', function () {
                if (request.readyState == 4 && request.status == 200) {
                    resolve(message.success);
                } else {
                    reject(message.failure);
                }
            });
        });

        promise.then(data => {
                statusMessage.innerHTML = data;
            },
            error => {
                statusMessage.innerHTML = error;
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
}

module.exports = sendForm;