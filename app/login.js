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
        alert("Login failed, " + response.errorText);
    }
    else {
        window.location = "http://playtech.orientalgame.com:8080/";
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