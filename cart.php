<?php

{

session_start();
$cart='';
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

   $cart_to_display .= '<div class="table-responsive">
     <table class="table cart_table">';
  foreach($_SESSION["shopping_cart"] as $keys => $values)
  {
    $cart_to_display .= '
       <tr  class="product_row_cart">
        <td width="50%" ><img class="product_image_cart" src="' .$values["product_image"].'" alt="Товары">
        </td>
      <td width="50%">
      <p class="product_name cart">'.$values["product_name"].'</p>
      <p class="number_order">'.$order_number++.'</p>
      <span class="product_color">Цвет: <span class="product_color_cart extra regular_text">'.$values["product_color"].'</span></span>
      <span class="cart_color_round '.$values["color_class"].'"></span><br>
      <p class="price_title_cart">Кол-во <span class="good_amount_modal">'.$values["product_quantity"].' шт.></span></p>
           <p class="price_title_cart">Стоимость</p>
           <p class="product_price_total">'.$values["product_quantity"] * $values["product_price"].'<span> Руб.</span</p>
      </td>      
    </tr>
    ';  
  } 


   //gyro-do@yandex.ru 
  $mail="repvol2015@gmail.com";

  $title="Заявка с сайта  ".$_SERVER["SERVER_NAME"]; // заголовок(тема) письма
  $phone = $_POST['user_name'];
  $name = $_POST['user_name'];

  $mess="<b>Заказ</b> <br>
           <b>Имя</b> <br>
           $name  <br> 
           <b>Телефон</b><br>
           $phone <br>           
           $cart ";   

  $headers="MIME-Version: 1.0\r\n";

  $headers.="Content-type: text/html; charset=utf-8\r\n"; //кодировка

  $headers.="From: admin@".$_SERVER["SERVER_NAME"]; 
  // откуда письмо (необязательнакя строка)

  mail($mail, $title, $mess, $headers); // отправляем

  $json['error'] = 0;

  echo json_encode($json); 
}

?>