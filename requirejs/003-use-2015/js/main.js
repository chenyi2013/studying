require.config({
    baseUrl: 'js/',

    paths: {
        jquery: 'lib/jquery',
        common: 'common'
    },

    shim: {
        'common': {
            exports: 'Yond'
        }
    }
});

require([
    'jquery',
    'modules/size',
    'modules/color',
    'modules/all',
    'modules/reset',
    'common'
], function ( $, size, color, all, reset, Y ) {

    var $btnChangeSize = $('.btn-changeSize');
    var $btnChangeColor = $('.btn-changeColor');
    var $box = $('.box');

    $btnChangeSize.click(function () {
        size.change( $box );
    });

    $btnChangeColor.click(function () {
        color.change( $box );
    });


    all.change();


    reset.run();

    console.log( Y );

});