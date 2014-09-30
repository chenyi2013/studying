var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '加意新品' });
});

router.get('/login', function ( req, res ) {
	res.render('login', { title: '登录' });
});

router.get('/home', function ( req, res ) {
	res.render('home', { title: '用户中心' });
});

module.exports = router;



var db = require('../model/mysql');

// console.log(db);
// db.query();
// db.delete();
// db.insert();
// db.update();
