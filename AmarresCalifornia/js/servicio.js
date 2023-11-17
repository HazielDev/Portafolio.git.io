let title = "";

$(document).ready(function(){

    $(".servicio-btn").click(function(){

        title = $(this).siblings('.servicio-img').find('.servicio-title').text();
        $("#service-paypal").text(title);

    });

    $(".servicio-btn").click(function(){

        $("#cont-menu-lateral").fadeToggle();

    });

    $(".tachita").click(function(){

        $("#cont-menu-lateral").fadeToggle();        

    });
    
});

function whats(){

    window.location = "https://api.whatsapp.com/send?phone=528135949275";

  }

function face(){

window.location = "https://www.facebook.com/people/Coach-Ancestral/61552755002230/?mibextid=LQQJ4d";

}

