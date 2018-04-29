// $(document).ready(function(){
//     ancla = $('a[href^="#"]');
//     ancla.on('click',function(e) {
// 	e.preventDefault();
// 	var href = $(this).attr('href');
// 	$('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow', 'easeInOutExpo');
// 	});
// });

$(document).ready(function () {

	ancla = $('a[href*="#"]:not([href="#"])');

	ancla.on('click', function () {

		e.preventDefault();
		var linkAncla = $(this).attr('href');
		var cords = linkAncla.offset();

		$('html, body').animate({
			scrollTop: cords.top,
			scrollLeft: cords.left
		});
	});

});
