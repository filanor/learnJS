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
    item.classList.add('animated', 'fadeIn');
    item.style.display = "block";
  }

  function hide() {
    for (var _i = 0; _i < items.length; _i++) {
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
      calcPrice = document.querySelector('.calc-price');
  size.addEventListener('change', function () {
    showRez();
  });
  material.addEventListener('change', function () {
    showRez();
  });
  options.addEventListener('change', function () {
    showRez();
  });
  promo.addEventListener('change', function () {
    showRez();
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

function forms() {// Функция отвечает за обработку всех форм на странице
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

  var clickFlag = false,
      haveOpenFlag = false; // Модальное окно при нажатии на подарок

  gift.addEventListener('click', function () {
    this.style.display = 'none';
    showModal(giftPopup);
  }); //вешаем обработчик нажатия на кнопки заказа

  for (var i = 0; i < designButtons.length; i++) {
    designButtons[i].addEventListener('click', function () {
      clickFlag = true;
      showModal(designPopup);
    });
  } //вешаем обработчик нажатия на кнопки консультации


  for (var _i = 0; _i < consultationButtons.length; _i++) {
    consultationButtons[_i].addEventListener('click', function () {
      clickFlag = true;
      showModal(consultationPopup);
    });
  } //обрабатываем скрол вниз


  window.addEventListener('scroll', scrollForGift);

  function scrollForGift() {
    var scrollHeight = window.pageYOffset,
        documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
        windowHeight = document.documentElement.clientHeight;

    if (scrollHeight + windowHeight == documentHeight && clickFlag == false) {
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
  btn.addEventListener('click', function () {
    this.style.display = 'none';

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
    if (windowWidth <= 768) {
      menu.style.display = 'block';
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
      //showPic(this);
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
      console.log(items[_i].style.display);

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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map