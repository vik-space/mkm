$(function () {

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




    if (document.documentElement.clientWidth > 992) {

        // вычисление и задание высоты контейнера, в котором находится зафиксированный блок
        setEqualHeight($(".b-page-contact>.b-page-contact-column"));

        function getTopOffset(e) {
            var y = 0;
            do {
                y += e.offsetTop;
            } while (e = e.offsetParent);
            return y;
        }

        var block = document.getElementsByClassName('fix_block');

        /* fix_block - значение атрибута id блока */
        if (null != block) {
            var topPos = getTopOffset(block);
            console.log(topPos);

            window.onscroll = function () {
                var scrollHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight),

                    // определяем высоту блока в котором находится fix_block
                    blockHeight = block.offsetHeight,

                    // вычисляем высоту контейнера с id = stop, места фиксации блока
                    footerHeight = document.getElementById('stop').offsetHeight,

                    // считаем позицию, до которой блок будет зафиксирован
                    stopPos = scrollHeight - blockHeight - footerHeight - 90 - 110;

                var newcss = (topPos < window.pageYOffset) ?
                    'top:0px; position: fixed;  padding-right: 15px' : 'position:relative;';

                if (window.pageYOffset > stopPos)
                    newcss = 'position:absolute; bottom: 320px;  padding-right: 15px';

                block.setAttribute('style', newcss);
            }
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
