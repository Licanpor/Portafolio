$(document).ready(function(){
	var isShowing = false;

	$('.menu_bar').click(function(){
		if (isShowing) {
			$('nav').hide(300);
		} else {
			$('nav').show(300);
		}
		isShowing = !isShowing;	
	});

	$('#mail').hide();
	$('#phone').hide();	
	$('#gh').hide();	
	
	$('.icon-envelop').mouseenter(function(){
		$('#mail').show(200);
	});
	$('.icon-envelop').mouseout(function(){
		$('#mail').hide();
	});
	$('.icon-phone').mouseenter(function(){
		$('#phone').show(200);
	});
	$('.icon-phone').mouseout(function(){
		$('#phone').hide();
	});
	$('.icon-github').mouseenter(function(){
		$('#gh').show(200);
	});
	$('.icon-github').mouseout(function(){
		$('#gh').hide();
	});

	
	var posicion = $("#skills").position().top;

	$(window).scroll(function(){

		if($(window).scrollTop() >= posicion ){

			$('.skillbar').each(function(){
						$(this).find('.skillbar-bar').animate({
							width:$(this).attr('data-percent')
						},2000);
					});

			}

	});

});