'use strict';
var app = angular.module('PlayTech', [
    ,'ui.router'
    ,'ngResource'
    ,'ngTouch'
    ,'ngAnimate'
    ,'ngSanitize'
    ,'ngLodash'
    ,'angularUtils.directives.dirPagination'
    ,'countTo'
]);

app.constant('BaseUrl', 'http://playtechcms.orientalgame.com:8081/');