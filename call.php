<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$phone = $_POST['user_phone'];
  $name = $_POST['user_name'];  
  $time_start = $_POST['time_start'];
  $time_end = $_POST['time_end'];
  $discount = $_POST['user_discount'];
//$mail->SMTPDebug = 3;      // Enable verbose debug output

$mail->isSMTP();          // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru'; 													// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = ''; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom(''); // от кого будет уходить письмо?
// $mail->addAddress('gyro-do@yandex.ru');
$mail->addAddress('');
$mail->isHTML(true);   // Set email format to HTML
$mail->Subject = 'Заявка с сайта  '  .$_SERVER["SERVER_NAME"];
$mail->Body    = "<b>Заказ</b> <br><b> Имя</b> <br>" .$name. "  оставил(а) заявку на обратный звонок <br> <b>телефон</b><br>" .$phone ."<br> <b> Удобное время для звонка </b><br>" .$time_start ." до " .$time_end ."<br><b>Скидка<b><br>" .$discount;

$mail->AltBody = '';

if(!$mail->send()) {
    $json['error'] = 1;
} else {
   $json['error'] = 0;
}
echo json_encode($json); 
?>


