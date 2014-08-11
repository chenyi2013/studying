(function () {

	function Core ( ele ) {
		return new Core.fn.init( ele );	
	}

	Core.prototype.css = function () {
		console.log('css');
	}

	init = Core.prototype.init = function ( ele ) {
		var elements = [];
		elements.push( document.getElementById( ele ) );
		// return this;
	}

	init.prototype = Core.fn;

	Core.fn = Core.prototype = {
		sayHi: function () {
			console.log('Hi');
		}
	}
/*
	function $ ( ele ) {
		return new Core( ele );
	}*/


	window.Core = Core;

})();


/*var Core = (function () {

	var core = {};

	core.selector = function ( ele ) {
		var elements = [];
		elements.push( document.getElementById( ele ) );
	}

	core.prototype = {
		// constructor: Core,
		sayHi: function () {
			console.log('Hi');
		}
	};

	function $ ( ele ) {
		return core;
	}

})( Core );*/

/*var Core = function ( ele ) {
	var elements = [];
	elements.push( document.getElementById( ele ) );	
}
*/
/*function Core ( elements ) {
	// console.log('Core');
	this.elements = [];
	this.elements.push( document.getElementById( elements ) );

	//return this.elements;
}*/

// window.Core = window.$ = Core;



/*
// function 

//var Core = (function () {
	var $;

	Core = function ( elements ) {
		return new Core( elements );
	}

	//new Core( elements );

	Core.fn = Core.prototype = {
		sayHi: function () {
			console.log('Hi');
		}
	}

	Core.fn.init = function () {
		return this;
	}

	// Core.prototype.constructor = Core;



	//$ = core;
	// $.sayHi = core.sayHi;

	window.Core = window.$ = Core;

	//return Core;

//})(Core);*/