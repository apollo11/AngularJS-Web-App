'use strict';

app.factory('Banner',[ '$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/banners');

    return endPoint;
}]);