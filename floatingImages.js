// Archivo floatingImages.js


function checkVisibility() {
    const imageContainers = document.querySelectorAll('.floating-img-container, .floating-img-container2, .floating-img-container3, .video-container');
  
    imageContainers.forEach(container => {
      const position = container.getBoundingClientRect();
  
      // Verifica si el contenedor está en la ventana gráfica.
      if (position.top < window.innerHeight && position.bottom >= 0) {
        container.classList.add('visible');
      } else {
        container.classList.remove('visible');
      }
    });
  }
  
  // Escucha ambos eventos, scroll y touchmove
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('touchmove', checkVisibility);
  
  // Ejecuta la función inmediatamente para verificar la visibilidad inicial de las imágenes
  checkVisibility();

  document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash === "#hair-trans") {
      const cardToExpand = document.querySelector(hash);
      if (cardToExpand) {
        expandCard(cardToExpand);
      }
    }  });

  
  