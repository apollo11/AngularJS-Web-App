'use strict';
app.controller('ScratchGamesController', ['$scope','ScratchGames', function($scope, ScratchGames) {

    $scope.title = 'This is a Games Page';
    $scope.getScratchGames = ScratchGames.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchGames = data;
    });

}]);