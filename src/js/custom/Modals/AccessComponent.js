export const AccessComponent = ( project ) => {

    let $access = '';

    return $access = `
        A continuación muestro evidencias del proyecto. No todos tienen 
        acceso al código fuente por temas de privacidad pero hay imágenes 
        previas como referencía. 
        <a href="${ project.details.thumbnails }" target="_blank" class="access-btn access-btn--yellow">
            <i class="fa-regular fa-image access-btn__icon"></i>
            Ver Capturas
        </a>.
    `;

}
