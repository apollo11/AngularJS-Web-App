'use strict';

app.factory('SlotMachine',['$resource','BaseUrl', function($resource, BaseUrl) {
    var endPoint = $resource(BaseUrl + 'api/v1/slot_machine_games');

    return endPoint;
}]);