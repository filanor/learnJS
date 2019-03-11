'use strict';

let circle = document.querySelector('.circle'),
    btn = document.querySelector('button'),
    posY = circle.style.top,
    posX = circle.style.left; 
    console.log(circle.style.top);
    console.log(posX);
    let flag = true;
btn.addEventListener('click', function(){
    let go = setInterval(function(){
        // circle.style.top = posY + 'px';
        // circle.style.left = posX + 'px';
        
        if (posY < 450 && flag == true) {
            posY++;
            circle.style.top = posY + 'px';
        } else if (posY > 0 && flag == false){
            posY--;
            circle.style.top = posY + 'px';
        } else if (posY == 450){
            flag = false;
        }else if (posY == 0) {
            flag = true;
        }
    }, 10);

});