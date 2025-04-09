import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const items = Array.from(block.children);

  const imageElement = items.shift();
  const textElement = items.shift();

  const imgElement = imageElement?.querySelector('img');
  const imgSrc = imgElement?.src || '';
  const imgAlt = imgElement?.alt || 'Image';

  const textContent = textElement?.textContent.trim() || '';

  const container = document.createElement('div');
  container.classList.add('image-text-container');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = imgSrc;
  image.alt = imgAlt;
  imageWrapper.appendChild(image);

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  textWrapper.textContent = textContent;

  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(textElement, textWrapper);

  container.appendChild(imageWrapper);
  container.appendChild(textWrapper);

  block.innerHTML = '';
  block.appendChild(container);
}
