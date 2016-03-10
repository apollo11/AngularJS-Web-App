'use strict';

app.factory('Ticker', ['$resource', function($resource) {
    var endPoint =  $resource('http://tickers.playtech.com/jackpots/new_jackpotxml.php:one/:PT/:gameCode/:curr',
        {},
        {
            getGamePrice: {
                method: 'GET',
                transformResponse: function(data, headerFn)
                {
                    var x2js = new X2JS();
                    var jasonData = x2js.xml_str2json(data);
                    return jasonData;
                }
            }
        });

    return endPoint;
}]);