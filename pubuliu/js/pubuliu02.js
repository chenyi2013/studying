var pubuliu02 = (function ($) {
	return {
		init: function () {
			var _uList = $('.lists'),
				_list = _uList.find('.list'),

				_marginL = 10,
				_listW = 200;

			_list.eq(0).css({'left': 10});
			_list.eq(1).css({'left': 200+30 });
			_list.eq(2).css({'left': 400+50 });
			_list.eq(3).css({'left': 600+70 });
			_list.eq(4).css({'left': 800+90 });
		}
	};
})(jQuery);