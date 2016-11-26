$(function() {

    var w = $(window).width(),
        h = $(window).height(),
        $section = $("section");

    function Createparallaxbg(parallaxImage) {
        var ParSecImg = $(parallaxImage).attr("data-image");
        $(parallaxImage).attr("style", "background-image:url(" + ParSecImg + ");");
    }

    function parallaxbg(position, parallaxImage) {
        var currentTop = $(window).scrollTop();
        var ParSecPT = $(position).position().top;
        if (currentTop > (ParSecPT - h)) {

            $(parallaxImage).css({
                "background-position": "center " + ((currentTop - ParSecPT) / 2 - (h/5)) + "px"
            });

        }
    }

    function initScroll() {
        if($section.hasClass("parallax1")){
            parallaxbg(".parallax1",".parallax1");
        }
        if($section.hasClass("parallax2")){
            parallaxbg(".parallax2",".parallax2");
        }
        if($section.hasClass("parallax3")){
            parallaxbg(".parallax3",".parallax3");
        }
        if($section.hasClass("parallax4")){
            parallaxbg(".parallax4",".parallax4");
        }
        if($section.hasClass("parallax5")){
            parallaxbg(".parallax5",".parallax5");
        }
    }

    function init() {
        if ($section.hasClass("parallax1")) {
            Createparallaxbg(".parallax1");
        }
        if ($section.hasClass("parallax2")) {
            Createparallaxbg(".parallax2");
        }
        if ($section.hasClass("parallax3")) {
            Createparallaxbg(".parallax3");
        }
        if ($section.hasClass("parallax4")) {
            Createparallaxbg(".parallax4");
        }
        if ($section.hasClass("parallax5")) {
            Createparallaxbg(".parallax5");
        }
    }



    init();

    $(window).bind('scroll', function () {
        initScroll();
    });


});