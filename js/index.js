$(document).ready(function() {
    $('#linkedinLogo, #goodreadslogo, #emailmelogo').hide();

    $('#linkedinLogo').fadeIn(1000, function() {
        $('#goodreadslogo').fadeIn(1000, function() {
            $('#emailmelogo').fadeIn(1000);
        });
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navigation').addClass('fixed-top');
        } else {
            $('.navigation').removeClass('fixed-top');
        }
    });
});

