

let pos = 0;

let img = new Array(3);
img[0] = document.getElementById("slider-img-0");
img[1] = document.getElementById("slider-img-1");
img[2] = document.getElementById("slider-img-2");
img[3] = document.getElementById("slider-img-3");

document.documentElement.style.setProperty("--position", 1);

let barra = [

    {id: document.getElementById("slider-barra-0"), activo: false, ind: 0},
    {id: document.getElementById("slider-barra-1"), activo: false, ind: 100},
    {id: document.getElementById("slider-barra-2"), activo: false, ind: 200},
    {id: document.getElementById("slider-barra-3"), activo: false, ind: 300}

]

img[0].style.left = "0%"
img[1].style.left = "100%";
img[2].style.left = "200%";
img[3].style.left = "300%";

barra[pos].id.style.width = "8px";
barra[pos].id.style.height = "8px";
barra[pos].id.style.borderRadius = "50%";
barra[pos].activo = true;

function slide_der(){
    if(pos < 3){
    changePos(pos = pos + 1);
    }
}

function slide_isq(){
    if(pos >= 1){
        changePos(pos = pos - 1);
    }
}

function changePos(posi){

    pos = posi;

    for (let i = 0; i < barra.length; i++) {
        
        if(pos === i){

            barra[i].activo = true;

            barra[i].id.style.width = "6px";
            barra[i].id.style.height = "6px";
            barra[i].id.style.borderRadius = "50%";
            img[i].style.left = barra[i].ind - (100 * pos) + "%";

        }else{

            barra[i].activo = false;

            barra[i].id.style.height = "3px";
            barra[i].id.style.width = "5%"
            barra[i].id.style.borderRadius = "3px";
            img[i].style.left = barra[i].ind - (100 * pos) + "%";

        }
    }

    console.log("La posicion se cambio a: "+pos);
}

function mover(poso){

    document.documentElement.style.setProperty("--position", poso);

 }
//     let poso = document.documentElement.style.getPropertyValue("--position");

  function mover_isq(){
    
    let poso = document.documentElement.style.getPropertyValue("--position");
            
    // let estiloRoot = window.getComputedStyle(document.documentElement);
    // let pos = estiloRoot.getPropertyValue("--position");

    let num = parseInt(poso);

    if(num >= 2){

    document.documentElement.style.setProperty("--position", num = num - 1);
    
    }

  }

  function mover_der(){

    let poso = document.documentElement.style.getPropertyValue("--position");

    let num = parseInt(poso);

    console.log(poso)
    
    if(num <= 5){
    
    document.documentElement.style.setProperty("--position", num = num + 1);
    
    }

  }

$(document).ready(function() { 

    let palabras = ["Confiabilidad","Seguridad","Profesionalidad","Buena Comunicación"]
    let cont = 0;
    $("#texto-anim").css("animation-duration","0.8s")

    setInterval(function() {

        setTimeout(function() {

            $("#texto-anim").addClass("animate__animated");
            $("#texto-anim").addClass("animate__fadeOutDown");
            console.log("Se sale")

        }, 1000);

        setTimeout(function() {
        
        $("#texto-anim").removeClass("animate__fadeOutDown");
        $("#texto-anim").removeClass("animate__fadeInDown");
        $("#texto-anim").removeClass("animate__animated");

        $("#texto-anim").text(palabras[cont]);
        
        $("#texto-anim").addClass("animate__animated");
        $("#texto-anim").addClass("animate__fadeInDown");
        console.log("Se entra")
        if(cont == palabras.length-1){cont = 0;}else{cont++;}
        
        }, 2000);

    }, 3000);


});