'use strict';

app.factory('Games',['$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/games');

    return endPoint;
}]);