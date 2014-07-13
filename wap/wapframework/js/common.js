$(function () {
	$('.j-menu-toggle').on('click', function () {
		$('html').addClass('menuShow');
/*		setTimeout(function () {
			$('.menumask').css({
				'background': 'rgba(255, 255, 255, 0.5)'
				// 'opacity': '1'
			});
		}, 500);*/
	// $('.container').animate({'opacity': '0.5'}, '100');
		// $('.container').css({'opacity': '0.5'});
	});

	$('.menumask').on('click', function () {
		$('html').removeClass('menuShow');
		$('body').css({
			'overflow-x': 'hidden'
		});
		setTimeout(function () {
			$('body').css({
				'overflow-x': 'none'
			});
		}, 300);
	// $('.container').animate({'opacity': '1'}, '100');

	})
});