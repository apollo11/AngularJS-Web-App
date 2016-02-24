'use strict';

app.factory('SlotMachine',['$resource', function($resource) {
    var endPoint = $resource('http://cmsplaytech.local/api/v1/slot_machine_games');

    return endPoint;
}]);