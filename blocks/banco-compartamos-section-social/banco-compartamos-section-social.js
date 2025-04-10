export default function decorate(block) {
    console.log('block decorated:', block);
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Función auxiliar para crear enlaces con iconos si los hay
    const createLinkContainer = (url, text, iconSrc = null) => {
        const linkContainer = document.createElement('div');
        linkContainer.className = 'banco-compartir-link-container';

        const link = document.createElement('a');
        link.href = url;
        link.className = 'banco-compartir-ui_fs_14';
        link.textContent = text;

        // Si existe un icono, lo añadimos
        if (iconSrc) {
            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.className = 'banco-compartir-icon';
            linkContainer.appendChild(icon);
        }

        linkContainer.appendChild(link);
        return linkContainer;
    };

    // Si existen los valores de política de privacidad, añadirlos
    if (block.politicaPrivacidadLink && block.politicaPrivacidad) {
        const politicaLinkContainer = createLinkContainer(block.politicaPrivacidadLink, block.politicaPrivacidad);
        subContainer.appendChild(politicaLinkContainer);
    }

    // Si existen los valores de términos y condiciones, añadirlos
    if (block.terminosCondicionesLink && block.terminosCondiciones) {
        const terminosLinkContainer = createLinkContainer(block.terminosCondicionesLink, block.terminosCondiciones);
        subContainer.appendChild(terminosLinkContainer);
    }

    // Si existen los valores de Facebook, añadirlos
    if (block.facebookUrl && block.facebookTexto) {
        const facebookLinkContainer = createLinkContainer(block.facebookUrl, block.facebookTexto, block.iconoFacebook);
        subContainer.appendChild(facebookLinkContainer);
    }

    // Si existen los valores de teléfono, añadirlos
    if (block.telefonoLink && block.telefonoTexto) {
        const telefonoLinkContainer = createLinkContainer(block.telefonoLink, block.telefonoTexto, block.iconoTelefono);
        subContainer.appendChild(telefonoLinkContainer);
    }

    // Añadir el subcontenedor con los enlaces al contenedor principal
    container.appendChild(subContainer);

    // Añadir el contenedor final al bloque
    block.appendChild(container);
}
