$(function () {
	$('.j-menu-toggle').on('touchstart', function () {
		$('html').addClass('menuShow');
	});

	$('.menumask').on('touchstart', function () {
		$('html').removeClass('menuShow');		
	})
});