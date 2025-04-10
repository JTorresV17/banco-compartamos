export default function decorate(block) {
    // Crear el contenedor principal
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section';

    // Crear el subcontenedor
    const subContainer = document.createElement('div');
    subContainer.className = 'banco-compartir-ui_section__subcontainer';

    // Crear los enlaces con sus clases
    const politicaLink = document.createElement('a');
    politicaLink.href = block.politicaPrivacidadLink || '#';
    politicaLink.className = 'banco-compartir-ui_fs_14';
    politicaLink.textContent = block.politicaPrivacidad || 'Política de Privacidad';

    const terminosLink = document.createElement('a');
    terminosLink.href = block.terminosCondicionesLink || '#';
    terminosLink.className = 'banco-compartir-ui_fs_14';
    terminosLink.textContent = block.terminosCondiciones || 'Términos y Condiciones';

    const facebookLink = document.createElement('a');
    facebookLink.href = block.facebookUrl || '#';
    facebookLink.className = 'banco-compartir-ui_fs_14';
    facebookLink.textContent = block.facebookTexto || 'Síguenos en Facebook';

    const telefonoLink = document.createElement('a');
    telefonoLink.href = block.telefonoLink || '#';
    telefonoLink.className = 'banco-compartir-ui_fs_14';
    telefonoLink.textContent = block.telefonoTexto || 'Llama al 123-456-789';

    // Crear los iconos y asignar las clases a las imágenes
    const facebookIcon = document.createElement('img');
    facebookIcon.src = block.iconoFacebook || '/path/to/default-facebook-icon.png';
    facebookIcon.alt = 'Facebook Icon';
    facebookIcon.className = 'banco-compartir-icon';

    const telefonoIcon = document.createElement('img');
    telefonoIcon.src = block.iconoTelefono || '/path/to/default-phone-icon.png';
    telefonoIcon.alt = 'Phone Icon';
    telefonoIcon.className = 'banco-compartir-icon';

    // Añadir los enlaces y iconos al subcontenedor
    subContainer.appendChild(politicaLink);
    subContainer.appendChild(terminosLink);
    subContainer.appendChild(facebookLink);
    subContainer.appendChild(facebookIcon);
    subContainer.appendChild(telefonoLink);
    subContainer.appendChild(telefonoIcon);

    // Añadir el subcontenedor al contenedor principal
    container.appendChild(subContainer);

    // Añadir el contenedor completo al bloque
    block.appendChild(container);
}
