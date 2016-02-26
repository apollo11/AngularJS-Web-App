'use strict';

app.controller('LiveController', ['$scope','Live', function($scope, Live) {

    $scope.title = 'This is a Games Page';
    $scope.getLiveGames = Live.query();
    $scope.getLiveGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.LiveGames = data;
    });

}]);