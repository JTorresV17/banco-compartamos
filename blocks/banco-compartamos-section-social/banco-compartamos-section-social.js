export default function decorate(block) {
    console.log('Decorating block categories', block);  // Ver los datos del bloque

    // Creamos un contenedor para los enlaces
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    // Buscar todos los elementos <p> que contienen los datos
    const politicaPrivacidadText = block.querySelector('[data-aue-prop="politicaPrivacidad"]');
    const politicaPrivacidadLink = block.querySelector('[data-aue-prop="politicaPrivacidadLink"]');
    const terminosCondicionesText = block.querySelector('[data-aue-prop="terminosCondiciones"]');
    const terminosCondicionesLink = block.querySelector('[data-aue-prop="terminosCondicionesLink"]');
    const facebookTexto = block.querySelector('[data-aue-prop="facebookTexto"]');
    const facebookUrl = block.querySelector('[data-aue-prop="facebookUrl"]');
    const telefonoTexto = block.querySelector('[data-aue-prop="telefonoTexto"]');
    const telefonoLink = block.querySelector('[data-aue-prop="telefonoLink"]');

    // Agregar texto y enlaces si existen
    if (politicaPrivacidadText && politicaPrivacidadLink) {
        const policyLink = document.createElement('a');
        policyLink.href = politicaPrivacidadLink.textContent.trim();
        policyLink.target = '_blank';
        policyLink.className = 'banco-compartir-ui_fs_14';
        policyLink.innerHTML = politicaPrivacidadText.textContent.trim();  // Mostrar el texto de la política de privacidad
        container.appendChild(policyLink);
    }

    if (terminosCondicionesText && terminosCondicionesLink) {
        const termsLink = document.createElement('a');
        termsLink.href = terminosCondicionesLink.textContent.trim();
        termsLink.target = '_blank';
        termsLink.className = 'banco-compartir-ui_fs_14';
        termsLink.innerHTML = terminosCondicionesText.textContent.trim();  // Mostrar el texto de los términos y condiciones
        container.appendChild(termsLink);
    }

    if (facebookTexto && facebookUrl) {
        const facebookLink = document.createElement('a');
        facebookLink.href = facebookUrl.textContent.trim();
        facebookLink.target = '_blank';
        facebookLink.className = 'banco-compartir-ui_fs_14';
        facebookLink.innerHTML = facebookTexto.textContent.trim();  // Mostrar el texto de Facebook
        container.appendChild(facebookLink);
    }

    if (telefonoTexto && telefonoLink) {
        const phoneLink = document.createElement('a');
        phoneLink.href = telefonoLink.textContent.trim();
        phoneLink.className = 'banco-compartir-ui_fs_14';
        phoneLink.innerHTML = telefonoTexto.textContent.trim();  // Mostrar el texto del teléfono
        container.appendChild(phoneLink);
    }

    // Ahora añadimos los iconos si existen
    const iconoFacebook = block.querySelector('[data-aue-prop="iconoFacebook"]');
    if (iconoFacebook) {
        const imgFacebook = document.createElement('img');
        imgFacebook.src = iconoFacebook.src;
        imgFacebook.alt = 'Facebook Icon';
        container.appendChild(imgFacebook);
    }

    const iconoTelefono = block.querySelector('[data-aue-prop="iconoTelefono"]');
    if (iconoTelefono) {
        const imgTelefono = document.createElement('img');
        imgTelefono.src = iconoTelefono.src;
        imgTelefono.alt = 'Telefono Icon';
        container.appendChild(imgTelefono);
    }

    // Añadimos todo al bloque
    block.textContent = '';  // Limpiar el contenido original del bloque
    block.appendChild(container);  // Agregar el contenedor con los enlaces e iconos

    console.log('Block after decoration:', block);  // Mostrar el bloque después de la decoración
}
