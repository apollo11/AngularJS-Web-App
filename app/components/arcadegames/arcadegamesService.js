'use strict';

app.factory('Arcade',[ '$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/arcade_games');

    return endPoint;
}]);