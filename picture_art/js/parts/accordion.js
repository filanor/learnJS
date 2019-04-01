function accordion() {
    const accordionBtns = document.querySelectorAll('.accordion-heading'),
        accordionItem = document.querySelectorAll('.accordion-block');


    function hide() {
        for (let i = 0; i < accordionItem.length; i++) {
            accordionItem[i].style.display = 'none';
        }
    }
    hide();
}
module.exports = accordion;