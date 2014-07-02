module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
/*		concat: {
			domop: {
				src: ['module/slide.js', 'module/tab.js'],
				dest: 'page/main.js'
			}
		},*/
		uglify: {
			options :{
				banner: '/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/'
			},
			build: {
				expand: true,
				cwd: 'module/',
				src: '*.js',
				//dest: 'page/main.min.js'
				dest: 'dest'
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);

}
