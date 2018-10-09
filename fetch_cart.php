<?php

//fetch_cart.php

session_start();

$total_price = 0;
$total_item = 0;


$output = '
<div class="table-responsive" id="order_table">
	<table class="table cart_table">
		
';


if(!empty($_SESSION["shopping_cart"]))
{
	foreach($_SESSION["shopping_cart"] as $keys => $values)
	{
		$output .= '
		<tr class="product_row_cart">
		    <td><img class="product_image_cart" src="' .$values["product_image"].'" alt="Товары">
		    </td>

			<td>
			<p class="product_name cart">'.$values["product_name"].'</p>
			<span class="product_color">Цвет: <span class="extra regular_text">'.$values["product_color"].'</span></span>
			<span class="cart_color_round"></span>
			</td>			
			
		<td width="25%"> 
		<p class="price_title_cart">Кол-во</p>
         <span class="minus change_amount">-</span>
         <input class="dynamic_quantity" type="text" value='.$values["product_quantity"].'>

             <span class="plus change_amount">+</span>
             <p class="invisible_data">'.$values["product_id"].'
		     </p>            
       </td>

			
			
			<td> 
             <p class="price_title_cart">Стоимость</p>
             <p class="product_price_total">'.$values["product_quantity"] * $values["product_price"].'<span> Руб</span</p>
			
			</td>

			<td><button name="delete" class="item_clear delete" id="'. $values["product_id"].'">X</button></td>
		</tr>
		';
		$total_price = $total_price + ($values["product_quantity"] * $values["product_price"]);
		$$total_item = $total_item + $values["product_quantity"];
		$total_item = $total_item + 1;
	}
	$output .= '
	<tr> 
	    <td colspan="3" align="right"><p class="class="extra regular_text"">Кол-во: ' .$total_item;.'  шт</p>.
        <span class="clear_cart">Очистить корзину</span>
	    </td> 
       
          
        <td align="right"> '.$total_price.' руб.</td> 

        <td></td>  
    </tr>
	';	
}
else
{
	$output .= '
    <tr>
    	<td colspan="5" align="center">
    		Ваша корзина пуста!
    	</td>
    </tr>
    ';
}
$output .= '</table></div>';
$data = array(
	'cart_details'		=>	$output,	
	'total_price'		=>	$total_price,
	'total_item'		=>	$total_item
	
);	  
echo json_encode($data);
?>