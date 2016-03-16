'use strict';
app.controller('SlotMachineController', ['$scope','SlotMachine','$window','imageUrl', function($scope, SlotMachine, $window, imageUrl) {

    $scope.title = 'Slot Machine';
    $scope.imageUrl = imageUrl;
    $scope.getAllSlotGames = SlotMachine.query();
    $scope.getAllSlotGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allSlotGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);