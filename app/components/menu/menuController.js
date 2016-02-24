'use strict';
app.controller('MenuController', ['$scope','Menu', function($scope, Menu) {

    $scope.title = 'This is a Menu';
    $scope.getMenu = Menu.query();
    $scope.getMenu.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.menu = data;
    })

}]);