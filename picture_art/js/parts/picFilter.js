function picFilter () {
    // Функция отвечает за фильтрацию картинок в разделе portfolio
    const menuItem = document.querySelectorAll('.portfolio-menu  li'),
          portfolioItem = document.querySelectorAll('.portfolio-block'),
          portfolioNo = document.querySelector('.portfolio-no');

    // вешаем обработчики на кнопки и устанавливаем активнй тип       
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', function(e) {
            for (let j = 0; j < menuItem.length; j++) {
                menuItem[j].classList.remove('active');
            }
            let type = this.classList[0];
            filter(type);
            this.classList.add('active');
        });
    }

    function filter (type) {
        // функция выводит на экран нужные картинки
        // count - количество подходящих фото. если нет - portfolio-no
        let count = 0;

        for (let i = 0; i < portfolioItem.length; i++) {
            if (portfolioItem[i].classList.contains(type)) {
                portfolioItem[i].style.display = 'block';
                count++;
            } else {
                portfolioItem[i].style.display = 'none';
            }
        }
        portfolioNo.style.display = count == 0 ? 'block': 'none';
    }
}
module.exports = picFilter;