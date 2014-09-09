/**
	@description common.js 公共模块
*/

var common = (function () {
	return {

		/**
			@description 设备检测
			@return {Boolean} result 返回值
			@example common.isMobile()
		*/
		UA: {
			isMobile: function () {
				return navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i) ? true : false;
			},
			isAndroid: function () {
				return navigator.userAgent.match(/(Android)/i) ? true : false;
			},
			isIOS: function () {
				return navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i) ? true : false;
			}			
		},


		/**
			@description cookie操作
		*/
		cookie: {
			/**
				@description 设置cookie
				@param {String} name cookie名字
				@param {String} value cookie值
				@param {int} day cookie过期时间, 单位: 天
				@example common.cookie.set('jiae', 'www.jiae.com', 1);
			*/
			set: function ( name, value, day ) {
				var oDate = new Date();
				oDate.setDate( oDate.getDate() + day );
				document.cookie = name + '=' + value + ';expires=' + oDate; 				
			},


			/**
				@description 删除cookie
				@param {String} name cookie名字
				@example common.cookie.remove('jiae');
			*/
			remove: function ( name ) {
				this.set(name, '1', -1);
			},


			/**
				@description 获取cookie
				@param {String} name cookie名字
				@example common.cookie.get('jiae');
			*/			
			get: function (name) {
				var everyCookie = document.cookie.split('; ');
				for (var i = 0, len = everyCookie.length; i < len; i++) {
					var thisCookie = everyCookie[i].split('=');
					if ( thisCookie[0] == name ) {
						return thisCookie[1];
					}
				}
			}
		}
	};
})();
