

var app = app || {};

(function () {
    var Workplace = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function ( param ) {

            app.TodoFilter = param || '';

            app.Todos.trigger('filter');
        }
    });


    app.TodoRouter = new Workplace();
    Backbone.history.start();
})();