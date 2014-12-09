(function () {
    window.onload = function () {

        var _ppt = document.querySelectorAll('#mobilePPT .ppt'),

            // 每张ppt的背景
            _picBg,

            _x1,
            _y1,
            _x2,
            _y2,
            _disX,
            _disY,

            // 页面高度
            _pptHeight = _ppt[0].offsetHeight,

            // 灵敏度
            _sensitivity  = 100,

            _isMove = true
            ;

        for (var i = 0, len = _ppt.length; i < len; i++) {

            _ppt[i].addEventListener('touchstart', function (e) {
                _x1 = e.touches[0].clientX;
                _y1 = e.touches[0].clientY;
            }, false);

            (function (i) {
                _ppt[i].addEventListener('touchmove', function (e) {

                    if (_isMove) {

                        _x2 = e.changedTouches[0].clientX;
                        _y2 = e.changedTouches[0].clientY;

                        _disY = _y1 - _y2;

                        // current
                        $('.ppt').removeClass('ppt-active');
                        $(_ppt[i]).addClass('ppt-active');

                        if ( i == 0 && _disY < 0 ) {
                            //console.log('不能往下滑了');
                            _ppt[i].style.webkitTransform = '';
                        } else if ( i == 7 && _disY > 0 ) {
                            //console.log('不能往上滑了');
                            _ppt[i].style.webkitTransform = '';
                        } else if ( Math.abs(_disY) > 10 ) {

                            var _zIndex = 1000;
                            var _scale = (_ppt[i].offsetWidth - Math.abs(_disY) / 3) / _ppt[i].offsetWidth;

                            // current
                            _ppt[i].style.zIndex = _zIndex - 1;
                            _ppt[i].style.webkitTransform = 'translateY(' + -_disY / 2 + 'px) scale(' + _scale + ')';


                            // ppt移动
                            if (_disY > 0) {
                                // current + 1
                                if ($(_ppt[i + 1]).length > 0) {
                                    _ppt[i + 1].style.zIndex = _zIndex;
                                    _ppt[i + 1].style.webkitTransform = 'translateY(' + -_disY + 'px)';
                                }
                            } else if (_disY < 0) {
                                // current - 1
                                if ($(_ppt[i - 1]).length > 0) {
                                    _ppt[i - 1].style.zIndex = _zIndex;
                                    _ppt[i - 1].style.webkitTransform = 'translateY(' + Math.abs(_disY) + 'px)';
                                }
                            }
                        }

                    }
                }, false);
            })(i);


            (function (i) {
                _ppt[i].addEventListener('touchend', function (e) {
                    if (!_isMove) {
                        return;
                    }

                    //console.log(_disY);

                    if ( i == 0 && _disY < 0 ) {
                        _ppt[i].style.webkitTransform = '';
                    } else if ( i == 7 && _disY > 0 ) {
                        _ppt[i].style.webkitTransform = '';
                    } else if ( Math.abs(_disY) > 10 ) {

                        _isMove = false;

                        // current - 1
                        if ($(_ppt[i - 1]).length > 0) {
                            $(_ppt[i - 1]).addClass('ppt-animate');
                        }

                        // current
                        $(_ppt[i]).addClass('ppt-animate');

                        // current + 1
                        if ($(_ppt[i + 1]).length > 0) {
                            $(_ppt[i + 1]).addClass('ppt-animate');
                        }


                        if (_disY > 0 && _disY < _sensitivity) {
                            // current
                            _ppt[i].style.webkitTransform = 'translateY(' + 0 + 'px) scale(1)';

                            // current + 1
                            if ($(_ppt[i + 1]).length > 0) {
                                _ppt[i + 1].style.webkitTransform = 'translateY(' + 0 + 'px)';
                            }
                        } else if (_disY >= _sensitivity) {
                            // current
                            _ppt[i].style.webkitTransform = 'translateY(' + -_pptHeight / 2 + 'px) scale(0.5)';

                            // current + 1
                            if ($(_ppt[i + 1]).length > 0) {
                                _ppt[i + 1].style.webkitTransform = 'translateY(' + -_pptHeight + 'px)';
                            }

                            _ppt[i].addEventListener('webkitTransitionEnd', function () {

                                $(_ppt[i]).css({
                                    'top': '-100%'
                                });

                            }, false);

                        } else if (_disY < 0 && _disY > -_sensitivity) {
                            // current
                            _ppt[i].style.webkitTransform = 'translateY(' + 0 + 'px) scale(1)';

                            // current - 1
                            if ($(_ppt[i - 1]).length > 0) {
                                _ppt[i - 1].style.webkitTransform = 'translateY(' + 0 + 'px)';
                            }

                        } else if (_disY <= -_sensitivity) {
                            // current
                            _ppt[i].style.webkitTransform = 'translateY(' + _pptHeight / 2 + 'px) scale(0.5)';

                            // current - 1
                            if ($(_ppt[i - 1]).length > 0) {
                                _ppt[i - 1].style.webkitTransform = 'translateY(' + _pptHeight + 'px)';
                            }

                            _ppt[i].addEventListener('webkitTransitionEnd', function () {

                                $(_ppt[i]).css({
                                    'top': '100%'
                                });

                            }, false);
                        }

                        _ppt[i].addEventListener('webkitTransitionEnd', function () {
                            $('.ppt').removeClass('ppt-animate');
                            _isMove = true;

                        }, false);

                    }

                    _disY = 0;

                }, false)
            })(i);
        }

    };
})();