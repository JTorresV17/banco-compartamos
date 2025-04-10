export default function decorate(block) {
    console.log('Decorating block categories', block);  // Ver los datos del bloque

    // Creamos un contenedor para los enlaces
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    // Buscar todos los elementos <p> que contienen los datos
    const fields = block.dataset; // Obtenemos los datos del bloque

    // Crear el contenedor para los enlaces
    const createLinkWithIcon = (text, link, iconSrc) => {
        const linkContainer = document.createElement('div');
        linkContainer.className = 'banco-compartir-link-container';

        if (iconSrc) {
            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = 'Icon';
            icon.className = 'banco-compartir-icon'; // Agregar clase para alinear los iconos
            linkContainer.appendChild(icon);
        }

        const a = document.createElement('a');
        a.href = link;
        a.target = '_blank';
        a.className = 'banco-compartir-ui_fs_14';
        a.innerHTML = text;  // Añadir el texto
        linkContainer.appendChild(a);

        return linkContainer;
    }

    // Verificar si el campo de política de privacidad tiene datos
    const politicaPrivacidadText = block.querySelector('[data-aue-prop="politicaPrivacidad"]');
    const politicaPrivacidadLink = block.querySelector('[data-aue-prop="politicaPrivacidadLink"]');
    if (politicaPrivacidadText && politicaPrivacidadLink) {
        const policyLinkContainer = createLinkWithIcon(
            politicaPrivacidadText.textContent.trim(),
            politicaPrivacidadLink.textContent.trim(),
            '' // No hay icono para Política de Privacidad
        );
        container.appendChild(policyLinkContainer);
    }

    // Verificar si el campo de términos y condiciones tiene datos
    const terminosCondicionesText = block.querySelector('[data-aue-prop="terminosCondiciones"]');
    const terminosCondicionesLink = block.querySelector('[data-aue-prop="terminosCondicionesLink"]');
    if (terminosCondicionesText && terminosCondicionesLink) {
        const termsLinkContainer = createLinkWithIcon(
            terminosCondicionesText.textContent.trim(),
            terminosCondicionesLink.textContent.trim(),
            '' // No hay icono para Términos y Condiciones
        );
        container.appendChild(termsLinkContainer);
    }

    // Verificar si el campo de Facebook tiene datos
    const facebookTexto = block.querySelector('[data-aue-prop="facebookTexto"]');
    const facebookUrl = block.querySelector('[data-aue-prop="facebookUrl"]');
    const iconoFacebook = block.querySelector('[data-aue-prop="iconoFacebook"]');
    if (facebookTexto && facebookUrl && iconoFacebook) {
        const facebookLinkContainer = createLinkWithIcon(
            facebookTexto.textContent.trim(),
            facebookUrl.textContent.trim(),
            iconoFacebook.src // Icono de Facebook
        );
        container.appendChild(facebookLinkContainer);
    }

    // Verificar si el campo de Teléfono tiene datos
    const telefonoTexto = block.querySelector('[data-aue-prop="telefonoTexto"]');
    const telefonoLink = block.querySelector('[data-aue-prop="telefonoLink"]');
    const iconoTelefono = block.querySelector('[data-aue-prop="iconoTelefono"]');
    if (telefonoTexto && telefonoLink && iconoTelefono) {
        const phoneLinkContainer = createLinkWithIcon(
            telefonoTexto.textContent.trim(),
            telefonoLink.textContent.trim(),
            iconoTelefono.src // Icono de Teléfono
        );
        container.appendChild(phoneLinkContainer);
    }

    // Añadimos todo al bloque
    block.textContent = '';  // Limpiar el contenido original del bloque
    block.appendChild(container);  // Agregar el contenedor con los enlaces e iconos

    console.log('Block after decoration:', block);  // Mostrar el bloque después de la decoración
}
