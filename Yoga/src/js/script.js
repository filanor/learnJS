require('formdata-polyfill');

//require('es6-promise').polyfill();
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const calc = require('./parts/calc');
    const sendForm = require('./parts/form');
    const modal = require('./parts/modal');
    const slide = require('./parts/slide');
    const slider = require('./parts/slider');
    const tab = require('./parts/tab');
    const timer = require('./parts/timer');

    tab();
    timer();
    slider();
    slide();
    modal();
    sendForm();
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