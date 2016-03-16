'use strict';

app.controller('VideoPokerController', ['$scope','VideoPoker','$window','imageUrl', function($scope, VideoPoker, $window, imageUrl) {

    $scope.title = 'Video Poker Games';
    $scope.imageUrl = imageUrl;
    $scope.getVideoPokerGames = VideoPoker.query();
    $scope.getVideoPokerGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.VideoPokerGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }
}]);