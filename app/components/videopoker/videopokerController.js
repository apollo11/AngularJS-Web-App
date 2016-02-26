'use strict';

app.controller('VideoPokerController', ['$scope','VideoPoker', function($scope, VideoPoker) {

    $scope.title = 'This is a Video Page';
    $scope.getVideoPokerGames = VideoPoker.query();
    $scope.getVideoPokerGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.VideoPokerGames = data;
    });
}]);