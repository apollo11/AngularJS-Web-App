'use strict';

app.factory('ScratchGames',['$resource','BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/scratch_games');

    return endPoint;
}]);