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
    };
})();