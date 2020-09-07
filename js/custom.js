$(document).ready(function(){
    var nav = $('header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 118) {
            nav.addClass("pw-fixed");
        } else {
            nav.removeClass("pw-fixed");
        }
    });
});