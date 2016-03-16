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
    ,'ui.bootstrap'
]);

app.constant('BaseUrl', 'http://playtechcms.orientalgame.com:8081/');
app.constant('imageUrl', 'http://playtechcms.orientalgame.com:8081/sites/default/files/');