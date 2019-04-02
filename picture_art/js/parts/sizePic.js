// sizePic
function sizePic() {
    // Функция отвечает за замену картинок при наведелии мышки. 
    // Раздел размеры
    const sizes = document.querySelectorAll('.sizes-block');

    for (let i = 0; i < sizes.length; i++) {

        sizes[i].addEventListener('mouseover', function (e) {
            toggle(this.querySelectorAll('p'));
            this.children[0].setAttribute('src', changeImg(this, e.type));
            
        });

        sizes[i].addEventListener('mouseout', function (e) {
            toggle(this.querySelectorAll('p'));
            this.children[0].setAttribute('src', changeImg(this, e.type));
        });
    }


    function changeImg(element, event) {
        // возвращает необходимый src для подстановки в img
        // получает тип событияи элемент на котором оно произошло
        let src = element.children[0].getAttribute('src'),
            pos = src.indexOf('.png');
        if (event == "mouseover") {
            return src.slice(0, pos) + '-1' + src.slice(pos);
        }
        return src.slice(0, pos - 2) + src.slice(pos);
    }


    function toggle (items) {
        for (let i = 0; i < items.length; i++){
            if (!items[i].classList.contains('sizes-hit') && (items[i].style.display == 'block' || items[i].style.display == '') ) {
                
                items[i].style.display = 'none';
            } else {
                items[i].style.display = 'block';
            }
        }
    }

}

module.exports = sizePic;