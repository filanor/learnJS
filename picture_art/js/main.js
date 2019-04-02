require('formdata-polyfill')

window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';
    const showMoreStyle = require('./parts/showMoreStyle'),
          sizePic = require('./parts/sizePic'),
          sliders = require('./parts/sliders'),
          siteInit = require('./parts/siteInit'),
          picFilter = require('./parts/picFilter'),
          forms = require('./parts/forms'),
          popup = require('./parts/popup'),
          accordion = require('./parts/accordion'),
          calc = require('./parts/calc');
    let clickFlag = false;

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