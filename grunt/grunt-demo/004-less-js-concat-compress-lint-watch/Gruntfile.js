module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				options: {
					paths: ['test/css'],
					// cleancss 是否把编译后的css压缩
					// cleancss: true,
					modifyVars: {
						imgPath: '"http://beyondweb.cn/images"',
						bgColor: 'red'
					}
				},
				files: {
					'module/style1.css': ['module/sidebar.less', 'module/mod-title.less']
				}
			}
		},
		concat: {
			cssfiles: {
				src: ['module/style1.css', 'module/style2.css'],
				dest: 'page/main.css'
			},
			jsfiles: {
/*				//插入分号
				options: {
					separator: ';'
				},*/
				src: ['module/slide.js', 'module/tab.js'],
				dest: 'page/main.js'
			}
		},
		csslint: {
			build: {
				src: 'module/*.css',
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
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			files: {
				src: 'page/main.css',
				dest: 'dest/main.min.css'
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'module/*.js', 'page/*.js'],
/*			//一些设置来覆盖jshint的默认设置
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}	
			}*/
		},
		uglify: {
			options :{
				banner: '/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/'
			},
			build: {
				expand: true,
				cwd: 'page/',
				src: '*.js',
				dest: 'dest'
			}
		},
		watch: {
			scripts: {
				files: ['module/*.less', 'module/*.js'],
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

	// grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['less', 'concat', 'csslint', 'cssmin', 'uglify', 'jshint', 'watch']);

};