
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


    function verificarElementoEnCampoDeVision() {
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
    
      // Iterar sobre todos los elementos con la clase "anim"
      $(".anim").each(function() {
        var elementoTop = $(this).offset().top;
        
        if (elementoTop < (scrollTop + windowHeight)) {
          $(this).addClass("animate__animated animate__fadeInRight");
        }
      });
    }

    $(window).scroll(function() {

      verificarElementoEnCampoDeVision();

    });

  });