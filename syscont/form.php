<?php

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$texto = $_POST["mensaje"];

$mensaje = "Este mensaje es enviado por: ". $nombre . "\r\n";
$mensaje .= "Su email es: ". $correo ."\r\n";
$mensaje .= "Mensaje: ". $texto ."\r\n";
$mensaje .= "Enviado el: " . date("d/m/Y",time());

$para = "hazieldev@gmail.com";
$asunto = "Este email fue enviado desde la web";

mail($para, $asunto, utf8_decode($mensaje),$header);

header("Location:index.html");

?>