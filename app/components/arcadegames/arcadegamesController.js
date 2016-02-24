'use strict';
app.controller('ArcadeController', ['$scope','Arcade', function($scope, Arcade) {

    $scope.title = 'This is a banner';

    $scope.getArcade = Arcade.query();
    $scope.getArcade.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.arcade = data;
    });

}]);