/*
0	0
1	220
2	440
3   660
4   880
*/

var pubuliu03 = (function ($) {
	return {
		init: function () {
			var _uList = $('.lists'),
				_list = _uList.find('.list'),

				//列表之间的距离
				_listMargin = 20,

				//列表的宽度
				_listOuterWidth = _list.eq(0).outerWidth(),

				//所有列的高度
				_colsHeight = [],

				//列的高度的最小值
				_colsHeight_min = 0,

				//列的高度的最大值
				_colsHeight_max = 0,

				//每个元素的位置
				_pos = {
					top: 0,
					left: 0
				};

			// 第一行处理
			for (var i = 0; i < 5; i++) {
				_list.eq(i).css({
					'left': (_listOuterWidth+_listMargin)*i,
					'top': 0
				});
				// _list[i].style.cssText = 'left:' + (_listOuterWidth+_listMargin)*i + 'px; top: 0px;'; 
			}


			function getPosition () {

				//分列存储
				// var _height = [];
				for (var i = 0; i < 5; i++) {
					_colsHeight[i] = 0;
				}
				for (var i = 0; i < _list.length; i++) {
					var _this = _list[i],
						_left = $(_this).css('left');
					// console.log(_left);
					for (var j = 0; j < 5; j++) {
						if ( _left == (_listOuterWidth + _listMargin) * j + 'px' ) {
							_colsHeight[j] += (0 + $(_this).outerHeight() + _listMargin);
							// _colsHeight[j] = _height[j];
						}
					}
				}

				// console.log(_colsHeight);

				_colsHeight_max = Math.max.apply(Math, _colsHeight);
				_pos.top = _colsHeight_min = Math.min.apply(Math, _colsHeight);

				for (var i = 0; i < _colsHeight.length; i++) {
					if ( _colsHeight_min == _colsHeight[i] ) {
						_pos.left = (_listOuterWidth + _listMargin)*i;
					}
				}
			}

			function run () {
				for (var i = 5; i < _list.length; i++) {
					getPosition();
					_list.eq(i).css({
						'left': _pos.left,
						'top': _pos.top
					});
					// _list[i].style.cssText = 'left:' + _pos.left + 'px; top:' + _pos.top + 'px;';

					if ( i == _list.length - 1 ) {
						getPosition();
						for (var j = 0; j < _colsHeight.length; j++) {
							if ( _colsHeight_max != _colsHeight[j] ) {
								$('.padding').eq(j).css({
									'top': _colsHeight[j],
									'left': (_listOuterWidth + _listMargin)*j,
									'height': _colsHeight_max - _colsHeight[j] - 20
								});
							}
						}
					}
				}
			}

			run();




/*			function getPosition () {
				var _cols1 = 0,
					_cols2 = 0,
					_cols3 = 0,
					_cols4 = 0,
					_cols5 = 0;

				for (var i = 0; i < _list.length; i++) {
					var _left, _this;

					_this = _list.eq(i);
					_left = _this.css('left');
					_item = _list.eq(0).width();



					// console.log(_left);

					if ( _left == _listOuterWidth*0 ) {
						_cols1 += _this.height() + 20;
					} else if ( _left == _listOuterWidth*1 ) {
						_cols2 += _this.height() + 20;
					} else if ( _left == _listOuterWidth*2 ) {
						_cols3 += _this.height() + 20;
					} else if ( _left == _listOuterWidth*3 ) {
						_cols4 += _this.height() + 20;	
					} else if ( _left == _listOuterWidth*4 ) {
						_cols5 += _this.height() + 20;
					}
				}

				_CosListTop = [
					_cols1,
					_cols2,
					_cols3,
					_cols4,
					_cols5
				];


				_minHeight = Math.min.apply(Math, _CosListTop);
				_maxHeight = Math.max.apply(Math, _CosListTop);

				// var _theLeft = 0;
				for (var i = 0; i < _CosListTop.length; i++) {
					if (_minHeight == _CosListTop[i]) {
						if (i == 0) {
							_theLeft = _RowListLeft[0];
						} else if ( i == 1 ) {
							_theLeft = _RowListLeft[1];						
						} else if ( i == 2 ) {
							_theLeft = _RowListLeft[2];
						} else if ( i == 3 ) {
							_theLeft = _RowListLeft[3];
						} else if ( i == 4 ) {
							_theLeft = _RowListLeft[4];						
						}
					}
				}
			}*/





/*			for (var i = 5; i < _list.length; i++) {
				getPosition();
				_list.eq(i).css({
					'top': _minHeight,
					'left': _theLeft
				});
				if ( i == _list.length - 1 ) {
					getPosition();
					console.log('maxHeight' + _maxHeight);
					console.log('minHeight' + _minHeight);
					console.log(_CosListTop);

					// $('.lists').height( _maxHeight - 20 );

					for (var j = 0; j < _CosListTop.length; j++) {
						if ( _CosListTop[j] != _maxHeight ) {
							$('.lists .padding').eq(j).css({
								'left': _RowListLeft[j],
								'top': _CosListTop[j],
								'height': _maxHeight - _CosListTop[j] - 20
							});
						}
					}
				}
			}*/









		}
	};
})(jQuery);