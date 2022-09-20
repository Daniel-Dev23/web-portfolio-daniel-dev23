import ProjectsHTML from '../../pages/components/Projects.html';

export const ProjectsComponent = () => {

    const $ProjectsComponent = document.createElement('div');
    $ProjectsComponent.classList.add('projects-container');
    $ProjectsComponent.innerHTML = ProjectsHTML;

    return $ProjectsComponent;
    
}