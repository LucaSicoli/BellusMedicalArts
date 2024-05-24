document.addEventListener("scroll", function() {
    var footer = document.querySelector("footer");
    var socialButtons = document.querySelector(".social-buttons");

    // Distancia del top del footer al top de la ventana
    var footerTop = footer.getBoundingClientRect().top;

    // Altura de la ventana
    var windowHeight = window.innerHeight;

    // Cálculo de la proximidad del footer
    var proximity = footerTop - windowHeight;

    if (proximity < 100) { // Inicia el desvanecimiento 100px antes de llegar al footer
        // Ajustar la opacidad basada en la proximidad al footer
        var opacity = Math.max(0, 1 - ((100 - proximity) / 100));
        socialButtons.style.opacity = opacity;
    } else {
        // Mantener los botones totalmente visibles si no se está cerca del footer
        socialButtons.style.opacity = 1;
    }
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío real del formulario

    // Aquí recogerías los datos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Aquí necesitarías enviar estos datos a tu servidor o a un servicio web
    console.log('Enviar estos datos:', { name, email });

    // Aquí, como ejemplo, simplemente limpiaríamos el formulario
    alert('¡Gracias por suscribirte, ' + name + '!');
    this.reset();
});

