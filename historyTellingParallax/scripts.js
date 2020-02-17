$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollLeft();
		var posicion = (barra * 0.20);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});

	});

});