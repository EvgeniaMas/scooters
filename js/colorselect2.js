$(document).ready(function() {
    $('.color-choose label').on('click', function(e) {
        var currentcard = e.target.parentElement.parentElement.parentElement;
        var attributes = e.target.parentElement.getAttribute('data-color');
        var a = e.target.parentElement;      
        var colors = $(currentcard).find('.active');
        $(colors).removeClass('active');
        $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active');
    });
});
$(document).on('click', '.buy_btn', function(e){   
        var currentcard =e.target.parentElement; 
        var product_id = $(currentcard).find('.product_id').val();       
        var product_name = $(currentcard).find('.productor').text();        
        var product_color = $(currentcard).find('img.active').attr('data-image');
        var product_image = $(currentcard).find('img.active').attr('src');
        var full_price= $(currentcard).find('.new_price').text();
        var product_price = Number.parseInt(full_price);       
        var quantity= $(currentcard).find('.product_quantity').val();         
        product_quantity = Number.parseInt(quantity);         
        var action = "add";       
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, product_name:product_name, 
                    product_color:product_color, 
                    product_price:product_price, 
                    product_quantity: product_quantity,
                    product_image: product_image,
                    action:action},
                success:function(data)
                {
                    load_cart_data();
                    $('.additional_part').remveClass( 'removed_cart' ); 
                }
            }); 
    });
    function load_cart_data()
    {
       $.ajax({
            url:"fetch_cart.php",
            method:"POST",
            dataType:"json",
            success:function(data)
            {
               
                $('.total_price').text(data.total_price);
                $('.badge').text(data.total_item);                
                $('#cart_content').html(data.cart_details);
               
               }
        });
       
    }
    $(document).on('click', '.delete', function(){
        var product_id = $(this).attr("id");
        var action = 'remove';        
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, action:action},
                success:function()
                {
                    load_cart_data();                  
                    
                }
            })
        });
$(document).on('click', '.clear_cart', function(){   
    
        var action = 'clear';        
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{action:action},
                success:function()
                {
                    $('.additional_part').addClass( 'removed_cart' ); 
                    load_cart_data();                   
                    
                }
            })
        });
$(document).on('click', '.minus', function(){
 var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                var new_product_quantity = $input.val();
                product_quantity = Number.parseInt(new_product_quantity); 
                var product_id = $(this).parent().find(".invisible_data").text();
                console.log(product_id);
                console.log(product_quantity);
                
                var action = 'update'; 

            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, product_quantity:product_quantity, action:action},
                success:function()
                {
                console.log("Ща" + product_id);
                console.log("Ща" + product_quantity);
                    // load_cart_data();                   
                    
                }
            })            


                return false;               
});
$(document).on('click', '.plus', function(){
 var $input = $(this).parent().find('input');
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();

                var new_product_quantity = $input.val();
                product_quantity = Number.parseInt(new_product_quantity); 
                var product_id = $(this).parent().find(".invisible_data").text();
                console.log(product_id);
                console.log(product_quantity);
                
                var action = 'update'; 

                $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, product_quantity:product_quantity, action:action},
                success:function()
                {
                console.log("Ща" + product_id);
                console.log("Ща" + product_quantity);
                    // load_cart_data();                   
                    
                }
            })                     
});
$(function() {
    $(".phone_number").mask("+7(999) 999-99-99");
});

// Плавный скролл меню
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
            });
});
// Пролистывание сайта из первого экрана
$('.scroll_page').on('click', function() {
  $('html,body').animate({scrollTop:$('.advantages').offset().top+"px"},{duration:1E3});
});