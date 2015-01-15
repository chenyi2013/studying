(function () {
    var Yond = window.Yond || {};

    Yond.sayHi = function () {
        console.log('Hi!');
    };

    window.Yond = Yond;
})();