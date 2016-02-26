'use strict';

app.factory('Games',['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl +'api/v1/games');

    return endPoint;
}]);