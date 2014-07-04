<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
</head>
<body>


<script type="text/javascript" src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" data-appid="101136668" data-redirecturi="http://beyondweb.cn/qqlogin/callback.html" charset="utf-8"></script>


<a id="qqLoginBtn" href="javascript:;" target="_blank" ></a>
<script type="text/javascript">
   //调用QC.Login方法，指定btnId参数将按钮绑定在容器节点中
   QC.Login({
       //btnId：插入按钮的节点id，必选
       btnId:"qqLoginBtn",    
       //用户需要确认的scope授权项，可选，默认all
       scope:"all",
       //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
       size: "A_XL"
   }, function(reqData, opts) {//登录成功
       //根据返回数据，更换按钮显示状态方法

       // var dom = document.getElementById(opts['btnId']),

       console.log(reqData);
       console.log(opts);
       

       document.getElementById('qqLoginBtn').style.display = 'none';
       document.getElementById('qqloginsucc').style.display = 'block';

		sendWeibo_t({content: "#QQ互联JSSDK测试#曾经沧海难为水，除却巫山不是云。"});
    	getQQUserId();



//       var dom = document.getElementById(opts['qqloginsucccont']),
       var dom = document.getElementById('qqloginsucccont'),
       _logoutTemplate=[
            //头像
            '<span><img src="{figureurl}" class="{size_key}"/></span>',
            //昵称
            '<span>{nickname}</span>',
            //退出
            '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'    
       ].join("");
       dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
           nickname : QC.String.escHTML(reqData.nickname), //做xss过滤
           figureurl : reqData.figureurl
       }));

   }, function(opts){//注销成功
       document.getElementById('qqLoginBtn').style.display = 'block';
       document.getElementById('qqloginsucc').style.display = 'none';
         alert('QQ登录 注销成功');
   }
);
</script>

<div id="qqloginsucc" style="display: none;">
	<h2>恭喜你登录成功了！</h2>
	<div id="qqloginsucccont">
		
	</div>
	<div id="pic"></div>
</div>

<?php
//$content = file_get_contents('100.jpg');

?>

<script type="text/javascript">
	/*
	获取 openId 及 accessToken
	*/
	function getQQUserId () {
		if(QC.Login.check()){//如果已登录
			QC.Login.getMe(function(openId, accessToken){
				//alert(["当前登录用户的", "openId为："+openId, "accessToken为："+accessToken].join("\n"));
				console.log('登录了');
				console.log('openId:'+openId);
				console.log('accessToken:'+accessToken);
			});
			//这里可以调用自己的保存接口
			//...
		}
	}
</script>


<script type="text/javascript">

	/*
	发微博
	*/
	function sendWeibo_t (paras) {
		//var paras = {content : "#QQ互联JSSDK测试#曾经沧海难为水，除却巫山不是云。"};

		QC.api("add_t", paras)
			.success(function(s){//成功回调
				alert("发送微博成功，请到腾讯微博内查看！");
			})
			.error(function(f){//失败回调
				alert("发送微博失败！");
			})
			.complete(function(c){//完成请求回调
				alert("发送微博完成！");
			});		
	}

</script>


</body>
</html>