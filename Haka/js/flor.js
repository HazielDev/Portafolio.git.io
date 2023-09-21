$(document).ready(function(){

    let paso = 0
    let lock = false

    $("#btn").click(function(){

        if (lock == false && paso != 4){

            paso++
            lock = true

        }
    
        switch (paso) {
            
            case 1:
                $("#texto").text("Quiero darte algo especial jijij")
            break;
            
            case 2:
                $("#texto").text("Pero primero, debo saber si realmente eres tu")
            break;

            case 3:
                $("#texto").text("Completa la frase: Tu eres una...")
                $("#imp").css("display","block")
            break

            case 4:

                if($("#imp").val() === "chiqui" || $("#imp").val() === "Chiqui"){
                    $("#imp").css("display","none")
                    $("#texto").css("display","none")
                    $("#btn").text("Ver tu recompensa")
                    $("#btn").css("margin-top","20px")
                    paso = 5
                }else{
                    alert("INCORRECTO")
                }
            break;

            case 6:

                window.location = "flores-2.html"

            break;

            default:
                break;
        }

        setTimeout(function(){
            
            lock = false

        }, 1500);

    });

});