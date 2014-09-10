var pubuliu02 = (function ($) {
	return {
		init: function () {
			var _uList = $('.lists'),
				_list = _uList.find('.list'),

				marginL = 10;

			_list.eq(0).css({'left': marginL});
			_list.eq(1).css({'left': marginL*3 + _list.eq(0).width() });
			_list.eq(2).css({'left': marginL*5 + _list.eq(0).width()*2 });
			_list.eq(3).css({'left': marginL*7 + _list.eq(0).width()*3 });
			_list.eq(4).css({'left': marginL*9 + _list.eq(0).width()*4 });
		}
	};
})(jQuery);