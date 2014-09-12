var pubuliu02 = (function ($) {
	return {
		init: function () {
			var _uList = $('.lists'),
				_list = _uList.find('.list'),


				_rowNum = 5,
				_arrFirstRowLists = [
					_list[0],
					_list[2],
					_list[3],
					_list[4],
					_list[5]
				],
				_RowListLeft = [
					10,
					230,
					450,
					670,
					890
				],
				_CosListTop = [
					0,
					0,
					0,
					0,
					0
				],
				_minHeight = 0,
				_maxHeight = 0,
				_theLeft = 0,

				_marginL = 10,
				_marginT = 20,
				_listW = 200;

			//对第一列数据进行初始化
/*			_list.eq(0).css({'left': 10});
			_list.eq(1).css({'left': 200+30 });
			_list.eq(2).css({'left': 400+50 });
			_list.eq(3).css({'left': 600+70 });
			_list.eq(4).css({'left': 800+90 });*/
			var _tempArr = [];
			for (var i = 0; i < 5; i++) {
				_list.eq(i).css({
					'left': _RowListLeft[i],
					'top': _CosListTop[i]
				});
			}



			function getPosition () {
				var _cols1 = 0,
					_cols2 = 0,
					_cols3 = 0,
					_cols4 = 0,
					_cols5 = 0;

				for (var i = 0; i < _list.length; i++) {
					var _left, _this;

					_this = _list.eq(i);
					_left = _this.css('left');

					// console.log(_left);

					if ( _left == '10px' ) {
						_cols1 += _this.height() + 20;
					} else if ( _left == '230px' ) {
						_cols2 += _this.height() + 20;
					} else if ( _left == '450px' ) {
						_cols3 += _this.height() + 20;
					} else if ( _left == '670px' ) {
						_cols4 += _this.height() + 20;	
					} else if ( _left == '890px' ) {
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
			}





			for (var i = 5; i < _list.length; i++) {
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

					$('.lists').height( _maxHeight - 20 );

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
			}









		}
	};
})(jQuery);