'use strict';

app.factory('Logo',[ '$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/logo');

    return endPoint;
}]);