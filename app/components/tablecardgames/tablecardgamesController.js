'use strict';

app.controller('TableCardController', ['$scope','TableCard', function($scope, TableCard) {

    $scope.title = 'This is a Games Page';
    $scope.getTableCardGames = TableCard.query();
    $scope.getTableCardGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.TableCardGames = data;
    });

}]);