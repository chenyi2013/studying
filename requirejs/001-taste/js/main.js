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