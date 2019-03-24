var abc = window.location.toString();
var subst = abc.substring((abc.length - 10), (abc.length-5));
console.log(subst)
if (subst=="mirar"){
    console.log("mirar")
    $(document).ready(function(){
        $('#mirar').addClass('active');
    });
}
if (subst=="edita" || subst=="perfi"){
    console.log("perfil o en edita")
    $(document).ready(function () {
        $('#perfi').addClass('active');
    });
} if (subst=="poner"){
    console.log("poner")
    $(document).ready(function () {
        $('#poner').addClass('active');
    });
}
 
 if (subst=="portal"){
    $(document).ready(function () {
        $('#portal').addClass('active');
    });
}