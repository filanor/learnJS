function simpleTabs(tabClass, tabLinkClass, tabContentClass) {

    window.addEventListener('DOMContentLoaded', function () {

            'use strict';
            // let tab = document.querySelectorAll('.info-header-tab'),
            //     info = document.querySelector('.info-header'),
            //     tabContent = document.querySelectorAll('.info-tabcontent');

            if (tabClass[0] != '.') {
                tabClass = '.' + tabClass;
            }
            if (tabLinkClass[0] != '.') {
                tabLinkClass = '.' + tabLinkClass;
            }
            if (tabContentClass[0] != '.') {
                tabContentClass = '.' + tabContentClass;
            }
            // hideClass = (hideClass == undefined) ? '' : hideClass;
            // showClass = (showClass == undefined) ? '' : showClass;


            let tab = document.querySelectorAll(tabLinkClass),
                info = document.querySelector(tabClass),
                tabContent = document.querySelectorAll(tabContentClass);


            function hideTabContent(a) {
                for (let i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });
    });
}