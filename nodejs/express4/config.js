// config.js

var mysql = require('mysql');
var conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'admin',
	database: 'myNodeMysql'
});

conn.connect();

function dbQuery () {
	conn.query('SELECT * FROM user', function ( err, rows, fields ) {
		if ( err ) {
			throw err;
		}

		console.log('Data is:', rows[0]);
	});
}

// conn.end();

module.exports = dbQuery;

/*module.exports = (function () {
	var a = 10,
		b = 100;
	return {
		a: a,
		b: b
	}
})();*/