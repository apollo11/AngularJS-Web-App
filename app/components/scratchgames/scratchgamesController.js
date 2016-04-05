'use strict';
app.controller('ScratchGamesController',
    [
        '$scope'
        ,'ScratchGames'
        ,'$window'
        ,'imageUrl'
            , function($scope, ScratchGames, $window, imageUrl) {

    $scope.title = 'Scratch Games';
    $scope.imageUrl = imageUrl;
    $scope.getScratchGames = ScratchGames.query();
    $scope.getScratchGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.ScratchGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);