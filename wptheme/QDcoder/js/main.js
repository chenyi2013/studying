$(function () {
	var qdcoder = {
		hdFix: function () {
			$(window).scroll(function () {
			console.log($(window).scrollTop());
				if ( $(window).scrollTop() >= $('.header').height() ) {
					if ( !$('.header').hasClass('show') ) {
						$('.header').addClass('show');
						$('.header-fixed').show().animate({'top': '0'}, 400);
					}
				} else {
					if ( $('.header').hasClass('show') ) {
						$('.header').removeClass('show');
						$('.header-fixed').animate({'top': '-51px'}, 400, function () {
							$(this).hide();
						});
					}				
				}
			});
		}
	};

	if ( $('.content-home').length  > 0 ) {
		qdcoder.hdFix();
	}
});