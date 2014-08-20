/*
* core.js v0.1.0
*/

(function () {
	function core ( elements ) {
		var _elements;
		if ( typeof elements === 'string' ) {
			_elements = document.querySelectorAll( elements );
		} else if ( typeof elements === 'object' ) {
			_elements = [elements];
		} else if ( typeof elements === 'function' ) {
			_elements = elements;
			$(window).on('load', _elements);
		}

		for (var i = 0, len = _elements.length; i < len; i++) {
			this[i] = _elements[i];
		}

		this.length = _elements.length;
	}



	var $,

	Core = function ( els ) {
		return new core( els );
	};



	// window.core = core;
	core.fn = core.prototype = {

		map: function ( callback ) {
			// var arr = [];
			for (var i = 0, len = this.length; i < len; i++) {
				// arr.push( callback(this, i) );
				callback(this, i);
			}
			// console.log('arr' + arr );
			// return arr;
			return this;
		},

/*				forEach: function ( callback ) {
			this.map( callback );
		},*/



		/*
		* 添加class
		*/
		addClass: function ( className ) {
			return this.map(function ( el, i ) {
				el[i].className = ' ' + className;
			});
		},


		/*
		* 删除class	
		*/
		removeClass: function ( className ) {
			return this.map(function ( el, i ) {
				el[i].className = el[i].className.replace(new RegExp('(^| )' + className + '( |$)'), '');
			});
		},


		/*
		* 判断是否有某个class
		*/
		hasClass: function ( className ) {
			//return 'dd';

			//this.map(function ( el, i ) {
			return this[0].className.indexOf(className) !== -1;
			//return 'dd';
			//});
		},


		/*
		* 事件绑定
		*/
		on: function ( event, fn ) {
			if ( document.addEventListener ) {
				return this.map(function ( el, i ) {
					el[i].addEventListener(event, fn , false);
				});
			} else if ( document.attachEvent ) {
				return this.map(function ( el, i ) {
					el[i].attachEvent('on' + event, fn);
				});
			} else {
				return this.map(function ( el, i ) {
					el[i]['on'+event] = fn;
				});
			}
		},


		/*
		* 取消事件绑定
		*/
		off: function ( event, fn ) {
			if ( document.addEventListener ) {
				return this.map(function ( el, i ) {
					el[i].removeEventListener(event, fn, false);
				});
			} else if ( document.detachEvent ) {
				return this.map(function ( el, i ) {
					el[i].detachEvent('on' + event, fn);
				});
			} else {
				return this.map(function ( el, i ) {
					el[i]['on' + event] = null;
				});
			}
		},


		/*
		* 获取或设置元素的文本
		*/
		text: function ( text ) {
			if ( typeof text !== 'undefined' ) {

/*						for (var i = 0; i < this.length; i++) {
					this[i].innerText = text;
				}*/

/*						this.forEach(function ( el ) {
					console.log( el );
				});*/

				return this.map(function ( el, i ) {
					// console.log( 'hehe' + i );
					// console.log( el[i].innerText );
					el[i].innerText = text;
				});


			} else {
				return this[0].innerText;
			}
		},


		/*
		* 获取或设置元素的html
		*/
		html: function ( html ) {
			if ( typeof html !== 'undefined' ) {
/*						for (var i = 0; i < this.length; i++) {
					this[i].innerHTML = html;
				}*/

				return this.map(function ( el, i ) {
					el[i].innerHTML = html;
				});
			} else {
				return this[0].innerHTML;
			}
		},



		/*
		* 一个参数 获取属性
		* 两个参数 设置属性
		* json键值对 设置多个属性
		*/
		attr: function ( attrs ) {
			if ( typeof attrs === 'string' ) {
				if ( arguments.length === 1 ) {
					return this[0].getAttribute(attrs);
				} else if ( arguments.length === 2 ) {
					var _arg_0 = arguments[0];
						_arg_1 = arguments[1];
					return this.map(function ( el, i ) {
						el[i].setAttribute(_arg_0, _arg_1);
					});
				}
			} else if ( typeof attrs === 'object' ) {
				return this.map(function ( el, i ) {
					for (var val in attrs) {
						el[i].setAttribute(val, attrs[val]);
					}
				});
			}
/*
			if ( typeof val !== 'undefined' ) {
				return this.map(function ( el, i ) {
					el[i].setAttribute(attr, val);
				});
			} else {
				return this[0].getAttribute(attr);						
			}*/
		},


		/*
			一个参数 移除属性
		*/
		removeAttr: function ( attrName ) {
			return this.map(function ( el, i ) {
				el[i].removeAttribute(attrName);
			});			
		},

		/*
			一个参数 string 获取css样式
			两个参数 string string 设置元素样式
			json键值对 {key: value, ...} 设置元素的多种样式
		*/
		css: function ( styles ) {
			if ( typeof styles === 'string' ) {
				if ( arguments.length === 1 ) {
					if (this[0].currentStyle) {
						// IE
						return this[0].currentStyle[styles];
					} else {
						// DOM
						return getComputedStyle(this[0], false)[styles];
					}
				} else if ( arguments.length === 2 ) {

/*							for (var i = 0; i < this.length; i++) {
						this[i].style[arguments[0]] = arguments[1];
					}*/
					var _arg_0 = arguments[0],
						_arg_1 = arguments[1];

					return this.map(function ( el, i ) {
						el[i].style[_arg_0] = _arg_1;
					});

				}
			} else if ( typeof styles === 'object' ) {
/*						for (var i = 0; i < this.length; i++) {
					for ( var value in styles ) {
						this[i].style[value] = styles[value];
					}
				}*/

				return this.map(function ( el, i ) {
					for ( var value in styles ) {
						el[i].style[value] = styles[value];
					}
				});
			}
		},


		/*
		* 常用事件封装
		*/
		hover: function ( fnOver, fnLeave ) {
			return this.map(function ( el, i ) {
				$(el[i]).on('mouseover', function () {
					fnOver.call(this);
				});

				if ( typeof fnLeave !== 'undefined' ) {
					$(el[i]).on('mouseout', function () {
						fnLeave.call(this);
					});
				}
			});
		},

		click: function ( fn ) {
			return this.map(function ( el, i ) {
				$(el[i]).on('click', function () {
					fn.call(this);
				});
			});
		}




	};



/*	core.extend = core.fn.extend = function () {
		// var arg = arguments;
		console.log( arguments.length );
	};*/




	$ = Core;
	window.Core = Core;
	window.$ = $;

	return Core;

})();

/*
$.fn.extend({
	click: function () {
		concole.log(this);
	}
});
*/