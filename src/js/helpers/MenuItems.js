import * as components from '../components/index';

export const MenuItems = ( e, $mainWrapper ) => {

    $mainWrapper.innerHTML = '';

    const home     = '.navbar-menu__link--home';
    const about    = '.navbar-menu__link--about';
    const projects = '.navbar-menu__link--projects';
    const skills   = '.navbar-menu__link--skills';

    if ( e.target.matches(`${ home }`) || e.target.matches(`${ home } *`) ) {
        $mainWrapper.appendChild( components.HomeComponent() );
    }

    if ( e.target.matches(`${ about }`) || e.target.matches(`${ about } *`) ) {
        $mainWrapper.appendChild( components.AboutComponent() );
    }

    if ( e.target.matches(`${ projects }`) || e.target.matches(`${ projects } *`) ) {
        $mainWrapper.appendChild( components.ProjectsComponent() );
    }

    if ( e.target.matches(`${ skills }`) || e.target.matches(`${ skills } *`) ) {
        $mainWrapper.appendChild( components.SkillsComponent() );
    }

}