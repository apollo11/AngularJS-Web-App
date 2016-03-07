'use strict';
app.controller('SlotMachineController', ['$scope','SlotMachine', function($scope, SlotMachine) {

    $scope.title = 'Slot Machine';
    $scope.getAllSlotGames = SlotMachine.query();
    $scope.getAllSlotGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allSlotGames = data;
    });

}]);