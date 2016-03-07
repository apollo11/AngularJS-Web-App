'use strict';

app.controller('TableGamesController', ['$scope','Table', function($scope, Table) {

    $scope.title = 'Table Games';
    $scope.getTableGames = Table.query();
    $scope.getTableGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.TableGames = data;
    });

}]);