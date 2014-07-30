require.config({
	paths: {
		//baseUrl: 'lib',
		jquery: 'lib/jquery-2.1.1'
	}
});

require(['jquery'], function ($) {
	alert( $().jquery );
});