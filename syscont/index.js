
// let boton_ver = document.getElementById('boton-ver');

// // Calcular la posición izquierda en función del ancho total de la pantalla
// let anchoPantalla = window.innerWidth;
// let posicionIzquierda = (anchoPantalla / 2) - 100; // Restar 100 píxeles para desplazar hacia la izquierda

// // Establecer el nuevo valor de left en el elemento
// boton_ver.style.left = `${posicionIzquierda}px`;

// console.log(boton_ver.style.left);

let turn = false;
let derecha = false;

function correo_acerca(){

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let mensaje = document.getElementById("mensaje").value;

var body = "Mi nombre es: " + nombre + "\n";
body += "\n";
body += "Mi correo es: " + correo + "\n";
body += "\n";
body += mensaje;
body += "\n";

var mailtoUrl = "mailto:syscontrolmx.com?subject=Hola estoy interesado en un producto Syscontrol&body=" + encodeURIComponent(body);

window.open(mailtoUrl);

}

function correo_info(){

window.location.href = 'mailto:syscontrolmx.com?subject=Hola estoy interesado en un producto Syscontrol&body=Mi nombre es:';   

}

function Correu(){

window.location.href = 'mailto:hazieldev@gmail.com?subject=Hola estoy interesado en una pagina web&body=Mi nombre es:';

}

setInterval(function() {
    // Código que deseas ejecutar cada segundo
    let laser = document.getElementById("laser");
    let laser_mobile = document.getElementById("laser-mobile");

    turn = !turn;

    if(turn == false){

        laser.style.display = "none";
        laser_mobile.style.display = "none";

    }else{

        laser.style.display = "block";
        laser_mobile.style.display = "block";

    }

    // if (derecha == true){

    //     pos++;
    //     if (pos >= 7){derecha = false;}

    // }else{

    //     pos--;
    //     if (pos <= 1){derecha = true;}

    // }
    
    // document.documentElement.style.setProperty("--position", pos);

  }, 1000);
  

  function mover(pos){

     document.documentElement.style.setProperty("--position", pos);

  }

  let pos = document.documentElement.style.getPropertyValue("--position");

  document.documentElement.style.setProperty("--position", 1);


  function mover_isq(){
    
    let pos = document.documentElement.style.getPropertyValue("--position");
            
    // let estiloRoot = window.getComputedStyle(document.documentElement);
    // let pos = estiloRoot.getPropertyValue("--position");

    if(pos >= 2){

    document.documentElement.style.setProperty("--position", (pos = pos -1));
    
    }

  }

  function mover_der(){

    let pos = document.documentElement.style.getPropertyValue("--position");

    let num = parseInt(pos);
    
    if (num <= 6){

    num = num + 1;

    document.documentElement.style.setProperty("--position", num);
    
    }

  }