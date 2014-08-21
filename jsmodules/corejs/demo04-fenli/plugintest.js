(function ($) {
	
	$.extend('bgColor', function ( color ) {
		// console.log(this);
		this.css('backgroundColor', color)
	});


	$.extend('fontColor', function ( color ) {
		this.css('color', color);
	});


	$.extend({
		fontBlod: function ( boldtest ) {
			this.css('fontWeight', boldtest);
			console.log('fontBold');
		},
		sayHi: function () {
			console.log('hi');
		}
	});
})(Core);