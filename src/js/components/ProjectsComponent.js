import ProjectsHTML from '../../pages/components/Projects.html';
// import { ModalControls } from '../helpers/ModalControls';
import { RenderCards } from '../custom/Cards/RenderCards';
import { RenderModals } from '../custom/Modals/RenderModals';

export const ProjectsComponent = () => {

    const $ProjectsComponent = document.createElement('div');
    $ProjectsComponent.classList.add('projects-container');
    $ProjectsComponent.innerHTML = ProjectsHTML;

    const $cardsWrapper = $ProjectsComponent.querySelector('.cards-wrapper');
    RenderCards( $cardsWrapper );
    RenderModals( $ProjectsComponent );

    return $ProjectsComponent;
    
}