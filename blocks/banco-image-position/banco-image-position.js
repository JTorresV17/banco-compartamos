import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const items = Array.from(block.children);
  const imageElement = items.shift();
  const titleElement = items.shift();
  const descriptionElement = items.shift();

  const imgElement = imageElement?.querySelector('img');
  const imgSrc = imgElement?.src || '';
  const titleContent = titleElement?.textContent.trim() || '';
  const descriptionContent = descriptionElement?.textContent.trim() || '';

  const container = document.createElement('div');
  container.classList.add('image-text-container');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = imgSrc;
  imageWrapper.appendChild(image);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('title-wrapper');
  titleWrapper.textContent = titleContent;

  const descriptionWrapper = document.createElement('div');
  descriptionWrapper.classList.add('description-wrapper');
  descriptionWrapper.textContent = descriptionContent;

  // Habilitar edición de texto en modo autor
  if (document.body.classList.contains('aem-Authoring')) {
    titleWrapper.contentEditable = true;
    descriptionWrapper.contentEditable = true;
  }

  textContainer.appendChild(titleWrapper);
  textContainer.appendChild(descriptionWrapper);

  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(titleElement, titleWrapper);
  moveInstrumentation(descriptionElement, descriptionWrapper);

  container.appendChild(imageWrapper);
  container.appendChild(textContainer);

  block.innerHTML = '';
  block.appendChild(container);
}
