'use strict';

app.factory('Logo',[ '$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/logo');

    return endPoint;
}]);