/**
 * ppt-normal.js
 *
 */

var pptNormal = (function () {
    var mobilePPT = $('#mobilePPT'),
        ppts = mobilePPT.find('.ppt'),
        pageHeight = $('body').height()
        ;


    function init () {
        $(window).on('load', function () {

            ppts.height( pageHeight );

        });
    }

    return {
        init: init
    };
})(Zepto);