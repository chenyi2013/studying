module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['css/module/*.css'],
				dest: 'css/pages/style.css'
			}
		},
		cssmin: {
			css: {
				src: 'css/pages/style.css',
				dest: 'css/pages/styel-min.css'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');

	grunt.registerTask('default', ['concat', 'cssmin']);
};
