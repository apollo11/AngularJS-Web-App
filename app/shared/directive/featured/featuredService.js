'use strict';

app.factory('Featured', ['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/featured');

    return endPoint;
}]);