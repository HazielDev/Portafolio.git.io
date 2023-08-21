$(document).ready(function() {

    $("#imagen").change(function() {

        VistaPrevia();

    });

    function VistaPrevia() {
        const archivo = $('#imagen').get(0).files[0];
        const vistaPrevia = $('#img-add');
        const texto = $("#texto-image");

        if (archivo) {
            const lector = new FileReader();

            lector.onload = function(event) {
                vistaPrevia.css('backgroundImage', 'url(' + event.target.result + ')');
                texto.hide();
            }

            lector.readAsDataURL(archivo);
        } else {
            // No hay archivo seleccionado. Si quieres hacer algo en este caso, puedes agregar el código aquí.
        }
    }
});