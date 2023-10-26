$(document).ready(function(){

    $(".servicio-btn").click(function(){

        $("#cont-menu-lateral").fadeToggle();

    });

    $(".tachita").click(function(){

        $("#cont-menu-lateral").fadeToggle();        

    });
    
});

function whats(){

    window.location = "https://api.whatsapp.com/send?phone=14049395045";

  }
