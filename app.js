if (window.location) {
    var abc=window.location.toString();
    var subst=abc.substring((abc.length-10),abc.length);
    console.log(window.location,subst)
    console.log("estoy en perfillllll")
    $(document).ready(function () {
        $('#perfil').addClass('active');
    });
}