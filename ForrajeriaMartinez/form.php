<?php

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$texto = $_POST["mensaje"];
$numero = $_POST["numero"];

$mensaje = "Este mensaje es enviado por: ". $nombre . "\r\n";
$mensaje .= "Su email es: ". $correo ."\r\n";
$mensaje .= "Su numero es: ". $numero ."\r\n";
$mensaje .= "Mensaje: ". $texto ."\r\n";
$mensaje .= "Enviado el: " . date("d/m/Y",time());

$para = "contacto@forrajeramartinez1.com";
$asunto = "Este email fue enviado desde la web";

$correoEnviado = mail($para, $asunto, utf8_decode($mensaje),$header);

if ($correoEnviado) {
    echo '<script type="text/javascript">
        alert("Se mando el mensaje con éxito");
        window.location.href = "index.html";
    </script>';
} else {
    echo '<script type="text/javascript">
        alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
        window.history.go(-1);
    </script>';
}

?>