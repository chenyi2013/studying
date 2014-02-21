module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			domop: {
				src: ['js/module/base.js', 'js/module/common.js'],
				dest: 'js/pages/main.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/pages/main.js',
				dest: 'js/pages/main-min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);

};