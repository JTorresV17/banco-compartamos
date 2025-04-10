export default function decorate(block) {
    // Crear el contenedor principal
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor donde se colocarán los enlaces
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Recuperar los valores desde AEM usando los atributos `data-aue-prop`
    const politicaPrivacidad = block.querySelector('[data-aue-prop="politicaPrivacidad"]')?.textContent || 'Política de Privacidad';
    const politicaPrivacidadLink = block.querySelector('[data-aue-prop="politicaPrivacidadLink"]')?.textContent || '#';

    const terminosCondiciones = block.querySelector('[data-aue-prop="terminosCondiciones"]')?.textContent || 'Términos y Condiciones';
    const terminosCondicionesLink = block.querySelector('[data-aue-prop="terminosCondicionesLink"]')?.textContent || '#';

    const facebookTexto = block.querySelector('[data-aue-prop="facebookTexto"]')?.textContent || 'Síguenos en Facebook';
    const facebookUrl = block.querySelector('[data-aue-prop="facebookUrl"]')?.textContent || '#';
    const iconoFacebook = block.querySelector('[data-aue-prop="iconoFacebook"]')?.src || '/path/to/default-facebook-icon.png';

    const telefonoTexto = block.querySelector('[data-aue-prop="telefonoTexto"]')?.textContent || 'Llama al 123-456-789';
    const telefonoLink = block.querySelector('[data-aue-prop="telefonoLink"]')?.textContent || 'tel:123456789';
    const iconoTelefono = block.querySelector('[data-aue-prop="iconoTelefono"]')?.src || '/path/to/default-phone-icon.png';

    // Insertar los valores dinámicamente en la estructura HTML utilizando solo JS
    container.innerHTML = `
        <div class="banco-compartir-link-container">
            <a href="${politicaPrivacidadLink}" target="_blank" class="banco-compartir-ui_fs_14">${politicaPrivacidad}</a>
        </div>
        <div class="banco-compartir-link-container">
            <a href="${terminosCondicionesLink}" target="_blank" class="banco-compartir-ui_fs_14">${terminosCondiciones}</a>
        </div>
        <div class="banco-compartir-link-container">
            <a href="${facebookUrl}" target="_blank" class="banco-compartir-ui_fs_14">${facebookTexto}</a>
            <img src="${iconoFacebook}" alt="Facebook Icon" class="banco-compartir-icon">
        </div>
        <div class="banco-compartir-link-container">
            <a href="${telefonoLink}" class="banco-compartir-ui_fs_14">${telefonoTexto}</a>
            <img src="${iconoTelefono}" alt="Phone Icon" class="banco-compartir-icon">
        </div>
    `;

    // Añadir el subcontenedor con los enlaces al contenedor principal
    subContainer.appendChild(container);

    // Añadir el contenedor completo al bloque
    block.appendChild(subContainer);
}
