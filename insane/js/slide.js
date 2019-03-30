window.addEventListener('DOMContentLoaded', function () {

function slider (){
    const next = document.querySelector('.sidecontrol__controls a'); 

    next.addEventListener('click', (e) => {
        console.log(next);
    });
}

function playVideo (video) {
    const play = document.querySelector('.play');
}

slider();
});