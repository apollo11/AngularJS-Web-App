'use strict';
app.controller('ScratchCardController', ['$scope','ScratchCard', function($scope, ScratchCard) {

    $scope.title = 'This is a Games Page';
    $scope.getScratchGames = ScratchCard.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchGame = data;
    });

}]);