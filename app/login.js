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
        //alert("" + response.playerMessage +" Error Code  " + response.errorCode);
        // Display a warning toast, with no title
        toastr.error( response.playerMessage + "Error Code" + response.errorCode);
        // Display an info toast with no title
        toastr.info('Are you the 6 fingered man?')
    }
    else {
        var username = _.escape(document.getElementById("loginform").username.value.toUpperCase());
        document.cookie = "username="+ username;
        // Display a success toast, with a title
        toastr.success('Have fun storming the castle!', 'Miracle Max Says');
        //alert("Login OK, you will be redirected to play console");
        location.reload();
    }
}

function calloutLogout(response) {
    if (response.errorCode) {
        toastr.error("Logout failed, " + response.errorCode);
    }
    else {
        delete_cookie();
        toastr.success('You are now logged out!');
        location.reload();
    }
}
