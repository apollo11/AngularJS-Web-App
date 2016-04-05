'use strict';
app.controller('FooterController',
    [
        '$scope'
        ,'Footer'
        ,'$window'
        ,'imageUrl'
            , function($scope, Footer, $window, imageUrl) {

    $scope.title = 'Footer';
    $scope.imageUrl = imageUrl;
    $scope.getFooter = Footer.query();
    $scope.getFooter.$promise.then(function(data) {
        $scope.data = {};
        $scope.data.footer = data;
    });

    $scope.onclickGameNewWindow = function (url, lang, file, title) {
        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
    }

}]);