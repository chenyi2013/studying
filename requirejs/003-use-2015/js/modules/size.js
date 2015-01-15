define([
    // 'jquery'
], function () {

    function changeSize ( obj ) {
        obj.addClass('box-size');         
    }

    return {
        change: changeSize
    };
});