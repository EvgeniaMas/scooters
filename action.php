<?php

//action.php

session_start();
if(isset($_POST["action"]))
{
	if($_POST["action"] == "add")
	{
		// $total_item = $total_item + 1;
		if(isset($_SESSION["shopping_cart"]))
		{
			$is_available = 0;
			foreach($_SESSION["shopping_cart"] as $keys => $values)
			{
				if($_SESSION["shopping_cart"][$keys]['product_id'] == $_POST["product_id"] && $_SESSION["shopping_cart"][$keys]['product_color'] == $_POST["product_color"])
				{
					$is_available++;
					$_SESSION["shopping_cart"][$keys]['product_quantity'] = $_SESSION["shopping_cart"][$keys]['product_quantity'] + $_POST["product_quantity"];
				}
			}
			if($is_available == 0)
			{
				$item_array = array(
					'product_id'               =>     $_POST["product_id"],  
					'product_color'               =>     $_POST["product_color"],  
					'product_name'             =>     $_POST["product_name"],  
					'product_price'            =>     $_POST["product_price"],  
					'product_quantity'         =>     $_POST["product_quantity"],
					'product_image'             =>     $_POST["product_image"],
					'color_class'               =>     $_POST["color_class"]    
				);
				$_SESSION["shopping_cart"][] = $item_array;
			}
		}
		else
		{
			$item_array = array(
					'product_id'               =>     $_POST["product_id"],  
					'product_color'            =>     $_POST["product_color"],  
					'product_name'             =>     $_POST["product_name"],  
					'product_price'            =>     $_POST["product_price"],  
					'product_quantity'         =>     $_POST["product_quantity"],
					'product_image'             =>     $_POST["product_image"],
					'color_class'               =>     $_POST["color_class"]      
				);
			$_SESSION["shopping_cart"][] = $item_array;
		}
	}

	if($_POST["action"] == 'remove')
	{

		
		foreach($_SESSION["shopping_cart"] as $keys => $values)
		{
			if($values["product_id"] == $_POST["product_id"])
			{
				
				unset($_SESSION["shopping_cart"][$keys]);
				// $total_item =+ $_SESSION["shopping_cart"][$keys]['product_quantity'];	
			}
		}
	}

if($_POST["action"] == 'update')
	{
      // $total_item =+ $_SESSION["shopping_cart"][$keys]['product_quantity'];
			foreach($_SESSION['shopping_cart'] as $keys => $values)
			{
				
				if($_POST['product_id'] == $values['product_id']) {
					
					$_SESSION["shopping_cart"][$keys]['product_quantity'] = $_POST["product_quantity"];
										
                    }
                    	
				  }
				
			} 

    	if($_POST["action"] == 'empty')
	     {
		unset($_SESSION["shopping_cart"]);
	     }
      }

?>