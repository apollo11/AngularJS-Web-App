'use strict';

app.factory('TableCard',['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/table_card_games');

    return endPoint;
}]);