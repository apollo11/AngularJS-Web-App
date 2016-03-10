'use strict';
app.controller('ScratchCardController', ['$scope','ScratchCard','$window',  function($scope, ScratchCard, $window) {

    $scope.title = 'Scratch Card';
    $scope.getScratchGames = ScratchCard.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchCard = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);