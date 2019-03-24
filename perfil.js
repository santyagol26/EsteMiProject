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
        console.log('sos un crack',user.email) 
    } else {
        window.location = 'index.html'
    }
});
function actualizar(){
    var nombre = document.getElementById('nmbr').value;
    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: nombre,
        }).then(function () {
            console.log(user.phoneNumber,user.displayName)
            console.log("succesfully")
            window.location.reload(true); 
        }).catch(function (error) {
            console.log("unsuccesfully", error)
        });
     
    });
   
}
function obtener(){
    var nombre_var=document.getElementById('nameperfil');
    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;
        console.log("succesfully", user.phoneNumber)
        nombre_var.innerHTML=`
        <p>${user.displayName}</p>
        <p>${user.email}</p>
        `;
    });
}
obtener()
//cerrar
function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            console.log('saliendo...');
        })
        .catch(function (error) {
            console.log(error);
        })
}
//cargar imagen
function autocargar(){
    var pruebita=document.getElementById('pruebita');
    firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          if(user.photoURL == null){ 
            pruebita.innerHTML=`
            <img src="imgs/user.png" alt="imagen de perfil" id="imgn" width="100px" class="img-fluid rounded-circle">
             `;
          }else{ 
            pruebita.innerHTML=`
             <img src=${user.photoURL} alt="placeholder+image" id="imgn" width="150px" class=" img-thumbnail">
             `;
            console.log("photo n nula")
          }   
        } 
      });
} autocargar();