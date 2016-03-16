'use strict';

app.directive('featuredBanner', [ function() {
    return {
        restrict:'AE',
        scope: {
            type: '@'
        },
        controller: ['Menu', '$scope','imageUrl', function (Menu, $scope, imageUrl) {
            $scope.title = 'Test';
            $scope.imageUrl = imageUrl;
            $scope.getMenu = Menu.query();
            $scope.getMenu.$promise.then(function(data) {
                $scope.data = {};
                $scope.data.menu = data;
            });
        }],
        template:'<div class="featured-section">'+
                    '<div class="ftd-container" ng-repeat="(key, value ) in data.menu track by $index" ng-hide="value.path !== menuType">'+
                        '<img class="animated fadeIn" ng-src="{{imageUrl + value.featured_banner.filename}}" />'+
                    '</div>',
        link: function (scope, elem, attrs) {
                scope.menuType =  scope.type;
        }
    }
}]);