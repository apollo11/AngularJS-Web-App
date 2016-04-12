app.directive('ticker',['Ticker', function(Ticker) {
    return {
        restrict: 'AE',
        scope: {
            code: '@'
        },
        template: '<p ng-repeat ="(key, value) in gameData.response | limitTo:1 track by $index"  ng-show="$index< 1 && amountTo !=\'\'">'+
                    '￥ <span count-to="{{amountTo}}" value="{{amountFrom}}" duration="60"></span>' +
                  '</p>',
        link: function (scope, elem, attrs) {

            scope.gameCode =  scope.code;
            scope.params = {
                info: 1,
                casino: 'playtech',
                game: scope.gameCode,
                currency: 'CNY'
            };
            scope.ticker = Ticker.getGamePrice(scope.params, function(resp) {

                    scope.gameData = {};
                    if(!_.isUndefined(resp.request)) {
                        scope.gameData.response = resp.request.gamedata;
                        _.forEach( scope.gameData.response, function(value, key) {
                            if(!_.isUndefined(value.amount)) {
                                scope.amountTo = parseFloat(value.amount.__text);
                                scope.amountFrom = parseFloat(value.amount.__text) * .50;
                                //console.log(scope.amountFrom);
                                //console.log(scope.amountTo);
                            }else {
                                scope.amountValue = true;
                            }
                        });
                    }
                },
                function (err) {
                    console.log(err)
                })
        }
    }
}]);