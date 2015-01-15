define([
    // 'jquery'
], function () {
    
    function changeColor ( obj ) {
        obj.addClass('box-color');
    }

    return {
        change: changeColor
    };
});