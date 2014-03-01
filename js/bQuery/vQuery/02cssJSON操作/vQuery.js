
//function addEvent
function addEvent (obj, sEv, fn) {
	if (obj.attachEvent) {
		// obj.attachEvent('on' + sEv, fn); //IE上的this问题有bug， 采用call解决
		obj.attachEvent('on' + sEv, function () {
			fn.call(obj);
		});
	} else {
		obj.addEventListener(sEv, fn, false);
	}
}

//function appendArr
function appendArr (arr1, arr2) {
	for (var i = 0, len = arr2.length; i < len; i++) {
		arr1.push(arr2[i]);
	}
}

//function getByClass
function getByClass (oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var re = new RegExp('\\b' + sClass + '\\b', 'i');
	var arr = [];

	for (var i = 0, len = aEle.length; i < len; i++) {
		if (re.test(aEle[i].className)) {
			arr.push(aEle[i]);
		}
	}

	return arr; 
}

//function getStyle
function getStyle (obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function vQuery (vArg) {
	/*
	function
	string --> #xxx xxx .xxx
	object
	*/

	this.elements = [];

	switch (typeof vArg) {
		case 'function':
			addEvent(window, 'load', vArg);
			break;
		case 'string':
			switch (vArg.charAt(0)) {
				case '#':  //ID
					var obj = document.getElementById(vArg.substring(1));
					this.elements.push(obj);
					break;
				case '.': //class
					this.elements = getByClass(document, vArg.substring(1));
					break; 
				default: //tagName
					this.elements = document.getElementsByTagName(vArg);
			}
			break;
		case 'object':
			this.elements.push(vArg);
	}
}

//function click
vQuery.prototype.click = function (fn) {
	for (var i = 0, len = this.elements.length; i < len; i++) {
		addEvent(this.elements[i], 'click', fn);
	}
}

//function show
vQuery.prototype.show = function () {
	for (var i = 0, len = this.elements.length; i < len; i++) {
		this.elements[i].style.display = 'block';
	}
}

//function hide
vQuery.prototype.hide = function () {
	for (var i = 0, len = this.elements.length; i < len; i++) {
		this.elements[i].style.display = 'none';
	}
}

//function hover
vQuery.prototype.hover =  function (fnOver, fnOut) {
	for (var i = 0, len = this.elements.length; i < len; i++) {
		addEvent(this.elements[i], 'mouseover', fnOver);
		addEvent(this.elements[i], 'mouseout', fnOut);
	}
}

//function css: get style or set style
vQuery.prototype.css = function (attr, value) {
	if (arguments.length == 2) {
		for (var i = 0, len = this.elements.length; i < len; i++) {
			this.elements[i].style[attr] = value;
		}
	} else {
		// return this.elements[0].style[attr]; //这样不行，只能取行间样式
		// return getStyle(this.elements[0], attr);//基础版，不能链式操作

		if (typeof attr == 'string') {
			return getStyle(this.elements[0], attr);
		} else {
			for (var i = 0, len = this.elements.length; i < len; i++) {
				for (var j in attr) {
					this.elements[i].style[j] = attr[j];
				}
			}
		}

	}
}

//function toggle
vQuery.prototype.toggle = function () {
	// var count = 0;
	var _arguments = arguments;
	for (var i = 0, len = this.elements.length; i < len; i++) {
		addToggle(this.elements[i]);
	} 

	function addToggle (obj) {
		var count = 0;
		addEvent(obj, 'click', function () {
			// alert(count++);
			_arguments[count++%_arguments.length].call(obj);
			// count++;
		});		
	}
}

//function attr
vQuery.prototype.attr = function (attr, value) {
	if (arguments.length == 2) {
		for (var i = 0, len = this.elements.length; i < len; i++) {
			this.elements[i][attr] = value;
		}
	} else {
		return this.elements[0][attr];
	}
}

//function eq
vQuery.prototype.eq = function (n) {
	//return this.elements[n];//$('div').eq(2).show(); 但此时返回的只是个元素， 无法添加方法
	return $(this.elements[n]);
}

//function find
vQuery.prototype.find = function (str) {
	var aResult = [];
	for (var i = 0, len = this.elements.length; i < len; i++) {
		switch (str.charAt(0)) {
			case '.': //class
				var aEle = getByClass(this.elements[i], str.substring(1));
				//aResult = aResult.concat(aEle);//aEle是集合 aResult是数组， 集合跟数组有区别， 不能直接concat
				appendArr(aResult, aEle);
				break;
			default: //标签
				var aEle = this.elements[i].getElementsByTagName(str);
				//aResult = aResult.concat(aEle); //aEle集合 aResult数组， 不能连
				appendArr(aResult, aEle);
		}
	}
	//return aResult;//返回一个数组，无法调用vQuery方法，如css()、show()...
	var newVquery = $();
	newVquery.elements = aResult;
	return newVquery;
}

//function getIndex
function getIndex (obj) {
	var aBrother = obj.parentNode.children;
	for (var i = 0, len = aBrother.length; i < len; i++) {
		if (aBrother[i] == obj) {
			return i;
		}
	}
}

//function index
vQuery.prototype.index = function () {
	return getIndex(this.elements[0]);
}

//把vQuery对象返回为$
function $ (vArg) {
	return new vQuery(vArg);
}