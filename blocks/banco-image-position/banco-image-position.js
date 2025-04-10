import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const items = Array.from(block.children);
  
  // Extraemos los elementos de imagen, título y descripción
  const imageElement = items.shift();
  const titleElement = items.shift();
  const descriptionElement = items.shift();

  // Obtener la fuente y el texto
  const imgElement = imageElement?.querySelector('img');
  const imgSrc = imgElement?.src || '';
  const imgAlt = imgElement?.alt || 'Image';
  const titleContent = titleElement?.textContent.trim() || '';
  const descriptionContent = descriptionElement?.textContent.trim() || '';

  // Crear la estructura para la imagen y el texto
  const container = document.createElement('div');
  container.classList.add('image-text-container');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = imgSrc;
  image.alt = imgAlt;
  imageWrapper.appendChild(image);

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

  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(titleElement, titleWrapper);
  moveInstrumentation(descriptionElement, descriptionWrapper);

  // Asegurarse de que el orden de los elementos solo se cambie en AEM Author
  if (block.getAttribute('data-aue-type') === 'component') {
    container.addEventListener('click', () => {
      // Mover la imagen y el texto en el DOM
      const imageWrapperClone = imageWrapper.cloneNode(true);
      const textContainerClone = textContainer.cloneNode(true);

      // Mover los elementos dentro del contenedor
      container.innerHTML = '';
      container.appendChild(textContainerClone);
      container.appendChild(imageWrapperClone);
    });
  } else {
    // Si no estamos en Author, solo agregamos los elementos al contenedor sin movimiento
    container.appendChild(imageWrapper);
    container.appendChild(textContainer);
  }

  block.innerHTML = '';
  block.appendChild(container);
}
