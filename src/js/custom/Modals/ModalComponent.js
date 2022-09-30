import { AccessComponent } from "./AccessComponent.js";
import { TechnologyComponent } from "./TechnologyComponent.js";

export const ModalComponent = ( project ) => {

    let $modal = '';

    $modal = `    
        <div class="modal-container" id="${ project.details.id }">
            <div class="modal-wrapper">
                <div class="slider-cotainer">
                    <figure class="slider-picture">
                        <img src="${ project.details.banner_img }" alt="${ project.details.title }" class="slider-picture__img">
                    </figure>
                </div>

                <div class="modal-content">
                    <div class="info-wrapper">
                        <div class="info-content">
                            <p class="info-content__title">${ project.details.title }</p>
                            <P class="info-content__type-dev">${ project.details.type_dev }</P>
                            <p class="info-content__type-app">${ project.details.type_app }</p>
                        </div>
                        <p class="info-description">${ project.details.all_description }</p>
                    </div>
                    <div class="access-wrapper">
                        <div class="access-content">
                            <p class="access-content__title">ACCESIBILIDAD</p>
                        </div>
                        <p class="access-description">${ AccessComponent( project ) }</p>
                    </div>
                    <div class="tech-wrapper">
                        <p class="tech__title">TECNOLOGÍAS UTILIZADAS</p>
                        <div class="tech-content">${ TechnologyComponent( project ) }</div>
                    </div>
                    <div class="card-buttons">
                        <a href="${ project.details.link }" target="_blank" class="card-buttons__btn card-buttons__btn--white">VISITAR</a>
                        <a href="#" class="card-buttons__btn card-buttons__btn--green card-buttons__btn--close">VOLVER</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // console.log( $modal );

    return $modal;

}
