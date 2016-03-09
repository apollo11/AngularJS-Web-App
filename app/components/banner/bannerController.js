'use strict';
app.controller('BannerController', ['$scope','Banner', function($scope, Banner) {

    $scope.title = 'This is a banner';

    $scope.getBanner = Banner.query();
    $scope.getBanner.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.banner = data;
    });

}]);