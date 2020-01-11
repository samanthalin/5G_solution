$(document).ready(function(){
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
});
