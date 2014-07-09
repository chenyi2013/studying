module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				options: {
					paths: ['test/css'],
					//cleancss: true,
					modifyVars: {
						imgPath: '"http://www.jiae.com/images/"',
						bgColor: 'red'
					}
				},
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
		concat: {
			cssfiles: {
				src: '../css/modules/*.css',
				dest: '../css/common/concattest.css'
			},
			jsfiles: {
				src: '../js/*.js',
				dest: '../js/concattest.js'
			}
		},
		csslint: {
			build: {
				src: ['../css/modules/*.css', '../css/pages/*.css', '../css/common/*.css'],
				rules: {
					//下面表示忽略使用import及ids
					//详细：https://github.com/jzaefferer/grunt-css
					// "import": false
					//"ids": false
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			files: {
				src: '../css/modules/demo.css',
				dest: '../css/modules/demo.min.css'
			}
		},
		jshint: {
			files: ['Gruntfile.js', '../js/*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}				
			}
		},
		uglify: {
			options: {
				banner: '/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/'
			},
			build: {
				expand: true,
				cwd: '../js/',
				src: '*.js',
				dest: '../js/min/'
			}
		},
		watch: {
			scripts: {
				files: ['../less/modules/*.less', '../css/modules/*.css'],
				tasks: ['less', 'cssmin'],
				options: {
					//event: ['added', 'deleted']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'concat', 'csslint', 'cssmin', 'jshint', 'uglify', 'watch']);
}