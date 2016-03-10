app.directive('ticker',function() {
    return {
        restrict: 'AE',
        scope: {
            code: '@'
        },
        controller: ['Ticker', '$scope', function (Ticker, $scope) {

            $scope.params = {
                info: 1,
                casino: 'playtech',
                game: $scope.code,
                currency: 'CNY'
            };
            $scope.ticker = Ticker.getGamePrice($scope.params, function(resp) {

                $scope.gameData = {};
                if(!_.isUndefined(resp.request)){
                    $scope.gameData.response =resp.request.gamedata;
                    }
            },
            function (err) {
                    console.log(err)
                })
        }],
        template: '<p class="jackpot" ng-repeat ="(key, value) in gameData.response track by $index"  ng-if="$index < 1">' +
        '{{value.amount._sign}} {{value.amount.__text}}' + '</p>'
    }
});