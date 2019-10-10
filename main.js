// CLICK EVENTS FOR CHANGING BACKGROUND IMAGES
$('#about').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("about");

    $('.navigation-wrapper').attr('class', 'navigation-wrapper');
    $('.navigation-wrapper').addClass("about");
    pageVisible();
});
$('#work').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("work");

    $('.navigation-wrapper').attr('class', 'navigation-wrapper');
    $('.navigation-wrapper').addClass("work");
    pageVisible();
});
$('#contact').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("contact");

    $('.navigation-wrapper').attr('class', 'navigation-wrapper');
    $('.navigation-wrapper').addClass("contact");
    pageVisible();
});

function pageVisible  () {
    if ($('.container').hasClass("about")) {
        $('#about-page').addClass("visible");

        $('.svg-yellow-squiggle').addClass("visible");
        $('.svg-half-full-circle').addClass("visible");

        $('#work-page').removeClass("visible").addClass("hidden");
        $('#contact-page').removeClass("visible").addClass("hidden");
    }
    if ($('.container').hasClass("work")) {
        $('#work-page').addClass("visible");

        $('.svg-yellow-squiggle').removeClass("visible");
        $('.svg-half-full-circle').removeClass("visible");

        $('#about-page').removeClass("visible").addClass("hidden");
        $('#contact-page').removeClass("visible").addClass("hidden");
    }
    if ($('.container').hasClass("contact")) {
        $('#contact-page').addClass("visible");

        $('.svg-yellow-squiggle').removeClass("visible");
        $('.svg-half-full-circle').removeClass("visible");

        $('#about-page').removeClass("visible").addClass("hidden");
        $('#work-page').removeClass("visible").addClass("hidden");
    }
}