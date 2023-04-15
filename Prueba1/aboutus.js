
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


document.getElementById("todo").style.height = "1300px";

}

function mostrarres(){

  var x = document.getElementById("equino");
  var y = document.getElementById("res")
  var z = document.getElementById("cerdo")
  
  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "none";
  
  
  document.getElementById("todo").style.height = "1300px";
  
  }

  function mostrarcerdo(){

    var x = document.getElementById("equino");
    var y = document.getElementById("res")
    var z = document.getElementById("cerdo")
    
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    
    
    document.getElementById("todo").style.height = "1300px";
    
    }