

// === 001

/*var moduleA = {
	
	id: 111,

	a_1: function () {
		console.log('a_1--id:'+this.id);
		console.log('a_1');
	},

	a_2: function () {
		console.log('a_2');
	}

};

console.log(moduleA.id); //111
moduleA.id = 99;//此时内部a_1函数里输出的id已经变为了99
//暴露了内部的所有模块成员, 内部数据可以被外部改写
*/




// === 002
var moduleA = (function () {

	var id = 111;

	var a_1 = function () {
		console.log('a_1--id:'+id);
		console.log('a_1');
	};

	var a_2 = function () {
		console.log('a_2');
	};

	return {
		a_1: a_1,
		a_2: a_2
	};

})();

console.log( moduleA.id ); //undefine
moduleA.id = 99;//此时内部a_1函数里输出的id仍然为111, 而不是99
//有效地保护了内部成员变量
