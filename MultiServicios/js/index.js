
let pos = 0;

let img = new Array(3);
img[0] = document.getElementById("slider-img-0");
img[1] = document.getElementById("slider-img-1");
// img[2] = document.getElementById("slider-img-0");
// img[3] = document.getElementById("slider-img-0");

let barra = [

    {id: document.getElementById("slider-barra-0"), activo: false},
    {id: document.getElementById("slider-barra-1"), activo: false},
    {id: document.getElementById("slider-barra-2"), activo: false},
    {id: document.getElementById("slider-barra-3"), activo: false}

]

img[1].style.left = "100%";

barra[pos].id.style.width = "8px";
barra[pos].id.style.height = "8px";
barra[pos].id.style.borderRadius = "50%";
barra[pos].activo = true;


function changePos(posi){

    pos = posi;

    for (let i = 0; i < barra.length; i++) {
        
        if(pos === i){

            barra[i].activo = true;

            barra[i].id.style.width = "6px";
            barra[i].id.style.height = "6px";
            barra[i].id.style.borderRadius = "50%";

        }else{

            barra[i].activo = false;

            barra[i].id.style.height = "3px";
            barra[i].id.style.width = "5%"
            barra[i].id.style.borderRadius = "3px";

        }
    }
}

