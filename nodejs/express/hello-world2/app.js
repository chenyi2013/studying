
/**
 * Module dependencies. //模块依赖
 */

var express = require('express')
  , routes = require('./routes')
  // , user = require('./routes/user')
  , http = require('http')
  , path = require('path')

  , SessionStore = require('session-mongoose')(express);


var stor = new SessionStore({
  url: 'mongodb://localhost/session',
  interval: 120000
});


var app = module.exports = express.createServer();

// Configuration  配置

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'xxx.xx',
    store: stor,
    cookie: {maxAge: 900000}
  }));

  app.use(function (req, res, next) {
    res.locals.user = req.session.user;

    // console.log( res.locals.user.username );

    var test = 'hello';


/*    var err = req.session.error;
    delete req.session.error;
    res.locals.message = '';

    res.locals.test = 'test';

    if (err) {
      res.locals.message = err;
    }*/


    next();
  });

  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

/*function authentication ( req, res, next ) {
  if ( !req.session.user ) {
    req.session.error = '请先登录';
    return res.redirect('/login');
  }
  next();
}

function notAuthentication ( req, res, next ) {
  if ( req.session.user ) {
    req.session.error = '已登录';
    return res.redirect('/');
  }
  next;
}*/


//开发模式

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes //路径解析

app.get('/', routes.index);
// app.all('/login', notAuthentication);
app.get('/login', routes.login);
app.post('/login', routes.doLogin);
// app.get('/logout', authentication);
app.get('/logout', routes.logout);
// app.get('/home', authentication);
app.get('/home', routes.home);


app.get('/bootstrap2', routes.bootstrap2);


//启动及端口

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

