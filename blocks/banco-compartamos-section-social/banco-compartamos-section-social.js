export default function decorate(block) {
    console.log('block social', block);
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor donde se colocarán los enlaces
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Función auxiliar para crear enlaces
    const createLink = (url, text, iconSrc = null) => {
        const linkContainer = document.createElement('div');
        linkContainer.className = 'banco-compartir-ui_link';

        const link = document.createElement('a');
        link.href = url;
        link.className = 'banco-compartir-ui_fs_14';
        link.textContent = text;

        // Agregar icono si existe
        if (iconSrc) {
            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.className = 'banco-compartir-icon';
            linkContainer.appendChild(icon);
        }

        linkContainer.appendChild(link);
        return linkContainer;
    };

    // Si existe el texto y enlace de política de privacidad, crearlo
    if (block.politicaPrivacidadLink && block.politicaPrivacidad) {
        const politicaLink = createLink(block.politicaPrivacidadLink, block.politicaPrivacidad);
        subContainer.appendChild(politicaLink);
    }

    // Si existe el texto y enlace de términos y condiciones, crearlo
    if (block.terminosCondicionesLink && block.terminosCondiciones) {
        const terminosLink = createLink(block.terminosCondicionesLink, block.terminosCondiciones);
        subContainer.appendChild(terminosLink);
    }

    // Si existe el texto y enlace de Facebook, crearlo
    if (block.facebookUrl && block.facebookTexto) {
        const facebookLink = createLink(block.facebookUrl, block.facebookTexto, block.iconoFacebook);
        subContainer.appendChild(facebookLink);
    }

    // Si existe el texto y enlace de teléfono, crearlo
    if (block.telefonoLink && block.telefonoTexto) {
        const telefonoLink = createLink(block.telefonoLink, block.telefonoTexto, block.iconoTelefono);
        subContainer.appendChild(telefonoLink);
    }

    // Añadir el subcontenedor con los enlaces al contenedor principal
    container.appendChild(subContainer);

    // Añadir el contenedor final al bloque
    block.appendChild(container);
}
