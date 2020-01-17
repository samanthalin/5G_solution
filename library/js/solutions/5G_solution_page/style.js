$(document).ready(function(){
	
	//second-navbar
	var navBar = $(".second-nav");
	var bnHeight = $(".banner").height();
	$(window).scroll(function() {
	  if( $(this).scrollTop() > bnHeight + 50) {
	    navBar.addClass("navScrolled");
	  } else {
	    navBar.removeClass("navScrolled");
	  }
	});
	$('.second-nav a[href^="#"]').click(function () {
      var target = this.hash;
      $('html, body').stop().animate({
          'scrollTop': $(target).offset().top - 50
      }, 900, 'swing');
    });

	//product popup
	$('.product').click(function(){
		var wdwidth = $(window).innerWidth();
		var wdheight = $(window).innerHeight();
		var direction = wdwidth - wdheight
		if(direction > 0){
			$('.modal-content').addClass('horizontal');
		}else{
			$('.modal-content').removeClass('horizontal');
		};
		var model = $(this).attr('data-target');
		$(model).addClass('show');
		$('.modal-content').addClass('animated');
		$('body').addClass('overflow');
		return false;
	});
	$('.modal .close').click(function(){	
		$('.modal').removeClass('show');
		$('body').removeClass('overflow');
	})

	//sections featured
	$('.sn-nsa .button').click(function() {
		$('.sn-nsa-hidden').toggle();
		$('.sn-nsa-hidden').addClass('animated');
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
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		// asNavFor: '.slider-nav',
		draggable: false,
		swipe: false,
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		draggable: false,
	});
});