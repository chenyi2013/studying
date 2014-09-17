/*
	slipMenu.js
*/
var slipMenu = (function ($) {
	return {
		init: function () {
			var _slipMenu = $('.slipMenu'),
				_slipMenu_li = _slipMenu.find('li'),
				_slipMenu_slider = _slipMenu.find('.slider'),
				_slipMenu_outerWidth = 0,
				_slipMenu_li_margin = 10;

			// 初始化_slipMenu的宽度
			for (var i = 0; i < _slipMenu_li.length; i++) {
				_slipMenu_outerWidth += _slipMenu_li.eq(i).outerWidth() + _slipMenu_li_margin*2;
			}
			_slipMenu.width( _slipMenu_outerWidth ).css({
				'opacity': '1'
			});

		}
	};
})(jQuery);