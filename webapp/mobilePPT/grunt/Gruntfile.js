module.exports = function ( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // LESS编译
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        less: {
            development: {
                options: {
                    //paths: ['test/css'],
                    //compress: true,
                    modifyVars: {
                        //imgPath: '"http://xxx/images/"',
                        //bgColor: 'red'
                    }
                },

                files: {
                    // reset -- css reset
                    '../css/lib/reset.css': '../less/lib/reset.less',

                    // mobilePPT-common -- common styles
                    '../css/modules/ppt-common.css': '../less/modules/ppt-common.less',

                    // mobilePPT-single -- single styles 单页面模板样式
                    '../css/modules/ppt-single.css': '../less/modules/ppt-single.less'
                }
            }
        },

        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // CSS及JS文件合并
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        concat: {

            // zepto.js合并
            js_zeptomix: {
                src: [
                    '../js/lib/zepto.js',
                    '../js/lib/touch.js',
                    '../js/lib/fx.js'
                ],
                dest: '../js/lib/_zeptomix.js'
            },

            // mobilePPT单页面模板 样式
            css_mobilePPT_single: {
                src: [
                    '../css/lib/reset.css',
                    '../css/modules/ppt-common.css',
                    '../css/modules/ppt-single.css'
                ],
                dest: '../css/pages/_ppt-single.css'
            }

            // mobilePPT单页面模板 js
            //js_mobilePPT_single: {
            //    src: [
            //
            //    ],
            //    dest: ''
            //}
        },

        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // CSS检测
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        csslint: {
            build: {
                src: ['../css/modules/*.css'],
                rules: {
                    //详细：https://github.com/jzaefferer/grunt-css
                    "import": false
                }
            }
        },


        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // CSS压缩
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        cssmin: {
            options: {
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'
            },

            mobilePPT_common: {
                src: '../css/pages/_ppt-single.css',
                dest: '../css/pages/ppt-single.css'
            }
        },

        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // JS 检测
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        jshint: {
            files: ['../js/modules/a.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },


        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // JS压缩
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'
            },

            zeptomix: {
                src: '../js/lib/_zeptomix.js',
                dest: '../js/lib/zeptomix.js'
            }

        },


        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // 文件监视
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        watch: {
            scripts: {
                files: ['../less/modules/*.less', '../js/modules/ppt-single.js'],
                tasks: ['default'],
                options: {

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
};