'use strict'

// Восстановить порядок в меню, добавить пятый пункт

let menu = document.querySelector('.menu'),
    menuElements = document.querySelectorAll('.menu-item');
    
let newMenuElement = menuElements[0].cloneNode(false);

newMenuElement.innerHTML = 'Пятый пункт';
menu.appendChild(newMenuElement);

menu.insertBefore(menuElements[2], menuElements[1]);


// Заменить картинку заднего фона на другую из папки img
document.body.style.background = "url(./img/apple_true.jpg) center no-repeat";

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";

// Удалить рекламу со страницы
let rightColumn = document.querySelector(".column:last-of-type");
rightColumn.removeChild(document.querySelector('.adv'));

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let answer = prompt("Как вы относитесь к технике Apple");
document.getElementById('prompt').textContent = answer;
