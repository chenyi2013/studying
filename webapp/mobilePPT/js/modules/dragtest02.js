(function () {
    window.onload = function () {

        var _ppt_00 = document.querySelector('.ppt-00'),
            _ppt_01 = document.querySelector('.ppt-01'),
            _ppt_02 = document.querySelector('.ppt-02'),
            _ppt_03 = document.querySelector('.ppt-03'),

            // 每张PPT, 每个页面
            _ppt = document.querySelectorAll('#mobilePPT .ppt'),

            // 每张ppt的背景
            _picBg,


        _ppt_01_bg = _ppt_01.querySelector('.pic-bg'),
            _x1,
            _y1,
            _x2,
            _y2,
            _disX,
            _disY,

            // 页面高度
            _pptHeight = _ppt_01.offsetHeight,

            // 灵敏度
            _sensitivity  = 100,

            _isMove = true
            ;

        for (var i = 0, len = _ppt.length; i < len; i++) {


            //if ( i == 0 || i == len - 1 ) {
            //    continue;
            //}

            _ppt[i].addEventListener('touchstart', function (e) {
                _x1 = e.touches[0].clientX;
                _y1 = e.touches[0].clientY;
            }, 'false');

            (function (i) {
                _ppt[i].addEventListener('touchmove', function (e) {
                    //_isMove = true;

                    console.log(i);
                    if (_isMove) {

                        _x2 = e.changedTouches[0].clientX;
                        _y2 = e.changedTouches[0].clientY;

                        _disY = _y1 - _y2;

                        // current - 1
                        if ( $(_ppt[i-1]).length > 0 ) {
                            $(_ppt[i-1]).removeClass('ppt-animate');
                            $(_ppt[i-1]).find('.pic-bg').removeClass('ppt-animate');
                            $(_ppt[i-1]).find('.pic-bg')[0].style.webkitTransform = 'scale(1)';
                        }

                        // current
                        $(_ppt[i]).removeClass('ppt-animate');
                        $('.ppt').removeClass('ppt-active');
                        $(_ppt[i]).addClass('ppt-active');
                        $(_ppt[i]).find('.pic-bg')[0].style.webkitTransform = 'scale(1)';



                        // current + 1
                        if ( $(_ppt[i+1]).length > 0 ) {
                            $(_ppt[i + 1]).removeClass('ppt-animate');
                            $(_ppt[i + 1]).find('.pic-bg').removeClass('ppt-animate');
                            $(_ppt[i + 1]).find('.pic-bg')[0].style.webkitTransform = 'scale(1)';
                        }



                        var _zIndex = 1000;


                        if (_disY > 0) {

                            // current
                            _ppt[i].style.zIndex = _zIndex - 1;
                            _ppt[i].style.webkitTransform = 'translateY(' + -_disY/2 + 'px)';


                            // current + 1
                            if ( $(_ppt[i+1]).length > 0 ) {
                                _ppt[i + 1].style.zIndex = _zIndex;
                                _ppt[i + 1].style.webkitTransform = 'translateY(' + -_disY + 'px)';
                            }
                            
                        } else if (_disY < 0) {
                            //console.log('向下');

                            // current
                            _ppt[i].style.zIndex = _zIndex - 1;
                            _ppt[i].style.webkitTransform = 'translateY(' + Math.abs(_disY/2) + 'px)';



                            // current - 1
                            if ( $(_ppt[i-1]).length > 0 ) {
                                _ppt[i-1].style.zIndex = _zIndex;
                                _ppt[i-1].style.webkitTransform = 'translateY(' + Math.abs(_disY) + 'px)';
                            }


                        }

                        // current pic +++++++++++++++++++++
                        _picBg = $(_ppt[i]).find('.pic-bg');
                        _picBg.removeClass('ppt-animate');
                        //_ppt_01_bg.className = 'pic-bg';
                        var _scale = (_ppt[i].offsetWidth - Math.abs(_disY) / 3) / _ppt[i].offsetWidth;
                        console.log(_picBg);
                        _picBg[0].style.webkitTransform = 'scale(' + _scale + ')';


                    }
                }, 'false');
            })(i);


            (function (i) {
                _ppt[i].addEventListener('touchend', function (e) {
                    if (!_isMove) {
                        return;
                    }

                    _isMove = false;

                    // current - 1
                    //_ppt_00.className = 'ppt ppt-00 ppt-animate';
                    if ( $(_ppt[i-1]).length > 0 ) {
                        $(_ppt[i-1]).addClass('ppt-animate');
                    }


                    // current
                    //_ppt_01.className = 'ppt ppt-01 ppt-animate';
                    $(_ppt[i]).addClass('ppt-animate');


                    // current + 1
                    //_ppt_02.className = 'ppt ppt-02 ppt-animate';
                    if ( $(_ppt[i+1]).length > 0 ) {
                        $(_ppt[i + 1]).addClass('ppt-animate');
                    }



                    if (_disY > 0 && _disY < _sensitivity) {
                        // current
                        _ppt[i].style.webkitTransform = 'translateY(' + 0 + 'px)';

                        // current + 1
                        if ( $(_ppt[i+1]).length > 0 ) {
                            _ppt[i + 1].style.webkitTransform = 'translateY(' + 0 + 'px)';
                        }

                        // current pic
                        _picBg.addClass('ppt-animate');
                        //_ppt_01_bg.className = 'pic-bg ppt-animate';
                        //_ppt_01_bg.style.webkitTransform = 'scale(' + 1 + ')';
                        _picBg[0].style.webkitTransform = 'scale(' + 1 + ')';
                    } else if (_disY >= _sensitivity) {
                        // current
                        _ppt[i].style.webkitTransform = 'translateY(' + -_pptHeight/2 + 'px)';

                        // current + 1
                        if ( $(_ppt[i+1]).length > 0 ) {
                            _ppt[i + 1].style.webkitTransform = 'translateY(' + -_pptHeight + 'px)';
                        }

                        // current pic
                        _picBg.addClass('ppt-animate');
                        //_ppt_01_bg.className = 'pic-bg ppt-animate';
                        //_ppt_01_bg.style.webkitTransform = 'scale(' + 0.5 + ')';
                        _picBg[0].style.webkitTransform = 'scale(' + 0.5 + ')';


                        _ppt[i].addEventListener('webkitTransitionEnd', function () {

                            $(_ppt[i]).css({
                                'top': '-100%'
                            });

                        }, false);


                    } else if (_disY < 0 && _disY > -_sensitivity) {
                        // current
                        _ppt[i].style.webkitTransform = 'translateY(' + 0 + 'px)';

                        // current - 1
                        if ( $(_ppt[i-1]).length > 0 ) {
                            _ppt[i-1].style.webkitTransform = 'translateY(' + 0 + 'px)';
                        }

                        // current pic
                        //_ppt_01_bg.className = 'pic-bg ppt-animate';
                        _picBg.addClass('ppt-animate');
                        //_ppt_01_bg.style.webkitTransform = 'scale(' + 1 + ')';
                        _picBg[0].style.webkitTransform = 'scale(' + 1 + ')';
                    } else if (_disY <= -_sensitivity) {
                        // current
                        _ppt[i].style.webkitTransform = 'translateY(' + _pptHeight/2 + 'px)';

                        // current - 1
                        if ( $(_ppt[i-1]).length > 0 ) {
                            _ppt[i-1].style.webkitTransform = 'translateY(' + _pptHeight + 'px)';
                        }

                        // current pic
                        //_ppt_01_bg.className = 'pic-bg ppt-animate';
                        _picBg.addClass('ppt-animate');
                        //_ppt_01_bg.style.webkitTransform = 'scale(' + 0.5 + ')';
                        _picBg[0].style.webkitTransform = 'scale(' + 0.5 + ')';


                        _ppt[i].addEventListener('webkitTransitionEnd', function () {

                            $(_ppt[i]).css({
                                'top': '100%'
                            });

                        }, false);
                    }

                    _ppt[i].addEventListener('webkitTransitionEnd', function () {
                        $('.ppt').removeClass('ppt-animate');
                        $('.ppt .pic-bg').removeClass('ppt-animate');

                        _isMove = true;

                    }, false);

                }, 'false')
            })(i);
        }


    };
})();