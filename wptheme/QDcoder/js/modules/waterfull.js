var waterfull = (function ($) {
	return {
		init: function () {

			var _list = $('.entry-list article'),
				_cols = 3,
				_listOuterWidth = _list.eq(0).outerWidth(),
				_listMargin = 20,
				_colsHeight = [],
				_colsHeight_max = 0;
				_colsHeight_min = 0,
				_pos = {
					top: 0,
					left: 0
				};

			//初始化第一行
			for (var i = 0; i < _cols; i++) {
				_list.eq(i).css({
					'top': 0,
					'left': (_listOuterWidth + _listMargin*2)*i
				});	
			}


			function getPos () {
				//初始化行高
				for (var i = 0; i < _cols; i++) {
					_colsHeight[i] = 0;
				}

				//累计每一列的高度
				for (var i = 0; i < _list.length; i++) {
					var _tempLeft = parseInt( _list.eq(i).css('left') );
					for (var j = 0; j < _cols; j++) {
						if ( _tempLeft == (_listOuterWidth + _listMargin*2)*j ) {
							_colsHeight[j] += _list.eq(i).outerHeight() + _listMargin;
						}
					}
				}

				//找出高度最小的列以及高度最大的列
				_colsHeight_max = Math.max.apply(Math, _colsHeight);
				_colsHeight_min = Math.min.apply(Math, _colsHeight);

				//下一个元素的top值
				_pos.top = _colsHeight_min;

				//计算下一个元素的left值
				for (var i = 0; i < _colsHeight.length; i++) {
					if (_colsHeight_min == _colsHeight[i]) {
						_pos.left = (_listOuterWidth + _listMargin*2)*i;
						break;
					}
				}
			}


			for (var i = _cols; i < _list.length; i++) {
				getPos();
				_list.eq(i).css({
					'top': _pos.top,
					'left': _pos.left
				});

				if ( i == _list.length - 1 ) {
					getPos();
					$('.entry-list').height( _colsHeight_max );
				}
			}



		}
	};
})(jQuery);