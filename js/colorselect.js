// Смена картинок по кнопкам в модальных окнах
$('button.radio_modal').on('click', function(e) { 
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
// Переключение цветов в витрине на главной
$('.radio').on('click', function(e) {       
        var currentcard = e.target.parentElement.parentElement.parentElement;
        var attributes = e.target.parentElement.getAttribute('data-color');
        // console.log(attributes);
        var a = e.target.parentElement;      
        var colors = $(currentcard).find('.active');
        $(colors).removeClass('active');
        $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active');
   
});
$(document).ready(function(){
    load_cart_data();
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
                
                 if(data.new_item <1) {
                    $('.additional_part').addClass( 'removed_cart' ); 
                 }
                 else {
                     $('.additional_part').removeClass( 'removed_cart' );
                 }                
            }
        });
    }
$(document).on('click','.carousel-control.right', function(e){
var currentblock =e.target.parentElement.parentElement;
var currentpopup =currentblock.parentElement.parentElement;
var slides= $(currentblock).find('img.slides_images');
var active_slide = $(currentblock).find('.item.active img');
var selected_index = $(active_slide).parent().index();  
// alert(slides.length); 
var active_color= '';
if(selected_index==0){
active_color = $(slides[1]).attr('data-color'); 
}
if(selected_index==slides.length-1){
active_color = $(slides[0]).attr('data-color');    
}
else{
active_color = $(slides[selected_index+1]).attr('data-color');     
}
var toggling= $(currentpopup).find('button.radio_modal');
$( toggling).each(function() {
if ($(this).attr('data-color') == active_color) {
$(this).addClass('selected'); 
$(currentpopup).find('.modal_color').text(active_color);       
}
else{
$(this).removeClass('selected');
}
});
});
$(document).on('click','.carousel-control.left', function(e){
var currentblock =e.target.parentElement.parentElement;
var currentpopup =currentblock.parentElement.parentElement;
var slides= $(currentblock).find('img.slides_images');
var active_slide = $(currentblock).find('.item.active img');
var selected_index = $(active_slide).parent().index();  
var active_color= '';
if(selected_index==0){
active_color = $(slides[slides.length-1]).attr('data-color');
}
else{
active_color = $(slides[selected_index-1]).attr('data-color');     
}
var toggling= $(currentpopup).find('button.radio_modal');
$( toggling).each(function() {
if ($(this).attr('data-color') == active_color) {
$(this).addClass('selected');
$(currentpopup).find('.modal_color').text(active_color);         
}
else{
$(this).removeClass('selected');
}
});
});

$(document).on('click','.thumb', function(e){
var currentblock =e.target.parentElement.parentElement;
var currentpopup =currentblock.parentElement.parentElement.parentElement.parentElement.parentElement;
var active_thumb= $(e.target).attr('data-color');
var toggling= $(currentpopup).find('button.radio_modal');
 $( toggling).each(function() {
  if ($(this).attr('data-color') == active_thumb) {
   $(this).addClass('selected');
  $(currentpopup).find('.modal_color').text(active_thumb);         
  }
  else{
  $(this).removeClass('selected');
   }
 });
});
$(document).on('click', '.order_btn', function(e){
        var modals_desc = $('.modal_exra_info').hide('fast');
         var currentblock =e.target.parentElement;        
        var quantity = $(currentblock).find('.modal_popup').val();         
         var product_quantity = Number.parseInt(quantity);
         var currentmodal =currentblock.parentElement.parentElement;            
         var product_id = $(currentmodal).find('.product_id').val();         
         var product_name = $(currentmodal).find('.productor').text();
         var product_color = $(currentmodal).find('button.selected').attr('data-color'); 
         var images = $(currentmodal).find('img.selection_options');        
         var options= $(currentmodal).find('button.radio_modal');
         var selected_index =0;         
         $(options).each(function(index){
           if ($(this).hasClass('selected'))
            selected_index =index;           
         });
         var product_image = $(images[selected_index]).attr('src');         
         var color_class =''; 
         if (product_color == 'серый'){
             color_class= 'grey';         }
         else if (product_color == 'голубой'){
              color_class= 'blue';
         } 
         else if (product_color == 'белый'){
              color_class= 'white';
         }
         else{
             color_class= 'black';
         }
        
         
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

// Замена текста кнопки заказа дополнительных товаров
$('.extra_goods').on('click', function(e) {
    var button_clicked = this;    
    $(this).text('Добавлено');
   setTimeout(function() { $(button_clicked).text('Заказать') }, 1500);
});
    $(document).on('click', '.delete', function(){
        var product_id = $(this).attr("id");
        var product_color =$(this).attr('data-color'); 
        var action = 'remove';       
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, action:action,
                    product_color:product_color},
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
        var product_color = $(this).parent().find(".invisible_data_color").text();
        var product_id = Number.parseInt(newproduct_id);
                var action = 'update'; 
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{product_id:product_id, 
                product_quantity:product_quantity,
                product_color:product_color,
                action:action},
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

//Маска для телефона
$(function() {
    $("input[type='phone']").mask("+7(999) 999-99-99");   
});
$(document).on('click', 'input[type="phone"]', function(){
$(this).focus();
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
// $('.time_start').attr("placeholder", time_call_start);
var time_call_ends= 'до '+  end_time + '.00';   
// $('.time_over').attr("placeholder", time_call_ends);
$('#count_time_end').val(time_call_ends);  
$('#count_time_start').val(time_call_start); 
$('#count_time_end1').val(time_call_ends);  
$('#count_time_start1').val(time_call_start);
}
function check_time(){
   if (end_time <= start_time ){
           end_time= start_time+1; 
        }
    else {
        return false;
    }      
}
// почта
$(document).ready(function() { 
    $("#cart_form").submit(function(){ 
        var form = $(this); 
        var error = false; 
        form.find('input.required_data').each( function(){ 
            if ($(this).val() == '') { 
                form.find('.error').text('Зaпoлнитe поля!');
                error = true; 
            }
        });
        if (!error) { 
            var data = form.serialize(); 
            $.ajax({ 
                type: 'POST', 
                url: 'cart.php', 
                dataType: 'json', 
                data: data,
                beforeSend: function(data) { 
                    form.find('button[type="submit"]').attr('disabled', 'disabled'); 
                },
                success: function(data){ 
                    if (data['error']) { 
                        alert(data['error']);
                    } else {                                                                          
                          $('#order_modal').modal('hide');
                          $('#thank_page').modal('show');
                          $('#bought_products').html(data.cart_to_display);                                  
                           
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) { 
                    alert(xhr.status); 
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false); 
                }
                          
                 });
        }
        return false;
    });
});
$(document).ready(function() { 
    $(".get_free_bag").submit(function(){ 
        var form = $(this); 
        var error = false; 
        form.find('input.required_data').each( function(){ 
            if ($(this).val() == '') { 
                // $(this).сss({ "background-color": "#000",
                // "border-left": "1px solid green" });
                form.find('.error').text('Зaпoлнитe поля!');
                // alert(form.find('.error');
                error = true; 
            }
        });
        if (!error) { 
            var data = form.serialize(); 
            $.ajax({ 
                type: 'POST', 
                url: 'bag.php', 
                dataType: 'json', 
                data: data,
                beforeSend: function(data) { 
                    form.find('button[type="submit"]').attr('disabled', 'disabled'); 
                },
                success: function(data){ 
                    if (data['error']) { 
                        alert(data['error']);
                    } else { 
                         $('#free_bag').modal('hide');
                         $('#thank').modal('show');
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) { 
                    alert(xhr.status); 
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false); 
                }
                          
                 });
        }
        return false;
    });
});
$(document).ready(function() { 
            $(".form_backcall").submit(function(){ 
                var form = $(this); 
                var error = false; 
                form.find('input.required_data').each( function(){ 
                    if ($(this).val() == '') { 
                        form.find('.error').text('Зaпoлнитe поля!');
                        error = true; 
                    }
                });
                if (!error) { 
                    var data = form.serialize(); 
                    $.ajax({ 
                        type: 'POST', 
                        url: 'call.php', 
                        dataType: 'json', 
                        data: data,
                        beforeSend: function(data) { 
                            form.find('button[type="submit"]').attr('disabled', 'disabled'); 
                        },
                        success: function(data){ 
                            if (data['error']) { 
                                alert(data['error']);
                            } else {
                                $('#backcall').modal('hide');                                
                                $('#thank').modal('show'); 
                                
                            }
                        },
                        error: function (xhr, ajaxOptions, thrownError) { 
                            alert(xhr.status); 
                            alert(thrownError);
                        },
                        complete: function(data) {
                            form.find('button[type="submit"]').prop('disabled', false); 
                        }
                                  
                         });
                }
                return false;
            });
        });

// Предзагрузка видео 

$(function() {
    $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
 });

$(document).ready(function() {
  var url = window.location.href;
  if (url.indexOf('#s2') > -1) { 
    $("#s2-modal").modal('show');
  }
  else if (url.indexOf('#s3') > -1) { 
    $("#s3-modal").modal('show');
  }
  else if (url.indexOf('#m2') > -1) { 
    $("#m2-modal").modal('show');
  }
  else if (url.indexOf('#m3') > -1) { 
    $("#m3-modal").modal('show');
  }
  else if (url.indexOf('#mpro') > -1) { 
    $("#m3pro-modal").modal('show');
  }
  else if (url.indexOf('#mlux') > -1) { 
    $("#m3lux-modal").modal('show');
  }
});

$('a.catalog_info').on('click', function(event) {
  event.preventDefault();
  window.location =  $( this ).attr('href');
});