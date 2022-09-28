import SkillsHTML from '../../pages/components/Skills.html';
import { SubMenuController } from '../helpers/SubMenuController';
import { HardCustom } from '../custom/HardCustom';

export const SkillsComponent = () => {

    const $SkillsComponent = document.createElement('div');
    $SkillsComponent.classList.add('skills-container');
    $SkillsComponent.innerHTML = SkillsHTML;

    const $renderContent = $SkillsComponent.querySelector('.render-content');
    const $subMenuLinks = $SkillsComponent.querySelectorAll('.subnavbar-menu__link');

    $renderContent.innerHTML = HardCustom();
    SubMenuController( $subMenuLinks, $renderContent );

    return $SkillsComponent;
    
}