function showMoreStyle() {
    // больше стилей

    const items = document.querySelectorAll('.styles-2'),
        btn = document.querySelector('.button-styles');

    btn.addEventListener('click', e => {
        btn.style.display = 'none';

        for (let i = 0; i < items.length; i++) {
            items[i].classList = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
        }
    });

 }

 module.exports = showMoreStyle;