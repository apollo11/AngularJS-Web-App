'use strict';

app.factory('Footer',[ '$resource','BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/footer');

    return endPoint;
}]);