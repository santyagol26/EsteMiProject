function registrar() {
    var alertinha = document.getElementById('alerta')
    var email = document.getElementById('correo').value;
    var passwr = document.getElementById('passw').value;
    firebase.auth().createUserWithEmailAndPassword(email, passwr)
        .then(function () {
            verficar()
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, "-->", errorMessage);
            if (errorCode == "auth/email-already-in-use") {
                console.log("entre al error code");
                alertinha.innerHTML = `
                <div class="alert alert-danger " role="alert">
                La dirección de correo ya está siendo usando por otra cuenta.
                </div>
        `;
            }
            // ...
        });
     document.getElementById('correo').value = '';
   document.getElementById('passw').value = '';
}

//ingresar usuarios existentes
function ingresar() {
    var correo1 = document.getElementById('correo1').value;
    var contra = document.getElementById('passw1').value;
    firebase.auth().signInWithEmailAndPassword(correo1, contra).catch(function (error) {
        var contenido = document.getElementById('contenido');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("****",errorCode,errorMessage);
        console.log("****",errorCode,errorMessage);
        if (errorCode === 'auth/wrong-password') {
            contenido.innerHTML = `
            <div class="alert alert-danger mt-3" role="alert">
            <h4 class="alert-heading">Contraseña incorrecta!</h4>
            <hr>
            <p class="mb-0">La contraseña es invalida</p>
            </div>
        `;
        } else if (errorCode === 'auth/user-not-found') {
            contenido.innerHTML = `
            <div class="alert alert-danger mt-3" role="alert">
            <h4 class="alert-heading">Usuario no encontrado!</h4>
            <hr>
            <p class="mb-0">No hay registro de usuario correspondiente a este identificador.</p>
            </div>
        `;
        }
        else if(errorCode==='auth/network-request-failed') {
            contenido.innerHTML = `
            <div class="alert alert-danger mt-3" role="alert">
            <h4 class="alert-heading">Usuario no autenticado!</h4>
            <hr>
            <p class="mb-0">No identificador.</p>
            </div>
        `;
        }
    });
    console.log('pepe')
      //document.getElementById('correo1').value='';
      document.getElementById('passw1').value = '';
}
//observador
function observador() {
    var contenido = document.getElementById('contenido');
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('Hay sesion iniciada observador',user.displayName)
        
            aparece(user);
           if (!user.emailVerified){
              console.log('usuario no verificado')
              contenido.innerHTML = `
            <div class="alert alert-danger mt-3" role="alert">
            <h4 class="alert-heading">Usuario no autenticado!</h4>
            <hr>
            <p class="mb-0">Dirijase a su bandeja de entrada de ${user.email} y dele clik en el el link</p>
            </div>
        `;
           }

        } else {
            // User is signed out.
            console.log('no exite')
            //contenido.innerHTML = `pqp`;
        }
    });
}
observador();
//si aparece en la base de datos y esta verificado
function aparece(user) {
    var user = user;
    var contenido = document.getElementById('contenido');
    console.log("esta verificado user")
    if (user.photoURL) {
        window.location = 'mostrar.html'
    }

    if (user.emailVerified) {
        console.log("esta verificado")
        contenido.innerHTML = `
        <div class="alert alert-success mt-3" role="alert">
        <h5 class="alert-heading">Bienvenid@ ${user.email}!!</h5>
        </div> 
        `;
        console.log("estoy en aparece")
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                window.location = 'mostrar.html'
            } else {
                console.log("NO hay una sesion iniciada")
            }
        });
    }
}
function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            console.log('saliendo...');
        })
        .catch(function (error) {
            console.log(error);
        })
}
function verficar() {
    var user = firebase.auth().currentUser;
    var alertaEnvioCorreo = document.getElementById('alerta');
    user.sendEmailVerification().then(function () {
        // Email sent.
        alertaEnvioCorreo.innerHTML = `
        <div class="alert alert-success " role="alert">
        Estamos enviandole un correo para validar su cuenta, revise su bandeja de entrada y dele clik en el link.
        </div> 
        `;
        console.log('Enviando correo...');
    }).catch(function (error) {
        // An error happened.
        console.log(error);
    });
}
function googler() {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log('hello mundito');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}
function facer() {
    var msj = document.getElementById('contenido');
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("eureka")
    }).catch(function (error) {
       
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        //console.log(errorCode, "--", errorMessage, "--", email, "--", credential)
        if (errorCode == "auth/account-exists-with-different-credential") {
           // console.log("hola amor")
            msj.innerHTML=`
            <div class="alert alert-danger " role="alert">
            La dirección de correo de facebook ya está creada con google
            por favor ingrese con google.
            </div>
            `;

        }
    });
}