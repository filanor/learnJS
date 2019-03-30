// Слайдеры на главной
function sliders() {
    const slides = document.querySelectorAll('.main-slider-item'),
          feedSlides = document.querySelectorAll('.feedback-slider-item'),
          prevFeed = document.querySelector('.feedback-slider .main-prev-btn'),
          nextFeed = document.querySelector('.feedback-slider .main-next-btn');
    let curSlide = 0,
        curFeed = 0;

    showSlide(slides);
    showSlide(feedSlides);

    setInterval(() => {
        curSlide = (curSlide == slides.length - 1) ? 0 : curSlide + 1;
        showSlide(slides, curSlide);
    }, 5000);


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


    function showSlide(slide, nextSlide = 0) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
        slide[nextSlide].style.display = 'block';
    }
}
module.exports = sliders;