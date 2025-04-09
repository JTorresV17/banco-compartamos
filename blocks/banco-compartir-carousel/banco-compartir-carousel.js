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

  const items = [...block.children];

  items.forEach((row) => {
    row.className = 'banco-compartir-carousel-item';
    [...row.children][0].className = 'banco-compartir-carousel-item-image';
    [...row.children][1].className = 'banco-compartir-carousel-item-title';

    carouselContainer.appendChild(row);
  });

  
  block.appendChild(carouselContainer);
  block.appendChild(nextButton);
  block.prepend(prevButton);
  
}
