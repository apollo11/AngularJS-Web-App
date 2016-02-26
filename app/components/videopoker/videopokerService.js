'use strict';

app.factory('VideoPoker',['$resource', 'BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/video_poker_games');

    return endPoint;
}]);