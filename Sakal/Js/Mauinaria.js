
//animate__fadeInRight
// Función para verificar si un elemento está visible en la ventana

let alturaActual = document.documentElement.scrollTop || document.body.scrollTop;
let elemento = document.getElementById("cont-contacto");
let cont_enviar = document.getElementById("cont-enviar");
let title = document.getElementById("title");
let fila = document.getElementById("fila-products");
fila.style.display = "none"
title.style.color = "whitesmoke";
elemento.style.display = "none";
cont_enviar.style.display = "none";



function ActualizarAltura() {
    
alturaActual = document.documentElement.scrollTop || document.body.scrollTop;

if (alturaActual > 100){

    title.style.color = "black";
    fila.style.display = "flex";
    fila.classList.add("animate__animated", "animate__fadeInUp");
    title.classList.add("animate__animated", "animate__fadeInUp");

}

if (alturaActual > 450){

    elemento.style.display = "flex";
    cont_enviar.style.display = "flex";

    elemento.classList.add("animate__animated", "animate__backInLeft");
    cont_enviar.classList.add("animate__animated", "animate__backInRight");
    console.log("Se agrego el efecto");

}

}

setInterval(ActualizarAltura, 500);



// function isElementInViewport(element) {
//     var rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   // Función para agregar la clase de animación cuando el elemento está visible
//   function animateElement() {
//     var elemento = document.getElementById("cont-contacto");
//     if (isElementInViewport(elemento)) {
//       elemento.classList.add("animate__animated", "animate__backInLeft");
//       console.log("Se agrego el effecto");
//     } else {
//       elemento.classList.remove("animate__animated", "animate__backInLeft");
//     }
//   }
  
 

//   // Evento scroll que activa la función de animación
//   window.addEventListener("scroll", animateElement);
