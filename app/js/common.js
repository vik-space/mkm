$(function() {

    $('.b-slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        navText: [,]
    });

    $(".popup").magnificPopup();

    $('.counter-up').counterUp({time: 2000,});

    $("#phone").inputmask("+7 (999) 99-99-999");


    $('.advantages-item').click(function () {
        var head_list = $(this).children(".advantages-item__description");
        $(".advantages-item__description").slideUp('normal');
        if ($(head_list).css("display") == "block") {
            $(head_list).slideUp('normal');
        } else {
            $(head_list).slideDown('normal');
        }
    });

    $('.vacancies-item__arr').click(function () {
        var head_list = $(this).parent().children(".vacancies-item__hidden");
        $(".vacancies-item__hidden").slideUp('normal');
        if ($(head_list).css("display") == "block") {
            $(head_list).slideUp('normal');
        } else {
            $(head_list).slideDown('normal');
        }
    });
});
