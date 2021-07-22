<?php


require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["name"]) || !isset($_POST["mail"])  || !isset($_POST["phone"]) || !isset($_POST["message"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}

$nombre = $_POST["name"];

$email = $_POST["mail"];

$telefono = $_POST["phone"];

$mensaje = $_POST["message"];

$destinatario = "seran.angie@gmail.com"; // Correo al que llegará la consulta //

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "smtp.gmail.com";  // Dominio alternativo brindado en el email de alta
$smtpUsuario = "fabichlo89@gmail.com";  // Mi cuenta de correo
$smtpClave = "Fabi1989#";  // Mi contraseña

$mail = new PHPMailer(true);
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465;
$mail->IsHTML(true);
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost;
$mail->Username = $smtpUsuario;
$mail->Password = $smtpClave;


$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($destinatario); // Esta es la dirección a donde enviamos los datos del formulario

$mail->AddAttachment($_FILES['adjuntar']['tmp_name'], $_FILES['adjuntar']['name']); // attachment

$mail->Subject = "Formulario desde el Sitio Web"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<html>

<body>

<h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>

<p>Informacion enviada por:</p>

<p>Nombre y Apellido: {$nombre}</p>

<p>Email: {$email}</p>

<p>Telefono: {$telefono}</p>

<p>Mensaje: {$mensaje}</p>

</body>

</html>

<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send();
if($estadoEnvio){
    echo '<script>alert ("Su mensaje ha sido enviado. Gracias!"); window.location.href="contacto.html";</script>';
} else {
    echo "Ocurrió un error inesperado.";
}

?>