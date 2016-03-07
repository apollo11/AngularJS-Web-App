'use strict';
app.controller('SlotMachineController', ['$scope','SlotMachine', function($scope, SlotMachine) {

    $scope.title = 'Slot Machine';
    $scope.getAllSlotGames = SlotMachine.query();
    $scope.getAllSlotGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allSlotGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);