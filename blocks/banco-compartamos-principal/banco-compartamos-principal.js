export default function decorate(block) {
  console.log('Decorando banco-compartamos-principal', block);

  const cells = block.querySelectorAll(':scope > div');
  const tituloCell = cells[0]?.querySelector('div');
  const descripcionCell = cells[1]?.querySelector('div');
  const imagenCell = cells[2]?.querySelector('div');

  // Contenedor del layout
  const container = document.createElement('div');
  container.className = 'banco-formulario-v2-container';

  // Sección izquierda (título, descripción, formulario)
  const left = document.createElement('div');
  left.className = 'form-left';

  // Añadir clases al título y descripción originales
  if (tituloCell) tituloCell.classList.add('ui_title__h2', 'ui_fs_48', 'ui_c_CE005D');
  if (descripcionCell) descripcionCell.classList.add('ui_paragraph__p', 'ui_fs_24', 'ui_paragraph__p--form');

  // Agregar título y descripción al lado izquierdo
  if (tituloCell) left.appendChild(tituloCell);
  if (descripcionCell) left.appendChild(descripcionCell);

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
          Acepto los <a href="https://www.compartamos.com.pe/Peru/terminos-y-condiciones" target="_blank" class="link-label-check">Términos y Condiciones</a> de Compartamos Banco S.A.
        </label>
      </div>
      <div class="form-check cstm-check">
        <input type="checkbox" id="privacy" class="form-check-input" />
        <label for="privacy" class="cstm-check-label">
          Acepto que Compartamos Banco S.A. realice el tratamiento de mis datos personales recopilados en el presente formulario de acuerdo con los términos establecidos en la <a href="https://www.compartamos.com.pe/wcm/connect/a32c7daf-7a58-486b-8a2e-3f8c1b029fe0/Politica+de+Privacidad+de+datos+personales.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-a32c7daf-7a58-486b-8a2e-3f8c1b029fe0-n2DROm6" target="_blank" class="link-label-check">Política de Privacidad</a>.
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

  // Añadir el formulario
  left.appendChild(formGroup);
  container.appendChild(left);

  // Sección derecha (imagen decorativa)
  const right = document.createElement('div');
  right.className = 'form-right';

  const picture = imagenCell?.querySelector('picture');
  const img = imagenCell?.querySelector('img');

  if (picture) {
    right.appendChild(picture);
  } else if (img) {
    right.appendChild(img);
  }

  if (right.hasChildNodes()) {
    container.appendChild(right);
  }

  // Vaciar el bloque original y renderizar
  block.innerHTML = '';
  block.appendChild(container);
}
