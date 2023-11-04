
let pos = 0;
let img = new Array(3);
img[0] = document.getElementById("slider-0");
img[1] = document.getElementById("slider-1");
img[2] = document.getElementById("slider-2");
img[3] = document.getElementById("slider-3");

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

  document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            slide_isq();
            break;
        case 'ArrowRight':
            slide_der();
            break;
    }
  });

  function whats(){

    window.location = "https://api.whatsapp.com/send?phone=528135949275";

  }

  function face(){

    window.location = "https://www.facebook.com/people/Coach-Ancestral/61552755002230/?mibextid=LQQJ4d";

  }

  $(document).ready(function(){

    $(".whatsi").click(function(){

        $("#cont-menu-lateral").fadeToggle();

    });

    $(".tachita").click(function(){

        $("#cont-menu-lateral").fadeToggle();        

    });

    $("#send-whatsi").click(function(){

        let nombre = $("#input-name").val()
        let mensaje = $("#input-mensaje").val()

        let mensaje_t = encodeURI("Hola mi nombre es: "+nombre+"\n\n"+mensaje)
        
        window.location = "https://api.whatsapp.com/send?phone=528135949275&text="+mensaje_t;

    });

  });