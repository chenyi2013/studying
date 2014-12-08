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




        var _ppt_01 = document.querySelector('.ppt-01'),
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

                _ppt_01.className = 'ppt ppt-01';

                if (_disY > 0) {
                    //console.log(_disY);
                    //_ppt.style.bottom = _disY + 'px';
                    //_ppt_01.className = 'ppt ppt-01';
                    _ppt_01.style.webkitTransform = 'translateY(' + -_disY + 'px)';
                } else if (_disY < 0) {
                    //console.log('向下');
                    //_ppt.style.top = Math.abs(_disY) + 'px';
                    //_ppt_01.className = 'ppt ppt-01';
                    _ppt_01.style.webkitTransform = 'translateY(' + Math.abs(_disY) + 'px)';
                }

                //_ppt.style.left = _x1 + 'px';
            }


        }, 'false');

        _ppt_01.addEventListener('touchend', function (e) {
            if (!_isMove) {
                return;
            }


            _ppt_01.className = 'ppt ppt-01 ppt-animate';
            if (_disY > 0 && _disY < 150) {
                //_ppt
                //_ppt_01.className = 'ppt ppt-01 ppt-animate';
                _ppt_01.style.webkitTransform = 'translateY(' + 0 + 'px)';
                //_ppt.className = 'ppt';
                //_ppt.style.bottom = 0;
                //_ppt.style.webkitTransform = 'translateY(' + 0 + 'px)';
            } else if (_disY > 0 && _disY >= 150) {
                //_ppt_01.className = 'ppt ppt-01 ppt-animate';
                _ppt_01.style.webkitTransform = 'translateY(' + -_h + 'px)';
            } else if (_disY < 0 && _disY > -150) {
                //_ppt_01.className = 'ppt ppt-01 ppt-animate';
                _ppt_01.style.webkitTransform = 'translateY(' + 0 + 'px)';
            } else if (_disY <= -150) {
                //_ppt_01.className = 'ppt ppt-01 ppt-animate';
                _ppt_01.style.webkitTransform = 'translateY(' + _h + 'px)';
            }

            //_x1 = _x2 = 0;
            //_y1 = _y2 = 0;
            //_disX = _disY = 0;
        }, 'false')
    };
})();