export default function decorate(block) {
    const container = document.createElement('div');
    container.className = 'image-text-container';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';

    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'title-wrapper';

    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.className = 'description-wrapper';

    const children = [...block.children];

    let cambiarOrden = false;
    if (children[3]) {
        const triggerText = children[3].textContent.trim().toLowerCase();
        if (triggerText === 'cambiar') {
            cambiarOrden = true;
        }
    }

    // Asignar imagen
    if (children[0]) {
        const image = children[0].querySelector('img');
        if (image) {
            image.setAttribute('data-move-instrumentation', 'true');
            imageWrapper.appendChild(image);
        }
    }

    // Asignar título
    if (children[1]) {
        titleWrapper.innerHTML = children[1].innerHTML;
        // No es necesario marcarlo editable aquí, Franklin lo gestionará automáticamente
    }

    // Asignar descripción
    if (children[2]) {
        descriptionWrapper.innerHTML = children[2].innerHTML;
        // Lo mismo para la descripción, Franklin manejará la edición automáticamente
    }

    textContainer.appendChild(titleWrapper);
    textContainer.appendChild(descriptionWrapper);

    // Cambiar orden si es necesario
    if (cambiarOrden) {
        container.appendChild(textContainer);
        container.appendChild(imageWrapper);
    } else {
        container.appendChild(imageWrapper);
        container.appendChild(textContainer);
    }

    // Limpiar el contenido del bloque y agregar el nuevo contenedor
    block.textContent = '';
    block.appendChild(container);
}
