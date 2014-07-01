module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['module/*.css'],
				dest: 'page/style.css'
			}
		},
		cssmin: {
			css: {
				src: 'page/style.css',
				dest: 'page/style-min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
	grunt.registerTask('default', ['concat', 'cssmin']);
}
