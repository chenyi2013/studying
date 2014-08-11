var Selector = function ( selector ) {

	this.elements = [];

	if ( arguments.length == 1 ) {
		// console.log( selector );

		//取得第一个字符
		//var firstLetter = selector.substring(0, 1);
		
		var matchExpr = {
			'id': new RegExp('^#.+'),
			'class': new RegExp('^\\..+'),
			'tag': new RegExp('^[\\w-]+')
		};

		for ( var i in matchExpr ) {
			if ( matchExpr[i].test( selector) ) {
				switch ( i ) {
					case 'id':
						getById( selector.substring(1) );
						break;
					case 'class':
						getByClass( selector.substring(1) );
						break;
					case 'tag':
						getByTag( selector );
						break;
					default:
						console.log('error!');
				}
			}
		}
	}

	function getById( id ) {
		this.elements.push( document.getElementById(id) );
	}

	function getByClass( className ) {
		var ele = document.getElementsByTagName('*');
		var re = new RegExp('(^| )'+className+'( |$)', 'i');
		for (var i = 0, len = ele.length; i < len; i++) {
			if ( re.test( ele[i].className ) ) {
				this.elements.push( ele[i] );
			}
		}
	}

	function getByTag( tagName ) {
		this.elements = document.getElementsByTagName( tagName );
	}

	return this.elements;

};