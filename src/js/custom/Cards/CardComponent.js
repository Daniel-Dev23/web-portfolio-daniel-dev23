export const CardComponent = ( project ) => {

    let $card = '';

    return $card = `    
        <div class="card-group">
            <figure class="card-picture">
                <img src="${ project.banner_img }" alt="${ project.title }" class="card-picture__img">
            </figure>
            <div class="card-content">                    
                <div class="card-text">
                    <h2 class="card-text__title">${ project.title }</h2>
                    <p class="card-text__min-description">${ project.min_description }</p>
                </div>
                <div class="card-buttons">
                    <a href="${ project.link }" target="_blank" class="card-buttons__btn card-buttons__btn--white">VISITAR</a>
                    <a href="#" class="card-buttons__btn card-buttons__btn--green card-buttons__btn--details" id="${ project.id }">DETALLES</a>
                </div>
            </div>
        </div>
    `;

}
