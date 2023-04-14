$(document).ready(function(){
    $(".more__items").slick({
        prevArrow:".more__button-prev",
        nextArrow:".more__button-next",
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        responsive: [
            {
              breakpoint: 1281,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },

            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },

            {
              breakpoint: 706,
              settings: {
                prevArrow: false,
                nextArrow: false,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]

    })
});