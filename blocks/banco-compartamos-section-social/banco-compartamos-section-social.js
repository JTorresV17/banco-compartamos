export default function decorate(block) {
    // Asignamos el contenedor principal con su clase
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Asignamos el subcontenedor con su clase
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Ahora usaremos el bloque de AEM para obtener directamente los datos y asignarlos
    // Añadimos los enlaces y valores de texto usando los valores directamente del bloque AEM

    container.innerHTML = `
        <div class="banco-compartir-link-container">
            <a href="${block.politicaPrivacidadLink || '#'}" target="_blank" class="banco-compartir-ui_fs_14">${block.politicaPrivacidad || 'Política de Privacidad'}</a>
        </div>
        <div class="banco-compartir-link-container">
            <a href="${block.terminosCondicionesLink || '#'}" target="_blank" class="banco-compartir-ui_fs_14">${block.terminosCondiciones || 'Términos y Condiciones'}</a>
        </div>
        <div class="banco-compartir-link-container">
            <a href="${block.facebookUrl || '#'}" target="_blank" class="banco-compartir-ui_fs_14">${block.facebookTexto || 'Síguenos en Facebook'}</a>
            <img src="${block.iconoFacebook || '/path/to/default-facebook-icon.png'}" alt="Facebook Icon" class="banco-compartir-icon">
        </div>
        <div class="banco-compartir-link-container">
            <a href="${block.telefonoLink || '#'}" class="banco-compartir-ui_fs_14">${block.telefonoTexto || 'Llama al 123-456-789'}</a>
            <img src="${block.iconoTelefono || '/path/to/default-phone-icon.png'}" alt="Phone Icon" class="banco-compartir-icon">
        </div>
    `;

    // Añadimos el subcontenedor con el contenido al contenedor principal
    subContainer.appendChild(container);

    // Añadimos el contenedor final al bloque de AEM
    block.appendChild(subContainer);
}
