$(function () {
    $('.ancla').bind('click', function (event) {
        var $ancla = $(this);
        $('html, body').stop().animate({
            scrollLeft: $($ancla.attr('href')).offset().left
        }, 1000);
        event.preventDefault();

        $('.ancla.active').removeClass('active');
        $($(this)).addClass('active');
    });

    // $(window).on('resize', function () {
    //     var $ancla = $('.ancla.active');
    //     $('html, body').stop().animate({
    //         scrollLeft: $($ancla.attr('href')).offset().left
    //     }, 1000);
    //     event.preventDefault();
    // });

});