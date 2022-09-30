import AboutHTML from '../../pages/components/About.html';
import { WhoCustom } from '../custom/WhoCustom';
import { SubMenuController } from '../helpers/SubMenuController.js';

export const AboutComponent = () => {

    const $AboutComponent = document.createElement('div');
    $AboutComponent.classList.add('about-container');
    $AboutComponent.innerHTML = AboutHTML;

    const $renderContent = $AboutComponent.querySelector('.render-content');
    const $subMenuLinks = $AboutComponent.querySelectorAll('.subnavbar-menu__link');

    $renderContent.innerHTML = WhoCustom();
    SubMenuController( $subMenuLinks, $renderContent );

    return $AboutComponent;

}