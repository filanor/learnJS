window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (o, t) {
    t = t || window;
    for (var i = 0; i < this.length; i++) o.call(t, this[i], i, this);
});


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