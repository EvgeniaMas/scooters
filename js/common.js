$(document).ready(function() {
    $(".countdown").countdown({
        date: "17 november 2018 0:00:00",
        format: "on"
    });
    var compareSwiper = new Swiper('.main_swiper', {
        spaceBetween: 30,
        autoplay: 3500,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        effect: 'cube',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        cube: {
            shadow: false,
            slideShadows: false,
        }
    });
    $(".hand_block").animated("slideInLeft");
    var partnerSwiper = new Swiper('.partners_swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            580: {
                slidesPerView: 1,
            }
        }
    });
    var partnerSwiper2 = new Swiper('.partners_swiper_2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });
    $().fancybox({
        selector: '.fancybox',
        loop: true,
        infobar: true,
        animationEffect: "zoom"
    });
    $('.hover_btns .hover_1 button').hover(function() {
        $(".desktop_photo .photo_1").addClass('active')
    }, function() {
        $(".desktop_photo .photo_1").removeClass('active')
    });
    $('.hover_btns .hover_2 button').hover(function() {
        $(".desktop_photo .photo_2").addClass('active')
    }, function() {
        $(".desktop_photo .photo_2").removeClass('active')
    });
    $('.hover_btns .hover_3 button').hover(function() {
        $(".desktop_photo .photo_3").addClass('active')
    }, function() {
        $(".desktop_photo .photo_3").removeClass('active')
    });
    $('.hover_btns .hover_4 button').hover(function() {
        $(".desktop_photo .photo_4").addClass('active')
    }, function() {
        $(".desktop_photo .photo_4").removeClass('active')
    });
    $('.hover_btns .hover_5 button').hover(function() {
        $(".desktop_photo .photo_5").addClass('active')
    }, function() {
        $(".desktop_photo .photo_5").removeClass('active')
    });
    $('.hover_btns .hover_6 button').hover(function() {
        $(".desktop_photo .photo_6").addClass('active')
    }, function() {
        $(".desktop_photo .photo_6").removeClass('active')
    });
    $('.hover_btns .hover_7 button').hover(function() {
        $(".desktop_photo .photo_7").addClass('active')
    }, function() {
        $(".desktop_photo .photo_7").removeClass('active')
    });
    $('.hover_btns .hover_8 button').hover(function() {
        $(".desktop_photo .photo_8").addClass('active')
    }, function() {
        $(".desktop_photo .photo_8").removeClass('active')
    });
    $('.hover_btns .hover_9 button').hover(function() {
        $(".desktop_photo .photo_9").addClass('active')
    }, function() {
        $(".desktop_photo .photo_9").removeClass('active')
    });
    $(function() {
        $(".tel_input").mask("+7 (999) 999 99 99");
    });
    var serviceSwiper = new Swiper('.services_swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 74,
        slidesPerView: 3,
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });
    var reviewSwiper = new Swiper('.reviews_swiper', {
        nextButton: '.next_review',
        prevButton: '.prev_review',
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
    $('.swiper_next_review').on('click', function() {
        reviewSwiper.slideNext();
    });
    $('.swiper_prev_review').on('click', function() {
        reviewSwiper.slidePrev();
    });
    var certificateSwiper = new Swiper('.certificate_swiper', {
        spaceBetween: 35,
        loop: true,
        slidesPerView: 4,
        simulateTouch: false,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        autoplay: 3500,
        paginationClickable: true,
        breakpoints: {
            991: {
                slidesPerView: 3,
                 spaceBetween: 10,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
            // },
            // 399: {
            //     slidesPerView: 2,
            // }
        },
        paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
    $('.next_certificate').on('click', function() {
        certificateSwiper.slideNext();
    });
    $('.prev_certificate').on('click', function() {
        certificateSwiper.slidePrev();
    });
    $(".roof_advantages .item .inner").animated("fadeIn");
    $(".roof_advantages .item .inner .text").animated("zoomIn");
    $(".products_section .item_1, .products_section .item_3").animated("fadeInRight");
    $(".products_section .item_2").animated("fadeInLeft");
    $(".repairs .item_1, .repairs .item_3").animated("fadeInLeft");
    $(".repairs .item_2, .repairs .item_4").animated("fadeInRight");
    $(".repair_list .three_lists .item").animated("zoomInUp");
    $(".repair_list .triangles_block .item").animated("zoomIn");
    $(".insurance .left_in, .certificate_section .item_2").animated("fadeInLeft");
    $(".insurance .right_in, .certificate_section .item_1").animated("fadeInRight");
    $(".insurance .item .printing").animated("jackInTheBox");
    $(".split_advantages .left_item").animated("fadeInLeft");
    $(".split_advantages .right_item").animated("fadeInRight");
    $(".maintenance .left_item").animated("fadeInLeft");
    $(".maintenance .right_item").animated("fadeInRight");
    (function($) {
        $(function() {
            $('.mod_select').styler({});
        });
    })(jQuery);
    var roofSwiper = new Swiper('.roof_gallery_swiper', {
        pagination: '.roof_pagination',
        nextButton: '.next_roof',
        prevButton: '.prev_roof',
        paginationClickable: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: 995500,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    $(".main_header .navbar-nav li a[href*='#'], .main_footer .nav_block .footer_nav li a[href*='#']").mPageScroll2id();
    $("#modal_main_form, #card_form, #question_form, #offer_form, #question_modal_form, #order_main_form, #discount_form, .roof_modal_form, #repair_modal_form, #specialist_form, #product_form, #services_form, #order_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                $(".main_modal").modal("hide");
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $("#special_form, #cleaning_form, .modal_service_form, #repair_unical, #consult_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send2.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                $(".service_modal").modal("hide");
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $("#windows_calc_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send3.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                $(".main_modal").modal("hide");
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $("#quest_form, #repairs_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send4.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $(".accessories .accessories_btn").click(function() {
        selectedCheckboxValue = ""
        $('.accessories .item input:checked').each(function() {
            selectedCheckboxValue += $(this).val() + "; ";
        });
        $(".modal_form #accessories_input").val(selectedCheckboxValue)
    });
    $("#specialisct_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send5.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                $(".main_modal").modal("hide");
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $("#download_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                $(".main_modal").modal("hide");
                file = document.getElementById("download_file")
                onload = file.click()
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $("#roof_form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://l-eve-l.ru/php/send6.php",
            data: form_data,
            success: function() {
                $(this).trigger('reset');
                setTimeout(function() {
                    $('#thank_modal').modal("show")
                }, 500);
            }
        });
    });
    $(".repair_list .item .modal_btn").click(function() {
        var inp = $(this).parent().find(".item_header .title").html();
        $("#repair_modal .modal_title").html(inp);
        $("#hidden_repair_input").attr("value", inp);
    });
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('#parallax').css('top', (scrollTop * -.70) + 'px')
    });
    $(".split_products .item .buy_btn").click(function() {
        var order = $(this).parent().find(".item_header p").html();
        $("#order_modal .modal_title").html(order);
        $("#order_name").attr("value", order);
    });
    $('.item_swiper').each(function(index) {
        var itemSwiper = new Swiper($(this)[0], {
            spaceBetween: 30,
            autoplayDisableOnInteraction: false,
            loop: true,
            nextButton: $(this).siblings(".next_item"),
            prevButton: $(this).siblings(".prev_item"),
        });
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $('#to_top').fadeIn();
        } else {
            $('#to_top').fadeOut();
        }
    });
    $('#to_top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $(window).scroll(function() {
        $('.why_us .item .item_title').each(function() {
            if ($(window).scrollTop() > $(this).offset().top - $(window).height()) {
                $(this).addClass('active');
            }
        });
    });
});