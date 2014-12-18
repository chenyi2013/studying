/**
 * ppt-single.js
 *
 */

var pptSingle = (function () {
    var mobilePPT = $('#mobilePPT'),
        ppts = mobilePPT.find('.ppt'),
        pptCont = mobilePPT.find('.ppt-cont'),
        pageHeight = $('body').height()
        ;


    function init () {
        $(window).on('load', function () {

            ppts.height(pptCont.height());

            ppts.css('minHeight', pageHeight);
        });
    }

    return {
      init: init
    };
})(Zepto);