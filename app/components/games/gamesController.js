'use strict';
app.controller('GamesController', ['$scope','Games', '$window','imageUrl', function($scope, Games, $window, imageUrl) {

    $scope.title = 'All Games';
    $scope.imageUrl = imageUrl;
    $scope.currentPage =1;
    $scope.getAllGames = Games.query();
    $scope.getAllGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.allGames = data;
    });


    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);