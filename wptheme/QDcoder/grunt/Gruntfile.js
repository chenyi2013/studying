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
					'../css/modules/header.css': '../less/modules/header.less',
					'../css/modules/header-fixed.css': '../less/modules/header-fixed.less',
					'../css/modules/entry-list.css': '../less/modules/entry-list.less',
					'../css/modules/pagination.css': '../less/modules/pagination.less',
					'../css/modules/footer.css': '../less/modules/footer.less',


					//layout-common
					'../css/pages/layout-common.css': '../less/pages/layout-common.less',


					'../css/modules/entry-detail.css': '../less/modules/entry-detail.less'
				}				
			}		
		},
		concat: {
			css_global: {
				src: [
					'../css/modules/reset.css',
					'../css/modules/header.css',
					'../css/modules/header-fixed.css',
					'../css/modules/entry-list.css',
					'../css/modules/pagination.css',
					'../css/modules/footer.css',

					//layout-common
					'../css/pages/layout-common.css'
				],
				dest: '../css/common/global.css'
			}
		},
		csslint: {
			build: {
				src: [
					'../css/modules/*.css'
				],
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
				banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'
			},
			global: {
				src: '../css/common/global.css',
				dest: '../css/common/global.min.css'
			}
		},
		jshint: {
			files: [
				'../js/*.js'
			],
			options: {
				globals: {
					jQuery: true,
					console:  true,
					module: true
				}
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'
			},
			build: {
				src: '../js/main.js',
				dest: '../js/main.min.js'
			}
		},
		watch: {
			scripts: {
				files: [
					'../less/modules/*.less',
					'../less/pages/*.less'
				],
				tasks: ['default']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


	// grunt.registerTask('default', ['less', 'concat', 'csslint', 'cssmin', 'jshint', 'uglify', 'watch']);
	grunt.registerTask('default', ['less', 'concat', 'cssmin', 'jshint', 'uglify', 'watch']);

};