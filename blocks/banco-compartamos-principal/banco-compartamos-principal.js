export default function decorate(block) {
    console.log('Decorando banco-compartamos-principal');

    // Extraer celdas (columnas) del bloque
    const cells = block.querySelectorAll(':scope > div');
    const tituloCell = cells[0]?.querySelector('div');
    const descripcionCell = cells[1]?.querySelector('div');
    const imagenCell = cells[2]?.querySelector('div');

    const titulo = tituloCell?.textContent?.trim() || 'Título del formulario';
    const descripcion = descripcionCell?.textContent?.trim() || 'Descripción del formulario';
    const imagenUrl = imagenCell?.textContent?.trim() || '';

    // Limpiar contenido del bloque
    block.innerHTML = '';

    // Crear contenedor principal
    const container = document.createElement('div');
    container.className = 'banco-formulario-v2-container';

    // Lado izquierdo (título, desc, formulario)
    const left = document.createElement('div');
    left.className = 'form-left';

    const title = document.createElement('h2');
    title.className = 'ui_title__h2 ui_fs_48 ui_c_CE005D';
    title.textContent = titulo;

    const paragraph = document.createElement('p');
    paragraph.className = 'ui_paragraph__p ui_paragraph__p--form ui_fs_24';
    paragraph.textContent = descripcion;

    // Formulario simulado
    const formGroup = document.createElement('div');
    formGroup.className = 'ui_form_group';

    formGroup.innerHTML = `
      <div class="ui_form_row ui_form_row--col">
        <div class="ui_form_item ui_col_50"><input type="text" placeholder="Nombre" class="form-control" /></div>
        <div class="ui_form_item ui_col_50"><input type="text" placeholder="Apellido" class="form-control" /></div>
      </div>
      <div class="ui_form_row ui_form_row--col">
        <div class="ui_form_item ui_col_50"><input type="text" placeholder="DNI" class="form-control" /></div>
        <div class="ui_form_item ui_col_50"><input type="text" placeholder="Teléfono" class="form-control" /></div>
      </div>
      <div class="ui_form_row ui_form_row--checkbox_movil">
        <div class="form-check cstm-check mb-20">
          <input type="checkbox" id="terms" class="form-check-input" />
          <label for="terms" class="cstm-check-label">
            Acepto los <a href="https://www.compartamos.com.pe/Peru/terminos-y-condiciones" target="_blank" class="link-label-check">Términos y Condiciones</a>.
          </label>
        </div>
        <div class="form-check cstm-check">
          <input type="checkbox" id="privacy" class="form-check-input" />
          <label for="privacy" class="cstm-check-label">
            Acepto la <a href="https://www.compartamos.com.pe/wcm/connect/a32c7daf-7a58-486b-8a2e-3f8c1b029fe0/Politica+de+Privacidad+de+datos+personales.pdf" target="_blank" class="link-label-check">Política de Privacidad</a>.
          </label>
        </div>
      </div>
      <div class="ui-button">
        <button type="button" class="btn ui_button__a ui_button__a--banner">Pedir Crédito</button>
      </div>
    `;

    formGroup.querySelector('button').addEventListener('click', () => {
      alert('Se ha guardado tu información y serás contactado.');
    });

    // Ensamblar la parte izquierda
    left.appendChild(title);
    left.appendChild(paragraph);
    left.appendChild(formGroup);
    container.appendChild(left);

    // Lado derecho (imagen decorativa)
    if (imagenUrl) {
      const right = document.createElement('div');
      right.className = 'form-right';

      const img = document.createElement('img');
      img.src = imagenUrl;
      img.alt = 'Imagen decorativa';
      img.loading = 'lazy';
  
      right.appendChild(img);
      container.appendChild(right);
    }

    block.appendChild(container);
}
