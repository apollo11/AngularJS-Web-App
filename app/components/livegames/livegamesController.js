'use strict';

app.controller('LiveController', ['$scope','Live','$window','imageUrl', function($scope, Live, $window, imageUrl) {

    $scope.title = 'Live Games';
    $scope.imageUrl = imageUrl;
    $scope.getLiveGames = Live.query();
    $scope.getLiveGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.LiveGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);