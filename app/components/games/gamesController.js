'use strict';
app.controller('GamesController', ['$scope','Games', '$window','imageUrl','$cookies',
    function($scope, Games, $window, imageUrl, $cookies) {

    $scope.title = 'All Games';
    $scope.imageUrl = imageUrl;
    $scope.currentPage =1;
    $scope.getAllGames = Games.query();
    $scope.getAllGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    };

    $scope.onclickNewWindowDemo = function (code, title) {
        $window.open('http://cache.download.banner.greenjade88.com/flash/37/launchcasino.html?mode=offline&affiliates=1&language=EN&game='+code, title, 'width=800, height=600');
    };

    $scope.retrieveCookie = $cookies.get('username');
    $scope.emptyCookie = function () {
        return   _.isEmpty($scope.retrieveCookie);
    };
    $scope.notEmptyCookie = function () {
        return !_.isEmpty($scope.retrieveCookie);
    };

}]);