var Core = (function () {
	var $;

	Core = function ( elements ) {
		return new Core( elements );
	}

	//new Core( elements );

	Core.prototype.sayHi = function () {
		alert('Hi');
	}

/*	Core.fn = Core.prototype = function () {

	}*/

/*	function $ ( elements ) {
		reuturn Core;
	}*/

	//$ = core;
	// $.sayHi = core.sayHi;

	window.Core = window.$ = Core;

	return Core;

})(Core);