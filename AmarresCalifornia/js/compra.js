$(document).ready(function(){

    let servicio = localStorage.getItem("servicio");
    let vouch = localStorage.getItem("voucher");
    
    $("#title-service").text(servicio)
    $("#voucher").text(vouch)

    
    $("#send-whatsi").click(function(){

        let mensaje_t = encodeURI("Hola hice una compra de: "+servicio+"\nMi voucher es: "+vouch);

        window.location = "https://api.whatsapp.com/send?phone=14049395045&text="+mensaje_t;

    });


});