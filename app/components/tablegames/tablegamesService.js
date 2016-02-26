'use strict';

app.factory('Table',['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/table_games');

    return endPoint;
}]);