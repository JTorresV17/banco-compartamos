export default function decorate(block) {
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer'; // Sub contenedor

    // Añadir el texto de Política de Privacidad
    const politicaPrivacidadText = block.querySelector('[data-aue-prop="politicaPrivacidad"]');
    const politicaPrivacidadLink = block.querySelector('[data-aue-prop="politicaPrivacidadLink"]');
    if (politicaPrivacidadText && politicaPrivacidadLink) {
        const policyLinkContainer = document.createElement('div');
        const policyLink = document.createElement('a');
        policyLink.href = politicaPrivacidadLink.textContent.trim();
        policyLink.target = '_blank';
        policyLink.innerHTML = politicaPrivacidadText.textContent.trim();
        policyLinkContainer.appendChild(policyLink);
        subContainer.appendChild(policyLinkContainer);
    }

    // Añadir el texto de Términos y Condiciones
    const terminosCondicionesText = block.querySelector('[data-aue-prop="terminosCondiciones"]');
    const terminosCondicionesLink = block.querySelector('[data-aue-prop="terminosCondicionesLink"]');
    if (terminosCondicionesText && terminosCondicionesLink) {
        const termsLinkContainer = document.createElement('div');
        const termsLink = document.createElement('a');
        termsLink.href = terminosCondicionesLink.textContent.trim();
        termsLink.target = '_blank';
        termsLink.innerHTML = terminosCondicionesText.textContent.trim();
        termsLinkContainer.appendChild(termsLink);
        subContainer.appendChild(termsLinkContainer);
    }

    // Añadir el texto y enlace de Facebook
    const facebookTexto = block.querySelector('[data-aue-prop="facebookTexto"]');
    const facebookUrl = block.querySelector('[data-aue-prop="facebookUrl"]');
    if (facebookTexto && facebookUrl) {
        const facebookLinkContainer = document.createElement('div');
        const facebookLink = document.createElement('a');
        facebookLink.href = facebookUrl.textContent.trim();
        facebookLink.target = '_blank';
        facebookLink.innerHTML = facebookTexto.textContent.trim();
        facebookLinkContainer.appendChild(facebookLink);
        subContainer.appendChild(facebookLinkContainer);
    }

    // Añadir el texto y enlace del Teléfono
    const telefonoTexto = block.querySelector('[data-aue-prop="telefonoTexto"]');
    const telefonoLink = block.querySelector('[data-aue-prop="telefonoLink"]');
    if (telefonoTexto && telefonoLink) {
        const phoneLinkContainer = document.createElement('div');
        const phoneLink = document.createElement('a');
        phoneLink.href = telefonoLink.textContent.trim();
        phoneLink.innerHTML = telefonoTexto.textContent.trim();
        phoneLinkContainer.appendChild(phoneLink);
        subContainer.appendChild(phoneLinkContainer);
    }

    // Añadir todo al contenedor principal
    container.appendChild(subContainer);
    block.textContent = '';  // Limpiar el contenido original del bloque
    block.appendChild(container);  // Agregar el contenedor con los enlaces e iconos
}
