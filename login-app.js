var ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
    signInOptions : [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "search-display.html"
}

ui.start('#login-ui',uiConfig)


