$(function () {

    $('.b-slider_indexHeader').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        navText: [,]
    });

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

    $("#phone").inputmask("+7 (999) 999-99-99");

    $(".popup_phone_input").inputmask("+7 (999) 999-99-99");


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


    $(".date_map_popup").click(function () {
        var PopupCaptionMap = $(this).attr("date-title");
        var LinkForMap = $(this).attr("data-item");
        var PopupPhoneMap = $(this).attr("date-phone");

        $("#b-contact-map .popup__mapTitle").text(PopupCaptionMap);
        $("#b-contact-map .popup__phone_map").text(PopupPhoneMap);
        $("#b-contact-map .b-popup-white_map iframe").attr("src", LinkForMap);
    });

    $(".js-window-popup").click(function () {
        var WindowName = $(this).parent().attr("data-windowName");
        var WindowPrice = $(this).parent().attr("data-windowPrice");
        var SizeValueOrderWindow = $(this).parent().attr("data-windowSize");
        var WindowImg = $(this).parent().attr("data-windowImg");
        console.log(WindowImg);

        $("#b-order-window .window-name").text(WindowName);
        $("#b-order-window .window__price").text(WindowPrice);
        $("#b-order-window .size__value_OrderWindow").text(SizeValueOrderWindow);
        $("#b-order-window .white_OrderWindow img").attr("src", WindowImg);
    });


    scroollyFeedBackForm();
    if ($(window).width() > 1200) {
        $(".b-page-contact-column-feed-back").height($(".b-page-contact-column").height() + 300);
    }else{
        $(".b-page-contact-column-feed-back").height("auto");
    }

    $(window).resize(function () {
        if ($(window).width() > 1200) {
            $(".b-page-contact-column-feed-back").height($(".b-page-contact-column").height() + 300);
        }else{
            $(".b-page-contact-column-feed-back").height("auto");
        }
        scroollyFeedBackForm();
    });


    // Прилипание блока Форма обратной связи

    function scroollyFeedBackForm() {

        if ($(window).width() > 1200) {
            // $("#FeedBackForm").removeClass("removeFix");
            // $("#stickem-container").removeClass("removeFixContainer");
            $('#FeedBackForm').scroolly([
                {
                    to: 'con-top',
                    css: {
                        top: '0',
                        bottom: '',
                        position: 'absolute'
                    }
                },
                {
                    from: 'con-top',
                    to: 'con-bottom - 100el = vp-top',
                    css: {
                        top: '20px',
                        bottom: '',
                        position: 'fixed'

                    }
                },
                {
                    from: 'con-bottom - 100el = vp-top',
                    css: {
                        top: '',
                        bottom: '0',
                        position: 'absolute'
                    }
                }
            ], $('#stickem-container'));
        }else{
            $("#FeedBackForm").addClass("removeFix");
            $("#stickem-container").addClass("removeFixContainer");

        }

    }



//Функция вычисления и присваивания заданным колонкам одинаковой высоты
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function () {
                currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }
});
