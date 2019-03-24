var abc = window.location.toString();
var subst = abc.substring((abc.length - 10), (abc.length-5));
console.log( subst)
console.log("estoy en perfillllll")
if (subst=="edita"){
    $(document).ready(function () {
        $('#perfil').addClass('active');
    });
}else if (subst=="poner"){
    $(document).ready(function () {
        $('#poner').addClass('active');
    });
}