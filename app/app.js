'use strict';
var app = angular.module('PlayTech', [
    ,'ui.router'
    ,'ngResource'
    ,'ui.bootstrap'
    ,'ngTouch'
    ,'ngAnimate'
]);

app.constant('BaseUrl', 'http://playtechcms.orientalgame.com:8081/');
app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
