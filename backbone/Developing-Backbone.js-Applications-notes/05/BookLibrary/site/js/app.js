/**
 * app.js
 *
 */


var app = app || {};


$(function () {
    var books = [
        {
            title: 'HTML5',
            author: 'Walker',
            releaseDate: '20141212',
            keywords: 'html html5'
        },
        {
            title: 'CSS3',
            author: 'Walker',
            releaseDate: '20141212',
            keywords: 'html html5'
        }
    ];

    new app.LibraryView(books);
});