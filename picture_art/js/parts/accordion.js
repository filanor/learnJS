function accordion() {
    const buttons = document.querySelectorAll('.accordion-heading'),
        items = document.querySelectorAll('.accordion-block');

    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if(this.nextElementSibling.style.display == 'none') {
                show(this.nextElementSibling);
             } else {
                 hide();
             }
        });
    }

    function show(item) {
        hide();
        item. previousElementSibling.classList.add('ui-accordion-header-active');
        item.classList.add('animated', 'fadeIn');
        item.style.display = "block";
    }

    function hide() {
        for (let i = 0; i < items.length; i++) {
            buttons[i].classList.remove('ui-accordion-header-active');
            items[i].classList.remove('fadeIn');
            items[i].style.display = 'none';
        }
    }
    hide();
}
module.exports = accordion;