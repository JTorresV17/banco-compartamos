export default function decorate(block) {
    console.log('Decorating block categories', block);
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor donde se colocarán los enlaces
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Añadir el contenido en el contenedor utilizando los datos del bloque
    container.innerHTML = `
        <div class="banco-compartir-link-container">
            <a href="${block.politicaPrivacidadLink}" target="_blank" class="banco-compartir-ui_fs_14">${block.politicaPrivacidad}</a>
        </div>
        <div class="banco-compartir-link-container">
            <a href="${block.terminosCondicionesLink}" target="_blank" class="banco-compartir-ui_fs_14">${block.terminosCondiciones}</a>
        </div>
        <div class="banco-compartir-link-container">
            <a href="${block.facebookUrl}" target="_blank" class="banco-compartir-ui_fs_14">${block.facebookTexto}</a>
            <img src="${block.iconoFacebook}" alt="Facebook Icon" class="banco-compartir-icon">
        </div>
        <div class="banco-compartir-link-container">
            <a href="${block.telefonoLink}" class="banco-compartir-ui_fs_14">${block.telefonoTexto}</a>
            <img src="${block.iconoTelefono}" alt="Phone Icon" class="banco-compartir-icon">
        </div>
    `;

    // Añadir el subcontenedor con los enlaces al contenedor principal
    subContainer.appendChild(container);

    // Añadir el contenedor completo al bloque
    block.appendChild(subContainer);
}
