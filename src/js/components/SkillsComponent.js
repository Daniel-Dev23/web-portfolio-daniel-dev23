import SkillsHTML from '../../pages/components/Skills.html';

export const SkillsComponent = () => {

    const $SkillsComponent = document.createElement('div');
    $SkillsComponent.classList.add('skills-container');
    $SkillsComponent.innerHTML = SkillsHTML;

    return $SkillsComponent;
    
}