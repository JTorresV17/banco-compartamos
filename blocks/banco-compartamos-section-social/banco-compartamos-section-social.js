export default function decorate(block) {
    // Asegurarnos de que el contenido está cargado antes de ejecutar el script
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
  
      // Obtener los valores de AEM
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
        container.style.setProperty('background-color', '#f0f0f0'); // Color de fondo
      }
  
      // Crear el contenedor principal para los enlaces
      const discountContent = document.createElement('div');
      discountContent.classList.add('banco-compartir-ui_section__subcontainer'); // Subcontainer
      discountContent.style.backgroundColor = '#f0f0f0'; // Color de fondo
  
      // Función para crear enlaces con iconos si están disponibles
      function createLinkElement(text, url, iconSrc = '') {
        const div = document.createElement('div');
        div.classList.add('banco-compartir-link-container');
  
        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.classList.add('banco-compartir-ui_fs_14'); // Clase para estilo
  
        // Si existe un ícono, agregarlo
        if (iconSrc) {
          const icon = document.createElement('img');
          icon.src = iconSrc;
          div.appendChild(icon);
        }
  
        div.appendChild(link);
        return div;
      }
  
      // Crear los enlaces para cada campo
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
  