$(window).on('load', function(){
	if($(window).width() > 900){
		$('.left-box').css('width', 0);
		$('.right-box').css('width', 0).addClass('right-box__invisible');
		$('.left-box').animate({width: 308}, 500, function(){
			$('.right-box').animate({width: 470, 'overflow': 'visible'}, 500, function(){
				$('.right-box').removeClass('right-box__invisible');
			} );
		});
	}
});
		
$(document).ready(function(){
	$('input').on('change', function(){
		$(this).removeClass('invalid').parents('.fielddgroup').find('.error').text('');
	});
	$('form').on('submit', function(e){
		var name = $('input[name="name"]');
		var phone = $('input[name="phone"]');
		if (name.val() == "") {
			name.addClass('invalid').parents('.fielddgroup').find('.error').text('*Field is required');
			e.preventDefault();
		}
		if( !/^\d+$/.test(phone.val()) || phone.val().length !== 6){
			phone.addClass('invalid').parends('.fieldgroup').find('.error').text('*6 digit number required');
			e.preventDefault();
		}
	}); 
});