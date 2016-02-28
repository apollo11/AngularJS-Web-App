'use strict';
var app = angular.module('PlayTech', [
    ,'ui.router'
    ,'ngResource'
    ,'ui.bootstrap'
    ,'ngTouch'
    ,'ngAnimate'
]);

app.constant('BaseUrl', 'http://playtech.orientalgame.com:8080/PT/cmsBackOfficePlayTech/');