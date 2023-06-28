$(document).ready(function() {

    $("#hamburger").click(function(){
        
        $("#nav-display").addClass("animate__animated");
        $("#nav-display").addClass("animate__fadeInLeft");
        $("#cont-nav-display").fadeToggle();
        
    });

    $("#nav-tachita").click(function(){
        
        $("#nav-display").removeClass("animate__animated");
        $("#nav-display").removeClass("animate__fadeInLeft");
        $("#cont-nav-display").fadeToggle();
        
    });

});