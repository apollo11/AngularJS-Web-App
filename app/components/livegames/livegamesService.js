'use strict';

app.factory('Live',['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/live_games');

    return endPoint;
}]);