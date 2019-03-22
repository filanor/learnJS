//не позволяем скриптам выполняться до загрузки страницы
$(document).ready(function() {
    $('.main_nav li:eq(1) a').on('click', function() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(500);
    });

    $('.main_btna').on('click', function() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(500);
    });

    $('.main_btn').on('click', function() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(500);
    });

    $('.modal .close').on('click', function() {
        $('.overlay').fadeOut(500);
        $('.modal').slideUp(500);
    })
})