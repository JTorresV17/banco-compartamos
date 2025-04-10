export default function decorate(block) {
    console.log("block decorated social", block);
    const sectionContainer = block.querySelector('.banco-compartir-ui_section');
    sectionContainer.classList.add('banco-compartir-ui_section'); // Asignamos la clase al contenedor principal

    // Encontramos el subcontenedor
    const subContainer = sectionContainer.querySelector('.banco-compartir-ui_section__subcontainer');
    subContainer.classList.add('banco-compartir-ui_section__subcontainer'); // Asignamos la clase al subcontenedor

    // Asignamos clases a los elementos existentes dentro de la sección
    const linkContainers = block.querySelectorAll('div > div > p');
    
    linkContainers.forEach((item) => {
        const parentDiv = item.parentElement;

        if (item.dataset.aueProp === 'politicaPrivacidad') {
            parentDiv.classList.add('banco-compartir-link-container');
            const link = item.querySelector('a');
            if (link) {
                link.classList.add('banco-compartir-ui_fs_14');
            }
        }

        if (item.dataset.aueProp === 'terminosCondiciones') {
            parentDiv.classList.add('banco-compartir-link-container');
            const link = item.querySelector('a');
            if (link) {
                link.classList.add('banco-compartir-ui_fs_14');
            }
        }

        if (item.dataset.aueProp === 'facebookTexto') {
            parentDiv.classList.add('banco-compartir-link-container');
            const link = item.querySelector('a');
            if (link) {
                link.classList.add('banco-compartir-ui_fs_14');
            }
        }

        // Si es un campo sin texto, lo dejamos vacío (podría ser útil para personalización)
        if (!item.dataset.aueProp) {
            parentDiv.classList.add('banco-compartir-link-container');
        }
    });
}
