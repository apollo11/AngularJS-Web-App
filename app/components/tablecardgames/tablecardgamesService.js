'use strict';

app.factory('TableCard',['$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/table_card_games');

    return endPoint;
}]);