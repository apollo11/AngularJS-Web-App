'use strict';
app.controller('GamesController', ['$scope','Games', function($scope, Games) {

    $scope.title = 'This is a Games Page';
    $scope.getAllGames = Games.query();
    $scope.getAllGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allGames = data;
    });

}]);