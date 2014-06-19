module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			compile: {
				files: {
					'css/test.css': 'css/test.less'
				}
			},
			yuicompress: {
				files: {
					'css/test.min.css': 'css/test.css'
				},
				options: {
					yuicompress: true
				}
			}
		},
		watch: {
			
		}
	});
}