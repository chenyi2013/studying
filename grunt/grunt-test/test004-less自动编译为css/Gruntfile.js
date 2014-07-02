module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			compile: {
				files: {
					'css/test.css': 'css/test.less'
				}
			}
		},
		cssmin: {
			css: {
				src: 'css/test.css',
				dest: 'css/test.min.css' 
			}
		},
		watch: {
			scripts: {
				files: ['css/*.less', 'css/*.css'],
				tasks: ['less', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'cssmin', 'watch']);
}
