export default function decorate(block) {
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // El bloque debe ya contener los datos desde el modelo, así que se renderiza el contenido
    // Solo renderiza la estructura básica usando esos datos
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

    block.appendChild(container);
}
