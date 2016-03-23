/**
 * Created by apollomm on 3/1/16.
 */
iapiSetCallout('Login', calloutLogin);
iapiSetCallout('Logout', calloutLogout);

function login(realMode) {
    iapiLogin(document.getElementById("loginform").username.value.toUpperCase(), document.getElementById("loginform").password.value, realMode, "en");
}

function logout(allSessions, realMode) {
    iapiLogout(allSessions, realMode);
}

function calloutLogin(response) {
    toastr.options.closeButton = true;
    if (response.errorCode) {
        toastr.error( response.playerMessage + "Error Code: " + response.errorCode);
    }
    else {
        toastr.success('Login successful, you will be redirected to play console!');
        var username = _.escape(document.getElementById("loginform").username.value.toUpperCase());
        document.cookie = "username="+ username;
        location.reload();
        var usernameCookie = document.cookie;
        getCookie(usernameCookie);
    }
}

function calloutLogout(response) {
    toastr.options.closeButton = true;

    if (response.errorCode) {
        toastr.error("Logout failed, " + response.errorCode);
    }
    else {
        toastr.success('You are now logged out!');
        delete_cookie();
        location.reload();
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
