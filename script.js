function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
   var basket = $('.product_row_cart');
   var image= basket[0].find('.product_image_cart').attr('src');
   var title= basket[0].find('.product_name cart').text();
   var color= basket[0].find('.product_color_cart').text();
   var number_order = randomInteger(35000, 40000);
   var color_class= "black";
     if(color =='голубой'){
     	color_class= "blue";
     }
     if(color =='красный'){
     	color_class= "red";
     }
     if(color =='серый'){
     	 color_class= "grey";
     } 

     document.getElementById("buy_product_image").attr(image);
     document.getElementById("buy_product_title ").text(title);
     document.getElementById("buy_product_color").text(color);
     document.getElementById("buy_product_order").text(number_order);
     document.getElementById("buy_product_class").addClass(color_class); 
   
