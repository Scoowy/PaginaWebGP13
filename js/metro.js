// $(document).ready(function () {
//     ancla = $('.ancla');
//     hrefA = '#1';

//     ancho = $(window).width();
//     alto = $(window).height();

//     console.log(ancho, alto);

//     ancla.on('click', function (e) {

//         e.preventDefault();
//         var href = $(this).attr('href');
//         var offset = $(href).offset().left;
//         console.log(href, offset);
//         if (href != hrefA) {
//             $('html, body').stop(true, true).animate({
//                 scrollLeft: offset
//             }, 800, 'easeInOutExpo');

//             $('.ancla.active').removeClass('active');
//             $($(this)).addClass('active');

//             hrefA = href;
//         }

//     });

//     $(window).resize(function(){
//         ancho = $(window).width();
//         alto = $(window).height();

//         console.log(ancho, alto);
//     });

// });

$(document).ready(function () {

    function showSlide(n) {
        // n es la posicion relatva de la diapo
        $body.unbind("mousewheel");

        // Augmenta el numero de diapos por n manteniendolo dentro de los limites
        currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);

        var displacment = window.innerWidth * currSlide;
        // Mueve la diapo a la posicion actual
        $slides.css('transform', 'translateX(-' + displacment + 'px)');
        // Un delay para volver a clickear
        setTimeout(bind, 700);

        // Cambia la clase activa
        $('nav a.active').removeClass('active');
        $($('a')[currSlide]).addClass('active');

    }

    function bind() {
        $body.bind('false', mouseEvent);
     }

    $('nav a, .main-btn a').click(function (e) {
        // Cuando clikea en el enlace, encuantra la diapo a la que dirige
        var newslide = parseInt($(this).attr('href')[1]);
        // Retorna la posicion de la diapo actual
        var diff = newslide - currSlide - 1;
        showSlide(diff); // Mostrar la diapo
        e.preventDefault();
    });

    $(window).resize(function () {
        // Mantener la ventana a la izquierda caundo se redimensiona
        var displacment = window.innerWidth * currSlide;
        $slides.css('transform', 'translateX(-' + displacment + 'px)');
    });

    // Cache
    var $body = $('body');
    var currSlide = 0;
    var $slides = $('.capas');
    var $slide = $('.capa');

    // Obtner el primer link como calse activa
    $($('nav a')[0]).addClass('active');

    // agregar evento de escucha al bosdy
    $body.bind('false', mouseEvent);     

});