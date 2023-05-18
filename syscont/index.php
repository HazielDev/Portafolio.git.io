
<?php

    $nombre = $_POST["nombre"];
    $to = "hazieldev@gmail.com";

    $subject = "This is subject";

    $mensaje = "<b>This is HTML message.</b>";

     $mensaje .= "<h1>This is headline.</h1>";

     $mensaje .= "Nombre: ".$nombre;

     $header = "From:amontes@geconsint.com \r\n";

    //$header .= "Cc:afgh@somedomain.com \r\n";

    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    // $retval = mail ($to,$subject,$message,$header);
    $retval = mail ("hola1","hol2","hola3","hola4");
    
    if( $retval == true ) {
    echo "Message sent successfully...";
    }else {
    echo "Message could not be sent...";
    }

?>





