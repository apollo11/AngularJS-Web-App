'use strict';

app.factory('Arcade',[ '$resource','BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/arcade_games');

    return endPoint;
}]);