// Función para volver al inicio de la página
function volverAlInicio() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Función para mostrar el botón después de desplazarse hacia abajo 100px, por ejemplo
window.onscroll = function() {mostrarBotonVolverArriba()};

function mostrarBotonVolverArriba() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("btnVolverArriba").style.display = "block";
    } else {
        document.getElementById("btnVolverArriba").style.display = "none";
    }
}
