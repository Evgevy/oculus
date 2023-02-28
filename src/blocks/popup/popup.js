$(document).ready(function (){
    $(".popup__close").click(function(){
        $(".popup").toggleClass("popup--hide")
    })
        
    $(".promo__btn").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".popup__background").click(function(){
        $(".popup").addClass("popup--hide")
    })
})