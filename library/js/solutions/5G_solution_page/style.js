$(document).ready(function(){
	
	var navBar = $(".second-nav");
	var bnHeight = $(".banner").height();
	$(window).scroll(function() {
	  if( $(this).scrollTop() > bnHeight + 50) {
	    navBar.addClass("navScrolled");
	  } else {
	    navBar.removeClass("navScrolled");
	  }
	});

	$('.product').click(function(){
		var wdwidth = $(window).innerWidth();
		var wdheight = $(window).innerHeight();
		var direction = wdwidth - wdheight
		if(direction > 0){
			$('.modal-content').addClass('horizontal');
		}else{
			$('.modal-content').removeClass('horizontal');
		};
	});

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
	var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
						.setPin("#pin2")
						.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
});