'use strict';

app.controller('TableGamesController', ['$scope','Table','$window','imageUrl', function($scope, Table, $window, imageUrl) {

    $scope.title = 'Table Games';
    $scope.imageUrl = imageUrl;
    $scope.getTableGames = Table.query();
    $scope.getTableGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.TableGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);