// ==================================================================
// Author          : tean Codiov
// Making          : Niran Yousuf & Ibrahim hasnat
// Version         : 1.03
// Visit Us        : www.codiov.com
// ==================================================================
(function (jQuery) {
	'use strict';
    jQuery(document).ready(function ($) {
        
		// magnific image popup script -----------------------------
        $('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // owl carousel script -------------------------------------
        $('#testimonial').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			responsive: {
				300: {items:1},
				600: {items:1},
				1000: {items:2}
			}
			
        });
        
        // jQuery scroll spy ---------------------------------------
        $('body').scrollspy({
            target: '.navbar',
            offset: 80
        });
        
        // Jquery Smooth Scroll ------------------------------------
        $('a.smooth').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 70
            }, 1000);
            e.preventDefault();
        });
        
        // sticky menu --------------------------------------------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 36) {
                $('.menubar').addClass('sticky');
            } else {
                $('.menubar').removeClass('sticky');
            }
        });
        
        
        // slicknav responsive mobile menu menu --------------------
        $('#menu').slicknav();
        $('.slicknav_nav').on('click', function () {
            $(this).css('display', 'none').addClass('slicknav_hidden');
            $('.slicknav_btn').removeClass('slicknav_open').addClass('slicknav_collapsed');
        })
        
        // wow js animation plugin --------------------------------
        new WOW().init();
    });
    
    // preloader script -------------------------------------------
    $(window).on('load', function () {
        setTimeout(function(){
            $('#preloader')
                .fadeOut('slow')
        },1000);
    }); 
}(jQuery));