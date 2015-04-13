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

	$.title = function ( title ) {
		return typeof title === 'undefined' ? document.title : (document.title = title);
	};

})(Core);


/*

//	插件编写规则
//	建议全部采用 
//	(function ($) {
//		...
//	})(Core);
//	格式
//	防止与其他"$型"框架冲突
// ==============================================================

//单个函数
(function ($) {
	$.extend('fontColor', function ( color ) {
		this.css('color', color);
	});
})(Core);


//多个函数
(function ($) {
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


//挂载在$下的全局方法
(function ($) {
	$.title = function ( title ) {
		return typeof title === 'undefined' ? document.title : (document.title = title);
	};	
})(Core);

*/