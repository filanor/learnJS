function forms() {
    // Функция отвечает за обработку всех форм на странице и отправку на сервер

    const btns = document.querySelectorAll('form .button-order'),
        forms = document.querySelectorAll('form'),
        textInputs = document.querySelectorAll('input[name=name]'),
        phoneInputs = document.querySelectorAll('input[name=phone]');

    // Вешаем обработчики на формы
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            sendForm(this);
            clear(this);
        })
    }

    // Вешаем обработчики на input-ы телефонов
    for (let i = 0; i < phoneInputs.length; i++) {
        phoneInputs[i].addEventListener('focus', function () {
            this.value = "+7";
        });
        //проверяем введенный символ
        phoneInputs[i].addEventListener('keypress', function (e) {
            this.value = phoneMask(this.value, e);
        });
    }

    // Валидация имени и коментов - только русский
    for (let i = 0; i < textInputs.length; i++) {
        textInputs[i].addEventListener('keypress', function (e) {
            this.value += textValid(e);
        });
    }


    function sendForm(form) {
        // Функция отправляет данные из формы на сервер
        let data = new FormData(form);
        fetch('server.php', {
                method: "POST",
                body: data
            })
            .then(res => sendFormRez(form, 'Данные успешно отправлены'))
            .catch(err => sendFormRez(form, 'Что-то пошло не так'));
    }

    function sendFormRez(form, rez) {
        let par = form.parentElement;
        let el = document.createElement('div');
        el.textContent = rez;
        //определяем что за форма
        if (par.classList.contains('popup-content') || par.classList.contains('main-form')) {
            form.style.display = 'none';
            el.style.width = '200px';
            el.style.height = '200px';
            par.appendChild(el);

            // Через 3 секунды очищаем соощение и возвращаем форму
            setTimeout(function () {
                form.style.display = 'block';
                par.removeChild(el);
            }, 3000);
        } else {
            form.appendChild(el);
            setTimeout(function () {
                form.removeChild(el);
            }, 3000);
        }
    }


    function clear(form) {
        // Очищает input-ы
        let items = form.querySelectorAll('input');
        for (let i = 0; i < items.length; i++) {
            if (items[i].type != 'submit') {
                items[i].value = "";
            }
        }
    }


    function textValid(e) {
        // ввод только кирилицы и пробелов
        if (!(e.key == 'Backspace' || e.key == 'Shift')) {
            e.preventDefault();
        }
        return (/^([а-яё\s])$/i.test(e.key)) ? e.key : '';
    }


    function phoneMask(value, e) {
        // Функция проверяет введенные символы на соответствие маске
        let mask = '+7 (___)___-__-__';
        if (!(e.key == 'Backspace')) {
            e.preventDefault();
        }
        if (/[0-9]/.test(e.key)) {
            if (mask[value.length] == '_') {
                return value + e.key;
            }
            for (let i = value.length; i < mask.length; i++) {
                if (mask[i] == '_') {
                    value = value + e.key;
                    break;
                } else {
                    value += mask[i];
                }
            }
        }
        return value;
    }

}
module.exports = forms;