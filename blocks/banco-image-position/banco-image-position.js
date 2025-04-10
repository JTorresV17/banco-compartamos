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
    if (children[0]) {
      const image = children[0].querySelector('img');
      if (image) {
        image.setAttribute('data-move-instrumentation', 'true'); // ← importante
        imageWrapper.appendChild(image);
      }
    }

    // Dejar los campos como contenteditable para que funcionen con el editor
    if (children[1]) {
      titleWrapper.innerHTML = children[1].innerHTML;
      titleWrapper.setAttribute('contenteditable', 'true');
    }

    if (children[2]) {
      descriptionWrapper.innerHTML = children[2].innerHTML;
      descriptionWrapper.setAttribute('contenteditable', 'true');
    }

    // Campo 3: texto de control para cambiar orden
    let cambiarOrden = false;
    if (children[3]) {
      const triggerText = children[3].textContent.trim().toLowerCase();
      if (triggerText === 'cambiar') {
        cambiarOrden = true;
      }
    }

    textContainer.appendChild(titleWrapper);
    textContainer.appendChild(descriptionWrapper);

    // Orden condicional
    if (cambiarOrden) {
      container.appendChild(textContainer);
      container.appendChild(imageWrapper);
    } else {
      container.appendChild(imageWrapper);
      container.appendChild(textContainer);
    }

    block.textContent = '';
    block.appendChild(container);
  }
