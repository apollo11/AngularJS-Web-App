'use strict';
app.controller('ScratchGamesController', ['$scope','ScratchGames', function($scope, ScratchGames) {

    $scope.title = 'Scratch Games';
    $scope.getScratchGames = ScratchGames.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchGames = data;
    });

}]);