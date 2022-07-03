$(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    })

    $('.header__burger-btn').on('click', () => {
        $('.menu').addClass('menu--active')
    })
    $('.menu__close-btn').on('click', () => {
        $('.menu').removeClass('menu--active')
    })
})