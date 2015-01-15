define([
    // 'jquery',
    'modules/color',
    'modules/size'
], function ( color, size ) {
    function changeAll () {
        $('.btn-changeAll').click(function () {
            color.change( $('.box') );
            size.change( $('.box') );
        });
    }

    return {
        change: changeAll
    };
});