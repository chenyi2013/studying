


(function () {
    "use strict";
    // 禁止选择
    document.body.style.mozUserSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    var canvas = document.querySelector('canvas');
    canvas.style.backgroundColor='transparent';
    canvas.style.position = 'absolute';
    canvas.style.opacity = '.9';


        var ctx,
            w = document.querySelector('.ppt-01').offsetWidth,
            h = document.querySelector('.ppt-01').offsetHeight,
            offsetX = canvas.offsetLeft,
            offsetY = canvas.offsetTop
            ;


        // 设置画布宽高
        canvas.width = w;
        canvas.height = h;

        // 设置画布背景
        //canvas.style.backgroundImage='url(../../images/temp/p_0.jpg)';

        // 创建绘图对象
        ctx = canvas.getContext('2d');

        ctx.fillStyle='gray';
        ctx.fillRect(0, 0, w, h);


        //ctx.globalCompositeOperation = 'destination-out';

        var _isMove = false;

        var _x1, _y1, _x2, _y2, x1, y1;

        canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
            _x1 = e.touches[0].clientX;
            _y1 = e.touches[0].clientY;
            ctx.save();
            ctx.beginPath();
            ctx.arc(_x1, _y1, 20, 0, Math.PI * 2);
            ctx.clip();
            ctx.clearRect(0, 0, w, h);
            ctx.restore();
        });

        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            _isMove = true;

            if (_isMove) {
                if( e.changedTouches ){
                    e = e.changedTouches[ e.changedTouches.length - 1 ];
                }
                _x2 = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
                    _y2 = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;



                ctx.save();
                ctx.beginPath();
                ctx.arc(_x2, _y2, 20, 0, Math.PI * 2);
                ctx.clip();
                ctx.clearRect(0, 0, w, h);
                ctx.restore();


                ctx.save();
                ctx.beginPath();
                var a = 20;
                var asin = a*Math.sin(Math.atan((_y2-_y1)/(_x2-_x1)));
                var acos = a*Math.cos(Math.atan((_y2-_y1)/(_x2-_x1)));
                var x3 = _x1+asin;
                var y3 = _y1-acos;
                var x4 = _x1-asin;
                var y4 = _y1+acos;
                var x5 = _x2+asin;
                var y5 = _y2-acos;
                var x6 = _x2-asin;
                var y6 = _y2+acos;
                ctx.moveTo(x3,y3);
                ctx.lineTo(x5,y5);
                ctx.lineTo(x6,y6);
                ctx.lineTo(x4,y4);
                ctx.closePath();
                //ctx.stroke();
                ctx.clip();
                ctx.clearRect(0, 0, w, h);
                ctx.restore();

                _x1 = _x2;
                _y1 = _y2;

            }
        });

        canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            _isMove = false;
        });

        function hideMask () {
            var data = ctx.getImageData(0,0,w,h).data;
            for(var i=0,j=0;i< data.length;i+=4){
                if(data[i] && data[i+1] && data[i+2] && data[i+3]){
                    j++;
                }
            }
            if(j<=w*h*0.8){
                //alert('已经刮得可以了');
                ctx.fillRect(0, 0, w, h);
            }
        }
})();