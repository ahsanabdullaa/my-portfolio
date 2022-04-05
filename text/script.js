//nav bar animation over scroll
$(window).on("scroll",function(){
    if($(window).scrollTop() >= 300){
        $(".header").addClass("fixed");
    }
    else
        $(".header").removeClass("fixed");
})
