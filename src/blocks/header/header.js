$(document).ready(function (){
    $(".header__burger").click(function(){
        //$(".header__logo").toggleClass("header__logo--hide")
        $(".header__menu").toggleClass("header__menu--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})