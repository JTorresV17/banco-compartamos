export default function decorate(block) {
    const container = document.createElement('div');
    container.className = 'banco-compartir-ui_section banco-compartir-ui_section--25 banco-compartir-rw-section-links-social';

    const box = document.createElement('div');
    box.className = 'banco-compartir-ui_section__box';

    const ul = document.createElement('ul');
    ul.className = 'banco-compartir-ul_list_social banco-compartir-ui_w_635';

    const fields = block.dataset; // Estos campos provienen de los datos del modelo Franklin

    // Crear el enlace de Política de privacidad
    if (fields.politicaPrivacidad && fields.politicaPrivacidadLink) {
        const li = document.createElement('li');
        li.className = 'banco-compartir-ul_list_social__li';
        const a = document.createElement('a');
        a.href = fields.politicaPrivacidadLink;
        a.target = '_blank';
        a.className = 'banco-compartir-ul_list_social__a banco-compartir-ui_fs_14';
        a.innerHTML = `<span class="banco-compartir-ul_list_social__text">${fields.politicaPrivacidad}</span>`;
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Crear el enlace de Términos y condiciones
    if (fields.terminosCondiciones && fields.terminosCondicionesLink) {
        const li = document.createElement('li');
        li.className = 'banco-compartir-ul_list_social__li';
        const a = document.createElement('a');
        a.href = fields.terminosCondicionesLink;
        a.target = '_blank';
        a.className = 'banco-compartir-ul_list_social__a banco-compartir-ui_fs_14';
        a.innerHTML = `<span class="banco-compartir-ul_list_social__text">${fields.terminosCondiciones}</span>`;
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Crear el enlace de Facebook
    if (fields.facebookUrl && fields.iconoFacebook && fields.facebookTexto) {
        const li = document.createElement('li');
        li.className = 'banco-compartir-ul_list_social__li';
        const a = document.createElement('a');
        a.href = fields.facebookUrl;
        a.target = '_blank';
        a.className = 'banco-compartir-ul_list_social__a banco-compartir-ui_fs_14';

        const div = document.createElement('div');
        div.className = 'banco-compartir-ul_list_social__image';
        div.style.backgroundImage = `url(${fields.iconoFacebook})`;  // Usar la URL de la imagen de Facebook
        a.appendChild(div);

        a.innerHTML += `<span class="banco-compartir-ul_list_social__text">${fields.facebookTexto}</span>`;  // Usar el texto de Facebook
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Crear el enlace de teléfono
    if (fields.telefono && fields.telefonoTexto && fields.iconoTelefono) {
        const li = document.createElement('li');
        li.className = 'banco-compartir-ul_list_social__li';
        const a = document.createElement('a');
        a.href = `tel:${fields.telefono}`;
        a.className = 'banco-compartir-ul_list_social__a banco-compartir-ui_td_none banco-compartir-ui_fs_14';

        const div = document.createElement('div');
        div.className = 'banco-compartir-ul_list_social__image';
        div.style.backgroundImage = `url(${fields.iconoTelefono})`;
        a.appendChild(div);

        a.innerHTML += `<span class="banco-compartir-ul_list_social__text">${fields.telefonoTexto}</span>`;
        li.appendChild(a);
        ul.appendChild(li);
    }

    box.appendChild(ul);
    container.appendChild(box);

    block.textContent = '';
    block.appendChild(container);
}
