<?php

//fetch_cart.php

session_start();

$total_price = 0;
$total_item = 0;
$new_item=0;
$output = '
<div id="order_table">
	<table class="table cart_table">
		
';

if(!empty($_SESSION["shopping_cart"]))
{
	foreach($_SESSION["shopping_cart"] as $keys => $values)
	{
		$output .= '
		   <tr  id="product_row_cart">
		    <td width="25%" class="table_image"><img class="product_image_cart" src="' .$values["product_image"].'" alt="Товары">
		    </td>
			<td class="mobile_cart_width_name" width="45%">
			<p class="product_name cart">'.$values["product_name"].'</p>
			<span class="product_color">Цвет: <span class="product_color_cart extra regular_text">'.$values["product_color"].'</span></span>
			<span class="cart_color_round '.$values["color_class"].'"></span>
			</td>			
			
		  <td width="5%"> 
		   <p class="price_title_cart">Кол-во</p>
           <span class="minus change_amount">-</span>
            <input class="dynamic_quantity" type="text" value='.$values["product_quantity"].'>
             <span class="plus change_amount">+</span>
             <p class="invisible_data">'.$values["product_id"].'
		     </p> 
		     <p class="invisible_data_color">'.$values["product_color"].'
		     </p>             
          </td>
			<td width="15%"> 
             <p class="price_title_cart">Стоимость</p>
             <p class="product_price_total">'.$values["product_quantity"] * $values["product_price"].'<span> Руб</span</p>
			</td>
			<td width="10%" class="table_close">
			   <button name="delete" class="item_clear delete" id="'. $values["product_id"]. '"  data-color="'.$values["product_color"]. '">X</button>
			</td>
		</tr>
		';
		$total_price = $total_price + ($values["product_quantity"] * $values["product_price"]);

		
		$new_item = $new_item+ ($values["product_quantity"]);

	}
			

	$output .= '</table></div>';  

	$output .= '
		<div class="table_total_line">
          <div class="col-md-7 col-xs-3"><p class="total_item_cart">Итого</p> 
           </div>
          <div class="col-md-2 col-xs-3"><p class="price_title_cart">Кол-во:  <span class="price_title_cart_var"> ' .$new_item.'</span>  шт.</p></div>
          <div class="col-md-3 col-xs-6">
          <p class="product_sum_total">
         '.$total_price.'  <span> руб.</span></p> 
         <span class="clear_cart">Очистить корзину</span> 
          </div>
         </div>
	';	  
}


else
{
	$output .= '
	<div class col-md-12>    	
    		<p class="empty_cart_message">Товары не выбраны!</p>    	
    </div>
  
    ';
}


$data = array(
	'cart_details'		=>	$output,
	'total_price'		=>	$total_price,
	'total_item'		=>	$total_item,
	'new_item'          =>  $new_item    
	
);	

echo json_encode($data);


?>