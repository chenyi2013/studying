var calculate = (function () {
    var num = 1;

    function add ( a, b ) {
        return a + b;
    }

    function minus ( a, b ) {
        return a - b;
    }

    return {
        add: add,
        minus: minus
    };
})();