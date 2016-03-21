'use strict';
app.controller('LoginController', ['$scope','$cookies', function($scope, $cookies) {
    $scope.title = 'This is a banner';

    //$scope.saveCookies = function(username) {
    //    $cookies.put('username', username.name);
    //};
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