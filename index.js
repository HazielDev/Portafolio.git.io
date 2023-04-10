
function mover(px){

let acerca = document.getElementById("boton-guep");
let elmo = document.getElementById("img-elmo");

if (window.innerWidth <= 800) {

    switch(px){

        case 235: px = 15; break;
        case 420: px = 140; break;
        case 600: px = 270; break;

    }

}

elmo.style.position = "absolute";
elmo.style.left = px+"px";


}