//obtener elemento
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

//escuchar cambios
fileButton.addEventListener('change', function (e) {
    //get file 
    var file = e.target.files[0];
    //create a storage ref
    var storageRef = firebase.storage().ref('photos/' + file.name);
    //upload file
    var task = storageRef.put(file);
    //update progress bar
    task.on('state_changed', function progress(snapshot) {
        var porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = porcentage;
    },
        function error(err) {
            console.log(err)
        },
        function complete() {
            //console.log('complete')
            var downloadURL = task.snapshot.downloadURL;
            var user = firebase.auth().currentUser;
            //console.log(downloadURL, '===>', user.photoURL)
            user.updateProfile({
                photoURL: downloadURL
            });
            // window.location.reload(true); 
        }
    );
});
function actualizarf() {
    window.location.reload(true);
}