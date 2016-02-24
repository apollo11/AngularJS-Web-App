'use strict';

app.factory('ScratchGames',['$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/scratch_games');

    return endPoint;
}]);