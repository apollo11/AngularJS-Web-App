'use strict';

app.controller('TableCardController', ['$scope','TableCard','$window','imageUrl', function($scope, TableCard, $window, imageUrl) {

    $scope.title = 'Table and Card Games';
    $scope.imageUrl = imageUrl;
    $scope.getTableCardGames = TableCard.query();
    $scope.getTableCardGames.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.TableCardGames = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);