/*
* json操作
*/
define(function () {
	return {
		jsonToStr: function ( json ) {
			var result = '{';
			for ( var i in json ) {
				result += '"' + i + '"' + ': "' + json[i] + '", ';
			}
			return (result + '}').replace(', }', '}');
		}
	};
});