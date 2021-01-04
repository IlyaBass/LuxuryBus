$(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    // /E-mail Ajax Send

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================

    // burger
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('active');
    });
    // /burger

    $('.flights__slider-items').slick({
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    let currentSlide = $('.flights__slider-items').slick('slickCurrentSlide') + 1;
    $('.flights__slider-count').text(currentSlide + '/' + $(".flights__slider-items").slick("getSlick").slideCount);
    $('.flights__slider-items').on('afterChange', function () {
        let currentSlide = $('.flights__slider-items').slick('slickCurrentSlide') + 1;
        $('.flights__slider-count').text(currentSlide + '/' + $(".flights__slider-items").slick("getSlick").slideCount);
    });

});