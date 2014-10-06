module.exports = function ( grunt ) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				options: {
					paths: ['test/css'],
					//clearcss: true,
					modifyVars: {
						imgPath: '"http://www.qdcoder.com/images/"',
						bgColor: '#f1f1f1'
					}
				},
				files: {
					'../css/modules/reset.css': '../less/modules/reset.less',
					'../css/modules/style.css': '../less/modules/style.less'
				}
			}
		},

		concat: {
			global: {
				src: [
					'../css/modules/reset.css',
					'../css/modules/style.css'
				],
				dest: '../css/common/global.css'
			}
		},

		cssmin: {
			global: {
				src: '../css/common/global.css',
				dest: '../css/common/global.min.css'
			}
		},

		watch: {
			scripts: {
				files: ['../less/modules/*.less'],
				tasks: 'default'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'concat', 'cssmin', 'watch']);
};