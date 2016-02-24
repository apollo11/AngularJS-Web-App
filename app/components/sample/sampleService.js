/**
 * Created by apollo on 10/01/2016.
 */

//app.factory('User', function ($resource) {
//    var User = $resource('https://kioskpublicapi.grandmandarin88.com/help');
//    return User;
//});


app.factory('User', function($resource) {
    var User = $resource('http://ogbackoffice.local/api/v1/kalokohan', {}, {
        query: {
            method: 'GET'
        }
    });
    return User;
});
