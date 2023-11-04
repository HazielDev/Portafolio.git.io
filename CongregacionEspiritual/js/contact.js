function whats(){

    window.location = "https://api.whatsapp.com/send?phone=528135949275";

  }

  function face(){

    window.location = "https://www.facebook.com/people/Coach-Ancestral/61552755002230/?mibextid=LQQJ4d";

  }

$(document).ready(function(){

  $("#send-whatsi").click(function(){

    let nombre = $("#input-name").val()
    
    let mensaje = $("#input-mensaje").val()

    let mensaje_t = encodeURI("Hola mi nombre es: "+nombre+"\n\n"+mensaje)

    window.location = "https://api.whatsapp.com/send?phone=528135949275&text="+mensaje_t;

});

});

