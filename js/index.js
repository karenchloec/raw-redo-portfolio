$(document).ready(function() {
    $('#linkedinLogo, #goodreadslogo, #emailmelogo').hide();

    $('#linkedinLogo').fadeIn(1000, function() {
        $('#goodreadslogo').fadeIn(1000, function() {
            $('#emailmelogo').fadeIn(1000);
        });
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navigation').addClass('fixed-top');
        } else {
            $('.navigation').removeClass('fixed-top');
        }
    });

    $('.quote').animate({
        'font-size': '50px'
    }, 1000);
});
