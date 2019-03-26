//===================================================================  
//========================       slider      ========================
//===================================================================  

function slider() {
    let slideIndex = 1;

    const slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot'), 
        slideWrap = document.querySelector('#photo .wrap');

    showSlides(slideIndex);
    slideWrap.style.height = slideWrap.clientHeight+'px';
    //console.log(`${slideWrap.style.height} dsaf ${slideWrap.clientHeight} `);

    function showSlides(index) {

        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }
        let cur = 0; 
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }




    function plusSlides(index) {
        showSlides(slideIndex += index);
        show();
    }

    function currentSlide(index) {
        showSlides(slideIndex = index);
        show();
    }

    prev.addEventListener('click', function () {
        hide();
        setTimeout(function() {
            plusSlides(-1);
        }, 100);
        //plusSlides(-1);
    });

    next.addEventListener('click', function () {
        hide();
        //setTimeout(plusSlides(-1), 2000);
        setTimeout(function() {
            plusSlides(1);
        }, 100);
        //plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                hide();
                setTimeout(function() {
                    currentSlide(i);
                }, 100);
            }
        }
    });

    function hide(){
        let start = 100; 
        //slideWrap.style.height = slideWrap.clientHeight;
            
        function stepHide(){
            if( start <= 40){
                return;
            }
            start -= 10;
            slides[slideIndex-1].querySelector('img').style.width = start + '%';
            requestAnimationFrame(stepHide);
            console.log(start);
        }
        stepHide();
        //slides[slideIndex].style.display = 'none';
    }

    function show(){
        let start = 40;
        function stepShow(){
            if( start >= 100){
                return;
            }
            start += 10;
            slides[slideIndex-1].querySelector('img').style.width = start + '%';
            requestAnimationFrame(stepShow);
            console.log(start);
        }
        stepShow();
        //slides[slideIndex].style.display = 'block';
    }

}
module.exports = slider;