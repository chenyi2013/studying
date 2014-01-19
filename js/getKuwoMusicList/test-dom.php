<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>getKuwoMusicList</title>
	<style type="text/css">
		* {
			margin: 0;
			padding: 0;
		}

		body {
			color: #333;
		}
	</style>
</head>
<body>
	<?php
		$fp = fopen("music_list.kwl", "r") or die("Could not open the file!");
		$read = fread($fp, filesize("music_list.kwl"));
		fclose($fp);

		echo "<pre>";
		echo $read;
		echo "</pre>";
	?>
	<script type="text/javascript">
		window.onload = function () {

			var oContent = document.getElementById("content");

			var aSo = document.getElementsByTagName("so");
			var aRes;
			var musicInfo = [];

			var rid, name, artist;

			for (var i = 0; i < aSo.length; i++) {
				if (!aSo[i].getAttribute("musicrid")) continue;
				aRes = aSo[i].getElementsByTagName("res");
				var format = [], cachepath = [];
				for (var j = 0; j < aRes.length; j++) {
					if (!aRes[j].getAttribute("format")) continue;
					if (!aRes[j].getAttribute("p2pcachepath")) continue;
					format.push(aRes[j].getAttribute("format"));
					cachepath.push(aRes[j].getAttribute("p2pcachepath"));
				}
				rid = aSo[i].getAttribute("musicrid");
				name = aSo[i].getAttribute("name");
				artist = aSo[i].getAttribute("artist");

				musicInfo.push({'musicrid':rid, 'name':name, 'artist':artist, 'format':format, 'p2pcachepath':cachepath});
			}


			for (var i = 0; i < musicInfo.length; i++) {

				//console.log(musicInfo[0]);

				//var tmp = musicInfo[0];
				//alert(tmp.name);

				console.log("歌曲名字："+musicInfo[i].name);
				console.log("歌手："+musicInfo[i].artist);


				dl = document.createElement("dl");
				dt = document.createElement("dt");
				title = document.createTextNode("歌曲名字：");
				dd = document.createElement("dd");
				data = document.createTextNode(musicInfo[i].name);

				dt.appendChild(title);
				dl.appendChild(dt);
				dd.appendChild(data);			
				dl.appendChild(dd);

				oContent.appendChild(dl);


				dl = document.createElement("dl");
				dt = document.createElement("dt");
				title = document.createTextNode("歌手：");
				dd = document.createElement("dd");
				data = document.createTextNode(musicInfo[i].artist);

				dt.appendChild(title);
				dl.appendChild(dt);
				dd.appendChild(data);			
				dl.appendChild(dd);

				oContent.appendChild(dl);

				for (var key in musicInfo[i]) {
					//console.log(musicInfo[i].name);
					//alert(musicInfo[i].name);
				}

			}

/*			for (var key in musicInfo[0]) {
				console.log(musicInfo[0][key]);
			}*/

/*			var json = [];
			for (var key in musicInfo) {
				json = musicInfo[key];
			}

			console.log(json);*/

/*			var dl,
				dt,
				title,
				dd,
				data;

			dl = document.createElement("dl");
			dt = document.createElement("dt");
			title = document.createTextNode("title");
			dd = document.createElement("dd");
			data = document.createTextNode("data");

			dt.appendChild(title);
			dl.appendChild(dt);
			dd.appendChild(data);			
			dl.appendChild(dd);


			oContent.appendChild(dl);*/

			//alert(arrName.length);
		}
	</script>

	<div id="content"></div>
</body>
</html>