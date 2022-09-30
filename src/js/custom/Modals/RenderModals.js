import { ModalComponent } from '../../custom/Modals/ModalComponent';
import { ModalControls } from '../../helpers/ModalControls';

const projects = require('../../../json/projects.json');

export const RenderModals = ( $body ) => {

    projects.forEach( project => {

        $body.innerHTML += `${ ModalComponent( project ) }`;
        
    });

    const $buttonDetails  = $body.querySelectorAll('.card-buttons__btn--details');
    const $modalContainer = $body.querySelectorAll('.modal-container');
    const $buttonsClose   = $body.querySelectorAll('.card-buttons__btn--close');

    ModalControls( $buttonDetails, $modalContainer, $buttonsClose );

}