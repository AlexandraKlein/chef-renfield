$(function() {


    //parallax
    var h = $(window).height(),
        $section = $('section'),
        isMobile = $(window).width() < 768;

    function Createparallaxbg(parallaxImg) {

        var bgImg = $(parallaxImg).attr('data-image');
        $(parallaxImg).attr('style', 'background-image:url(' + bgImg + ');');
    }

    function parallaxbg(position, parallaxImg) {

        var positionTop = $(window).scrollTop();
        var imgPosition = $(position).position().top;

        if (positionTop > (imgPosition - h)) {
            $(parallaxImg).css({
                'background-position': 'center ' + ((positionTop - imgPosition) / 2 - (h/5)) + 'px'
            });
        }
    }

    function mobilebg() {
        $section.each(function(idx) {
            if ($(this).hasClass('parallax' + (idx + 1))) {
                var bgIdx = $('.parallax' + (idx + 1)),
                    bgImg = bgIdx.attr('data-image');
                bgIdx.attr('style', 'background-image:url(' + bgImg + ');');
            }
        });
    }

    function initScroll() {

        $section.each(function(idx) {
            if ($(this).hasClass('parallax' + (idx + 1))) {
                parallaxbg('.parallax' + (idx + 1), '.parallax' + (idx + 1));
            }
        });
    }

    function init() {

        $section.each(function(idx) {
            if ($(this).hasClass('parallax' + (idx + 1))) {
                Createparallaxbg('.parallax' + (idx + 1));
            }
        });
    }

    function headerBar() {

        var $header = $('header');
        if ($(window).scrollTop() > 100) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    }

    if (!isMobile) {
        init();
        initScroll();

        $(window).bind('scroll', function () {
            initScroll();
            headerBar();
        });
    } else {
        mobilebg();
        $(window).bind('scroll', function () {
            headerBar();
        });
    }

});