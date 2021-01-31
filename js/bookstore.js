$(document).ready(function(){

    //To show categorised Books content
    $(window).on('scroll',function() {
        if ($(this).scrollTop() >= (($(document).height() - $(window).height()) - $('footer').innerHeight()) + 100 ) {
            $('.sidebar').addClass('hideCategory');
            $('.sidebar').removeClass('showCategory');
          }
        else {
            $('.sidebar').addClass('showCategory');
            $('.sidebar').removeClass('hideCategory');
        }
     });

    var prevFilter;
    $('.filter').addClass('active');
   
    $('.nav-pills a').on("click",function() {

        if($(this).hasClass('selectAll')) {
            $('.filter').addClass('active');
            prevFilter="all";
            $('.nav-pills a').removeClass('active');        // removes all active category
        }
        else {
            filterCategory($(this).attr('check'));
        }
        $(this).addClass('active');                         // tells the active category
    });

    function filterCategory(category) {
        if(prevFilter!=category){
            $('.filter').removeClass('active');
            $('.filter').filter('[check="' + category + '"]' ).addClass('active');
            prevFilter=category;
            $('.nav-pills a').removeClass('active');        // removes all active category
        }
    }

    $(".navbar li :not(.active)").hover(function(){
        $("#activePage").removeClass('active');
    },function(){
        $("#activePage").addClass('active');
    });

    //To collapse menu once after the page loads
    if($(window).width() <= 768) {
        $('.categoryMenu').addClass('collapse');
    }

    $('.buttonToggle').on('click',function(){
        $('.buttonToggle i').toggleClass('fa-chevron-down');
    });
});