'use strict';

app.controller('LiveController', ['$scope','Live', function($scope, Live) {

    $scope.title = 'Live Games';
    $scope.getLiveGames = Live.query();
    $scope.getLiveGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.LiveGames = data;
    });

}]);