import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const items = Array.from(block.children);
  const imageElement = items[0]; // No lo vamos a modificar por ahora
  const titleElement = items[1];
  const descriptionElement = items[2];

  const imgElement = imageElement?.querySelector('img');
  const imgSrc = imgElement?.src || '';

  const container = document.createElement('div');
  container.classList.add('image-text-container');

  // Crear wrapper de imagen
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = imgSrc;
  imageWrapper.appendChild(image);

  // Crear contenedor de texto
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  // Crear el título editable
  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('title-wrapper');
  titleWrapper.textContent = titleElement?.textContent.trim() || '';
  titleWrapper.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = titleWrapper.textContent;
    input.addEventListener('blur', () => {
      titleWrapper.textContent = input.value;
    });
    titleWrapper.innerHTML = '';
    titleWrapper.appendChild(input);
    input.focus();
  });

  // Crear la descripción editable
  const descriptionWrapper = document.createElement('div');
  descriptionWrapper.classList.add('description-wrapper');
  descriptionWrapper.textContent = descriptionElement?.textContent.trim() || '';
  descriptionWrapper.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = descriptionWrapper.textContent;
    input.addEventListener('blur', () => {
      descriptionWrapper.textContent = input.value;
    });
    descriptionWrapper.innerHTML = '';
    descriptionWrapper.appendChild(input);
    input.focus();
  });

  textContainer.appendChild(titleWrapper);
  textContainer.appendChild(descriptionWrapper);

  // Instrumentación
  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(titleElement, titleWrapper);
  moveInstrumentation(descriptionElement, descriptionWrapper);

  // Agregar al bloque
  container.appendChild(imageWrapper);
  container.appendChild(textContainer);

  block.innerHTML = '';
  block.appendChild(container);
}
