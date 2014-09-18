/*
	slipMenu.js
*/
var slipMenu = (function ($) {

	var _slipMenu = $('.slipMenu'),
		_slipMenu_li = _slipMenu.find('li'),
		_slider = _slipMenu.find('.slider'),
		_slipMenu_outerWidth = 0,
		_slipMenu_li_margin = 0;

	var cat = {
		index: function () {
			for (var i = 0; i < _slipMenu_li.length; i++) {
				if ( _slipMenu_li.eq(i).hasClass('current-cat') ) {
					return i;
				}
			}					
		},

		styles: function ( index ) {
			var _index = typeof index == 'undefined' ? cat.index() : index,
				_left = 0,
				_width = 0;

			for (var i = 0; i < _index; i++) {
				_left += _slipMenu_li.eq(i).outerWidth() + _slipMenu_li_margin * 2;
			}
			_left += _slipMenu_li_margin + 10;

			_width = _slipMenu_li.eq(_index).outerWidth() - 20;

			return {
				left: _left,
				width: _width
			};
		}
	};

	return {
		init: function () {

			// 初始化_slipMenu的宽度
			for (var i = 0; i < _slipMenu_li.length; i++) {
				_slipMenu_outerWidth += _slipMenu_li.eq(i).outerWidth() + _slipMenu_li_margin*2;
			}
			_slipMenu.width( _slipMenu_outerWidth ).css({
				'opacity': '1'
			});

			var _init_left = cat.styles().left,
				_init_width = cat.styles().width;

			_slider.css({
				'left': _init_left,
				'width': _init_width
			}).show();


			for (var i = 0; i < _slipMenu_li.length; i++) {
				(function (i) {
					var _this = _slipMenu_li.eq(i);

					_this.hover(function () {

						var _left = 0;

						_slipMenu_li.find('a').css({
							'color': '#333'
						});

						_this.find('a').css({
							'color': '#36f'
						});

						for (var j = 0; j < i; j++) {
							_left += _slipMenu_li.eq(j).outerWidth() + _slipMenu_li_margin*2;
						}
						_left += _slipMenu_li_margin + 10;

						_slider.stop().animate({
							'left': _left,
							'width': _this.outerWidth() - 20
						}, 'fast');

					}, function () {

						_slipMenu_li.find('a').css({
							'color': '#333'
						});

						_slipMenu.find('.current-cat a').css({
							'color': '#36f'
						});

						_slider.stop().animate({
							'left': _init_left,
							'width': _init_width
						}, 'fast');
					});
				})(i);
			}
		}
	};
})(jQuery);