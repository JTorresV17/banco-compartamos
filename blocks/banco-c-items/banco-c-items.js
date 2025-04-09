import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const rows = Array.from(block.children);
  block.innerHTML = '';
  block.classList.add('requisitos-bloque');

  rows.forEach((row) => {
    const cells = Array.from(row.children);
    const numeroEl = cells[0];
    const colorTextoEl = cells[1];
    const descripcionEl = cells[2];

    const wrapper = document.createElement('div');
    wrapper.classList.add('requisito-item');

    const numero = document.createElement('div');
    numero.classList.add('requisito-numero');
    numero.textContent = numeroEl?.textContent.trim();
    moveInstrumentation(numeroEl, numero);

    const color = colorTextoEl?.textContent.trim();
    if (color) {
      numero.style.backgroundColor = color;
    }
    const descripcion = document.createElement('div');
    descripcion.classList.add('requisito-descripcion');
    descripcion.textContent = descripcionEl?.textContent.trim();
    moveInstrumentation(descripcionEl, descripcion);
    wrapper.appendChild(numero);
    wrapper.appendChild(descripcion);
    block.appendChild(wrapper);

    console.log('Numero:', numeroEl.textContent);
    console.log('Color:', colorTextoEl.textContent);
    console.log('Descripcion:', descripcionEl.textContent);
  });
}
