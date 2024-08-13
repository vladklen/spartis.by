<?php

// function debug_to_console($data) {
// 	$output = $data;
// 	if (is_array($output))
// 			$output = implode(',', $output);

// 	echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
// }

// debug_to_console("Test");

// ini_set('display_errors', 1);

include('phpmailer/PHPMailerAutoload.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true)


$mail->setFrom('info@spartis.by','Website');
$mail->addAddress('info@spartis.by');
$mail->Subject = 'Запрос с сайта';

$body = '<h1>Контакт для связи:</h1>';

if(trim(!empty($_POST['username']))){
	$body.='<p>Имя: ' .$_POST['username'].'</p>'
}

if(trim(!empty($_POST['mail']))){
	$body.='<p>Электронная почта: ' .$_POST['mail'].'</p>'
}

if(trim(!empty($_POST['tel']))){
	$body.='<p>Телефон: ' .$_POST['tel'].'</p>'
}

if(trim(!empty($_POST['textarea']))){
	$body.='<p>Запрос: ' .$_POST['textarea'].'</p>'
}

$mail->Body = $body

if(!$mail->send()){
	$message = "Error";
} else {
	$message = "Send data"
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response)

?>