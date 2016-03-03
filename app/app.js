'use strict';
var app = angular.module('PlayTech', [
    ,'ui.router'
    ,'ngResource'
    ,'ui.bootstrap'
    ,'ngTouch'
    ,'ngAnimate'
    ,'ngSanitize'
    ,'oc.lazyLoad'
]);

app.constant('BaseUrl', 'http://playtechcms.orientalgame.com:8081/');