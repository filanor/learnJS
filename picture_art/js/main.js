window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';
    //модальное окно через 60 секунд
    // setTimeout(() => {
    //     alert('прошло 60 секунд')
    // }, 60000);
    const showMoreStyle = require('./parts/showMoreStyle'),
          sizePic = require('./parts/sizePic'),
          sliders = require('./parts/sliders'),
          siteInit = require('./parts/siteInit'),
          picFilter = require('./parts/picFilter');
    let clickFlag = false;

    siteInit();
    showMoreStyle();
    sizePic();
    sliders();
    picFilter();
})