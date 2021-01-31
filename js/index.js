$(document).ready(function() {
    $(".navbar li :not(.active)").hover(function(){
        $(".navbar li .active").removeClass('active');
    },function() {
        $("#activePage").addClass('active');
    });
});