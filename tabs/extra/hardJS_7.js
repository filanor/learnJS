'use strict';

let circle = document.querySelector('.circle'),
    btn = document.querySelector('button'),
    posY = circle.style.top; 
    console.log(circle.style.top);
    let flag = true;

function anim(){
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
    requestAnimationFrame(anim);
}

btn.addEventListener('click', function(){
    anim();
});