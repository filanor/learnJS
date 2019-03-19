'use strict'
window.addEventListener('DOMContentLoaded', function () {

    const coutryInput = document.querySelectorAll('input');

    for (let i = 0; i < coutryInput.length; i++) {
        coutryInput[i].addEventListener('change', e => {
            getCars();
        });
    }

    function getCars() {
        let rez = {};
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'cars.json');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send();
        xhr.addEventListener('load', e => {
            if (xhr.status == 200) {
                let cars = JSON.parse(xhr.response);
                console.log(cars.length);
                for(let el in cars){
                    console.log(el.category);
                }
                    
                    
                
                console.log(cars);
            }
        });
    }


});