define([], function () {
    function run () {
        var $box = $('.box');
        var $btnReset = $('.btn-reset');

        $btnReset.click(function () {
            $box.removeClass('box-color');
            $box.removeClass('box-size');
        });
    }


    return {
        run: run
    };
});