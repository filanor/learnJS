/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

__webpack_require__(/*! element-matches-polyfill */ "./node_modules/element-matches-polyfill/index.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var showMoreStyle = __webpack_require__(/*! ./parts/showMoreStyle */ "./js/parts/showMoreStyle.js"),
      sizePic = __webpack_require__(/*! ./parts/sizePic */ "./js/parts/sizePic.js"),
      sliders = __webpack_require__(/*! ./parts/sliders */ "./js/parts/sliders.js"),
      siteInit = __webpack_require__(/*! ./parts/siteInit */ "./js/parts/siteInit.js"),
      picFilter = __webpack_require__(/*! ./parts/picFilter */ "./js/parts/picFilter.js"),
      forms = __webpack_require__(/*! ./parts/forms */ "./js/parts/forms.js"),
      popup = __webpack_require__(/*! ./parts/popup */ "./js/parts/popup.js"),
      accordion = __webpack_require__(/*! ./parts/accordion */ "./js/parts/accordion.js"),
      calc = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js");

  var clickFlag = false;
  siteInit();
  showMoreStyle();
  sizePic();
  sliders();
  picFilter();
  forms();
  popup();
  accordion();
  calc();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./js/parts/accordion.js":
/*!*******************************!*\
  !*** ./js/parts/accordion.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
  var buttons = document.querySelectorAll('.accordion-heading'),
      items = document.querySelectorAll('.accordion-block');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (this.nextElementSibling.style.display == 'none') {
        show(this.nextElementSibling);
      } else {
        hide();
      }
    });
  }

  function show(item) {
    hide();
    item.previousElementSibling.classList.add('ui-accordion-header-active');
    item.classList.add('animated', 'fadeIn');
    item.style.display = "block";
  }

  function hide() {
    for (var _i = 0; _i < items.length; _i++) {
      buttons[_i].classList.remove('ui-accordion-header-active');

      items[_i].classList.remove('fadeIn');

      items[_i].style.display = 'none';
    }
  }

  hide();
}

module.exports = accordion;

/***/ }),

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  //зададим цены
  var price = {
    'size': [1000, 1500, 2000, 2500],
    'material': [1, 1.5, 2],
    'options': [1000, 2000, 1000],
    'promo': {
      'value': 'IWANTPOPART',
      'discount': 0.3
    }
  },
      error = 'Для расчета нужно выбрать размер картины и материал картины',
      options = document.getElementById('options'),
      size = document.getElementById('size'),
      material = document.getElementById('material'),
      promo = document.querySelector('.promocode'),
      calcPrice = document.querySelector('.calc-price'),
      calcSelect = document.querySelectorAll('.calc select');

  for (var i = 0; i < calcSelect.length; i++) {
    calcSelect[i].addEventListener('change', function (e) {
      return showRez();
    });
  }

  promo.addEventListener('change', function (e) {
    return showRez();
  });

  function showRez() {
    //функция определяет ввыедены ли необходимые данные
    // и выводит результат
    if (size.selectedIndex != 0 && material.selectedIndex != 0) {
      calcPrice.innerHTML = calculate();
    } else {
      calcPrice.innerHTML = error;
    }
  }

  function calculate() {
    //математика
    var discount = promo.value == price['promo']['value'] ? +price['promo']['discount'] : 0,
        extra = options.selectedIndex != 0 ? price['options'][options.selectedIndex - 1] : 0,
        index = price['material'][material.selectedIndex - 1],
        main = price['size'][size.selectedIndex - 1];
    return (main * index + extra) * (1 - discount);
  }
}

module.exports = calc;

/***/ }),

/***/ "./js/parts/forms.js":
/*!***************************!*\
  !*** ./js/parts/forms.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
  // Функция отвечает за обработку всех форм на странице и отправку на сервер
  var btns = document.querySelectorAll('form .button-order'),
      forms = document.querySelectorAll('form'),
      textInputs = document.querySelectorAll('input[name=name]'),
      phoneInputs = document.querySelectorAll('input[name=phone]'); // Вешаем обработчики на формы

  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      sendForm(this);
      clear(this);
    });
  } // Вешаем обработчики на input-ы телефонов


  for (var _i = 0; _i < phoneInputs.length; _i++) {
    phoneInputs[_i].addEventListener('focus', function () {
      this.value = "+7";
    }); //проверяем введенный символ


    phoneInputs[_i].addEventListener('keypress', function (e) {
      this.value = phoneMask(this.value, e);
    });
  } // Валидация имени и коментов - только русский


  for (var _i2 = 0; _i2 < textInputs.length; _i2++) {
    textInputs[_i2].addEventListener('keypress', function (e) {
      this.value += textValid(e);
    });
  }

  function sendForm(form) {
    // Функция отправляет данные из формы на сервер
    var data = new FormData(form);
    fetch('server.php', {
      method: "POST",
      body: data
    }).then(function (res) {
      return sendFormRez(form, 'Данные успешно отправлены');
    }).catch(function (err) {
      return sendFormRez(form, 'Что-то пошло не так');
    });
  }

  function sendFormRez(form, rez) {
    var par = form.parentElement;
    var el = document.createElement('div');
    el.textContent = rez; //определяем что за форма

    if (par.classList.contains('popup-content') || par.classList.contains('main-form')) {
      form.style.display = 'none';
      el.style.width = '200px';
      el.style.height = '200px';
      par.appendChild(el); // Через 3 секунды очищаем соощение и возвращаем форму

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
    var items = form.querySelectorAll('input');

    for (var _i3 = 0; _i3 < items.length; _i3++) {
      if (items[_i3].type != 'submit') {
        items[_i3].value = "";
      }
    }
  }

  function textValid(e) {
    // ввод только кирилицы и пробелов
    if (!(e.key == 'Backspace' || e.key == 'Shift')) {
      e.preventDefault();
    }

    return /^([а-яё\s])$/i.test(e.key) ? e.key : '';
  }

  function phoneMask(value, e) {
    // Функция проверяет введенные символы на соответствие маске
    var mask = '+7 (___)___-__-__';

    if (!(e.key == 'Backspace')) {
      e.preventDefault();
    }

    if (/[0-9]/.test(e.key)) {
      if (mask[value.length] == '_') {
        return value + e.key;
      }

      for (var _i4 = value.length; _i4 < mask.length; _i4++) {
        if (mask[_i4] == '_') {
          value = value + e.key;
          break;
        } else {
          value += mask[_i4];
        }
      }
    }

    return value;
  }
}

module.exports = forms;

/***/ }),

/***/ "./js/parts/picFilter.js":
/*!*******************************!*\
  !*** ./js/parts/picFilter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function picFilter() {
  // Функция отвечает за фильтрацию картинок в разделе portfolio
  var menuItem = document.querySelectorAll('.portfolio-menu  li'),
      portfolioItem = document.querySelectorAll('.portfolio-block'),
      portfolioNo = document.querySelector('.portfolio-no'); // вешаем обработчики на кнопки и устанавливаем активнй тип       

  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function (e) {
      for (var j = 0; j < menuItem.length; j++) {
        menuItem[j].classList.remove('active');
      }

      var type = this.classList[0];
      filter(type);
      this.classList.add('active');
    });
  }

  function filter(type) {
    // функция выводит на экран нужные картинки
    // count - количество подходящих фото. если нет - portfolio-no
    var count = 0;

    for (var _i = 0; _i < portfolioItem.length; _i++) {
      if (portfolioItem[_i].classList.contains(type)) {
        portfolioItem[_i].style.display = 'block';
        count++;
      } else {
        portfolioItem[_i].style.display = 'none';
      }
    }

    portfolioNo.style.display = count == 0 ? 'block' : 'none';
  }
}

module.exports = picFilter;

/***/ }),

/***/ "./js/parts/popup.js":
/*!***************************!*\
  !*** ./js/parts/popup.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popup() {
  //модальное окно через 60 секунд
  setTimeout(function () {
    if (haveOpenFlag == false) {
      showModal(consultationPopup);
    }
  }, 60000);
  var gift = document.querySelector('.fixed-gift'),
      designButtons = document.querySelectorAll('.button-design'),
      consultationButtons = document.querySelectorAll('.button-consultation'),
      designPopup = document.querySelector('.popup-design'),
      consultationPopup = document.querySelector('.popup-consultation'),
      giftPopup = document.querySelector('.popup-gift'),
      closeBtns = document.querySelectorAll('.popup-close'); // флаг для отслеживания нажатий

  var haveOpenFlag = false; // Модальное окно при нажатии на подарок

  gift.addEventListener('click', function () {
    this.style.display = 'none';
    showModal(giftPopup);
  }); //вешаем обработчик нажатия на кнопки заказа

  for (var i = 0; i < designButtons.length; i++) {
    designButtons[i].addEventListener('click', function (e) {
      return showModal(designPopup);
    });
  } //вешаем обработчик нажатия на кнопки консультации


  for (var _i = 0; _i < consultationButtons.length; _i++) {
    consultationButtons[_i].addEventListener('click', function () {
      return showModal(consultationPopup);
    });
  } //обрабатываем скрол вниз


  window.addEventListener('scroll', scrollForGift);

  function scrollForGift() {
    var scrollHeight = window.pageYOffset,
        documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
        windowHeight = document.documentElement.clientHeight;

    if (scrollHeight + windowHeight == documentHeight) {
      showModal(giftPopup);
      gift.style.display = 'none'; // Разовая акция. после показа удоляем обработчик

      window.removeEventListener('scroll', scrollForGift);
    }
  } // Обрабатываем закрытие модальных окон


  giftPopup.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.popup-close') || e.target.matches('.popup-gift')) {
      closeModal(giftPopup);
    }
  });
  designPopup.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.popup-close') || e.target.matches('.popup-design')) {
      closeModal(designPopup);
    }
  });
  consultationPopup.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.popup-close') || e.target.matches('.popup-consultation')) {
      closeModal(consultationPopup);
    }
  });

  function showModal(modal) {
    //функция открывает необходимое модальное окно
    document.body.style.overflow = 'hidden';
    modal.style.display = "block";
    haveOpenFlag = true;
    window.removeEventListener('scroll', scrollForGift);
  }

  function closeModal(modal) {
    document.body.style.overflow = '';
    modal.style.display = "none";
    haveOpenFlag = false;
  }
}

module.exports = popup;

/***/ }),

/***/ "./js/parts/showMoreStyle.js":
/*!***********************************!*\
  !*** ./js/parts/showMoreStyle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showMoreStyle() {
  // больше стилей
  var items = document.querySelectorAll('.styles-2'),
      btn = document.querySelector('.button-styles');
  btn.addEventListener('click', function (e) {
    btn.style.display = 'none';

    for (var i = 0; i < items.length; i++) {
      items[i].classList = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
    }
  });
}

module.exports = showMoreStyle;

/***/ }),

/***/ "./js/parts/siteInit.js":
/*!******************************!*\
  !*** ./js/parts/siteInit.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function siteInit() {
  var burger = document.querySelector('.burger'),
      menu = document.querySelector('.burger-menu');
  var windowWidth = document.body.clientWidth;
  burger.addEventListener('click', function (e) {
    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    } else if (windowWidth <= 768) {
      menu.style.display = 'block';
    }
  });
  document.addEventListener('mouseup', function (e) {
    if (e.target != menu && e.target != burger) {
      menu.style.display = 'none';
    }
  });
  window.addEventListener('resize', function (e) {
    windowWidth = document.body.clientWidth;

    if (windowWidth > 768) {
      menu.style.display = 'none';
    }
  });
}

module.exports = siteInit;

/***/ }),

/***/ "./js/parts/sizePic.js":
/*!*****************************!*\
  !*** ./js/parts/sizePic.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// sizePic
function sizePic() {
  // Функция отвечает за замену картинок при наведелии мышки. 
  // Раздел размеры
  var sizes = document.querySelectorAll('.sizes-block');

  for (var i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('mouseover', function (e) {
      toggle(this.querySelectorAll('p'));
      this.children[0].setAttribute('src', changeImg(this, e.type));
    });
    sizes[i].addEventListener('mouseout', function (e) {
      toggle(this.querySelectorAll('p'));
      this.children[0].setAttribute('src', changeImg(this, e.type));
    });
  }

  function changeImg(element, event) {
    // возвращает необходимый src для подстановки в img
    // получает тип событияи элемент на котором оно произошло
    var src = element.children[0].getAttribute('src'),
        pos = src.indexOf('.png');

    if (event == "mouseover") {
      return src.slice(0, pos) + '-1' + src.slice(pos);
    }

    return src.slice(0, pos - 2) + src.slice(pos);
  }

  function toggle(items) {
    for (var _i = 0; _i < items.length; _i++) {
      if (!items[_i].classList.contains('sizes-hit') && (items[_i].style.display == 'block' || items[_i].style.display == '')) {
        items[_i].style.display = 'none';
      } else {
        items[_i].style.display = 'block';
      }
    }
  }
}

module.exports = sizePic;

/***/ }),

/***/ "./js/parts/sliders.js":
/*!*****************************!*\
  !*** ./js/parts/sliders.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Слайдеры на главной
function sliders() {
  var slides = document.querySelectorAll('.main-slider-item'),
      feedSlides = document.querySelectorAll('.feedback-slider-item'),
      prevFeed = document.querySelector('.feedback-slider .main-prev-btn'),
      nextFeed = document.querySelector('.feedback-slider .main-next-btn');
  var curSlide = 0,
      curFeed = 0; // Добавляем анимацию верхнему слайдеру. Он автоматический, 
  // поэтому можно добавить классы изначально

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('animated', 'fadeInDown');
  }

  showSlide(slides);
  setInterval(function () {
    curSlide = curSlide == slides.length - 1 ? 0 : curSlide + 1;
    showSlide(slides, curSlide);
  }, 5000); // Слайдер с отзывами

  showSlide(feedSlides);

  function nextSlide() {
    // переключение слайда по умолчанию
    curFeed = curFeed == feedSlides.length - 1 ? 0 : curFeed + 1;
    showSlide(feedSlides, curFeed);
  }

  var feedbackInterval = setInterval(nextSlide, 10000);
  prevFeed.addEventListener('click', function () {
    curFeed = curFeed == 0 ? slides.length : curFeed - 1;
    nextSlideBtn('prev');
  });
  nextFeed.addEventListener('click', function () {
    curFeed = curFeed == slides.length ? 0 : curFeed + 1;
    nextSlideBtn('next');
  });

  function nextSlideBtn(btn) {
    // Отрабатывает переключение слайда при нажатии на кнопки. 
    if (btn == 'next') {
      feedSlides[curFeed].classList.remove('animated', 'fadeInLeft');
      feedSlides[curFeed].classList.add('animated', 'fadeInRight');
    } else {
      feedSlides[curFeed].classList.remove('animated', 'fadeInRight');
      feedSlides[curFeed].classList.add('animated', 'fadeInLeft');
    }

    clearInterval(feedbackInterval);
    feedbackInterval = setInterval(nextSlide, 10000);
    showSlide(feedSlides, curFeed);
  } //общая функция, показывающая следующий слайд


  function showSlide(slide) {
    var nextSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var _i = 0; _i < slide.length; _i++) {
      slide[_i].style.display = 'none';
    }

    slide[nextSlide].style.display = 'block';
  }
}

module.exports = sliders;

/***/ }),

/***/ "./node_modules/element-matches-polyfill/index.js":
/*!********************************************************!*\
  !*** ./node_modules/element-matches-polyfill/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}


/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(){p=function(){};n.Symbol||(n.Symbol=r)}var r=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function u(){p();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&m(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return v(l(this))}});u=function(){}}function v(a){u();a={next:a};a[n.Symbol.iterator]=function(){return this};return a}function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var A={s:!0},B={};try{B.__proto__=A;z=B.s;break a}catch(a){}z=!1}y=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=y;function D(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.u=0;this.g=null}function E(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}D.prototype.i=function(a){this.o=a};
D.prototype.j=function(a){this.g={v:a,w:!0};this.b=this.u||this.m};D.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function F(a,b,e){a.b=e;return{value:b}}function G(a){this.A=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function H(a){this.a=new D;this.B=a}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.i);this.a.i(a);return J(this)};
function K(a,b){E(a.a);var e=a.a.c;if(e)return I(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.j=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return J(this)};
function I(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.h=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.j(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.B(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(e){a.a.o=void 0,a.a.j(e)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.w)throw b.v;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return K(a,b)};u();this[Symbol.iterator]=function(){return this}}function M(a,b){var e=new L(new H(b));C&&C(e,a.prototype);return e}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var N=function(a,b){for(var e=0;e<a.length;e++)b(a[e])},O=function(a,b,e){return b instanceof Blob?[String(a),b,void 0!==e?e+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},Q=function(a){var b=x(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},R="object"===typeof window?window:"object"===typeof self?self:this,S=R.FormData,T=R.XMLHttpRequest&&R.XMLHttpRequest.prototype.send,U=R.Request&&R.fetch,V=R.navigator&&R.navigator.sendBeacon;p();var W=R.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in R&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){R.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?new Date(c.lastModified):new Date;Object.defineProperties(b,
{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}p();u();var X=function(a){this.f=Object.create(null);if(!a)return this;var b=this;N(a.elements,function(a){if(a.name&&!a.disabled&&"submit"!==a.type&&"button"!==a.type)if("file"===a.type){var c=a.files&&a.files.length?a.files:[new File([],"",{type:"application/octet-stream"})];N(c,function(c){b.append(a.name,c)})}else"select-multiple"===
a.type||"select-one"===a.type?N(a.options,function(c){!c.disabled&&c.selected&&b.append(a.name,c.value)}):"checkbox"===a.type||"radio"===a.type?a.checked&&b.append(a.name,a.value):(c="textarea"===a.type?a.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):a.value,b.append(a.name,c))})};k=X.prototype;k.append=function(a,b,e){P(arguments,2);var c=x(O.apply(null,arguments));a=c.next().value;b=c.next().value;e=c.next().value;c=this.f;c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){P(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var e=this,c,d,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=e.f,f=new G(c);case 2:var t;a:{for(t=f;0<t.l.length;){var w=t.l.pop();if(w in t.A){t=w;break a}}t=null}if(null==(d=t)){b.b=0;break}g=x(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[d,Q(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){P(arguments,1);for(var c=x(this),d=c.next();!d.done;d=c.next()){var f=x(d.value);d=f.next().value;f=f.next().value;
b.call(e,f,d,this)}};k.get=function(b){P(arguments,1);var e=this.f;b=String(b);return e[b]?Q(e[b][0]):null};k.getAll=function(b){P(arguments,1);return(this.f[String(b)]||[]).map(Q)};k.has=function(b){P(arguments,1);return String(b)in this.f};k.keys=function e(){var c=this,d,f,g,h,q;return M(e,function(e){1==e.b&&(d=x(c),f=d.next());if(3!=e.b){if(f.done){e.b=0;return}g=f.value;h=x(g);q=h.next().value;return F(e,q,3)}f=d.next();e.b=2})};k.set=function(e,c,d){P(arguments,2);var f=O.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function c(){var d=this,f,g,h,q,w;return M(c,function(c){1==c.b&&(f=x(d),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=x(h);q.next();w=q.next().value;return F(c,w,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=new S,d=x(this),f=d.next();!f.done;f=d.next()){var g=x(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=x(this),g=f.next();!g.done;g=
f.next()){var h=x(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
W&&(X.prototype[W]="FormData");T&&(R.XMLHttpRequest.prototype.send=function(c){c instanceof X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),T.call(this,c)):T.call(this,c)});if(U){var Y=R.fetch;R.fetch=function(c,d){d&&d.body&&d.body instanceof X&&(d.body=d.body._blob());return Y.call(this,c,d)}}V&&(R.navigator.sendBeacon=function(c,d){d instanceof X&&(d=d._asNative());return V.call(this,c,d)});R.FormData=X};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=script.js.map