'use strict';
app.controller('ScratchCardController', ['$scope','ScratchCard','$window',  function($scope, ScratchCard, $window) {

    $scope.title = 'Scratch Card';
    $scope.getScratchGames = ScratchCard.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchGame = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);