// Decorate cochez-carrusel block
export default function decorate(block) {
  console.log('Decorating block categories', block);

  block.className = 'banco-compartir-carousel-block';

  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'banco-compartir-carousel-section';

  const prevButton = document.createElement('button');
  prevButton.className = 'banco-compartir-carousel-button-prev';
  const nextButton = document.createElement('button');
  nextButton.className = 'banco-compartir-carousel-button-next';

  prevButton.className = 'banco-compartir-carousel-button-prev';
  nextButton.className = 'banco-compartir-carousel-button-next';
  prevButton.disabled = true;

  const items = [...block.children];
  let currentIndex = 0; // Mantener el índice de la imagen actual
  const itemWidth = items[0].offsetWidth; // Suponiendo que todos los items tienen el mismo tamaño

  items.forEach((row) => {
    row.className = 'banco-compartir-carousel-item';
    [...row.children][0].className = 'banco-compartir-carousel-item-image';
    [...row.children][1].className = 'banco-compartir-carousel-item-title';

    carouselContainer.appendChild(row);
  });

  
  block.appendChild(carouselContainer);
  block.appendChild(nextButton);
  block.prepend(prevButton);

  function moveCarousel() {
    [...carouselContainer.children].forEach((item) => {
      item.style.transform = `translateX(-${currentIndex * itemWidth}px)`; 
    });

    // Deshabilitar o habilitar los botones según el índice
    prevButton.disabled = currentIndex === 0; // Deshabilitar "Prev" en el primer slide
    nextButton.disabled = currentIndex === items.length - 1; // Deshabilitar "Next" en el último slide
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      moveCarousel();
    }
  });

  // Inicializar el carrusel al principio
  moveCarousel();
  
}
