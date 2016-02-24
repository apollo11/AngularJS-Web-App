/**
 * Created by apollo on 10/01/2016.
 */
'use strict';
app.controller('MyController',['$scope','User', function($scope, User) {

    $scope.title = 'AngularJs Structure';
    $scope.users = User.get();
    //$scope.test = queryTest.query();
    //$scope.OneUser = User.charge({player:'ROGERTESTCNY'});

}]);

