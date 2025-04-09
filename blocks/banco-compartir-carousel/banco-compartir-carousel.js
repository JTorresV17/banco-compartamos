// Decorate cochez-carrusel block
export default function decorate(block) {
  console.log('Decorating block categories', block);

  block.className = 'banco-compartir-carousel-block';
  [...block.children].forEach((row) => {
    row.className = 'banco-compartir-carousel-item';
    [...row.children][0].className = 'banco-compartir-carousel-item-image';
    [...row.children][1].className = 'banco-compartir-carousel-item-title';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  
  $('.banco-compartir-carousel-block').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

});