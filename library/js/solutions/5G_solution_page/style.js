$(document).ready(function(){
	//second-navbar
	var nav = $('.second-nav');
	$(window).scroll(function () {
		var a = $(window).scrollTop();
		if (a >= window.innerHeight) {
			nav.addClass("navScrolled")
		} else {
			nav.removeClass("navScrolled")
		}
	});
	$('.second-nav a[href^="#"]').click(function () {
      var target = this.hash;
      $('html, body').stop().animate({
          'scrollTop': $(target).offset().top - 50
      }, 900, 'swing');
      $('.second-nav .active').removeClass('active');
      $(this).addClass('active');
    });
    $('.second-nav .contact-form').click(function(){
		$('html, body').animate({
		    scrollTop: ($('#featured-products').offset().top - 50)
		}, 0);
		$('#contactForm').addClass('show');
		$('#contactForm .popup-content').addClass('animated');
		$('body').addClass('overflow');
		$('.second-nav .active').removeClass('active');
      	$(this).addClass('active');
	});

	//product popup
	$('#featured-products .product').click(function(){
		var wdwidth = $(window).innerWidth();
		var wdheight = $(window).innerHeight();
		var direction = wdwidth - wdheight
		if(direction > 0){
			$('.popup-content').addClass('horizontal');
		}else{
			$('.popup-content').removeClass('horizontal');
		};
		var model = $(this).attr('data-target');
		$(model).addClass('show');
		$('.popup-content').addClass('animated');
		$('body').addClass('overflow');
		$('html, body').animate({
		    scrollTop: ($('#featured-products').offset().top - 50)
		}, 0);
	});
	$('.popup .cross').click(function(){	
		$('.popup').removeClass('show');
		$('body').removeClass('overflow');
		$('html, body').animate({
		    scrollTop: ($('#featured-products').offset().top - 50)
		}, 0);
	})

	//contact popup
	$('.featured-products .button').click(function(){
		$('#contactForm').addClass('show');
		$('.popup-content').addClass('animated');
		$('body').addClass('overflow');
		$('html, body').animate({
		    scrollTop: ($('#featured-products').offset().top - 50)
		}, 0);
	});
	$('#contactForm .close').click(function(){	
		$('#contactForm').removeClass('show');
		$('body').removeClass('overflow');
		$('html, body').animate({
		    scrollTop: ($('#featured-products').offset().top - 50)
		}, 0);
	})

	//video popup
	$('#overview button').click(function() {
		$('#video').addClass('show');
		$('body').addClass('overflow');
		$('html, body').animate({
		    scrollTop: ($('#overview').offset().top - 150)
		}, 0);
		$('#video .video').addClass('animated');
	});
	$('#video .close').click(function() {
		$('#video').removeClass('show');
		$('body').removeClass('overflow');
		$('html, body').animate({
		    scrollTop: ($('#overview').offset().top - 150)
		}, 0);
	});


	//sections featured
	$('.sn-nsa .button').click(function() {
		$('.sn-nsa-hidden').toggle();
		$('.sn-nsa-hidden').addClass('animated');
		$('.switch a').removeClass('active');
		$('.switch a[href="#standalone"]').addClass('active');
		$('#non-standalone').hide();
		$('#standalone').show();
		return false;
	});
	$('.switch a').click(function() {
		$('.switch a').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.panel-content').hide();
		$(href).show();
		$(href).addClass('animated');
		return false;
	});
	$('.scenarios a').click(function() {
		$('.scenarios a').removeClass('active');
		$(this).addClass('active');
		$('.scenarios-panel .scene').removeClass('active');
		var href = $(this).attr('href');
		$(href).addClass('active');
		$('.scene').hide();
		$(href).show();
		$(href).addClass('animated');
		return false;
	});
});