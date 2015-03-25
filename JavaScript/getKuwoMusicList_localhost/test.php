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

		#content dl {
			clear: both;
			width: 100%;
			padding: 10px 0;
			border-bottom: 1px dashed #ccc;
		}

		#content dl:hover {
			background-color: #ccc;
		}
		#content dt {
			float: left;
			font-weight: bold;
		}
		#content dl {
			float: left;
		}

		#theFrame {
			position: absolute;
			z-index: -999;
			width: 0;
			height: 0;
			border: none;
		}
	</style>
	<script type="text/javascript">
		window.onload = function () {

			var oContent = document.getElementById("content");

			//var theFrame = document.frame.theFrame;
			var theFrame = document.getElementById("theFrame").contentWindow.document;
			/*var aa = theFrame.getElementsByTagName("so");
			alert(typeof theFrame);
			alert(aa.length);*/

			// var aSo = document.getElementsByTagName("so");
			var aSo = theFrame.getElementsByTagName("so");
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

				// console.log("歌曲名字："+musicInfo[i].name);
				// console.log("歌手："+musicInfo[i].artist);


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


				dt = document.createElement("dt");
				title = document.createTextNode("歌手：");
				dd = document.createElement("dd");
				data = document.createTextNode(musicInfo[i].artist);

				dt.appendChild(title);
				dl.appendChild(dt);
				dd.appendChild(data);			
				dl.appendChild(dd);

				oContent.appendChild(dl);


				dt = document.createElement("dt");
				title = document.createTextNode("格式：");
				dd = document.createElement("dd");
				data = document.createTextNode(musicInfo[i].format);

				dt.appendChild(title);
				dl.appendChild(dt);
				dd.appendChild(data);			
				dl.appendChild(dd);

				oContent.appendChild(dl);


				dt = document.createElement("dt");
				title = document.createTextNode("缓存路径：");
				dd = document.createElement("dd");
				data = document.createTextNode(musicInfo[i].p2pcachepath);

				dt.appendChild(title);
				dl.appendChild(dt);
				dd.appendChild(data);			
				dl.appendChild(dd);

				oContent.appendChild(dl);

			}
		}
	</script>
</head>
<body>
	<div id="content"></div>
	<iframe name="theFrameName" id="theFrame" src="iframe.php"></iframe>
</body>
</html>