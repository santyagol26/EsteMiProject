function arriba() {
    console.log("helos")
    var b = document.getElementById('gente');
    b.innerHTML = "hola gente este es un cambio";
    var a = document.getElementById('arriba');
    a.innerHTML=`
                <nav class="navbar navbar-expand-lg navbar-dark bg-info container">
                     <a class="navbar-brand" href="#"><img src="imgs/encomiendo.jpg" alt="placeholder+image" id="imgn"
                     width="60px" class="img-fluid rounded-circle"></a>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <div class="navbar-nav ml-auto">
                     <li class="nav-item ">
                     <a class="nav-link" href="inicio.html">Inicio <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item active">
                     <a class="nav-link" href="perfil.html">Perfil <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link" href="mostrar.html">Ver pasajeros<span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link" href="firebase.html">Poner anuncio</a>
                     </li>
                     <li class="nav-item">
                     <button class="btn btn-outline-warning my-2 my-sm-0" type="submit" onclick="cerrar()">Cerrar
                     sesión</button>
                    </li>
                    </div>
                    </div>
                </nav>
            `
}
arriba();