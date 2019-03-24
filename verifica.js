var config = {
    apiKey: "AIzaSyARk-LDpaVRmvXhhyp0QKvD4oV6Ic42UjI",
    authDomain: "encomienda-70abc.firebaseapp.com",
    databaseURL: "https://encomienda-70abc.firebaseio.com",
    projectId: "encomienda-70abc",
    storageBucket: "encomienda-70abc.appspot.com",
    messagingSenderId: "913117630799"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("Hay sesion iniciada")
    } else {
        console.log("NO hay una sesion iniciada")
        window.location = 'index.html'
    }
});

