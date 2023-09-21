$(document).ready(function(){

    let ancho = $(window).width();

    $("#btn").click(function(){

        $("#flo").fadeIn();
        $('#audioElement')[0].play();

        $(".flor-l").css("left",ancho+"px")
        $(".flor-r").css("right",ancho+"px")
        
        setInterval(() => {

            let florLeft = parseInt($("#flor-1").css("left"), 10);

            if(florLeft >= ancho){

                $(".flor-l").css("left","-300px")
                $(".flor-r").css("right","-300px")

            }

            if(florLeft <= -300){

                $(".flor-l").css("left",ancho+"px")
                $(".flor-r").css("right",ancho+"px")

            }


        }, 1000);

    });

});