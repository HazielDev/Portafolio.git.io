
function mover(px){

let elmo = document.getElementById("img-elmo");

if (window.innerWidth <= 800) {

    let pos = (document.getElementById("mini-menu").offsetWidth / 12);
    let pos1 = document.getElementById("boton-acerca").offsetLeft;

    switch(px){

        // case 235: px = 15; break;
        // case 420: px = 140; break;
        // case 600: px = 270; break;

        //  case 235: px = 0; break;
        //  case 420: px = pos; break;
        //  case 600: px = pos*2; break;

        case 235: px = pos; break;
        case 420: px = pos*4.5; break;
        case 600: px = pos*8; break;

    }

}

elmo.style.position = "absolute";
elmo.style.left = px+"px";


}