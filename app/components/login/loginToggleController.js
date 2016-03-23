'use strict';
app.controller('ToggleController', ['$scope','$cookies', function($scope, $cookies) {

    $scope.retrieveCookie = $cookies.get('username');
    $scope.emptyCookie = function () {
        return   _.isEmpty($scope.retrieveCookie);
    };
    $scope.notEmptyCookie = function () {
        return !_.isEmpty($scope.retrieveCookie);
    };

    $scope.removeCookie = function () {
        $cookies.remove('username');
        location.reload();
    }

}]);