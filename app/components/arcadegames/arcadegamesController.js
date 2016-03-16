'use strict';
app.controller('ArcadeController', ['$scope','Arcade', '$window','imageUrl',  function($scope, Arcade, $window, imageUrl) {

    $scope.title = 'Arcade Games';
    $scope.imageUrl = imageUrl;
    $scope.getArcade = Arcade.query();
    $scope.getArcade.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.arcade = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);