'use strict';

app.factory('ScratchCard',['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/scratch_card_games');

    return endPoint;
}]);