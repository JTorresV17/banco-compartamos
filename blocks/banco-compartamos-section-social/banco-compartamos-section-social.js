export default function decorate(block) {
    // Crear el contenedor principal
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor donde se colocarán los enlaces
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Crear los enlaces con sus clases, solo si los valores existen
    if (block.politicaPrivacidadLink) {
        const politicaLink = document.createElement('a');
        politicaLink.href = block.politicaPrivacidadLink;
        politicaLink.className = 'banco-compartir-ui_fs_14';
        politicaLink.textContent = block.politicaPrivacidad; // Solo si existe
        subContainer.appendChild(politicaLink);
    }

    if (block.terminosCondicionesLink) {
        const terminosLink = document.createElement('a');
        terminosLink.href = block.terminosCondicionesLink;
        terminosLink.className = 'banco-compartir-ui_fs_14';
        terminosLink.textContent = block.terminosCondiciones; // Solo si existe
        subContainer.appendChild(terminosLink);
    }

    if (block.facebookUrl) {
        const facebookLink = document.createElement('a');
        facebookLink.href = block.facebookUrl;
        facebookLink.className = 'banco-compartir-ui_fs_14';
        facebookLink.textContent = block.facebookTexto; // Solo si existe
        subContainer.appendChild(facebookLink);

        if (block.iconoFacebook) {
            const facebookIcon = document.createElement('img');
            facebookIcon.src = block.iconoFacebook;
            facebookIcon.className = 'banco-compartir-icon';
            subContainer.appendChild(facebookIcon);
        }
    }

    if (block.telefonoLink) {
        const telefonoLink = document.createElement('a');
        telefonoLink.href = block.telefonoLink;
        telefonoLink.className = 'banco-compartir-ui_fs_14';
        telefonoLink.textContent = block.telefonoTexto; // Solo si existe
        subContainer.appendChild(telefonoLink);

        if (block.iconoTelefono) {
            const telefonoIcon = document.createElement('img');
            telefonoIcon.src = block.iconoTelefono;
            telefonoIcon.className = 'banco-compartir-icon';
            subContainer.appendChild(telefonoIcon);
        }
    }

    // Añadir el subcontenedor con los enlaces al contenedor principal
    container.appendChild(subContainer);

    // Añadir el contenedor final al bloque
    block.appendChild(container);
}
