module.exports = function ( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    banner: '/*! @Author: Walker */',
                    compress: true
                },
                files: {
                    'css/main.css': 'less/main.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('lesscompile', ['less']);
}