export default function decorate(block) {
    // Esperamos a que el DOM esté completamente cargado antes de procesar
    document.addEventListener('DOMContentLoaded', function () {
      // Extraer los elementos hijos de AEM
      const items = Array.from(block.children);
  
      // Extraer los valores de cada elemento
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
  
      // Obtener los valores de cada campo
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

      // Asignar el color de fondo al contenedor
      const container = block.closest('.banco-compartir-ui_section__subcontainer');
      if (container) {
      }

      // Crear el contenedor principal para el bloque de enlaces
      const discountContent = document.createElement('div');
      discountContent.classList.add('banco-compartir-ui_section__subcontainer');
  
      // Función para crear un enlace y agregarlo al contenedor
      function createLinkElement(text, url, iconSrc = '') {
        const div = document.createElement('div');
        div.classList.add('banco-compartir-link-container');

        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.classList.add('banco-compartir-ui_fs_14'); // Añadir la clase para el estilo

        // Si existe un ícono, añadirlo
        if (iconSrc) {
          const icon = document.createElement('img');
          icon.src = iconSrc;
          div.appendChild(icon);
        }

        div.appendChild(link);
        return div;
      }

      // Crear los enlaces y agregar los íconos si existen
      if (politicaPrivacidadText && politicaPrivacidadLink) {
        const politicaPrivacidadLinkElement = createLinkElement(politicaPrivacidadText, politicaPrivacidadLink);
        discountContent.appendChild(politicaPrivacidadLinkElement);
      }

      if (terminosCondicionesText && terminosCondicionesLink) {
        const terminosCondicionesLinkElement = createLinkElement(terminosCondicionesText, terminosCondicionesLink);
        discountContent.appendChild(terminosCondicionesLinkElement);
      }

      if (facebookText && facebookLink) {
        const facebookLinkElement = createLinkElement(facebookText, facebookLink, facebookIcon);
        discountContent.appendChild(facebookLinkElement);
      }

      if (telefonoText && telefonoLink) {
        const telefonoLinkElement = createLinkElement(telefonoText, telefonoLink, telefonoIcon);
        discountContent.appendChild(telefonoLinkElement);
      }

      // Reemplazar el contenido original del bloque con la nueva estructura
      block.innerHTML = '';
      block.appendChild(discountContent);
    });
  }
