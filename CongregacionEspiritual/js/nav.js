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

});


