var app = app || {};

(function () {
    var TodoList = Backbone.Collection.extend({
        model: app.Todo,

        localStorage: new Backbone.LocalStorage('todos-backbone'),

        completed: function () {
            return this.where({completed: true});
        },

        remaining: function () {
            return this.where({completed: false});
        },

        nextOrder: function () {
            return this.length ? this.last().get('order') + 1 : 1;
        },

        comparator: function ( todo ) {
            return todo.get('order');
        }
    });

    app.Todos = new TodoList();
})();