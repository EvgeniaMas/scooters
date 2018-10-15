<?php

{
   //gyro-do@yandex.ru 
   $mail="repvol2015@gmail.com";

  $title="Заявка с сайта  ".$_SERVER["SERVER_NAME"]; // заголовок(тема) письма
  $phone = $_POST['user_name'];
  $name = $_POST['user_name'];  
  $time_start = $_POST['user_cart'];
  $time_end = $_POST['time_end']; 

  $mess="<b>Заказ</b> <br>
           Имя <br>
           $name  отставил заявку на обратный звонок <br> 
           <b>телефон</b><br>
           $phone 
           <b> Удобное время для звонка </b><br>
           $time_start до $time_end ";   

  $headers="MIME-Version: 1.0\r\n";

  $headers.="Content-type: text/html; charset=utf-8\r\n"; //кодировка

  $headers.="From: admin@".$_SERVER["SERVER_NAME"]; 
  // откуда письмо (необязательнакя строка)

  mail($mail, $title, $mess, $headers); // отправляем

  $json['error'] = 0;

  echo json_encode($json); 
}

?>