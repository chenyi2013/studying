(function () {
    $(function () {



        //document.querySelector('.ppt-01').addEventListener('load', function () {
            var canvas = document.querySelector('.scratchCard'),
                ctx = canvas.getContext('2d'),

                w = document.querySelector('.ppt-01').offsetWidth,
                h = document.querySelector('.ppt-01').offsetHeight

                ;

            console.log(canvas);

            canvas.style.position = 'absolute';
            //canvas.style.opacity = '.6';
            canvas.width = w;
            canvas.height = h;

            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, w, h);

            ctx.globalCompositeOperation = 'destination-out';

            var offsetX = canvas.offsetLeft,
                offsetY = canvas.offsetTop,
                _isMove = false;


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
                    //console.log(offsetX)
                    ///var x = e.changedTouches[0].pageX,
                        //y = e.changedTouches[0].pageY;
                    ctx.beginPath();
                    ctx.arc(x, y, 10, 0, Math.PI * 2);
                    ctx.fill();
                    //hideMask();

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


        //}, false);
    });
})();