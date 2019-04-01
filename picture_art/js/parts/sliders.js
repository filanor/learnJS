// Слайдеры на главной
function sliders() {
    const slides = document.querySelectorAll('.main-slider-item'),
        feedSlides = document.querySelectorAll('.feedback-slider-item'),
        prevFeed = document.querySelector('.feedback-slider .main-prev-btn'),
        nextFeed = document.querySelector('.feedback-slider .main-next-btn');
    let curSlide = 0,
        curFeed = 0;


    // Добавляем анимацию верхнему слайдеру. Он автоматический, 
    // поэтому можно добавить классы изначально
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('animated', 'slideInDown');
    }

    showSlide(slides);
    setInterval(() => {
        curSlide = (curSlide == slides.length - 1) ? 0 : curSlide + 1;
        showSlide(slides, curSlide);
    }, 5000);


    // Слайдер с отзывами
    showSlide(feedSlides);
    setInterval(() => {
        curFeed = (curFeed == feedSlides.length - 1) ? 0 : curFeed + 1;
        showSlide(feedSlides, curFeed);
    }, 10000);

    prevFeed.addEventListener('click', function () {
        curFeed = (curFeed == 0) ? slides.length : curFeed - 1;
        showSlide(feedSlides, curFeed);
    });

    nextFeed.addEventListener('click', function () {
        curFeed = (curFeed == slides.length) ? 0 : curFeed + 1;
        showSlide(feedSlides, curFeed);
    });



    //общая функция, показывающая следующий слайд
    function showSlide(slide, nextSlide = 0) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
        slide[nextSlide].style.display = 'block';
    }


}
module.exports = sliders;