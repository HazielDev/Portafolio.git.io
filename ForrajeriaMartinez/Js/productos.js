
$(document).ready(function() {

    let div = $('#selectors');
    let isDragging = false;
    let touchOffset = { x: 0, y: 0 };
    var mouseOffset = { x: 0, y: 0 };
    let screenA = $(window).width();
    let tope = 0;
    let sumaa = (div.offset().left + div.width()) - screenA;

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if(isMobileDevice()){
      div.on('touchstart', function(event) {
        isDragging = true;
        var touch = event.originalEvent.touches[0];
        touchOffset.x = touch.clientX - div.offset().left;
        touchOffset.y = touch.clientY - div.offset().top;
      });
      
      // Event listener for touch move event
      $(document).on('touchmove', function(event) {
        if (isDragging) {
          var touch = event.originalEvent.touches[0];
          var x = touch.clientX - touchOffset.x;
          div.css('left', x + 'px');
          if(div.offset().left >= 0){div.css("left","0px")}
        }
      });
      
      //Event listener for touch end event
      $(document).on('touchend', function(event) {
        isDragging = false;
      });
      
      setInterval(function() {
        
        screenA = $(window).width();
        sumaa = (div.offset().left + div.width()) - screenA;
      
        if(sumaa <= 0){
            tope = div.offset().left;
            let toppe = tope + 5;
            div.css("left",toppe+"px")
            console.log("estamos en el tope")
            console.log(tope)
        }
      
      }, 10);
    }else{

    div.mousedown(function(event) {
        isDragging = true;
        mouseOffset.x = event.clientX - div.offset().left;
        mouseOffset.y = event.clientY - div.offset().top;
      });

      // Event listener for mouse move event
      $(document).mousemove(function(event) {
        
        if (isDragging) {
          var x = event.clientX - mouseOffset.x;
          div.css('left', x + 'px');
        }
        if(div.offset().left >= 0){div.css("left","0px")}
      });

      // Event listener for mouse up event
      $(document).mouseup(function(event) {
        isDragging = false;
      });

      setInterval(function() {
        
        screenA = $(window).width();
        sumaa = (div.offset().left + div.width()) - screenA;

        if(sumaa <= 0){

            tope = div.offset().left;
            let toppe = tope + 5;
            div.css("left",toppe+"px")
            console.log("estamos en el tope")
            console.log(tope)

        }

      }, 10);

    }
  
  let pos = 0;
  let prevo = 0;
  let pantalla = new Array(1)
  let lock = false;

  pantalla[0] = $("#cont-alimentos");
  pantalla[1] = $("#cont-sueros");
  pantalla[2] = $("#cont-sales");
  pantalla[3] = $("#cont-vacunas");
  pantalla[4] = $("#cont-jeringas");
  pantalla[5] = $("#cont-varios");
  pantalla[6] = $("#cont-herraduras");
  pantalla[7] = $("#cont-gallos");
  pantalla[8] = $("#cont-medic");
  pantalla[9] = $("#cont-despa");
  pantalla[10] = $("#cont-alim-cab");
  pantalla[11] = $("#cont-vitaminas");
  
  for (let i = 0; i <= 11; i++) {
    $(`#s-${i}`).click(function() {
        MoverPantalla(i);
    });
  }

$(".seccion").css("animation-duration","0.7s");

  function CalcularOreo(params) {
        
    if(pos > prevo){

        return true;

    }else{

        return false;

    }

}

  function MoverPantalla(move) {

      if(prevo === move){return 0;}
  
      if(lock === false){
  
      pos = move;
      
      oreo = CalcularOreo();
  
      let prev = prevo;
  
      console.log(pos)
  
      if (oreo === true){
      
      lock = true;
      pantalla[prev].removeClass("animate__animated");
      pantalla[prev].removeClass("animate__fadeOutLeft");
      pantalla[prev].removeClass("animate__fadeOutRight");
      pantalla[prev].removeClass("animate__fadeInLeft");
      pantalla[prev].removeClass("animate__fadeInRight");
      
      pantalla[prev].addClass("animate__animated");
      pantalla[prev].addClass("animate__fadeOutLeft");

      console.log("Primera parte")
         
      setTimeout(function() {
      
      pantalla[prev].css("display","none");
      pantalla[pos].removeClass("animate__animated");
      pantalla[pos].removeClass("animate__fadeOutLeft");
      pantalla[pos].removeClass("animate__fadeOutRight");
      pantalla[pos].removeClass("animate__fadeInLeft");
      pantalla[pos].removeClass("animate__fadeInRight");
      
      pantalla[pos].css("display","flex")
      pantalla[pos].addClass("animate__animated");
      pantalla[pos].addClass("animate__fadeInRight");
  
      console.log("Segunda parte")

      }, 550);
      
      }else{
  
          lock = true;
          pantalla[prev].removeClass("animate__animated");
          pantalla[prev].removeClass("animate__fadeOutLeft");
          pantalla[prev].removeClass("animate__fadeOutRight");
          pantalla[prev].removeClass("animate__fadeInLeft");
          pantalla[prev].removeClass("animate__fadeInRight");
          
          pantalla[prev].addClass("animate__animated");
          pantalla[prev].addClass("animate__fadeOutRight");
             
          setTimeout(function() {
          
          pantalla[prev].css("display","none");
          pantalla[pos].removeClass("animate__animated");
          pantalla[pos].removeClass("animate__fadeOutLeft");
          pantalla[pos].removeClass("animate__fadeOutRight");
          pantalla[pos].removeClass("animate__fadeInLeft");
          pantalla[pos].removeClass("animate__fadeInRight");
          
          pantalla[pos].css("display","flex");
          pantalla[pos].addClass("animate__animated");
          pantalla[pos].addClass("animate__fadeInLeft");
          
          console.log("Tercera parte")

          }, 550);
  
      }
  
      console.log("El move es: "+move+" el prevo es: "+prevo+" oreo: "+oreo)
      prevo = move;
      
      setTimeout(function() {lock = false; console.log("Desbloqueo")}, 800);
  
      }
  
  
  }

});