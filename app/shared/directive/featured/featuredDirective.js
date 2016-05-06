'use strict';

app.directive('featuredBanner',
    ['Menu'
        ,'imageUrl'
        ,'$window'
        ,'$cookies'
        ,function(Menu, imageUrl, $window, $cookies) {
            return {
                restrict:'AE',
                scope: {
                    type: '@'
                },
                template:'<div class="featured-section" ng-repeat="(key, value ) in data.menu track by $index" ng-hide="value.path !== menuType">'+
                        '<div ng-if="notEmptyCookie()" class="newWindow custom-width" ng-click="onclickGameNewWindow(value.game_link, value.language, value.game_code)">' +
                            '<div class="ftd-container">'+
                            '<img class="animated fadeIn" ng-src="{{imageUrl + value.featured_banner.filename}}" />'+
                            '<a href="#">Featured Game</a>' +
                         '</div>'+
                        '</div>'+
                        '<div ng-if="emptyCookie()" class="newWindow custom-width"  ng-click="onclickNewWindowDemo(value.game_code, value.title)">' +
                            '<div class="ftd-container">'+
                            '<img class="animated fadeIn" ng-src="{{imageUrl + value.featured_banner.filename}}" />'+
                            '<a href="#">Featured Game</a>' +
                         '</div>'+
                        '</div>'+
                    '</div>',
                link: function (scope, elem, attrs) {

                    scope.menuType =  scope.type;
                    scope.title = 'Test';
                    scope.imageUrl = imageUrl;
                    scope.getMenu = Menu.query();
                    scope.getMenu.$promise.then(function(data) {
                        scope.data = {};
                        scope.data.menu = data;
                    });

                    scope.onclickGameNewWindow = function (url, lang, file, title) {
                        $window.open(url+'?' + 'language='+ lang +'&game='+file, title, 'width=800, height=600');
                    };

                    scope.onclickNewWindowDemo = function (code, title) {
                        $window.open('http://cache.download.banner.greenjade88.com/flash/37/launchcasino.html?mode=offline&affiliates=1&language=EN&game='+code, title, 'width=800, height=600');
                    };

                    scope.retrieveCookie = $cookies.get('username');
                    scope.emptyCookie = function () {
                        return   _.isEmpty(scope.retrieveCookie);
                    };

                    scope.notEmptyCookie = function () {
                        return !_.isEmpty(scope.retrieveCookie);
                    };

                }
            }
}]);