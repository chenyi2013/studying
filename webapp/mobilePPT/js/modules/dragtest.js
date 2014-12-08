(function () {
    window.onload = function () {
        var dragBox = document.querySelector('.dragtest');

        var _x, _y;

        dragBox.addEventListener('touchstart', function () {

        },'false');

        dragBox.addEventListener('touchmove', function (e) {

            //e.preventDefault();

            _x = e.changedTouches[0].clientX;
            _y = e.changedTouches[0].clientY;

            console.log(_x + '--'+ _y);

            dragBox.style.left = _x + 'px';
            dragBox.style.top = _y + 'px';

            //dragBox.style.transform = 'translate(' + _x + 'px, ' + _y + 'px)';
        },'false');

        dragBox.addEventListener('touchend', function () {

        },'false');




        var _ppt_00 = document.querySelector('.ppt-00'),
            _ppt_01 = document.querySelector('.ppt-01'),
            _ppt_02 = document.querySelector('.ppt-02'),
            _ppt_03 = document.querySelector('.ppt-03'),

            _ppt_01_bg = _ppt_01.querySelector('.pic-bg'),
            _x1,
            _y1,
            _x2,
            _y2,
            _disX,
            _disY,

            _h = _ppt_01.offsetHeight,

            _isMove = false
            ;

        _ppt_01.addEventListener('touchstart', function (e) {
            _x1 = e.touches[0].clientX;
            _y1 = e.touches[0].clientY;
        }, 'false');

        _ppt_01.addEventListener('touchmove', function (e) {
            _isMove = true;
            if (_isMove) {

                _x2 = e.changedTouches[0].clientX;
                _y2 = e.changedTouches[0].clientY;

                _disY = _y1 - _y2;

                _ppt_00.className = 'ppt ppt-00';
                _ppt_01.className = 'ppt ppt-01';
                _ppt_02.className = 'ppt ppt-02';

                if (_disY > 0) {
                    //console.log(_disY/2);


                    _ppt_01.style.zIndex = '999';
                    _ppt_02.style.zIndex = '1000';


                    _ppt_01.style.webkitTransform = 'translateY(' + -_disY/2 + 'px)';
                    _ppt_02.style.webkitTransform = 'translateY(' + -_disY + 'px)';

                    //console.log( (_ppt_01.offsetWidth - _disY/3)/_ppt_01_img.offsetWidth  );

                    _ppt_01_bg.className = 'pic-bg';
                    var _scale = (_ppt_01.offsetWidth - _disY/3)/_ppt_01_bg.offsetWidth;
                    _ppt_01_bg.style.webkitTransform = 'scale(' + _scale + ')';

                    //_ppt_01_img.style.width = _ppt_01.offsetWidth - _disY/3 + 'px';
                } else if (_disY < 0) {
                    //console.log('向下');

                    _ppt_01.style.zIndex = '999';
                    _ppt_00.style.zIndex = '1000';

                    _ppt_01.style.webkitTransform = 'translateY(' + Math.abs(_disY/2) + 'px)';
                    _ppt_00.style.webkitTransform = 'translateY(' + Math.abs(_disY) + 'px)';


                    _ppt_01_bg.className = 'pic-bg';
                    var _scale = (_ppt_01.offsetWidth - Math.abs(_disY)/3)/_ppt_01_bg.offsetWidth;
                    _ppt_01_bg.style.webkitTransform = 'scale(' + _scale + ')';

                }
            }
        }, 'false');

        _ppt_01.addEventListener('touchend', function (e) {
            if (!_isMove) {
                //return;
            }
            _ppt_00.className = 'ppt ppt-00 ppt-animate';
            _ppt_01.className = 'ppt ppt-01 ppt-animate';
            _ppt_02.className = 'ppt ppt-02 ppt-animate';
            if (_disY > 0 && _disY < 150) {
                _ppt_01.style.webkitTransform = 'translateY(' + 0 + 'px)';
                _ppt_02.style.webkitTransform = 'translateY(' + 0 + 'px)';

                _ppt_01_bg.className = 'pic-bg ppt-animate';
                _ppt_01_bg.style.webkitTransform = 'scale(' + 1 + ')';
            } else if (_disY >= 150) {
                _ppt_01.style.webkitTransform = 'translateY(' + -_h/2 + 'px)';
                _ppt_02.style.webkitTransform = 'translateY(' + -_h + 'px)';

                _ppt_01_bg.className = 'pic-bg ppt-animate';
                _ppt_01_bg.style.webkitTransform = 'scale(' + 0.5 + ')';
            } else if (_disY < 0 && _disY > -150) {
                _ppt_01.style.webkitTransform = 'translateY(' + 0 + 'px)';
                _ppt_00.style.webkitTransform = 'translateY(' + 0 + 'px)';

                _ppt_01_bg.className = 'pic-bg ppt-animate';
                _ppt_01_bg.style.webkitTransform = 'scale(' + 1 + ')';
            } else if (_disY <= -150) {
                _ppt_01.style.webkitTransform = 'translateY(' + _h/2 + 'px)';
                _ppt_00.style.webkitTransform = 'translateY(' + _h + 'px)';

                _ppt_01_bg.className = 'pic-bg ppt-animate';
                _ppt_01_bg.style.webkitTransform = 'scale(' + 0.5 + ')';
            }
        }, 'false')
    };
})();