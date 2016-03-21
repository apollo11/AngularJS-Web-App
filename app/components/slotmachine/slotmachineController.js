'use strict';
app.controller('SlotMachineController', ['$scope','SlotMachine','$window','imageUrl','$cookies'
    , function($scope, SlotMachine, $window, imageUrl, $cookies) {

    $scope.title = 'Slot Machine';
    $scope.imageUrl = imageUrl;
    $scope.getAllSlotGames = SlotMachine.query();
    $scope.getAllSlotGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allSlotGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    };

    $scope.onclickNewWindowDemo = function (code, title) {
        $window.open('http://cache.download.banner.greenjade88.com/flash/37/launchcasino.html?mode=offline&affiliates=1&language=EN&game='+code, title, 'width=800, height=600');
    };

    $scope.retrieveCookie = $cookies.get('username');
    $scope.emptyCookie = function () {
        return   _.isEmpty($scope.retrieveCookie);
    };
    $scope.notEmptyCookie = function () {
        return !_.isEmpty($scope.retrieveCookie);
    };

}]);