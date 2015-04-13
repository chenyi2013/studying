/*
ajax.js
*/


function ajax ( args ) {

	// 参数声明
	var ajax = {
		type: 'GET',
		url: '',
		data: null,
		asyn: true,
		success: null,
		error: null,
		beforeSend: null
	};					

	// 参数赋值
	for ( var i in ajax ) {
		for ( var j in args ) {
			if ( i === j ) {
				ajax[i] = args[j];
			}
		}
	}

	// 根据传递参数类型的不同, 选择不同的传参方式
	if ( typeof ajax.data === 'string' ) {
		// 缓存问题 待测
		ajax.url += '?'+ajax.data;
	} else if ( typeof ajax.data === 'object' ) {
		var _str = '';
		for ( var i in ajax.data ) {
			_str += '&' + i + '=' + ajax.data[i];
		}
		ajax.data = _str.substring(1);
	}

	// 创建XHR对象
	var XHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

	XHR.onreadystatechange = function () {
		if ( XHR.readyState === 4 ) {
/*							if ( XHR.status === 200 ) {
				ajax.success( XHR.response );
			} else {
				ajax.error( XHR.status );
			}*/

			XHR.status === 200 ? ajax.success( XHR.response ) : ajax.error( XHR.status );
		}
	};

	
	XHR.open( ajax.type, ajax.url, ajax.asyn );


	if ( ajax.type === 'GET' || ajax.type === 'get' ) {
		XHR.send();
	} else if ( ajax.type === 'POST' || ajax.type === 'post' ) {
/*						console.log( ajax.beforeSend );
		if ( ajax.beforeSend ) {
			console.log('ss');
			ajax.beforeSend( XHR );
		}*/
		ajax.beforeSend ? ajax.beforeSend( XHR ) : '';
		XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		XHR.send( ajax.data );
	}
	// XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
}