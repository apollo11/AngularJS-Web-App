'use strict';
app.controller('MenuController', ['$scope','Menu','imageUrl', function($scope, Menu, imageUrl) {

    $scope.title = 'This is a Menu';
    $scope.imageUrl = imageUrl;
    $scope.getMenu = Menu.query();
    $scope.getMenu.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.menu = data;
    })

}]);