'use strict';
app.controller('GamesController', ['$scope','Games','$sce', function($scope, Games, $sce) {

    $scope.title = 'This is a Games Page';
    $scope.getAllGames = Games.query();
    $scope.getAllGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allGames = data;
    });

   $scope.picker = function () {
        return $sce.trustAsResourceUrl('http://tickers.playtech.com/jackpots/new_jackpotjs.js');
    }

}]);