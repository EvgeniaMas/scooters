<?php
require_once('phpmailer/PHPMailerAutoload.php');
{
session_start();
$cart= '';
$cart_to_display = '';
$order_number= rand(35000, 40000);

foreach($_SESSION["shopping_cart"] as $keys => $values)
  {
    $cart .= '<table>
      <tr>

      <th width=25%> Название</th>
      <th width=25%>Количество</th>
      <th width=25%> Цвет</th>
      <th width=25%> Стоимость</th>
      </tr>
      <tr>
      <td width=35%>'.$values["product_name"] .'</td>
      <td width=15%>'.$values["product_quantity"] .'</td>
      <td width=25%>'.$values["product_color"]  .'</td>
      <td width=25%>'.($values["product_quantity"] * $values["product_price"])  .'</td>
      </tr>
    </table>
    ';
  }

  foreach($_SESSION["shopping_cart"] as $keys => $values)
  {
    $cart_to_display .= 
    '<div class="table-responsive" id="bought">
     <table class="table cart_table">
       <tr  class="product_row_cart">
        <td width="50%" ><img class="product_image_cart" src="' .$values["product_image"].'" alt="Товары">
        </td>
      <td width="50%">
      <p class="product_name cart">'.$values["product_name"].'</p>
      <p class="number_order"><b>Заказ № </b> '.$order_number++.'</p>
      <span class="product_color">Цвет: <span class="product_color_cart extra regular_text">'.$values["product_color"].'</span></span>
      <span class="cart_color_round '.$values["color_class"].'"></span><br>
      <p class="price_title_cart">Кол-во <span class="good_amount_modal">'.$values["product_quantity"].' шт.</span></p>
           <p class="price_title_cart">Стоимость</p>
           <p class="product_price_total">'.$values["product_quantity"] * $values["product_price"].'<span> Руб.</span</p>
      </td>      
    </tr></table></div>
    ';     
  } 
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$phone = $_POST['user_phone'];
$name = $_POST['user_name']; 
//$mail->SMTPDebug = 3;      // Enable verbose debug output
$mail->isSMTP();          
$mail->Host = 'smtp.mail.ru'; 
$mail->SMTPAuth = true;                               
$mail->Username = ''; 
$mail->Password = ''; 
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom(''); // от кого будет уходить письмо?
$mail->addAddress('');
//gyro-do@yandex.ru
$mail->isHTML(true); 
$mail->Subject = 'Заявка с сайта  '  .$_SERVER["SERVER_NAME"];
$mail->Body    = "<b>Заказ № ".$order_number.  "</b> <br> Имя <br>" .$name. "<br> <b>телефон</b><br>" .$phone ."<b><br> Желает купить<b> <br>" .$cart ;

//gyro-do@yandex.ru 
$data = array(
  'cart_to_display'    => $cart_to_display  
  
); 


if(!$mail->send()) {
    $json['error'] = 1;
} else {
   $json['error'] = 0;
}

echo json_encode($data);
}
$_SESSION= [];
session_destroy();
?>