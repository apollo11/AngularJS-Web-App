'use strict';

app.directive('featuredBanner', [ function() {
    return {
        restrict:'AE',
        scope: {
            type: '@'
        },
        controller: ['Menu', '$scope','imageUrl','$window','$cookies', function (Menu, $scope, imageUrl, $window, $cookies) {
            $scope.title = 'Test';
            $scope.imageUrl = imageUrl;
            $scope.getMenu = Menu.query();
            $scope.getMenu.$promise.then(function(data) {
                $scope.data = {};
                $scope.data.menu = data;
            });

            $scope.onclickGameNewWindow = function (url, lang, file, title) {
                $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
            };

            $scope.onclickNewWindowDemo = function (code, title) {
                $window.open('http://cache.download.banner.greenjade88.com/flash/37/launchcasino.html?mode=offline&affiliates=1&language=EN&game='+code, title, 'width=800, height=600');
            };

            $scope.retrieveCookie = $cookies.get('username');
            $scope.emptyCookie = function () {
                return   _.isEmpty($scope.retrieveCookie);
            };
            $scope.notEmptyCookie = function () {
                return !_.isEmpty($scope.retrieveCookie);
            };

        }],
        template:'<div class="featured-section" ng-repeat="(key, value ) in data.menu track by $index" ng-hide="value.path !== menuType">'+
             '<span ng-if="notEmptyCookie()">' +
                '<a ng-click="onclickGameNewWindow(value.game_link, value.language, value.game_code)">' +
                        '<div class="ftd-container">'+
                        '<img class="animated fadeIn" ng-src="{{imageUrl + value.featured_banner.filename}}" />'+
                        '</div>'+
                '</a>'+
            '</span>'+
            '<span ng-if="emptyCookie()">'+
                '<a  ng-click="onclickNewWindowDemo(value.game_code, value.title)">' +
                        '<div class="ftd-container">'+
                        '<img class="animated fadeIn" ng-src="{{imageUrl + value.featured_banner.filename}}" />'+
                        '</div>'+
                '</a>'+
             '</span>'+
             '</div>',
        link: function (scope, elem, attrs) {
                scope.menuType =  scope.type;
        }
    }
}]);