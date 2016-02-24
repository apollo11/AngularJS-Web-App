'use strict';
app.controller('LogoController', ['$scope','Logo', function($scope, Logo) {

    $scope.title = 'This is a Logo';
    $scope.getLogo = Logo.query();
    $scope.getLogo.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.menu = data;
    })

}]);