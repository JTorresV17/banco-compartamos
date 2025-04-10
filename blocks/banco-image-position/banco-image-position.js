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

  // Crear contenedor de texto
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  titleElement.classList.add('title-wrapper');
  descriptionElement.classList.add('description-wrapper');

  textContainer.appendChild(titleElement);
  textContainer.appendChild(descriptionElement);

  // Instrumentación
  moveInstrumentation(imageElement, imageWrapper);
  moveInstrumentation(titleElement, titleElement);
  moveInstrumentation(descriptionElement, descriptionElement);

  // Declarar el checkboxWrapper primero para evitar el error
  let checkboxWrapper;

  // Función para renderizar el orden basado en el estado del checkbox
  const renderLayout = (isVariationChecked) => {
    container.innerHTML = '';
    if (isVariationChecked) {
      container.appendChild(textContainer);
      container.appendChild(imageWrapper);
    } else {
      container.appendChild(imageWrapper);
      container.appendChild(textContainer);
    }

    if (isEditMode && checkboxWrapper) {
      container.appendChild(checkboxWrapper);
    }
  };

  // Si estamos en modo edición, crear checkbox
  if (isEditMode) {
    checkboxWrapper = document.createElement('div');
    checkboxWrapper.style.marginTop = '1rem';
    checkboxWrapper.style.textAlign = 'center';

    const label = document.createElement('label');
    label.textContent = 'Variación ';
    label.style.color = '#fff';
    label.style.fontSize = '14px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
      renderLayout(checkbox.checked);
    });

    label.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
  }

  // Render inicial
  renderLayout(false);
  block.innerHTML = '';
  block.appendChild(container);
}
