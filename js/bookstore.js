$(document).ready(function(){
    //To show categorised Books content
    $(window).on('scroll',function() {
        if ($(this).scrollTop() >= (($(document).height() - $(window).height()) - $('footer').innerHeight()) + 100 ) {
            $('.sidebar').addClass('hide');
            $('.sidebar').removeClass('show');
          }
        else {
            $('.sidebar').addClass('show');
            $('.sidebar').removeClass('hide');
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
});