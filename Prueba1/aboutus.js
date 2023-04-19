
document.addEventListener("DOMContentLoaded", function(){
    var parallax = document.querySelector(".parallax");
    var overlay = document.querySelector(".parallax-overlay");
    window.addEventListener("scroll", function(){
      var offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.10 + "px"; /* ajusta la velocidad de desplazamiento */
      overlay.style.opacity = 1 - (offset / 400); /* ajusta la opacidad a medida que se desplaza */
    });
  });

function mostrarequino(){

var x = document.getElementById("equino");
var y = document.getElementById("res")
var z = document.getElementById("cerdo")

x.style.display = "block";
y.style.display = "none";
z.style.display = "none";


if (window.innerWidth < 800) {

  document.getElementById("todo").style.height = "2000px";
  document.getElementById("info").style.height = "750px";
  document.getElementById("cont_botones").style.height = "200px";
  x.style.height = "800px";

}else{

document.getElementById("todo").style.height = "1300px";

}
}

function mostrarres(){

  var x = document.getElementById("equino");
  var y = document.getElementById("res")
  var z = document.getElementById("cerdo")
  
  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "none";
  
  if (window.innerWidth < 800) {

    document.getElementById("todo").style.height = "2000px";
    document.getElementById("info").style.height = "750px";
    document.getElementById("cont_botones").style.height = "200px";
    y.style.height = "870px";

  }else{

  document.getElementById("todo").style.height = "1300px";
  
  }
  
  }

  function mostrarcerdo(){

    var x = document.getElementById("equino");
    var y = document.getElementById("res")
    var z = document.getElementById("cerdo")

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    
    if (window.innerWidth < 800) {

      document.getElementById("todo").style.height = "2000px";
      document.getElementById("info").style.height = "750px";
      document.getElementById("cont_botones").style.height = "200px";
      document.getElementById("cerdo").style.height = "800px";

    }else{

    document.getElementById("todo").style.height = "1300px";
    
    }

    }