window.dome = (function () {
	function Dome ( els ) {
		for ( var i = 0, len = els.length; i < len; i++) {
			this[i] = els[i];
		}
		this.length = els.length;
	}

	Dome.prototype.sayHi = function ( callback ) {
		console.log('Hi');
	}

	Dome.prototype.map = function ( callback ) {
		var results = [], i = 0;
		for (; i < this.length; i++) {
			results.push( callback.call(this, this[i], i) );
		}
		return results;
	}

	Dome.prototype.forEach = function ( callback ) {
		this.map( callback );
		return this;
	}

	var dome = {
		get: function ( selector ) {
			var els;
			if ( typeof selector === 'string' ) {
				els = document.querySelectorAll( selector );
			} else if ( selector.length ) {
				els = selector;
			} else {
				els = [selector];
			}
			return new Dome( els );
		}
	};

	return dome;
})();

/*function $ ( els ) {
	return dome.get( els );
} */