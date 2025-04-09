// Decorate cochez-carrusel block
export default function decorate(block) {
  console.log('Decorating block categories', block);

  block.className = 'banco-compartir-carousel-block';
  [...block.children].forEach((row) => {
    row.className = 'banco-compartir-carousel-item';
    [...row.children][0].className = 'banco-compartir-carousel-item-image';
    [...row.children][1].className = 'banco-compartir-carousel-item-title';
  });

  const script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.src = 'https://cdn.jsdelivr.net/npm/jquery';

  const script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js';

  block.appendChild(script1);
  block.appendChild(script2);

  script1.onload = () => {
    script2.onload = () => {
      $(document).ready(function () {
        $('.banco-compartir-carousel-block').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
      });
    };
  };

}
