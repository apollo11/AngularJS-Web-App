'use strict';

app.factory('Menu',[ '$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl +'api/v1/menu');

    return endPoint;
}]);