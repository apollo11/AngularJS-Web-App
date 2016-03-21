'use strict';
app.directive('loginModal', function() {
    return {
        restrict: 'AE',
        scope: {
            modal: '@'
        },
        template: '<div class="modal fade" id="{{modal}}" role="dialog">' +
                    '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
        '<button type="button" class="close close-btn" data-dismiss="modal">[close]</button>'+
        '<div class="modal-header">'+
        '<div class="banner-ads">'+
        '<img src="assets/images/ads-banner.jpg">'+
        '</div>'+
        '<div class="content-container">'+
        '<form class="form-inline" id="loginform">'+
        '<div class="form-group">'+
        '<input type="text" class="form-control" id="exampleInputName2" placeholder="Username" name="username">'+
        '</div>'+
        '<div class="form-group">'+
        '<input type="password" class="form-control" id="exampleInputEmail2" placeholder="Password" name="password">' +
        '</div>'+
        '<button type="submit" class="btn btn-login popup-btn" onclick="login(1)">LOGIN</button>'+
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    }
});