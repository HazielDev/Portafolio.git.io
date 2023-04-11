
function mover(px){

let elmo = document.getElementById("img-elmo");

if (window.innerWidth <= 800) {

    let pos = (document.getElementById("elmo").offsetWidth / 6);
    let cont = (document.getElementById("elmo")).offsetWidth;

    switch(px){

        // case 235: px = 15; break;
        // case 420: px = 140; break;
        // case 600: px = 270; break;

        case 235: px = pos; break;
        case 420: px = pos*2.5; break;
        case 600: px = pos*4; break;

    }

}

elmo.style.position = "absolute";
elmo.style.left = px+"px";


}