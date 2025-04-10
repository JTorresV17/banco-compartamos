export default function decorate(block) {
    const items = Array.from(block.children);
    
    // Extraer valores desde los elementos
    const politicaPrivacidadTextElement = items.shift(); // Texto de Política de Privacidad
    const politicaPrivacidadLinkElement = items.shift(); // Enlace de Política de Privacidad
    const terminosCondicionesTextElement = items.shift(); // Texto de Términos y Condiciones
    const terminosCondicionesLinkElement = items.shift(); // Enlace de Términos y Condiciones
    const facebookTextElement = items.shift(); // Texto de Facebook
    const facebookLinkElement = items.shift(); // Enlace de Facebook
    const facebookIconElement = items.shift(); // Icono de Facebook
    const telefonoTextElement = items.shift(); // Texto de Teléfono
    const telefonoLinkElement = items.shift(); // Enlace de Teléfono
    const telefonoIconElement = items.shift(); // Icono de Teléfono
  
    // Obtener valores directamente desde el contenido del AEM
    const politicaPrivacidadText = politicaPrivacidadTextElement?.innerHTML || '';
    const politicaPrivacidadLink = politicaPrivacidadLinkElement?.querySelector('a')?.href || '';
    const terminosCondicionesText = terminosCondicionesTextElement?.innerHTML || '';
    const terminosCondicionesLink = terminosCondicionesLinkElement?.querySelector('a')?.href || '';
    const facebookText = facebookTextElement?.innerHTML || '';
    const facebookLink = facebookLinkElement?.querySelector('a')?.href || '';
    const facebookIcon = facebookIconElement?.querySelector('img')?.src || '';
    const telefonoText = telefonoTextElement?.innerHTML || '';
    const telefonoLink = telefonoLinkElement?.querySelector('a')?.href || '';
    const telefonoIcon = telefonoIconElement?.querySelector('img')?.src || '';
  
    const discountContent = document.createElement('div');
    discountContent.classList.add('banco-compartir-ui_section__subcontainer'); // Subcontainer
    discountContent.style.backgroundColor = '#f0f0f0'; // Color de fondo
  
    // Manejo del texto y enlace de Política de Privacidad
    const politicaPrivacidadDiv = document.createElement('div');
    politicaPrivacidadDiv.classList.add('banco-compartir-link-container');
    const politicaPrivacidadLinkElementCreated = document.createElement('a');
    politicaPrivacidadLinkElementCreated.href = politicaPrivacidadLink;
    politicaPrivacidadLinkElementCreated.textContent = politicaPrivacidadText;
    politicaPrivacidadDiv.appendChild(politicaPrivacidadLinkElementCreated);
  
    // Manejo del texto y enlace de Términos y Condiciones
    const terminosCondicionesDiv = document.createElement('div');
    terminosCondicionesDiv.classList.add('banco-compartir-link-container');
    const terminosCondicionesLinkElementCreated = document.createElement('a');
    terminosCondicionesLinkElementCreated.href = terminosCondicionesLink;
    terminosCondicionesLinkElementCreated.textContent = terminosCondicionesText;
    terminosCondicionesDiv.appendChild(terminosCondicionesLinkElementCreated);
  
    // Manejo del texto y enlace de Facebook
    const facebookDiv = document.createElement('div');
    facebookDiv.classList.add('banco-compartir-link-container');
    const facebookLinkElementCreated = document.createElement('a');
    facebookLinkElementCreated.href = facebookLink;
    facebookLinkElementCreated.textContent = facebookText;
    if (facebookIcon) {
      const facebookIconElement = document.createElement('img');
      facebookIconElement.src = facebookIcon;
      facebookDiv.appendChild(facebookIconElement);
    }
    facebookDiv.appendChild(facebookLinkElementCreated);
  
    // Manejo del texto y enlace de Teléfono
    const telefonoDiv = document.createElement('div');
    telefonoDiv.classList.add('banco-compartir-link-container');
    const telefonoLinkElementCreated = document.createElement('a');
    telefonoLinkElementCreated.href = telefonoLink;
    telefonoLinkElementCreated.textContent = telefonoText;
    if (telefonoIcon) {
      const telefonoIconElement = document.createElement('img');
      telefonoIconElement.src = telefonoIcon;
      telefonoDiv.appendChild(telefonoIconElement);
    }
    telefonoDiv.appendChild(telefonoLinkElementCreated);
  
    // Agregar todos los elementos creados a la estructura principal
    discountContent.appendChild(politicaPrivacidadDiv);
    discountContent.appendChild(terminosCondicionesDiv);
    discountContent.appendChild(facebookDiv);
    discountContent.appendChild(telefonoDiv);
  
    // Reemplazar el contenido original del bloque con la nueva estructura
    block.innerHTML = '';
    block.appendChild(discountContent);
  }
  