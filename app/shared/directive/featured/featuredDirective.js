'use strict';

app.directive('featuredBanner', [ function() {
    return {
        restrict:'AE',
        scope: {
            type: '@'
        },
        controller: ['Menu', '$scope','imageUrl','$window', function (Menu, $scope, imageUrl, $window) {
            $scope.title = 'Test';
            $scope.imageUrl = imageUrl;
            $scope.getMenu = Menu.query();
            $scope.getMenu.$promise.then(function(data) {
                $scope.data = {};
                $scope.data.menu = data;
            });

            $scope.onclickGameNewWindow = function (url, lang, file, title) {
                $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
            }
        }],
        template:'<div class="featured-section" ng-repeat="(key, value ) in data.menu track by $index" ng-hide="value.path !== menuType">'+
                    '<a ng-click="onclickGameNewWindow(value.game_link, value.language, value.game_code)">' +
                        '<div class="ftd-container">'+
                                '<img class="animated fadeIn" ng-src="{{imageUrl + value.featured_banner.filename}}" />'+
                        '</div>'+
                        '</a>'+
                    '</div>',
        link: function (scope, elem, attrs) {
                scope.menuType =  scope.type;
        }
    }
}]);