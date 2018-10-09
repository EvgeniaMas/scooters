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



$(document).ready(function(){

    // load_product();

    load_cart_data();
    
    // function load_product()
    // {
    //     $.ajax({
    //         url:"fetch_item.php",
    //         method:"POST",
    //         success:function(data)
    //         {
    //             $('#cart_content').html(data);
    //         }
    //     });
    // }

    function load_cart_data()
    {
        $.ajax({
            url:"fetch_cart.php",
            method:"POST",
            dataType:"json",
            success:function(data)
            {
                $('#cart_content').html(data.cart_details);
                $('.total_price').text(data.total_price);
                $('.badge').text(data.total_item);
            }
        });
    }

    // $('#cart-popover').popover({
    //     html : true,
    //     container: 'body',
    //     content:function(){
    //         return $('#popover_content_wrapper').html();
    //     }
    // });

    $(document).on('click', '.buy_btn', function(e){
        var currentcard =e.target.parentElement; 
        var product_id = $(currentcard).find('.product_id').val();
        console.log(product_id);         
        var product_name = $(currentcard).find('.productor').text();        
        var product_color = $(currentcard).find('img.active').attr('data-image');
        var product_image = $(currentcard).find('img.active').attr('src');
        var full_price= $(currentcard).find('.new_price').text();
        var product_price = Number.parseInt(full_price); 
        console.log(product_price);      
        var quantity= $(currentcard).find('.product_quantity').val();         
        var product_quantity = Number.parseInt(quantity);         
        var action = "add"; 
        if(product_quantity > 0)
        {
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, 
                    product_name:product_name,
                    product_price:product_price,
                    product_quantity:product_quantity,
                    product_image:product_image,
                    product_color:product_color,
                    action:action},
                success:function(data)
                {
                    load_cart_data();
                    $('.additional_part').removeClass( 'removed_cart' ); 
                   
                }
            });
        }
        
    });

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



    $(document).on('click', '.change_amount', function(){
        var $input = $(this).parent().find('input');
        var new_product_quantity = $input.val();
        product_quantity = Number.parseInt(new_product_quantity); 
         // var product_id = $(this).attr("id");
        var newproduct_id = $(this).parent().find(".invisible_data").text();
        var product_id = Number.parseInt(newproduct_id); 
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
                    load_cart_data();   

                    
                }
            })            
        
    });




    $(document).on('click', '.clear_cart', function(){
        var action = 'empty';
        $.ajax({
            url:"action.php",
            method:"POST",
            data:{action:action},
            success:function()
            {
                load_cart_data();
                $('.additional_part').addClass( 'removed_cart' ); 
                
                
            }
        });
    });
    
});

$(document).on('click', '.minus', function(){
 var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                
});

$(document).on('click', '.plus', function(){
 var $input = $(this).parent().find('input');
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change(); 
});





// Отображение данных пользователя отзывы





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











