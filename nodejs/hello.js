/*function hello () {
	console.log('Hello World!');
}

hello();*/

exports.hello = (function () {
	// console.log('hello world!');
	return {
		say: 'hello',
		say2: 'hehe'
	};
})();