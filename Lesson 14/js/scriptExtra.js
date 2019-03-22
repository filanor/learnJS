$(document).ready(function() {
	$('.main_nav li:eq(1) a').on('click', function() {
		$('.overlay').fadeIn(500);
		$('.modal').animate({
			opacity: 'show',
			height: 'show'
			}, 
		500);
	});

	$('.main_btna').on('click', function() {
        $('.overlay').fadeIn(500);
        $('.modal').animate({
			opacity: 'show',
			height: 'show'
			}, 
		500);
    });

    $('.main_btn').on('click', function() {
        $('.overlay').fadeIn(500);
       	$('.modal').animate({
			opacity: 'show',
			height: 'show'
			}, 
		500);
    });

    $('.modal .close').on('click', function() {
        $('.overlay').fadeOut(500);
       	$('.modal').animate({
			opacity: 'hide',
			height: 'hide'
			}, 
		500);
    })

    $('.contactform_select').submit(function(event) {
    	event.preventDefault();
    	let data = $('.contactform_select').serialize();
    	alert(data);
    	console.log(data);
     	$.ajax({
			 type: 'POST',
			 url: './server.php',
			 data: data
     	});
    });
});