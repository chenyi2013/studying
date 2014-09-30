var express = require('express');
var router = express.Router();

var dbtest = require('../model/mysql');


/* GET home page. */
router.get('/', function(req, res) {


	dbtest.query(function ( results ) {
		console.log( results );
		// return results;

		res.render('index', {
			title: '加意新品',
			users: results
		});		

	});

});

/*dbtest.query(function ( results ) {
	// console.log( results );
	return results;
});*/

router.get('/login', function ( req, res ) {
	res.render('login', { title: '登录' });
});

router.get('/home', function ( req, res ) {
	res.render('home', { title: '用户中心' });
});

module.exports = router;



// var db = require('../model/mysql');

// console.log(db);
// db.query();
// db.delete();
// db.insert();
// db.update();
