// Необходимо реализовать автодополнение. При введении в инпут первых букв страны - появляется список стран, которые начинаются на те буквы, которые вы ввели. Чем больше букв вы вводите - тем меньше стран в списке. Страну можно выбрать, кликнув по ней мышкой - в этом случае ее название появится в инпуте.
// Массив со списком стран я уже сделал.


let countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"];

// получучаем поле ввода и поле для вывода результата
let inputBlock = document.getElementById('country'),
    resBlock = document.getElementById('list');


inputBlock.addEventListener('input', function () {
    //Обнуляем выведенные ранее данные
    resBlock.textContent = '';

    // создаем строку, равную введенному значению
    let str = inputBlock.value.toLowerCase();

    // если поле пустое, не выполняем проверку
    if (str != '') {
        countries.forEach(function (element) {
            if (element.toLowerCase().indexOf(str) == 0) {
                resBlock.innerHTML += `<span>${element}</span>`;
            }
        });
    }
});

//Осуществляем выбор элемента 
resBlock.addEventListener('click', function(event) {
    if(event.target && event.target.tagName == 'SPAN') {
        inputBlock.value = event.target.innerHTML;
        resBlock.innerHTML = '';
    }
});