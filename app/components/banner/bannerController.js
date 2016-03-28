'use strict';
app.controller('BannerController', ['$scope','Banner','imageUrl', '$window','$cookies', function($scope, Banner, imageUrl, $window, $cookies) {

    $scope.title = 'This is a banner';
    $scope.imageUrl = imageUrl;
    $scope.getBanner = Banner.query();
    $scope.getBanner.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.banner = data;
    });

    $scope.onclickNewWindowDemo = function (code, title) {
        $window.open('http://cache.download.banner.greenjade88.com/flash/37/launchcasino.html?mode=offline&affiliates=1&language=EN&game='+code, title, 'width=800, height=600');
    };

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    };

    $scope.emptyCookie = function () {
        return   _.isEmpty($scope.retrieveCookie);
    };
    $scope.notEmptyCookie = function () {
        return !_.isEmpty($scope.retrieveCookie);
    };

}]);