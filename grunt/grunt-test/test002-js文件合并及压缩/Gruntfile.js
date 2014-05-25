module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			domop: {
				src: ['module/base.js', 'module/tools.js'],
				dest: 'page/main.js'
			}
		},
		uglify: {
			options :{
				banner: '/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/'
			},
			build: {
				src: 'page/main.js',
				dest: 'page/main.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);

}
