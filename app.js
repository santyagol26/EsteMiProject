var abc = window.location.toString();
var subst = abc.substring((abc.length - 10), (abc.length-5));
console.log(subst)
if (subst=="edita"){
    console.log("mirar **************")
    $(document).ready(function () {
        $('#perfil').addClass('active');
    });
}else if (subst=="poner"){
    $(document).ready(function () {
        $('#poner').addClass('active');
    });
}
else if (subst=="mirar"){
    console.log("mirar **************")
    $(document).ready(function () {
        $('#mirar').addClass('active');
    });
}
else if (subst=="portal"){
    $(document).ready(function () {
        $('#portal').addClass('active');
    });
}