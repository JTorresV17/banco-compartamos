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
  script1.src = '//code.jquery.com/jquery-1.11.0.min.js';

  const script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = '//code.jquery.com/jquery-migrate-1.2.1.min.js';

  const script3 = document.createElement('script');
  script3.type = 'text/javascript';
  script3.src = 'slick/slick.min.js';

  block.appendChild(script1);
  block.appendChild(script2);
  block.appendChild(script3);

  script1.onload = () => {
    script2.onload = () => {
      script3.onload = () => {
        // Initialize the carousel after the scripts are loaded
        $(document).ready(() => {
          $('.banco-compartir-carousel-block').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
        });
      };
    };
  };

}
