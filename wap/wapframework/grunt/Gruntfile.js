module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			compile: {
				files: {
					'../css/modules/base.css': '../less/modules/base.less',
					'../css/modules/header.css': '../less/modules/header.less',
					'../css/modules/menu.css': '../less/modules/menu.less',
					'../css/modules/footer.css': '../less/modules/footer.less',
					'../css/modules/colorlump.css': '../less/modules/colorlump.less',
					'../css/modules/slide.css': '../less/modules/slide.less',
					'../css/modules/item-list.css': '../less/modules/item-list.less',
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