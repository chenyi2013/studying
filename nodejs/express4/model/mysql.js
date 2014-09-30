// mysql.js

var mysql = require('mysql'),
	db_config = {
		host: 'localhost',
		port: '3306',
		user: 'root',
		password: 'admin',
		database: 'myNodeMysql'		
	},
	connection;

function handleDisconnect () {
	connection = mysql.createConnection(db_config);

	connection.connect(function ( err ) {
		if (err) {
			console.log('进行断线重连...' + new Date());
			setTimeout(handleDisconnect(), 10000);
			return;
		}
		console.log('连接成功');
	});

	connection.on('error', function (err) {
		console.log('ERROR!'+err);
		if (err.code == 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

handleDisconnect();


/*conn.connect(function (err) {
	if (err) {
		console.log(err.stack);
		return;
	}

	// console.log('connected as id: '+conn.threadId);
});*/


function DB ( fn ) {

}


DB.prototype.sayHi = function () {
	console.log('Hi!');
}

//SELECT
DB.prototype.query = function () {
	conn.query('SELECT * FROM user', function ( err, rows, fields ) {
		if ( err ) {
			throw err;
		}

		console.log(rows);
	});
};

//INSERT
DB.prototype.insert = function () {
	conn.query('INSERT INTO user(uname, upass, email) VALUES(?, ?, ?)', ['wang', '12345', 'test@test.com'], function ( err, rows, fields ) {
		if ( err ) {
			throw err;
		}
		console.log(rows);
	});
};

//UPDATE
DB.prototype.update = function () {
	conn.query('UPDATE user SET uname = ?, email = ? WHERE id = ?', ['xiaochichi', 'haha@haha.com', 12345], function ( err, rows, fields ) {
		if ( err ) {
			throw err;
		}
		console.log(rows);		
	});
};

//DELETE
DB.prototype.delete = function () {
	conn.query('DELETE FROM user WHERE id = 3', function (err, rows, fields) {
		if (err) {
			throw err;
		}
		console.log(rows);
	});
};


/*conn.end(function () {
	console.log('连接关闭!');
});*/


module.exports = new DB();