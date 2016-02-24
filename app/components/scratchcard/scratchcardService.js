'use strict';

app.factory('ScratchCard',['$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/scratch_card_games');

    return endPoint;
}]);