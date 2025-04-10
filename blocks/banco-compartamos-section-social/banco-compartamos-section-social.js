export default function decorate(block) {
    // Crear el contenedor principal
    const container = document.createElement('div');
    container.className = 'banco-compartamos-section-social-container banco-compartamos-section-social-wrapper';

    // Crear el contenedor de la sección
    const sectionContainer = document.createElement('div');
    sectionContainer.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor donde se colocarán los enlaces
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Función auxiliar para crear los enlaces con iconos y texto
    const createLinkContainer = (url, text, iconSrc = null, linkClass = '') => {
        const linkContainer = document.createElement('div');
        linkContainer.className = 'banco-compartir-link-container';

        const link = document.createElement('a');
        link.href = url;
        link.title = url;
        link.className = linkClass;
        link.textContent = text;

        // Si existe un ícono, lo añadimos
        if (iconSrc) {
            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = text;
            linkContainer.appendChild(icon);
        }

        linkContainer.appendChild(link);
        return linkContainer;
    };

    // Si existen los valores de política de privacidad, añadirlos
    if (block.politicaPrivacidadLink && block.politicaPrivacidad) {
        const politicaLinkContainer = createLinkContainer(
            block.politicaPrivacidadLink,
            block.politicaPrivacidad,
            null,
            'banco-compartir-ui_fs_14'
        );
        subContainer.appendChild(politicaLinkContainer);
    }

    // Si existen los valores de términos y condiciones, añadirlos
    if (block.terminosCondicionesLink && block.terminosCondiciones) {
        const terminosLinkContainer = createLinkContainer(
            block.terminosCondicionesLink,
            block.terminosCondiciones,
            null,
            'banco-compartir-ui_fs_14'
        );
        subContainer.appendChild(terminosLinkContainer);
    }

    // Si existen los valores de Facebook, añadirlos
    if (block.facebookUrl && block.facebookTexto) {
        const facebookLinkContainer = createLinkContainer(
            block.facebookUrl,
            block.facebookTexto,
            block.iconoFacebook,
            'banco-compartir-ui_fs_14'
        );
        subContainer.appendChild(facebookLinkContainer);
    }

    // Si existen los valores de teléfono, añadirlos
    if (block.telefonoLink && block.telefonoTexto) {
        const telefonoLinkContainer = createLinkContainer(
            block.telefonoLink,
            block.telefonoTexto,
            block.iconoTelefono,
            'banco-compartir-ui_fs_14'
        );
        subContainer.appendChild(telefonoLinkContainer);
    }

    // Añadir el subcontenedor al contenedor de la sección
    sectionContainer.appendChild(subContainer);

    // Añadir la sección al contenedor principal
    container.appendChild(sectionContainer);

    // Añadir el contenedor final al bloque
    block.appendChild(container);
}
