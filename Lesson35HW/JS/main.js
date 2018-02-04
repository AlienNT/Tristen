;(function ($) {
    $(function () {
        // $(!!'header').on('click', function () {
        //     $('.menu')
        //         .closest('.menu')
        //         .children('ul')
        //         .slideToggle(300);
        // });
        $('.hamburger').on('click', function () {
            // $(this)
            //     .toggleClass('hamburger-hover');
            $('.menu')
                .closest('.menu')
                .children('ul')
                .slideToggle(300);
            $('header')
                .toggleClass('hover-bg');
            $('.hamburger-inner')
                .toggleClass('hamburger-hover')


        });
        $(window).on('resize', function () {
            var width = $('body').innerWidth();
            if (width > 800) {
                $('.links').css({
                    display: 'block'
                });
                $('header')
                    .removeClass('hover-bg');
                $('.hamburger-inner')
                    .removeClass('hamburger-hover');
            } else {
                $('header')
                    .removeClass('hover-bg');
                $('.hamburger-inner')
                    .removeClass('hamburger-hover');
                $('.links').css({
                    display: 'none'
                });
            }
        });
        $('.links li a').on('click', function () {
            $('.menu')
                .closest('.menu')
                .children('ul')
                .slideToggle(400);
            $('header').removeClass('hover-bg');
        });
        // $('.box1').on('hover', function () {
        //     $('.bh1')
        //         .closest('.bh1')
        //         .slideToggle(400);
        //
        //
        // });
        $('.box1').on('click', function () {
            $('.bh1')
                .slideToggle(400);


        });
        $('.box2').on('click', function () {
            $('.bh2')
                .slideToggle(400);


        });
        $('.box3').on('click', function () {
            $('.bh3')
                .slideToggle(400);


        });
    });
})(jQuery);
