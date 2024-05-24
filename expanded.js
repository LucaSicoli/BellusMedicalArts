document.addEventListener('DOMContentLoaded', () => {
  // Oculta todos los .treatment-details cuando la página se carga y ajusta la opacidad inicial
  document.querySelectorAll('.treatment-details').forEach(details => {
    details.style.display = 'none';
    details.style.opacity = 0;
    details.style.transition = 'opacity 0.3s ease'; // Establece la transición de opacidad
  });
});

function expandCard(cardElement) {
  if (cardElement.classList.contains('expanded')) {
    return; // Si ya está expandida, no hacer nada más
  }

  document.querySelectorAll('.treatment-card.expanded').forEach(function(card) {
    card.classList.remove('expanded');
    let details = card.querySelector('.treatment-details');
    details.style.opacity = 0;
    setTimeout(() => {
      details.style.display = 'none';
      card.querySelector('.close-btn').style.display = 'none';
    }, ); // Espera la transición
  });

  cardElement.classList.add('expanded');
  let details = cardElement.querySelector('.treatment-details');
  details.style.display = 'block';
  setTimeout(() => details.style.opacity = 20, 300); // Inicia la transición de opacidad para los detalles

  let closeButton = cardElement.querySelector('.close-btn');
  closeButton.style.display = 'block';

  document.getElementById('overlay').style.display = 'block';

  document.querySelectorAll('.treatment-card.expanded.visible').forEach(function(card) {
    card.classList.remove('visible');
  });

  // Añadir la clase 'expanded' como antes
  cardElement.classList.add('expanded');

  // Retrasa la adición de la clase 'visible' para permitir que la tarjeta se haga visible suavemente
  setTimeout(() => {
    cardElement.classList.add('visible');
  }, 5); 
}

function closeCard(event) {
  event.stopPropagation(); // Previene la propagación del evento al tratamiento-card

  let expandedCard = event.target.closest('.treatment-card.expanded');
  if (expandedCard) {
    let details = expandedCard.querySelector('.treatment-details');
    details.style.opacity = 0; // Inicia la transición de opacidad
    setTimeout(() => {
      expandedCard.classList.remove('expanded');
      details.style.display = 'none';
      expandedCard.querySelector('.close-btn').style.display = 'none';
    }, 300); // Espera a que termine la transición para ocultar completamente
  }

  setTimeout(() => document.getElementById('overlay').style.display = 'none', 300);
}