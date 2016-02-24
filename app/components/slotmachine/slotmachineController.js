'use strict';
app.controller('SlotMachineController', ['$scope','SlotMachine', function($scope, SlotMachine) {

    $scope.title = 'This is a Games Page';
    $scope.getAllSlotGames = SlotMachine.query();
    $scope.getAllSlotGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allSlotGames = data;
    });

}]);