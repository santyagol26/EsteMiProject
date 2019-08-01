//variable que inicializa firebase
var db = firebase.firestore();
var algo = "";
// agregar datos
var dir;
var nameU;
var id;
firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    dir = `${user.photoURL}`;
    nameU= `${user.displayName}`;
    id=`${user.uid}`;
    console.log(user.uid);
});

function guardar() {
    algo = nameU;
    var aerolinea = document.getElementById('aerolinea').value;
    var fecha = document.getElementById('fecha').value;
    var celular = document.getElementById('celular').value;
    var hora = document.getElementById('hora').value;
    var ruta = document.getElementById('ruta').value;
    var eleme = document.getElementById('select1').value;
    if ( aerolinea.length == 0 || celular.length == 0 || ruta.length == 0 || fecha.length == 0 || hora.length == 0) {
        console.log("Llene todos los campos");
        var contenido = document.getElementById('conte');
        contenido.innerHTML = `
               <div class="container mt-3"> 
               <div class="alert alert-danger mt-3" role="alert">
               <h4 class="alert-heading">Apreciado usuario</h4>
               <p> LLene todos los campos</p>
               <p class="mb-0">Recuerde que para que lo contacten debe hacerse confiable</p>
               </div>
               </div>
        `;
    } else {
        db.collection("users").add({
            first: nameU,
            celular: celular,
            fecha: fecha,
            hora: hora,
            ruta: ruta,
            kg: eleme,
            aerplane: aerolinea,
            dir: dir,
           idid: id 
        })
            .then(function (docRef) {
               // console.log("Document written with ID: ", docRef.id);
                document.getElementById('celular').value = "";
                document.getElementById('hora').value = '';
                document.getElementById('ruta').value = '';
                document.getElementById('aerolinea').value = '';
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        var contenid = document.getElementById('conte');
        console.log('estoy adentro')
        contenid.innerHTML = `
               <div class="container mt-3"> 
               <div class="alert alert-success mt-3" role="alert">
               <h4 class="alert-heading">${algo} su anuncio fue realizado con exito</h4>
               <p> ya puedes ver tu anuncio en ver pasajeros</p>
               <p class="mb-0">Recuerde verificar muy bien lo que lleva </p>
               <p class="mb-0">Su anuncio se eliminará a la hora de llegada de su vuelo.</p>
               </div>
               </div>
        `;
    }
}
