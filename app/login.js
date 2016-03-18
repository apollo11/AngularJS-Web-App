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
    if (response.errorCode) {
        alert("" + response.playerMessage +" Error Code  " + response.errorCode);
    }
    else {
        alert("Login OK, you will be redirected to play console");
        window.location = "http://playtech.orientalgame.com/";
    }
}

function calloutLogout(response) {
    if (response.errorCode) {
        alert("Logout failed, " + response.errorCode);
    }
    else {
        delete_cookie();
    }
}