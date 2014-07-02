module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			compile: {
				files: {
					'../css/modules/base.css': '../less/modules/base.less',
					'../css/modules/demo.css': '../less/modules/demo.less'
				}
			}
		},
		cssmin: {
			css: {
				src: '../css/modules/demo.css',
				dest: '../css/modules/demo.min.css'
			}
		},
		watch: {
			scripts: {
				files: ['../less/modules/*.less', '../css/modules/*.css'],
				tasks: ['less', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'cssmin', 'watch']);

}