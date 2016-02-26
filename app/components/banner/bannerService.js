'use strict';

app.factory('Banner',[ '$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/banners');

    return endPoint;
}]);