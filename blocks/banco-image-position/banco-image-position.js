import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.innerHTML = '';

  const { positionImage, title, description, textColor } = block.dataset;
  const container = document.createElement('div');
  container.classList.add('image-text-container');
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = positionImage;
  image.alt = 'Imagen del bloque';
  imageWrapper.appendChild(image);

  moveInstrumentation(imageWrapper, image);

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  textWrapper.style.backgroundColor = textColor || '#ffffff';
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  textWrapper.appendChild(titleElement);
  textWrapper.appendChild(descriptionElement);

  moveInstrumentation(textWrapper, titleElement);
  moveInstrumentation(textWrapper, descriptionElement);

  container.appendChild(imageWrapper);
  container.appendChild(textWrapper);

  block.appendChild(container);
}
