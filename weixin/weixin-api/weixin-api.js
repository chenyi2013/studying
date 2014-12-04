/*!
 * 微信 WebView JS 接口封装类，用来替代 WeixinJSBridge 超级难用的接口。
 *
 * 1、分享到微信朋友圈、微信好友或腾讯微博
 * 2、调用微信客户端的图片播放组件
 * 3、获取当前的网络状态
 * 4、隐藏/显示右上角的菜单入口
 * 5、隐藏/显示底部浏览器工具栏
 * 6、关闭当前WebView页面
 *
 * @author maxzhang<zhangdaiping@gmail.com> http://maxzhang.github.io
 */window.WeixinAPI=function(){function a(e,t){var r=this;if(!n){var s=function(){f(r,t)};i=e||{},"addEventListener"in document?document.addEventListener("WeixinJSBridgeReady",s,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",s),document.attachEvent("onWeixinJSBridgeReady",s))}else t&&t.call(null,r);return r}function f(e,t){n=!0,WeixinJSBridge.on("menu:share:appmessage",function(){l("sendAppMessage")}),WeixinJSBridge.on("menu:share:timeline",function(){l("shareTimeline")}),WeixinJSBridge.on("menu:share:weibo",function(){l("shareWeibo")}),WeixinJSBridge.on("menu:general:share",function(e){o=e,l("generalShare")}),x(!0),setInterval(function(){x(!0)},3e4),t&&t.call(null,e)}function l(e){t?r||(r=e):d(e)}function c(e){return function(t){h(e,t)}}function h(e,t){p(e,t.err_msg),b(w(e,"complete"),[t.err_msg]),b("complete",[t.err_msg])}function p(e,t){var n,r;e=="sendAppMessage"?n="send_app_msg":e=="shareTimeline"?n="share_timeline":e=="shareWeibo"?n="share_weibo":e=="generalShare"&&(n="general_share"),t==n+":cancel"?r="cancel":t==n+":ok"?r="ok":r="fail",b(w(e,r),[t]),b(r,[t])}function d(e){n&&(b(w(e,"ready")),b("ready"),u[e].call(null,e))}function v(e){t=!!e}function m(e){r&&(i=e||i||{},d(r))}function g(t,n){if(typeof t=="string")e[t]=e[t]||[],n&&e[t].push(n);else for(var r in t)g(r,t[r])}function y(t,n){if(typeof t=="string"){if(e[t])for(var r=0,i=e[t].length;r<i;r++)if(!n||e[t][r]===n){e[t].splice(r,1);return}}else for(var s in t)y(s,t[s])}function b(t,n){if(e[t])for(var r=0,i=e[t].length;r<i;r++){var s=e[t][r];if(s&&s.apply(null,n||[])===!1)return}}function w(e,t){var n;return e=="sendAppMessage"?n="appmessage":e=="shareTimeline"?n="timeline":e=="shareWeibo"?n="weibo":e=="generalShare"&&(n="general"),n+":"+t}function E(e,t,r){n&&WeixinJSBridge.invoke("addContact",{webtype:"1",username:username},function(e){e.err_msg=="add_contact:ok"||e.err_msg=="add_contact:added"?t&&t.call(null):r&&r.call(null)})}function S(e,t){n&&e&&t&&t.length!==0&&WeixinJSBridge.invoke("imagePreview",{current:e,urls:t})}function x(e){if(n){var t=Object.prototype.toString.call(e)==="[object Function]";if(!t&&e!==!0)return s;u.getNetworkType(function(n){s=n||"unknow",t&&e.call(null,s)})}}function T(){n&&WeixinJSBridge.call("showOptionMenu")}function N(){n&&WeixinJSBridge.call("hideOptionMenu")}function C(){n&&WeixinJSBridge.call("showToolbar")}function k(){n&&WeixinJSBridge.call("hideToolbar")}function L(){n&&WeixinJSBridge.call("closeWindow")}var e={},t=!1,n=!1,r,i,s="unknow",o,u={sendAppMessage:function(e){WeixinJSBridge.invoke(e,{appid:i.appId||"",img_url:i.imgUrl,link:i.link,desc:i.desc,title:i.title,img_width:"640",img_height:"640"},c(e))},shareTimeline:function(e){WeixinJSBridge.invoke(e,{appid:i.appId||"",img_url:i.imgUrl,link:i.link,desc:i.title,title:i.desc,img_width:"640",img_height:"640"},c(e))},shareWeibo:function(e){WeixinJSBridge.invoke(e,{content:i.desc,url:i.link},c(e))},generalShare:function(e){o.generalShare({appid:i.appId||"",img_url:i.imgUrl,link:i.link,desc:i.desc,title:i.title,img_width:"640",img_height:"640"},c(e))},getNetworkType:function(e){WeixinJSBridge.invoke("getNetworkType",{},function(t){e&&e(t.err_msg)})}};return{ready:a,async:v,asyncStart:m,on:g,off:y,imagePreview:S,getNetworkType:x,showOptionMenu:T,hideOptionMenu:N,showToolbar:C,hideToolbar:k,closeWindow:L}}();
