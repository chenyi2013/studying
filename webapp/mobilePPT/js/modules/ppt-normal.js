/**
 * ppt-normal.js
 *
 */

var pptNormal = (function () {
    var mobilePPT = $('#mobilePPT'),
        ppts = mobilePPT.find('.ppt'),
        pageHeight = $('body').height()
        ;

    // 初始化
    function init () {
        $(window).on('load', function () {
            ppts.height( pageHeight );
        });
    }

    // ppt切换 上下切换
    function pptSwitch () {
        for (var i = 0, len = ppts.length; i < len; i++) {
            (function (i) {

                if ( i < len - 1 ) {
                    $(ppts[i]).swipeUp(function () {
                        mobilePPT[0].style.webkitTransform = 'translateY(' + (-pageHeight)*(i+1) + 'px)';
                    });
                }

                if ( i > 0 ) {
                    $(ppts[i]).swipeDown(function () {
                        mobilePPT[0].style.webkitTransform = 'translateY(' + (-pageHeight)*(i-1) + 'px)';
                    });
                }

            })(i);
        }
    }



    return {
        init: init,
        switch: pptSwitch
    };
})(Zepto);