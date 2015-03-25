<?php
	$fp = fopen("../music_list.kwl", "r") or die("Could not open the file!");
	$read = fread($fp, filesize("../music_list.kwl"));
	fclose($fp);
	echo $read;
?>