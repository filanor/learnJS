//===================================================================  
//=================        smooth slide        ======================
//===================================================================

function slide(){
    const headerBox = document.querySelector('header nav ul');

    headerBox.addEventListener('click', e => {

        if (e.target && e.target.matches('li a')) {
            e.preventDefault();

            let scrolTo = e.target.getAttribute('href'),
                scrolToBlock = document.querySelector(scrolTo), // получаем элемент до которого необходимо скролить
                dirY = (scrolToBlock.getBoundingClientRect().top - 80) > 0 ? 1 : -1; //получаем направление скрола меню (80) 

            if (scrolToBlock.getBoundingClientRect().top - 80 != 0) {
                // Если 0, то страницу крутить не нужно
                scroll(scrolToBlock, dirY);
            }
        }
    });

    function scroll(block, dirY) {
        let duration = 1000,
            start = Date.now(),
            pageHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );


        function step() {
            let position = block.getBoundingClientRect().top - 80,
                now = Date.now() - start,
                result = Math.round(position * now / duration);

            result = (result > dirY * position) ? position : (result == 0) ? dirY : result;

            if (dirY * position > 0 && (pageHeight - window.pageYOffset) > dirY * document.documentElement.clientHeight) {
                // прокручиваем страницу на величину result
                window.scrollBy(0, result);
                // рекурсивно запускаем функцию анимации прокрутки страницы
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

}

module.exports = slide;