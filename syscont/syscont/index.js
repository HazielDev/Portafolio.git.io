
// let boton_ver = document.getElementById('boton-ver');

// // Calcular la posición izquierda en función del ancho total de la pantalla
// let anchoPantalla = window.innerWidth;
// let posicionIzquierda = (anchoPantalla / 2) - 100; // Restar 100 píxeles para desplazar hacia la izquierda

// // Establecer el nuevo valor de left en el elemento
// boton_ver.style.left = `${posicionIzquierda}px`;

// console.log(boton_ver.style.left);

let turn = false;
let pos = 2;
let derecha = false;

setInterval(function() {
    // Código que deseas ejecutar cada segundo
    let laser = document.getElementById("laser");

    turn = !turn;

    if(turn == false){

        laser.style.display = "none";

    }else{

        laser.style.display = "block";

    }

    if (derecha == true){

        pos++;
        if (pos >= 7){derecha = false;}

    }else{

        pos--;
        if (pos <= 1){derecha = true;}

    }
    
    document.documentElement.style.setProperty("--position", pos);

    console.log(pos);

  }, 1000);
  