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
                    _.forEach( $scope.gameData.response, function(value, key) {
                       if(!_.isUndefined(value.amount)){
                           $scope.amountTo = parseFloat(value.amount.__text);
                           $scope.amountFrom = parseFloat(value.amount.__text) * .10;
                           console.log($scope.amountFrom);
                           console.log($scope.amountTo);
                       }
                    });
                 }
            },
            function (err) {
                    console.log(err)
                })
        }],
        template: '<p class="jackpot" ng-repeat ="(key, value) in gameData.response track by $index"  ng-if="$index < 1">' +
        '￥' + '<span count-to="{{amountTo}}" value="{{amountFrom}}" duration="120"></span>'+
        '</p>'
    }
});