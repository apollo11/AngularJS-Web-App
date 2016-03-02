'use strict';
app.controller('GamesController', ['$scope','Games','$sce', function($scope, Games, $sce) {

    $scope.title = 'This is a Games Page';
    $scope.getAllGames = Games.query();
    $scope.getAllGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allGames = data;
    });

   $scope.picker = function (code) {
        return $sce.trustAsResourceUrl('http://tickers.playtech.com/jackpots/new_jackpot.swf?info=1&casino=playtech&game='+ code +'&font_face=arial&bold=true');
    }

}]);