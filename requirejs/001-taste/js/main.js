require.config({
	paths: {
		//baseUrl: 'lib',
		jquery: 'lib/jquery-2.1.1'
	}
});


//demo
require(['jquery'], function ($) {
	//alert( $().jquery );
	$('#div01').click(function () {
		alert('click!');
	});
});


//demo2
require(['selector'], function (getById) {
	var els = getById('div01');
	console.log(els);
});

//cookie
require(['cookie'], function ( cookie ) {
	cookie.removeCookie('require11');
	cookie.removeCookie('require22');
	cookie.setCookie('require', 'test', 1);
	alert( cookie.getCookie('csrftoken') );
});