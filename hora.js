function mostrarHora(){
    console.log("hola ")
    var actual= new Date();
    var hora= actual.getHours();
    var minutos= actual.getMinutes();
    var segundos= actual.getSeconds();
     var imprimeHora= hora + ":" + minutos+ ":" +segundos;
     document.getElementById("horita").innerHTML=imprimeHora;
     setTimeOut('mostrarHora()',1000);
}