import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const items = Array.from(block.children);
  const imageElement = items[0];
  const titleElement = items[1];
  const descriptionElement = items[2];

  const imgElement = imageElement?.querySelector('img');
  const imgSrc = imgElement?.src || '';

  const container = document.createElement('div');
  container.classList.add('image-text-container');

  const isEditMode = document.body.classList.contains('aem-Authoring');

  // Crear wrapper de imagen
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = imgSrc;
  imageWrapper.appendChild(image);

  // Permitir que sea "draggable" en modo edición
  if (isEditMode) {
    imageWrapper.setAttribute('draggable', 'true');

    imageWrapper.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', 'image');
    });
  }

  // Crear contenedor de texto
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  titleElement.classList.add('title-wrapper');
  descriptionElement.classList.add('description-wrapper');

  textContainer.appendChild(titleElement);
  textContainer.appendChild(descriptionElement);

  // Hacer el textContainer zona de drop
  if (isEditMode) {
    textContainer.addEventListener('dragover', (e) => {
      e.preventDefault(); // Necesario para permitir drop
    });

    textContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedData = e.dataTransfer.getData('text/plain');
      if (draggedData === 'image') {
        // Invertir el orden
        container.innerHTML = '';
        container.appendChild(textContainer);
        container.appendChild(imageWrapper);
      }
    });

    imageWrapper.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    imageWrapper.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedData = e.dataTransfer.getData('text/plain');
      if (draggedData === 'image') {
        // Volver a imagen izquierda
        container.innerHTML = '';
        container.appendChild(imageWrapper);
        container.appendChild(textContainer);
      }
    });
  }

  // Instrumentación
  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(titleElement, titleElement);
  moveInstrumentation(descriptionElement, descriptionElement);

  // Agregar al bloque
  container.appendChild(imageWrapper);
  container.appendChild(textContainer);

  block.innerHTML = '';
  block.appendChild(container);
}
