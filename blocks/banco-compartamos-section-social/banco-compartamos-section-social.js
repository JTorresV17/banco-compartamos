export default function decorate(block) {
    console.log('Decorating block social:', block);
    const container = block.querySelector('.banco-compartamos-section-social');
    const sectionContainer = container.querySelector('.banco-compartir-ui_section');
    const subContainer = sectionContainer.querySelector('.banco-compartir-ui_section__subcontainer');

    // Asignar las clases a los divs ya existentes
    sectionContainer.classList.add('banco-compartir-ui_section'); // Clase para la sección principal
    subContainer.classList.add('banco-compartir-ui_section__subcontainer'); // Clase para el subcontenedor

    // Asignar la clase "banco-compartir-link-container" a los divs que contienen los enlaces o textos
    const divs = container.querySelectorAll('div > div'); // Encontrar todos los divs dentro del bloque

    divs.forEach((div) => {
        const p = div.querySelector('p'); // Buscar el p dentro de cada div
        if (p) {
            if (p.dataset.aueProp === 'politicaPrivacidad') {
                // Si es el texto de Política de Privacidad, convertimos el p en un enlace
                const link = document.createElement('a');
                link.href = p.dataset.aueProp; // Asumimos que la URL del enlace es el valor de data-aue-prop (esto puede ajustarse)
                link.className = 'banco-compartir-ui_fs_14';
                link.textContent = p.textContent; // El texto original
                div.innerHTML = ''; // Limpiamos el p original
                div.appendChild(link); // Agregamos el enlace
                div.classList.add('banco-compartir-link-container');
            }

            if (p.dataset.aueProp === 'terminosCondiciones') {
                // Si es el texto de Términos y Condiciones, convertimos el p en un enlace
                const link = document.createElement('a');
                link.href = p.dataset.aueProp;
                link.className = 'banco-compartir-ui_fs_14';
                link.textContent = p.textContent;
                div.innerHTML = '';
                div.appendChild(link);
                div.classList.add('banco-compartir-link-container');
            }

            if (p.dataset.aueProp === 'facebookTexto') {
                // Si es el texto de Facebook, convertimos el p en un enlace
                const link = document.createElement('a');
                link.href = p.dataset.aueProp;
                link.className = 'banco-compartir-ui_fs_14';
                link.textContent = p.textContent;
                div.innerHTML = '';
                div.appendChild(link);
                div.classList.add('banco-compartir-link-container');
            }
        }
    });
}
