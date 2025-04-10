export default function decorate(block) {
    console.log('Decorating block categories', block); // Ver los datos del bloque en la consola

    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    const fields = block.dataset; // Obtenemos los datos del bloque

    console.log('Fields data:', fields);  // Log para verificar los datos que llegan

    // Mostrar el texto de la Política de privacidad con su enlace
    if (fields.politicaPrivacidad && fields.politicaPrivacidadLink) {
        const policyLink = document.createElement('a');
        policyLink.href = fields.politicaPrivacidadLink;
        policyLink.target = '_blank';
        policyLink.className = 'banco-compartir-ui_fs_14';
        policyLink.innerHTML = fields.politicaPrivacidad;  // Mostrar el texto de la política de privacidad
        container.appendChild(policyLink);
    }

    // Mostrar el texto de Términos y condiciones con su enlace
    if (fields.terminosCondiciones && fields.terminosCondicionesLink) {
        const termsLink = document.createElement('a');
        termsLink.href = fields.terminosCondicionesLink;
        termsLink.target = '_blank';
        termsLink.className = 'banco-compartir-ui_fs_14';
        termsLink.innerHTML = fields.terminosCondiciones;  // Mostrar el texto de los términos y condiciones
        container.appendChild(termsLink);
    }

    // Mostrar el texto de Facebook con su enlace
    if (fields.facebookTexto && fields.facebookUrl) {
        const facebookLink = document.createElement('a');
        facebookLink.href = fields.facebookUrl;
        facebookLink.target = '_blank';
        facebookLink.className = 'banco-compartir-ui_fs_14';
        facebookLink.innerHTML = fields.facebookTexto;  // Mostrar el texto de Facebook
        container.appendChild(facebookLink);
    }

    // Mostrar el texto de Teléfono con su enlace
    if (fields.telefonoTexto && fields.telefonoLink) {
        const phoneLink = document.createElement('a');
        phoneLink.href = fields.telefonoLink;  // Enlace `tel:`
        phoneLink.className = 'banco-compartir-ui_fs_14';
        phoneLink.innerHTML = fields.telefonoTexto;  // Mostrar el texto del teléfono
        container.appendChild(phoneLink);
    }

    block.textContent = ''; // Limpiar el contenido original del bloque
    block.appendChild(container); // Añadir el nuevo contenedor con los enlaces
}
