import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  console.log('Contenido inicial del bloque:', block.innerHTML);
  const rows = Array.from(block.children);
  block.classList.add('requisitos-bloque');

  const contentWrapper = document.createElement('div');

  rows.forEach((row, index) => {
    const cells = Array.from(row.children);

    console.log(`Procesando fila ${index}:`, cells);

    const numeroEl = cells[0] || null;
    const colorTextoEl = cells[1] || null;
    const descripcionEl = cells[2] || null;

    if (numeroEl && colorTextoEl && descripcionEl) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('requisito-item');

      const numero = document.createElement('div');
      numero.classList.add('requisito-numero');
      numero.textContent = numeroEl.textContent.trim();
      moveInstrumentation(numeroEl, numero);

      const color = colorTextoEl.textContent.trim();
      if (color) {
        numero.style.backgroundColor = color;
      }
      const descripcion = document.createElement('div');
      descripcion.classList.add('requisito-descripcion');
      descripcion.textContent = descripcionEl.textContent.trim();
      moveInstrumentation(descripcionEl, descripcion);

      wrapper.appendChild(numero);
      wrapper.appendChild(descripcion);
      contentWrapper.appendChild(wrapper);
    } else {
      console.log('Algunas celdas están vacías o no existen');
    }
  });

  block.innerHTML = '';
  block.appendChild(contentWrapper);
}
