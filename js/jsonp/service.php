<?php
	$arr = array(
		array(
			'siteid'=>7895,
			'sitename'=>'PlayWeb',
			'siteurl'=>'http://www.playweb.com.cn/'			
			),
		array(
			'siteid'=>7896,
			'sitename'=>'PlayApps',
			'siteurl'=>'http://www.playapps.cn/'			
			),
		array(
			'siteid'=>7897,
			'sitename'=>'BeyondWeb',
			'siteurl'=>'http://www.beyondweb.cn/'			
			),
		array(
			'siteid'=>7898,
			'sitename'=>'前端程序员',
			'siteurl'=>'http://www.qdcoder.com/'			
			),
		array(
			'siteid'=>7899,
			'sitename'=>'90QD',
			'siteurl'=>'http://www.90qd.com/'			
			),
		array(
			'siteid'=>7890,
			'sitename'=>'前端网',
			'siteurl'=>'http://www.51qianduan.com/'			
			)
		);

	//print_r($arr);
	//out: Array ( [siteid] => 7895 [sitename] => PlayWeb [sitesrc] => http://www.playweb.com.cn/ )

	$result = json_encode($arr);

	//print_r($result);
	//{"siteid":7895,"sitename":"PlayWeb","sitesrc":"http:\/\/www.playweb.com.cn\/"}

	$callback = $_GET['callback'];

	echo $callback."($result)";
?>