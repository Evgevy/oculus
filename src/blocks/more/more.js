$(document).ready(function(){
    $(".more__items").slick({
        prevArrow:".more__button-prev",
        nextArrow:".more__button-next",
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        //adaptiveHeight: true
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                
              }
            }
          ]

    })
})