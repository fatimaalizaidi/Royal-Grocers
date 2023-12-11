$(document).ready(function () {
    $('#open-top-nav').click(function () {
        $('#top-nav').addClass('active');
    });
    $('#close-top-nav').click(function () {
        $('#top-nav').removeClass('active');
    });

    $('#open-search').click(function () {
        $('#search-top').addClass('search-top');
    });

    $('#close-search').click(function () {
        $('#search-top').removeClass('search-top');
    });

    $('#drop-down-button').click(function () {
        $('#drop-down-categ').slideToggle();
    });

    $(document).on('click', function (event) {
        if (!$(event.target).is('#drop-down-button') && !$(event.target).closest('.first').length) {
            $('#drop-down-categ').slideUp();
        }
    });


    $('#drop-down-btn-lang').click(function () {
        $('#drop-down-lang').slideToggle();
    });

    $(document).on('click', function (event) {
        if (!$(event.target).is('#drop-down-btn-lang') && !$(event.target).closest('.english-li').length) {
            $('#drop-down-lang').slideUp();
        }
    });


    $('#drop-down-btn-currency').click(function () {
        $('#drop-down-currency').slideToggle();
    });

    $(document).on('click', function (event) {
        if (!$(event.target).is('#drop-down-btn-currency') && !$(event.target).closest('.currency-li').length) {
            $('#drop-down-currency').slideUp();
        }
    });


    $('.slider').slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.slide-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1600,
        fade: true,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    AOS.init({

        offset: 200, // Change the offset to trigger animations 200px before an element enters the viewport
        duration: 1000,
    });

});