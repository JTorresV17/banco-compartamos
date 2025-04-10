import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const items = Array.from(block.children);

  const imageElement = items.shift(); // Primera parte: imagen
  const titleElement = items.shift(); // Segunda parte: título
  const descriptionElement = items.shift(); // Tercera parte: descripción

  const imgElement = imageElement?.querySelector('img');
  const imgSrc = imgElement?.src || '';
  const imgAlt = imgElement?.alt || 'Image';
  const titleContent = titleElement?.textContent.trim() || '';
  const descriptionContent = descriptionElement?.textContent.trim() || '';

  const container = document.createElement('div');
  container.classList.add('image-text-container');

  // Crear el contenedor de la imagen
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = imgSrc;
  image.alt = imgAlt;
  imageWrapper.appendChild(image);

  // Crear el contenedor de texto
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('title-wrapper');
  titleWrapper.textContent = titleContent;

  const descriptionWrapper = document.createElement('div');
  descriptionWrapper.classList.add('description-wrapper');
  descriptionWrapper.textContent = descriptionContent;

  textContainer.appendChild(titleWrapper);
  textContainer.appendChild(descriptionWrapper);

  // Mover los elementos con moveInstrumentation
  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(titleElement, titleWrapper);
  moveInstrumentation(descriptionElement, descriptionWrapper);

  container.appendChild(imageWrapper);
  container.appendChild(textContainer);

  // Verificar si estamos en AEM Author (CQ)
  if (block.getAttribute('data-aue-type') === 'component') {
    container.addEventListener('click', () => {
      // Mover la imagen y el texto dentro del contenedor (intercambiar su orden)
      const clonedImageWrapper = imageWrapper.cloneNode(true);
      const clonedTextContainer = textContainer.cloneNode(true);

      container.innerHTML = '';
      container.appendChild(clonedTextContainer);
      container.appendChild(clonedImageWrapper);
    });
  } else {
    // Si no estamos en Author, simplemente agregamos los elementos tal como están
    container.appendChild(imageWrapper);
    container.appendChild(textContainer);
  }

  block.innerHTML = '';
  block.appendChild(container);
}
