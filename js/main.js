$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/back.svg"></button>',
        prevArrow:'<button class="slick-arrow slick-prev"><img src="images/forward.svg"></button>',

        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            },

            {
                breakpoint: 320,
                settings: {
                    arrows:false
                }
            }

        ]
    });
});
