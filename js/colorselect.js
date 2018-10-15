// Смена картинок в витрине

$('.radio').on('click', function(e) {       
        var currentcard = e.target.parentElement.parentElement.parentElement;
        var attributes = e.target.parentElement.getAttribute('data-color');
        console.log(attributes);
        var a = e.target.parentElement;      
        var colors = $(currentcard).find('.active');
        $(colors).removeClass('active');
        $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active');
    });
$('button.radio_modal').on('click', function(e) { 
     // var a= $(this).find('input[type="radio"]').attr("checked","checked"); 
     // console.log(a);  
     var current_color_modal= $(this).attr('data-color'); 
     var current_color_text= $(this).parent;    
     $('.modal_color').text(current_color_modal);
     var classes=  $(this).parent;
     var toggling= $('button.radio_modal');

     $( toggling).each(function() {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        }
    });
     $(e.target).addClass("selected");
});


$('.radio').on('click', function(e) {       
        var currentcard = e.target.parentElement.parentElement.parentElement;
        var attributes = e.target.parentElement.getAttribute('data-color');
        console.log(attributes);
        var a = e.target.parentElement;      
        var colors = $(currentcard).find('.active');
        $(colors).removeClass('active');
        $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active');
    
});
// Замена текста кнопки заказа дополнительных товаров
$('.extra_goods').on('click', function(e) {
    var button_clicked = this;
    console.log(button_clicked);
    $(this).text('Добавлено');
   setTimeout(function() { $(button_clicked).text('Заказать') }, 1500);
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
                $('#form_to_send').html(data.cart);
                
                console.log


                 if(data.new_item <1) {
                    $('.additional_part').addClass( 'removed_cart' ); 
                 }
                 else {
                     $('.additional_part').removeClass( 'removed_cart' );
                 }                
            }
        });
    }
 $(document).on('click', '.order_btn', function(e){
        var modals_desc = $('.modal_exra_info').hide('fast');
         var currentblock =e.target.parentElement;        
        var quantity = $(currentblock).find('.modal_popup').val();         
        var product_quantity = Number.parseInt(quantity);
         var currentmodal =currentblock.parentElement.parentElement;            
         var product_id = $(currentmodal).find('.product_id').val();         
         var product_name = $(currentmodal).find('.productor').text();
         var product_color = $(currentmodal).find('button.selected').attr('data-color'); 
         console.log(product_color); 
         var color_class= 'black';
         
         if (product_color == 'серый'){
             color_class= 'grey';
         }
         else if (product_color == 'голубой'){
              color_class= 'blue';
         }  

        //  console.log(color_class);
         
        //  console.log(product_image);       
        // console.log(color_class); 
        var product_image = $(currentmodal).find('div.active.item').find('img').attr('src');
        var full_price= $(currentmodal).find('.new_price').text();
        var product_price = Number.parseInt(full_price); 
 
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
                    color_class: color_class,
                    action:action},
                success:function(data)
                {
                    load_cart_data();                    
                   
                }
            });
        }        
    });

 $(document).on('click', '.buy_btn', function(e){
        var currentcard =e.target.parentElement;        
        var product_id = $(currentcard).find('.product_id').val();                
        var product_name = $(currentcard).find('.productor').text(); 
        var product_color =$(currentcard).find('input[type="radio"]:checked').val();  
        var color_class= $(currentcard).find('input[type="radio"]:checked').attr("class");
        var product_image = $(currentcard).find('img.active').attr('src');
        console.log(product_image);
        var full_price= $(currentcard).find('.new_price').text();
        var product_price = Number.parseInt(full_price);              
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
                    color_class: color_class,
                    action:action},
                success:function(data)
                {
                    load_cart_data();                    
                   
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
                var action = 'update'; 
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, product_quantity:product_quantity, action:action},
                success:function()
                {
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
        $(".scrolling_link").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
            });
});
// Пролистывание сайта из первого экрана
$('.scroll_page').on('click', function() {
  $('html,body').animate({scrollTop:$('.advantages').offset().top+"px"},{duration:1E3});
});
// Скрипт времени
var start_time=9;
var end_time=20;
$(document).on('click', '.less_start_period', function(){
    if(start_time > 9 && start_time<= 20){
        start_time = start_time-1;
        if (end_time < start_time){
           end_time = start_time+1; 
        }
    }
    check_time();
    update_time();
});
$(document).on('click', '.more_start_period', function(){
    if(start_time>=9 && start_time <20){
        start_time = start_time+1;
        if (end_time < start_time){
           end_time= start_time+1; 
        }        
    }
    check_time();
    update_time(); 
});
$(document).on('click', '.more_end_period', function(){
    if( end_time>=9 && end_time <20){
        end_time = end_time+1;
        if (end_time < start_time){
           end_time= start_time+1; 
        }        
    }
    check_time();
    update_time();  
});
$(document).on('click', '.less_end_period', function(){
    if(start_time>=9 && start_time <20){
        end_time = end_time-1;
          
    }
    check_time();
    update_time();   
});
function update_time(){
var time_call_start= 'c ' + start_time + '.00';
$('.time_start').attr("placeholder", time_call_start);
var time_call_ends= 'до '+  end_time + '.00';   
$('.time_over').attr("placeholder", time_call_ends); 
}
function check_time(){
   if (end_time <= start_time ){
           end_time= start_time+1; 
        }
    else {
        return false;
    }      
}







