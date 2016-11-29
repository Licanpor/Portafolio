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
	
});