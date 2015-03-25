<?php
/*	$fp = fopen("music_list.kwl", "r") or die("Could not open the file!");
	$read = fread($fp, filesize("music_list.kwl"));
	fclose($fp);
	echo $read;*/
	function readFile ($filename) {
		$fp = fopen($filename, "r") or die("Could not open $filename");
		$read = fread($fp, filesize($filename));
		fclose($fp);
		return $read;
	}
	echo readFile("../music_list.kwl");
?>