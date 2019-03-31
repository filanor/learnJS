window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';
    const showMoreStyle = require('./parts/showMoreStyle'),
          sizePic = require('./parts/sizePic'),
          sliders = require('./parts/sliders'),
          siteInit = require('./parts/siteInit'),
          picFilter = require('./parts/picFilter'),
          forms = require('./parts/forms'),
          popup = require('./parts/popup');
    let clickFlag = false;

    siteInit();
    showMoreStyle();
    sizePic();
    sliders();
    picFilter();
    forms();
    popup();
});