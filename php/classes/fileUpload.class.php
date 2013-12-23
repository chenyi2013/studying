<?php

    header("Content-type: text/html; charset=utf-8");

    /*
     *
     * submit传递的参数，必须设置一个任意数值，才可以上传成功
     * dir可选参数，选定上传目录
     *
     * */

    if(!empty($_GET[submit])) {
        if(!empty($_GET[dir])) {
            $path = "uploads"."/".$_GET[dir];
        } else {
            $path = "uploads";
        }

        if(!file_exists($path)) {
            mkdir("$path", 0700);
        }

        $fileName = $_FILES["filename"]["name"];
        $fileType = $_FILES["filename"]["type"];
        $suffix = end(explode(".", $fileName));

        $allowType = array("image/gif","image/jpeg","image/png","image/bmp");

        if(!in_array($fileType, $allowType)) {
            echo "格式不对,只允许后缀为.gif、.jpg、.png、.bmp的图像文件";
        }

        if($fileName) {
            $uploadFile = rand(100, 999).time().".".$suffix;//加随机数(防止覆盖)、加时间戳，重命名
            $flag=1;
        }

        if($flag) {
            $result_uploaded = move_uploaded_file($_FILES["filename"]["tmp_name"], iconv("utf-8", "gbk", $path."/".$uploadFile));
        }

        if($result_uploaded) {
            echo "文件\"{$fileName}\"上传成功！<br>";
            echo "重命名为: ".$uploadFile."<br>";
            echo "预览：<br>";
            echo "<img src=\"$path"."/"."$uploadFile\" >";
        }
    } else {
        echo "File is null!";
    }

?>