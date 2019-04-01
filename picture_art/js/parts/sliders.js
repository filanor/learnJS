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
        slides[i].classList.add('animated', 'fadeInDown');
    }

    showSlide(slides);
    setInterval(() => {
        curSlide = (curSlide == slides.length - 1) ? 0 : curSlide + 1;
        showSlide(slides, curSlide);
    }, 5000);


    // Слайдер с отзывами
    showSlide(feedSlides);

    function nextSlide() {
    // переключение слайда по умолчанию
        curFeed = (curFeed == feedSlides.length - 1) ? 0 : curFeed + 1;
        showSlide(feedSlides, curFeed);
    }
    let feedbackInterval = setInterval(nextSlide, 10000);

    prevFeed.addEventListener('click', function () {
        curFeed = (curFeed == 0) ? slides.length : curFeed - 1;
        nextSlideBtn('prev');
    });

    nextFeed.addEventListener('click', function () {
        curFeed = (curFeed == slides.length) ? 0 : curFeed + 1;
        nextSlideBtn('next');
    });

    function nextSlideBtn(btn) {
    // Отрабатывает переключение слайда при нажатии на кнопки. 
        if (btn == 'next') {
            feedSlides[curFeed].classList.remove('animated', 'fadeInLeft');
            feedSlides[curFeed].classList.add('animated', 'fadeInRight');
        } else {
            feedSlides[curFeed].classList.remove('animated', 'fadeInRight');
            feedSlides[curFeed].classList.add('animated', 'fadeInLeft');
        }
        clearInterval(feedbackInterval);
        feedbackInterval = setInterval(nextSlide, 10000);
        showSlide(feedSlides, curFeed);
    }



    //общая функция, показывающая следующий слайд
    function showSlide(slide, nextSlide = 0) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
        slide[nextSlide].style.display = 'block';
    }


}
module.exports = sliders;