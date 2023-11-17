$(document).ready(function () {
    var btn_HamburguesaUWU = $("#btn-menu");
    var nav = $("#nav");
    var alturaOriginal = 120;
    var alturaCambiada = 350;
    var items = $(".nav-item")

    var isAlturaOriginal = true;

    btn_HamburguesaUWU.click(function () {
        if (isAlturaOriginal) {
            $("#nav-items").fadeIn();
            $("#nav-items").css("display","flex")
            nav.animate({ height: alturaCambiada }, 350);
        } else {
            $("#nav-items").fadeOut();
            nav.animate({ height: alturaOriginal }, 350);
        }

        isAlturaOriginal = !isAlturaOriginal;
    });

    $("#logo").click(function(){

        window.location = "index.html"

    });

    $("#face").click(function(){

        window.location = "https://www.facebook.com/profile.php?id=100078438624668&mibextid=LQQJ4d";

    });

    $("#whats").click(function(){

        window.location = "https://api.whatsapp.com/send?phone=14049395045";

    });
    
    $(".whatso").click(function(){

        let mensaje = encodeURI("Hola quiero un consulta gratis, vengo de Congregación Espiritual")

        window.location = "https://api.whatsapp.com/send?phone=14049395045&text="+mensaje;

    });

    $(".whatsa").click(function(){

        
        let mensaje = encodeURI("Hello, I would like a free consultation. I come from Congregación Espiritual.")    

        window.location = "https://api.whatsapp.com/send?phone=14049395045&text="+mensaje;

    });

    

});

function face(){

    window.location = "https://www.facebook.com/profile.php?id=100078438624668&mibextid=LQQJ4d";

  }

