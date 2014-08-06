/*

var moduleA = {
	
	a_1: function () {
		console.log('a_1');
	},

	a_2: function () {
		console.log('a_2');
	}

};

moduleA.a_1 = '4';

*/


var moduleA = (function () {

	var id = 001;

	var a_1 = function () {
		console.log('a_1');
	};

	var a_2 = function () {
		console.log('a_2');
	};

	return {
		a1: a_1,
		a2: a_2
	};

})();