'use strict';
app.controller('BannerController', ['$scope','Banner','imageUrl',function($scope, Banner, imageUrl) {

    $scope.title = 'This is a banner';
    $scope.imageUrl = imageUrl;
    $scope.getBanner = Banner.query();
    $scope.getBanner.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.banner = data;
    });

}]);