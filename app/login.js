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

        if(!_.isUndefined(usernameCookie)) return;
        document.getElementsByClassName('login-link').style.display = "none";
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
