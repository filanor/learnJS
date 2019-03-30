window.addEventListener('DOMContentLoaded', () => {


    // Слайдер на главной
    const slides = document.querySelectorAll('.main-slider-item');
    let curSlide = 0;

    showSlide();
    
    setInterval(() => {
        curSlide = (curSlide == slides.length-1) ? 0 : curSlide + 1;
        showSlide();
        console.log(`${slides.length} текущий: ${curSlide}`);
    }, 5000);

    function showSlide(){
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';         
        }
        slides[curSlide].style.display = 'block';
    }





    // больше стилей

    const items = document.querySelectorAll('.styles-2'),
        btn = document.querySelector('.button-styles');

    btn.addEventListener('click', function () {
        this.style.display = 'none';

        for (let i = 0; i < items.length; i++) {
            items[i].classList = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
        }
    });




    // sizePic

    const sizes = document.querySelectorAll('.sizes-block');

    for (let i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('mouseover', function(e) {
            this.children[0].setAttribute('src', changeImg(this, e.type));
        });
        sizes[i].addEventListener('mouseout', function(e) {
            this.children[0].setAttribute('src', changeImg(this, e.type));
        });
    }

    function changeImg(element, event) {
        let src = element.children[0].getAttribute('src'),
            pos = src.indexOf('.png');
        if (event == "mouseover"){
            return  src.slice(0, pos) + '-1' + src.slice(pos);
        } 
        return src.slice(0, pos-2) + src.slice(pos);
    }




})