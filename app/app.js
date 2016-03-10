'use strict';
var app = angular.module('PlayTech', [
    ,'ui.router'
    ,'ngResource'
    ,'ui.bootstrap'
    ,'ngTouch'
    ,'ngAnimate'
    ,'ngSanitize'
    ,'ngLodash'
    ,'angularUtils.directives.dirPagination'
]);

app.constant('BaseUrl', 'http://playtechcms.orientalgame.com:8081/');