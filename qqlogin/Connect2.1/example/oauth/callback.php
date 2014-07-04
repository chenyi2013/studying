<?php
require_once("../../API/qqConnectAPI.php");
$qc = new QC();

echo $qc->qq_callback().'<br>';

echo $qc->get_openid().'<br>';
?>

<?php
	
	echo "登录成功了！<br>";

	include('../user/get_user_info.php');

?>