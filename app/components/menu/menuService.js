'use strict';

app.factory('Menu',[ '$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/menu');

    return endPoint;
}]);