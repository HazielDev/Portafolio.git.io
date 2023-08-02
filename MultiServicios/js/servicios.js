
let pos = 0;
let pre_pos = 0;

let img = new Array(3);
img[0] = document.getElementById("slider-img-0");
img[1] = document.getElementById("slider-img-1");
img[2] = document.getElementById("slider-img-2");
img[3] = document.getElementById("slider-img-3");
img[4] = document.getElementById("slider-img-4");
img[5] = document.getElementById("slider-img-5");

document.documentElement.style.setProperty("--position", 1);

let barra = [

    {id: document.getElementById("slider-barra-0"), activo: false, ind: 0},
    {id: document.getElementById("slider-barra-1"), activo: false, ind: 100},
    {id: document.getElementById("slider-barra-2"), activo: false, ind: 200},
    {id: document.getElementById("slider-barra-3"), activo: false, ind: 300},
    {id: document.getElementById("slider-barra-4"), activo: false, ind: 400},
    {id: document.getElementById("slider-barra-5"), activo: false, ind: 500}

]

img[0].style.left = "0%"
img[1].style.left = "100%";
img[2].style.left = "200%";
img[3].style.left = "300%";
img[4].style.left = "400%";
img[5].style.left = "500%";

barra[0].id.style.width = "8px";
barra[0].id.style.height = "8px";
barra[0].id.style.borderRadius = "50%";
barra[0].activo = true;

function slide_der(){
    if(pos < 5){
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
 
$(document).ready(function() { 

    let alturaActual = document.documentElement.scrollTop || document.body.scrollTop;

    $("#texto-anim").text("Paneles Solares")

    function ActualizarAltura(){

    alturaActual = document.documentElement.scrollTop || document.body.scrollTop;

    if(alturaActual > 120){

        $("#cont-info-service").css("display","block");
        $("#cont-info-service").addClass("animate__animated");
        $("#cont-info-service").addClass("animate__fadeInLeft");
        $("#contacto").css("margin-top","80px");

    }

    console.log(alturaActual);

    }

    setInterval(ActualizarAltura, 500);

    $("#boton-left-slider").click(function(){
            
        UpdateService(pos, false);

    });

    $("#boton-right-slider").click(function(){
            
        UpdateService(pos, true);

    });

    $(".slider-barra").click(function(){
            
        UpdateService(pos);

    });

    function UpdateService(posu, oreo) {
     
    
        setTimeout(function() {

            $("#cont-info-service").removeClass("animate__animated");
            $("#cont-info-service").removeClass("animate__fadeOutLeft");
            $("#cont-info-service").removeClass("animate__fadeOutRight");

            $("#texto-anim").removeClass("animate__animated");
            $("#texto-anim").removeClass("animate__fadeOutLeft");
            $("#texto-anim").removeClass("animate__fadeOutRight");

            if(oreo === true){

            $("#cont-info-service").addClass("animate__animated");
            $("#cont-info-service").addClass("animate__fadeInRight");

            $("#texto-anim").addClass("animate__animated");
            $("#texto-anim").addClass("animate__fadeInRight");

            }else{

            $("#cont-info-service").addClass("animate__animated");
            $("#cont-info-service").addClass("animate__fadeInLeft");

            $("#texto-anim").addClass("animate__animated");
            $("#texto-anim").addClass("animate__fadeInLeft");

            console.log("entra desde izq")

            }

            switch (posu) {
            
                case 0:
                
                $("#img-info-service").css("background-image","url(images/Multiservicios%20Paneles%20Solares.jpg)");
                $("#texto-anim").text("Paneles Solares")
                $("#subtitle-info").text("Energía solar");
                $("#title-info").text("Paneles Solares");
                $("#text-info").text("El Panel Solar de Alta Eficiencia es una solución innovadora y sostenible para la generación de energía renovable. Diseñado con tecnología de vanguardia, este panel solar aprovecha la radiación solar para convertirla en electricidad de manera eficiente y respetuosa con el medio ambiente.");
                
    
                break;
                
                case 1: 
                
                $("#img-info-service").css("background-image","url(images/MultiServicios%20Obra%20Civil.jpg)");
                $("#texto-anim").text("Obra civil")
                $("#subtitle-info").text("Mantenimiento Industrial");
                $("#title-info").text("Obra Civil");
                $("#text-info").text("Nuestro servicio de mantenimiento de obras civiles garantiza la durabilidad y funcionalidad de tus construcciones. Ofrecemos inspecciones, reparaciones y mantenimiento preventivo para mantener tus estructuras en óptimas condiciones.");
                

                break;
    
                case 2: 
                
                $("#img-info-service").css("background-image","url(images/MultiServicios%20slider%20estructuras.jpg)");
                $("#texto-anim").text("Estructuras")
                $("#subtitle-info").text("Desarrollo de estructuras industriales");
                $("#title-info").text("Estructuras");
                $("#text-info").text("Nuestro servicio de desarrollo de estructuras ofrece soluciones especializadas y personalizadas para crear estructuras sólidas, seguras y estéticamente atractivas. Nuestro equipo de expertos utiliza tecnología avanzada y experiencia en ingeniería y arquitectura para garantizar resultados de alta calidad en proyectos comerciales, residenciales y de infraestructura.");
                
                break;
    
                case 3: 
                
                $("#img-info-service").css("background-image","url(images/MultiServicios%20Montacargas.jpg");
                $("#texto-anim").text("Montacargas")
                $("#subtitle-info").text("Renta de Montacargas");
                $("#title-info").text("Montacargas");
                $("#text-info").text("Nuestro servicio de renta de montacargas ofrece soluciones flexibles y seguras para tus necesidades de manejo de carga. Contamos con una amplia flota de montacargas disponibles para alquiler, permitiéndote optimizar tus operaciones de carga y descarga de manera eficiente en diversos entornos.");
                

                break;
    
                case 4: 
                
                $("#texto-anim").text("Gas LP")
                $("#img-info-service").css("background-image","url(images/Multi%20Servicios%20Gas%20Lp%20comprar.jpg");
                $("#subtitle-info").text("Compra de Gas Lp");
                $("#title-info").text("Gas LP");
                $("#text-info").text("Nuestro servicio de compra de Gas LP ofrece suministro confiable y seguro para hogares, negocios e industrias, cubriendo tus necesidades energéticas de manera eficiente.");
                

                break;
                
                case 5: 
                
                $("#img-info-service").css("background-image","url(images/Multiservicios-grua.jpg)");
                $("#texto-anim").text("Grúas")
                $("#subtitle-info").text("Renta de Grúas Industriales");
                $("#title-info").text("Grúas");
                $("#text-info").text("Nuestro servicio de renta de grúas brinda soluciones especializadas para tus necesidades de izaje y elevación de carga. Contamos con una flota diversa de grúas de diferentes capacidades y configuraciones.");
                
                
                break;
            
                
            }

        }, 1000);

        

    $("#cont-info-service").removeClass("animate__animated");
    $("#cont-info-service").removeClass("animate__fadeInLeft");
    $("#cont-info-service").removeClass("animate__fadeInRight");

    $("#texto-anim").removeClass("animate__animated");
    $("#texto-anim").removeClass("animate__fadeInLeft");
    $("#texto-anim").removeClass("animate__fadeInRight");
    
    if(oreo === true){

    $("#texto-anim").addClass("animate__animated");
    $("#texto-anim").addClass("animate__fadeOutLeft");

    $("#cont-info-service").addClass("animate__animated");
    $("#cont-info-service").addClass("animate__fadeOutLeft");

    }else{

    $("#texto-anim").addClass("animate__animated");
    $("#texto-anim").addClass("animate__fadeOutRight");
    
    $("#cont-info-service").addClass("animate__animated");
    $("#cont-info-service").addClass("animate__fadeOutRight");


    }

    }

    
    
    
});