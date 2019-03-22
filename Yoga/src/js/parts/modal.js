//===================================================================  
//=======================       modal       =========================
//===================================================================

function modal () {
    const more = document.querySelector('.more'),
        infoMore = document.getElementById('about'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function (e) {
        this.classList.add('more-splash');
        modalOpen();
    });

    close.addEventListener('click', e => {
        modalClose();
    });
    infoMore.addEventListener('click', (e) => {
        if (e.target && e.target.matches('div.description-btn')) {
            modalOpen();
        }
    });


    function modalOpen() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрет прокрутки страницы при открытии модального окна
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return; // если с мобилы
        } else if (/Edge|MSIE|Trident/i.test(navigator.userAgent)) {
            // код если пользователь зашел с Egde или IE
            overlay.classList.add('fade');
        } else {
            modalAnimation();
        }
    }

    function modalClose() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modalAnimation() {
        let endSize = 750,
            size = 740,
            opacity = 0,
            start = Date.now(),
            modal = document.querySelector('.popup');

        modal.style.opacity = opacity;
        modal.style.width = size + 'px';

        function animate(time) {
            if (size >= endSize && opacity == 1) {
                return;
            }
            let now = performance.now() - start;
            opacity = opacity >= 1 ? opacity : opacity + 0.05;
            size = size >= endSize ? size : size + 1;

            modal.style.opacity = opacity;
            modal.style.width = size + 'px';

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }
}

module.exports = modal;