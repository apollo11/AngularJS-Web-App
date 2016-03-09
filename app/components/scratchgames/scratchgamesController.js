'use strict';
app.controller('ScratchGamesController',
    ['$scope','ScratchGames','$window', function($scope, ScratchGames, $window) {

    $scope.title = 'Scratch Games';
    $scope.getScratchGames = ScratchGames.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);