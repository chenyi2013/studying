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
					//modules
					'../css/modules/base.css': '../less/modules/base.less',
					'../css/modules/header.css': '../less/modules/header.less',
					'../css/modules/menu.css': '../less/modules/menu.less',
					'../css/modules/footer.css': '../less/modules/footer.less',
					'../css/modules/colorlump.css': '../less/modules/colorlump.less',
					'../css/modules/slide.css': '../less/modules/slide.less',
					'../css/modules/item-list.css': '../less/modules/item-list.less',

					//layout common
					'../css/pages/layout-common.css': '../less/pages/layout-common.less',

					//home
					'../css/pages/layout-home.css': '../less/pages/layout-home.less'

					//list page						
				}
			}
		},
		concat: {
			css_global: {
				src: ['../css/modules/base.css', '../css/modules/header.css', '../css/modules/menu.css', '../css/modules/slide.css', '../css/modules/item-list.css', '../css/modules/footer.css', '../css/pages/layout-common.css'],
				dest: '../css/common/global.css'
			},
			css_home: {
				src: ['../css/modules/colorlump.css', '../css/pages/layout-home.css'],
				dest: '../css/pages/home.css'
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
			global: {
				src: '../css/common/global.css',
				dest: '../css/common/global.min.css'
			},
			home: {
				src: '../css/pages/home.css',
				dest: '../css/pages/home.min.css'
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
				files: ['../less/modules/*.less', '../less/pages/*.less'],
				// tasks: ['less', 'cssmin'],
				tasks: ['default'],
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

//	grunt.registerTask('default', ['less', 'concat', 'csslint', 'cssmin', 'jshint', 'uglify', 'watch']);
	grunt.registerTask('default', ['less', 'concat', 'cssmin', 'jshint', 'uglify', 'watch']);
};