/* global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */

var app = app || {};

(function ( $ ) {
    app.TodoView = Backbone.View.extend({

        tagName: 'li',

        template: _.template( $('#item-template').html() ),

        event: {
            'click .toggle': '',
        }

    });
})( jQuery );