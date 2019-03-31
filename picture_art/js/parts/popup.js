function popup() {
//модальное окно через 60 секунд
    // setTimeout(() => {
    //     alert('прошло 60 секунд')
    // }, 60000);

    const present = document.querySelector('.fixed-gift'),
          designButtons = document.querySelectorAll('.button-design'),
          consultationButtons = document.querySelectorAll('.button-consultation'),
          designPopup = document.querySelector('.popup-design'),
          consultationPopup = document.querySelector('.popup-consultation'),
          giftPopup = document.querySelector('.popup-gift'),
          closeBtns = document.querySelectorAll('.popup-close');

    // флаг для отслеживания нажатий
    let clickFlag = false;
    
    //вешаем обработчик нажатия на кнопки заказа
    for (let i = 0; i < designButtons.length; i++) {
        designButtons[i].addEventListener('click', function(e) {
            clickFlag = true;
            showModal(designPopup);
        });
    }

    //вешаем обработчик нажатия на кнопки консультации
    for (let i = 0; i < consultationButtons.length; i++) {
        consultationButtons[i].addEventListener('click', function(e) {
            clickFlag = true;
            showModal(consultationPopup);
        });
    }

    //обрабатываем скрол вниз
    window.addEventListener('scroll', function(){
        let scrollHeight = window.pageYOffset,
            documentHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            ),
            windowHeight = document.documentElement.clientHeight;
        
            if(scrollHeight + windowHeight == documentHeight && clickFlag == false) {
                showModal(giftPopup);
            }
    });

    giftPopup.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.popup-close') || e.target.matches('.popup-gift')){
            closeModal(giftPopup);
        }
    });

    designPopup.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.popup-close') || e.target.matches('.popup-design')){
            closeModal(designPopup);
        }
    });

    consultationPopup.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.popup-close') || e.target.matches('.popup-consultation')){
            closeModal(consultationPopup);
        }
    });

    function showModal(modal) {
        //функция открывает необходимое модальное окно
        document.body.style.overflow = 'hidden';
        modal.style.display = "block";
    }

    function closeModal(modal) {
        document.body.style.overflow = '';
        modal.style.display = "none";
    }
}
module.exports = popup;