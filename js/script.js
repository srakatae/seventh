$(document).ready(function () {
    $('.header__burger, .header__list-link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        waitForAnimate: false,

        responsive: [
            {
                breakpoint: 1538,
                settings: {
                    arrows: false,
                    draggable: true,
                    dots: true,
                }
            }
        ]
    });
}); 