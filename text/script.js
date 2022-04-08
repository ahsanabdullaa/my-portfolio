//nav bar animation over scroll
$(window).on("scroll",function(){
    if($(window).scrollTop() >= 300){
        $(".header").addClass("fixed");
    }
    else
        $(".header").removeClass("fixed");
})

//smooth scroll by clicking on navbar items
var $root = $('html, body');
$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});
