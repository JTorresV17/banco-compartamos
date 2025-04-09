import { moveInstrumentation } from '../../scripts/scripts.js'; // Asegúrate de importar la función correctamente

export default function decorate(block) {
  // Limpiar el contenido previo del bloque
  block.innerHTML = '';

  // Creamos el contenedor principal
  const container = document.createElement('div');
  container.classList.add('image-text-container');

  // Obtenemos los valores del modelo JSON
  const positionImage = block.dataset.positionImage; // Aquí obtienes la URL de la imagen seleccionada
  const title = block.dataset.title; // El título del bloque
  const description = block.dataset.description; // La descripción
  const textColor = block.dataset.textColor || '#ffffff'; // El color de fondo, con un valor por defecto

  // Creamos el bloque de la imagen
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = document.createElement('img');
  image.src = positionImage; // Asignamos la imagen
  image.alt = 'Imagen del bloque';
  imageWrapper.appendChild(image);

  // Usamos moveInstrumentation para mover la imagen
  moveInstrumentation(imageWrapper, image);

  // Creamos el bloque de texto
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  textWrapper.style.backgroundColor = textColor; // Asignamos el color de fondo del texto
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  textWrapper.appendChild(titleElement);
  textWrapper.appendChild(descriptionElement);

  // Usamos moveInstrumentation para mover el texto
  moveInstrumentation(textWrapper, titleElement);
  moveInstrumentation(textWrapper, descriptionElement);

  // Añadimos los elementos al contenedor
  container.appendChild(imageWrapper);
  container.appendChild(textWrapper);

  // Agregamos el contenedor al bloque
  block.appendChild(container);
}
