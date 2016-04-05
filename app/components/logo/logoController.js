'use strict';
app.controller('LogoController',
    [
        '$scope'
        ,'Logo'
        ,'imageUrl'
            , function($scope, Logo, imageUrl) {

    $scope.title = 'This is a Logo';
    $scope.imageUrl = imageUrl;
    $scope.getLogo = Logo.query();
    $scope.getLogo.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.menu = data;
    })

}]);