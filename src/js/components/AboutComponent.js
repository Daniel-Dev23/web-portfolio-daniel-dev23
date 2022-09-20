import AboutHTML from '../../pages/components/About.html';

export const AboutComponent = () => {

    const $AboutComponent = document.createElement('div');
    $AboutComponent.classList.add('about-container');
    $AboutComponent.innerHTML = AboutHTML;

    return $AboutComponent;

}