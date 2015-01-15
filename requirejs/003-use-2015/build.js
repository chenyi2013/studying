{
    appDir: './',
    baseUrl: './js',
    dir: './release',
    optimize: 'uglify2',
    optimizeCss: 'standard',
    removeCombined: true,
    fileExclusionRegExp: /^((r|build|Gruntfile)\.js)|(package\.json)|(less\/*)|(node_modules\/*)$/,
    modules: [
        {
            name: 'main',
            exclude: [
                'jquery'
            ]
        }
    ],

    paths: {
        jquery: 'lib/jquery'
    }    
}