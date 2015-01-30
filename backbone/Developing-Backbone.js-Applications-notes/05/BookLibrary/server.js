/*
var express = require('express');
var app = express();

app.get('/', function ( req, res ) {
    res.send('Hello World!');
});

app.listen(3000);
*/



var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose')
    ;


var app = express();

app.configure(function () {

    app.use( express.bodyParser() );

    app.use( express.methodOverride() );

    app.use( express.static( path.join(application_root, 'site') ) );

    app.use( app.router );

    app.use( express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});



// database
mongoose.connect('mongodb://localhost/library_database');

// schemas
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

var BookModel = mongoose.model( 'Book', Book );




app.get('/api', function ( req, res ) {
    res.send('Library api is running!');
});

app.get('/api/books', function ( req, res ) {
    return BookModel.find(function ( err, books ) {
        if (!err) {
            return res.send( books );
        } else {
            return console.log( err );
        }
    });
});

app.post('/api/books', function ( req, res ) {
    var book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        releaseDate: req.body.releaseDate
    });

    book.save(function ( err ) {
        if (!err) {
            return console.log('created');
        } else {
            return console.log(err);
        }
    });

    return res.send(book);
});



var port = 3000;
app.listen( port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});