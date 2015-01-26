//
//function MyController ( $scope ) {
//    $scope.clock = {
//        now: new Date()
//    };
//
//    var updateClock = function () {
//        $scope.clock.now = new Date();
//    };
//
//    setInterval(function () {
//        $scope.$apply( updateClock );
//    }, 1000);
//}


angular.module('myApp', []).run(function ( $rootScope ) {
    console.log( $rootScope );
    $rootScope.name = 'world';
});