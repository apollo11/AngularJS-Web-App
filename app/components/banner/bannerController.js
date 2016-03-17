'use strict';
app.controller('BannerController', ['$scope','Banner','imageUrl', '$window', function($scope, Banner, imageUrl, $window) {

    $scope.title = 'This is a banner';
    $scope.imageUrl = imageUrl;
    $scope.getBanner = Banner.query();
    $scope.getBanner.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.banner = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }


}]);