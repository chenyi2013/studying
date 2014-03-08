/*require.config({
	baseUrl: 'js/lib',
	paths: {
		// jquery: 'jquery-1.8.3',
		student: '../student',
		class: '../class'
	}
});


require(['student', 'class'], function(student, clz) {
	// console.log($().jquery);
	clz.addToClass(student.createStudent('wangchi', 'male'));
	clz.addToClass(student.createStudent('Rose', 'female'));
	console.log(clz.getClassSize());
});*/

require(['manager', 'lib/domReady!'], function (manager) {
	manager.addNewStudent('wangchi', 'male');
	manager.addNewStudent('Rose', 'female');
	console.log(manager.getMyClassSize());
});