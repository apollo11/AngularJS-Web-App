'use strict';
var app = angular.module('PlayTech', [
    ,'ui.router'
    ,'ngResource'
    ,'ngTouch'
    ,'ngAnimate'
    ,'ngSanitize'
    ,'ngLodash'
    ,'countTo'
    ,'ngCookies'
]);

app.constant('BaseUrl', 'http://playtechcms.orientalgame.com:8081/');
app.constant('imageUrl', 'http://playtechcms.orientalgame.com:8081/sites/default/files/');