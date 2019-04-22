var app = angular.module('Time', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('HomeCtrl', ['$scope', '$resource', 
    function($scope, $resource){
        //var Time = $resource('/api/time');
        var Time = $resource('/api/time');
        var res = Time.get();
        $scope.time = res;
        
    }]);