


(function () {
    "use strict";
    // 禁止选择
    document.body.style.mozUserSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    var img = new Image();
    var canvas = document.querySelector('canvas');
    canvas.style.backgroundColor='transparent';
    canvas.style.position = 'absolute';
    var imgs = ['../../images/temp/p_0.jpg','../../images/temp/p_1.jpg'];
    var num = Math.floor(Math.random()*2);
    img.src = imgs[num];

    img.addEventListener('load', function(e) {

        var ctx;
        var w = img.width,
            h = img.height,
            offsetX = canvas.offsetLeft,
            offsetY = canvas.offsetTop
            ;


        // 设置画布宽高
        canvas.width = w;
        canvas.height = h;

        // 设置画布背景
        canvas.style.backgroundImage='url('+img.src+')';

        // 创建绘图对象
        ctx = canvas.getContext('2d');

        ctx.fillStyle='gray';
        ctx.fillRect(0, 0, w, h);


        ctx.globalCompositeOperation = 'destination-out';

        var _isMove = false;

        canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
        });

        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            _isMove = true;

            if (_isMove) {
                if( e.changedTouches ){
                    e = e.changedTouches[ e.changedTouches.length - 1 ];
                }
                var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
                    y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
                ctx.beginPath();
                ctx.arc(x, y, 20, 0, Math.PI * 2);
                ctx.fill();
                hideMask();

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
            if(j<=w*h*0.6){
                //alert('已经刮得可以了');
                ctx.fillRect(0, 0, w, h);
            }
        }
    });
})();