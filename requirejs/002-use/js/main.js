require.config({
	paths: {
		//baseUrl: 'lib',
		jquery: 'lib/jquery-2.1.1',
		cookie: 'modules/cookie'
	}
});


//demo
require(['jquery'], function ($) {
	//alert( $().jquery );
	$('#div01').click(function () {
		alert('click!');
		$('#div01').off('click');
	});

});


//selector test
require(['selector'], function ( select ) {
	console.log( select.getById('div01') );
});

//cookie test
require(['modules/cookie'], function ( cookie ) {
	cookie.removeCookie('require11');
	cookie.removeCookie('require22');
	cookie.setCookie('require', 'test', 1);
	cookie.setCookie('wangchi', '前端', 2);
	console.log( cookie.getCookie('require') );
});