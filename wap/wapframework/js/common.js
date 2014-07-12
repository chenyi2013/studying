$(function () {
	$('.j-menu-toggle').on('click', function () {
		$('html').addClass('menuShow');
		//setTimeout(function () {
			$('.menumask').css({
				'background': 'rgba(255, 255, 255, 0.5)'
				// 'opacity': '1'
			});
		//}, 500);
	});

	$('.menumask').on('click', function () {
		$('html').removeClass('menuShow');		
	})
});