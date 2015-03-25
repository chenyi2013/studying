function createScript (src) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = src;
	document.getElementsByTagName("head")[0].appendChild(script);
}

createScript("http://beyondweb.cn/api/service.php?callback=jsonpCallback");

function jsonpCallback (result) {

	// alert(result);

	var oContent = document.getElementById("content");
	var aP = oContent.getElementsByTagName("p");
	var dl, dt, dd, dd_a;

	for (var i = 0; i < result.length; i++) {

		dl = document.createElement("dl");
		dl.setAttribute("class", "dList");

		dt = document.createElement("dt");
		title = document.createTextNode("编号：");
		dt.appendChild(title);
		dd = document.createElement("dd");
		data = document.createTextNode(result[i].siteid);
		dd.appendChild(data);
		dl.appendChild(dt);
		dl.appendChild(dd);


		dt = document.createElement("dt");
		title = document.createTextNode("站点：");
		dt.appendChild(title);
		dd = document.createElement("dd");
		data = document.createTextNode(result[i].sitename);
		dd.appendChild(data);
		dl.appendChild(dt);
		dl.appendChild(dd);


		dt = document.createElement("dt");
		title = document.createTextNode("路径：");
		dt.appendChild(title);
		dd = document.createElement("dd");
		dd_a = document.createElement("a");
		dd_a.setAttribute("href", result[i].siteurl);
		dd_a.setAttribute("target", "_blank");
		data = document.createTextNode(result[i].siteurl);
		dd_a.appendChild(data);
		dd.appendChild(dd_a);
		dl.appendChild(dt);
		dl.appendChild(dd);


		oContent.appendChild(dl);

	}

/*	for (var i in result) {
		alert(i+":"+result[i]);
	}*/

}