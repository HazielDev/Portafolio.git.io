
  function whats(){

    window.location = "https://api.whatsapp.com/send?phone=528135949275";

  }

  $(document).ready(function(){

    $(".whatsi").click(function(){

        $("#cont-menu-lateral").fadeToggle();

    });

    $(".tachita").click(function(){

        $("#cont-menu-lateral").fadeToggle();        

    });

    $("#send-whatsi").click(function(){

        let nombre = $("#input-name").val()
        let mensaje = $("#input-mensaje").val()

        let mensaje_t = encodeURI("Hola mi nombre es: "+nombre+"\n\n"+mensaje)
        
        window.location = "https://api.whatsapp.com/send?phone=528135949275&text="+mensaje_t;

    });

  });