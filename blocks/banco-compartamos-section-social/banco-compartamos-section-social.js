export default function decorate(block) {
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer'; // Sub contenedor

    // Verifica si el campo de Política de Privacidad está presente
    const politicaPrivacidadText = block.querySelector('[data-aue-prop="politicaPrivacidad"]');
    const politicaPrivacidadLink = block.querySelector('[data-aue-prop="politicaPrivacidadLink"]');
    if (politicaPrivacidadText && politicaPrivacidadLink) {
        const policyLinkContainer = document.createElement('div');
        policyLinkContainer.className = 'banco-compartir-link-container';

        const policyLink = document.createElement('a');
        policyLink.href = politicaPrivacidadLink.textContent.trim();
        policyLink.target = '_blank';
        policyLink.className = 'banco-compartir-ui_fs_14';
        policyLink.innerHTML = politicaPrivacidadText.textContent.trim();
        
        policyLinkContainer.appendChild(policyLink);
        subContainer.appendChild(policyLinkContainer);
    }

    // Repite lo mismo para Términos y Condiciones
    const terminosCondicionesText = block.querySelector('[data-aue-prop="terminosCondiciones"]');
    const terminosCondicionesLink = block.querySelector('[data-aue-prop="terminosCondicionesLink"]');
    if (terminosCondicionesText && terminosCondicionesLink) {
        const termsLinkContainer = document.createElement('div');
        termsLinkContainer.className = 'banco-compartir-link-container';

        const termsLink = document.createElement('a');
        termsLink.href = terminosCondicionesLink.textContent.trim();
        termsLink.target = '_blank';
        termsLink.className = 'banco-compartir-ui_fs_14';
        termsLink.innerHTML = terminosCondicionesText.textContent.trim();
        
        termsLinkContainer.appendChild(termsLink);
        subContainer.appendChild(termsLinkContainer);
    }

    // Facebook
    const facebookTexto = block.querySelector('[data-aue-prop="facebookTexto"]');
    const facebookUrl = block.querySelector('[data-aue-prop="facebookUrl"]');
    const iconoFacebook = block.querySelector('[data-aue-prop="iconoFacebook"]');
    if (facebookTexto && facebookUrl && iconoFacebook) {
        const facebookLinkContainer = document.createElement('div');
        facebookLinkContainer.className = 'banco-compartir-link-container';

        const facebookLink = document.createElement('a');
        facebookLink.href = facebookUrl.textContent.trim();
        facebookLink.target = '_blank';
        facebookLink.className = 'banco-compartir-ui_fs_14';
        facebookLink.innerHTML = facebookTexto.textContent.trim();
        
        const facebookIcon = document.createElement('img');
        facebookIcon.src = iconoFacebook.src;
        facebookIcon.alt = 'Facebook Icon';
        facebookIcon.className = 'banco-compartir-icon';  // Clase para el icono

        facebookLinkContainer.appendChild(facebookIcon);
        facebookLinkContainer.appendChild(facebookLink);
        subContainer.appendChild(facebookLinkContainer);
    }

    // Teléfono
    const telefonoTexto = block.querySelector('[data-aue-prop="telefonoTexto"]');
    const telefonoLink = block.querySelector('[data-aue-prop="telefonoLink"]');
    const iconoTelefono = block.querySelector('[data-aue-prop="iconoTelefono"]');
    if (telefonoTexto && telefonoLink && iconoTelefono) {
        const phoneLinkContainer = document.createElement('div');
        phoneLinkContainer.className = 'banco-compartir-link-container';

        const phoneLink = document.createElement('a');
        phoneLink.href = telefonoLink.textContent.trim();
        phoneLink.className = 'banco-compartir-ui_fs_14';
        phoneLink.innerHTML = telefonoTexto.textContent.trim();
        
        const phoneIcon = document.createElement('img');
        phoneIcon.src = iconoTelefono.src;
        phoneIcon.alt = 'Phone Icon';
        phoneIcon.className = 'banco-compartir-icon';  // Clase para el icono

        phoneLinkContainer.appendChild(phoneIcon);
        phoneLinkContainer.appendChild(phoneLink);
        subContainer.appendChild(phoneLinkContainer);
    }

    // Añadimos el sub-container con los enlaces dentro del contenedor principal
    container.appendChild(subContainer);

    // Limpiamos el contenido original del bloque y agregamos el nuevo contenedor
    block.textContent = '';
    block.appendChild(container);
}
