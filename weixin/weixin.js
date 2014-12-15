/**
 *
 * weiXin.js v0.1.0
 * WeiXin API
 * Source:
 *
 * Mail: hiwangchi@gmail.com
 * Date: 2014-12-15 15:00
 *
 * MIT
 *
 */

var weiXin = (function () {
    "use strict";

    /**
     * 微信JsAPI加载完毕
     *
     * @param {Function} callback 加载完毕需要执行的函数
     */
    function ready ( callback ) {
        document.addEventListener('WeixinJSBridgeReady', function () {
            callback();
        }, false);
    }


    /**
     * 分享到朋友圈
     *
     * @param {String} imgUrl 图片url
     * @param {String} link 链接
     * @param {String} title 标题
     * @param {String} desc 文本内容
     */
    function share ( imgUrl, link, title, desc ) {
        weiXin.ready(function () {
            WeixinJSBridge.on('menu:share:timeline', function () {
                WeixinJSBridge.invoke('shareTimeline', {
                    "img_url": imgUrl,
                    "img_width": "300",
                    "img_height": "300",
                    "link": link,
                    "title": title,
                    "desc": desc
                }, function( res ) {
                    _report('share', res.err_msg);
                });
            });
        });
    }


    /**
     * 发送给朋友
     *
     * @param {String} imgUrl 图片url
     * @param {String} link 链接
     * @param {String} title 标题
     * @param {String} desc 文本内容
     */
    function send ( imgUrl, link, title, desc ) {
        weiXin.ready(function () {
            WeixinJSBridge.on('menu:share:appmessage', function () {
                WeixinJSBridge.invoke('sendAppMessage', {
//                    "appid": appid,
                    "img_url": imgUrl,
                    "img_width": "300",
                    "img_height": "300",
                    "link": link,
                    "title": title,
                    "desc": desc
                }, function( res ) {
                    _report('send', res.err_msg);
                });
            });
        });
    }

    /**
     * 调用API
     *
     * weiXin.share('http://xxx.xxx.xxx/xxx.jpg', 'http://xxx.xxx.xxx', '我是标题', '我是内容');
     * weiXin.send('http://xxx.xxx.xxx/xxx.jpg', 'http://xxx.xxx.xxx', '我是标题', '我是内容');
     */
    return {
        ready: ready,
        share: share,
        send: send
    };

})();