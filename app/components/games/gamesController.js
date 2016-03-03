'use strict';
app.controller('GamesController', ['$scope','Games','$sce','$ocLazyLoad', function($scope, Games, $sce, $ocLazyLoad) {

    $scope.title = 'This is a Games Page';
    $scope.getAllGames = Games.query();
    $scope.getAllGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allGames = data;
    });
    $ocLazyLoad.load('new_jackpotjs.js');
    $ocLazyLoad.load('ticker.js');

}]);