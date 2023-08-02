
$(document).ready(function(){

    $("#burger").click(function(){
        
        $("#menu-burger").addClass("animate__animated");
        $("#menu-burger").addClass("animate__fadeInLeft");
        $("#cont-menu-burger").fadeToggle();
        
    });

    $("#tachita").click(function(){
        
        $("#menu-burger").removeClass("animate__animated");
        $("#menu-burger").removeClass("animate__fadeInLeft");
        $("#cont-menu-burger").fadeToggle();
        
    });

});