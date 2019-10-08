// CLICK EVENTS FOR CHANGING BACKGROUND IMAGES

$('#about').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("about");
});

$('#work').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("work");
});

$('#contact').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("contact");
});