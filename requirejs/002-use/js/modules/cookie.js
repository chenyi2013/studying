/*
* cookie操作
* @param {string} cookie名字
* @param {string} cookie值
* @param {int} cookie过期时间(单位：天)
*/
define(function () {
	return {
		setCookie: function ( name, value, day ) {
			var oDate = new Date();
			oDate.setDate( oDate.getDate() + day );
			document.cookie = name + '=' + value + ';expires=' + oDate;			
		},
		getCookie: function ( name ) {
			var everyCookie = document.cookie.split('; ');
			for (var i = 0, len = everyCookie.length; i < len; i++) {
				var thisCookie = everyCookie[i].split('=');
				if ( thisCookie[0] == name ) {
					return thisCookie[1];
				}
			}
		},
		removeCookie: function ( name ) {
			this.setCookie( name, '1', -1 );
		}
	};
});